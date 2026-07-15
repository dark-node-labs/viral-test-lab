(function () {
  const hero = document.querySelector(".guided-hero");
  if (!hero) return;

  const intentCopy = {
    speed: {
      note: "Pick a speed test to get a measurable result in seconds.",
      href: "/reaction-time-test/#reaction-test",
      label: "Continue with speed tests"
    },
    device: {
      note: "Pick a device check to verify input, timing, or responsiveness.",
      href: "/device-tests/",
      label: "Continue with device checks"
    },
    qa: {
      note: "Pick a QA utility to create a reusable test artifact.",
      href: "/test-plan-template/",
      label: "Continue with QA tools"
    }
  };

  const note = hero.querySelector("[data-intent-note]");
  const continueLink = hero.querySelector("[data-intent-continue]");
  const choices = [...hero.querySelectorAll("[data-intent]")];

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const intent = intentCopy[choice.dataset.intent];
      if (!intent) return;
      choices.forEach((item) => {
        const selected = item === choice;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      if (note) note.textContent = intent.note;
      if (continueLink) {
        continueLink.href = intent.href;
        continueLink.innerHTML = `${intent.label} <span aria-hidden="true">→</span>`;
      }
    });
  });

  const tabs = [...document.querySelectorAll("[data-tool-filter]")];
  const rows = [...document.querySelectorAll("[data-tool-category]")];
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.toolFilter;
      tabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      rows.forEach((row) => {
        row.hidden = filter !== "all" && row.dataset.toolCategory !== filter;
      });
    });
  });
})();
