(function () {
  const TOKEN_KEY = "qth_access_token";
  const REFRESH_KEY = "qth_refresh_token";
  const path = window.location.pathname;
  const locale = path.startsWith("/zh/") ? "zh" : path.startsWith("/fr/") ? "fr" : path.startsWith("/vi/") ? "vi" : "en";
  const copy = {
    en: { unavailable: "Email and Google sign-in will be available after the site auth provider is configured.", signInError: "We could not sign you in. Check your email and password.", signUpError: "We could not create the account. Try another email or check your password.", created: "Account created. Check your email if confirmation is required.", configured: "Email and Google sign-in", signedIn: "You are signed in", googleError: "Google sign-in could not start.", signedOut: "You are signed out." },
    zh: { unavailable: "配置线上认证服务后，邮箱和 Google 登录就可以使用。", signInError: "登录失败，请检查邮箱和密码。", signUpError: "注册失败，请换一个邮箱或检查密码。", created: "账户已创建；如果需要验证，请查收邮箱。", configured: "邮箱和 Google 登录", signedIn: "你已登录", googleError: "Google 登录暂时无法启动。", signedOut: "你已退出登录。" },
    fr: { unavailable: "La connexion par e-mail et Google sera disponible après la configuration du fournisseur d’authentification.", signInError: "Connexion impossible. Vérifiez votre e-mail et votre mot de passe.", signUpError: "Création impossible. Essayez une autre adresse ou vérifiez le mot de passe.", created: "Compte créé. Vérifiez votre e-mail si une confirmation est demandée.", configured: "Connexion par e-mail et Google", signedIn: "Vous êtes connecté", googleError: "La connexion Google n’a pas pu démarrer.", signedOut: "Vous êtes déconnecté." },
    vi: { unavailable: "Đăng nhập bằng email và Google sẽ hoạt động sau khi cấu hình nhà cung cấp xác thực.", signInError: "Không thể đăng nhập. Hãy kiểm tra email và mật khẩu.", signUpError: "Không thể tạo tài khoản. Hãy thử email khác hoặc kiểm tra mật khẩu.", created: "Đã tạo tài khoản. Kiểm tra email nếu cần xác nhận.", configured: "Đăng nhập bằng email và Google", signedIn: "Bạn đã đăng nhập", googleError: "Không thể bắt đầu đăng nhập Google.", signedOut: "Bạn đã đăng xuất." }
  }[locale];

  const getToken = () => localStorage.getItem(TOKEN_KEY) || "";
  const saveSession = (data) => {
    if (data.access_token) localStorage.setItem(TOKEN_KEY, data.access_token);
    if (data.refresh_token) localStorage.setItem(REFRESH_KEY, data.refresh_token);
  };
  const clearSession = () => { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(REFRESH_KEY); };
  const setMessage = (message, tone) => {
    const node = document.querySelector("[data-auth-message]");
    if (node) { node.textContent = message || ""; node.dataset.tone = tone || ""; }
  };

  async function getConfig() {
    const response = await fetch("/api/auth/config", { cache: "no-store" });
    return response.ok ? response.json() : { configured: false };
  }

  async function supabaseRequest(config, endpoint, options) {
    return fetch(`${config.supabaseUrl.replace(/\/$/, "")}${endpoint}`, {
      ...options,
      headers: { apikey: config.supabaseAnonKey, "content-type": "application/json", ...(options && options.headers) }
    });
  }

  async function readUser(config) {
    const token = getToken();
    if (!token) return null;
    const response = await fetch("/api/auth/user", { headers: { authorization: `Bearer ${token}` }, cache: "no-store" });
    if (!response.ok) return null;
    const body = await response.json();
    if (!body.authenticated) { clearSession(); return null; }
    return body.user;
  }

  function showSignedIn(user) {
    const panel = document.querySelector("[data-auth-panel]");
    const signedIn = document.querySelector("[data-auth-signed-in]");
    const userNode = document.querySelector("[data-auth-user]");
    const status = document.querySelector("[data-auth-status]");
    if (panel) panel.hidden = true;
    if (signedIn) signedIn.hidden = false;
    if (userNode) userNode.textContent = user.name ? `${user.name} · ${user.email}` : user.email;
    if (status) status.textContent = copy.signedIn;
  }

  function showSignedOut() {
    const panel = document.querySelector("[data-auth-panel]");
    const signedIn = document.querySelector("[data-auth-signed-in]");
    const status = document.querySelector("[data-auth-status]");
    if (panel) panel.hidden = false;
    if (signedIn) signedIn.hidden = true;
    if (status) status.textContent = copy.configured;
  }

  function handleCallback() {
    if (!path.startsWith("/auth/callback/")) return false;
    const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const error = params.get("error_description") || params.get("error");
    if (error) {
      window.location.replace(`/account/?auth_error=${encodeURIComponent(error)}`);
      return true;
    }
    if (params.get("access_token")) {
      saveSession({ access_token: params.get("access_token"), refresh_token: params.get("refresh_token") || "" });
      window.location.replace("/account/");
      return true;
    }
    window.location.replace("/account/?auth_error=google");
    return true;
  }

  async function initAccountPage() {
    const page = document.querySelector("[data-auth-page]");
    if (!page) return;
    const config = await getConfig().catch(() => ({ configured: false }));
    const form = document.querySelector("[data-auth-form]");
    const submit = document.querySelector("[data-auth-submit]");
    const google = document.querySelector("[data-auth-google]");
    const modes = [...document.querySelectorAll("[data-auth-mode]")];
    let mode = "signin";

    const setMode = (next) => {
      mode = next;
      modes.forEach((button) => { const active = button.dataset.authMode === mode; button.classList.toggle("is-active", active); button.setAttribute("aria-selected", String(active)); });
      if (submit) submit.innerHTML = mode === "signup" ? `${locale === "zh" ? "使用邮箱注册" : locale === "fr" ? "Créer un compte par e-mail" : locale === "vi" ? "Tạo tài khoản bằng email" : "Create account with email"} <span aria-hidden="true">→</span>` : `${locale === "zh" ? "使用邮箱登录" : locale === "fr" ? "Se connecter par e-mail" : locale === "vi" ? "Đăng nhập bằng email" : "Sign in with email"} <span aria-hidden="true">→</span>`;
    };
    modes.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.authMode)));

    if (!config.configured) setMessage(copy.unavailable, "info");
    const error = new URLSearchParams(window.location.search).get("auth_error");
    if (error) setMessage(error === "google" ? copy.googleError : copy.signInError, "error");
    const currentUser = config.configured ? await readUser(config).catch(() => null) : null;
    if (currentUser) showSignedIn(currentUser); else showSignedOut();

    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!config.configured) { setMessage(copy.unavailable, "info"); return; }
      const email = form.email.value.trim();
      const password = form.password.value;
      submit.disabled = true;
      setMessage("");
      const endpoint = mode === "signup" ? "/auth/v1/signup" : "/auth/v1/token?grant_type=password";
      try {
        const response = await supabaseRequest(config, endpoint, { method: "POST", body: JSON.stringify({ email, password }) });
        const body = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(body.error_description || body.msg || body.message || "auth");
        if (body.access_token) { saveSession(body); showSignedIn(body.user || { email }); setMessage(copy.signedIn, "success"); }
        else setMessage(copy.created, "success");
      } catch { setMessage(mode === "signup" ? copy.signUpError : copy.signInError, "error"); }
      finally { submit.disabled = false; }
    });

    google?.addEventListener("click", () => {
      if (!config.configured) { setMessage(copy.unavailable, "info"); return; }
      const redirectTo = `${window.location.origin}/auth/callback/`;
      window.location.href = `${config.supabaseUrl.replace(/\/$/, "")}/auth/v1/authorize?provider=google&flow_type=implicit&redirect_to=${encodeURIComponent(redirectTo)}`;
    });
    document.querySelector("[data-auth-signout]")?.addEventListener("click", async () => { clearSession(); await fetch("/api/auth/signout", { method: "POST" }).catch(() => {}); showSignedOut(); setMessage(copy.signedOut, "success"); });
  }

  if (!handleCallback()) initAccountPage();
})();
