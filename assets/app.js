const sbtiQuestions = [
  ["At a party, you usually", ["Start a new group chat in real life", "Find one person and go deep", "Observe the room like a documentary narrator"], ["E", "I", "O"]],
  ["Your camera roll is mostly", ["Screenshots you meant to organize", "Food, friends, and little proof-of-life moments", "Memes with no context"], ["P", "S", "M"]],
  ["When plans change last minute, you", ["Adapt instantly", "Need a minute and a snack", "Rewrite the plan better"], ["F", "C", "J"]],
  ["Your ideal reply style is", ["Fast and energetic", "Careful and warm", "A perfect one-liner"], ["E", "F", "M"]],
  ["When learning something new, you prefer", ["A quick demo", "A full explanation", "A chaotic trial run"], ["S", "J", "P"]],
  ["Your friends ask you for", ["Advice", "Hype", "The truth with a funny caption"], ["F", "E", "M"]],
  ["Your desk right now is", ["A clean launchpad", "Creative weather", "None of the public's business"], ["J", "P", "I"]],
  ["You trust", ["Patterns", "Vibes", "Receipts"], ["O", "F", "S"]],
  ["A perfect weekend has", ["People and motion", "Quiet and recovery", "A side quest"], ["E", "I", "P"]],
  ["When you text back late, it is because", ["You were overthinking", "You forgot time exists", "You were doing five things"], ["F", "P", "E"]],
  ["Your humor is usually", ["Dry", "Absurd", "Wholesome chaos"], ["I", "M", "F"]],
  ["In a group project you become", ["The organizer", "The brainstormer", "The morale department"], ["J", "O", "F"]],
  ["Your notes app contains", ["Actual lists", "Future business ideas", "Mystery phrases"], ["J", "O", "M"]],
  ["You recharge by", ["Being offline", "Seeing favorite people", "Finishing a tiny task"], ["I", "E", "J"]],
  ["Your decision process is", ["Pros and cons", "Gut feeling", "Ask three friends then do your original plan"], ["S", "F", "M"]],
  ["Your browser tabs are", ["Under control", "A research forest", "A personal museum"], ["J", "O", "P"]],
  ["You are most likely to send", ["A voice note", "A paragraph", "A meme response"], ["E", "F", "M"]],
  ["Your social battery is", ["Solar powered", "Rechargeable but selective", "Unpredictable but iconic"], ["E", "I", "P"]],
  ["When someone says 'quick question', you", ["Answer immediately", "Prepare for a saga", "Open a spreadsheet mentally"], ["E", "I", "J"]],
  ["You notice first", ["Details", "Mood", "Possibilities"], ["S", "F", "O"]],
  ["Your result card should be", ["Accurate", "Shareable", "A little too real"], ["S", "E", "M"]],
  ["Your playlist is", ["Curated", "Emotional", "Genre lawless"], ["J", "F", "P"]],
  ["You handle deadlines by", ["Starting early", "Finding pressure useful", "Inventing a new productivity ritual"], ["J", "P", "O"]],
  ["People describe you as", ["Grounded", "Intense in a good way", "Unexpected"], ["S", "F", "M"]],
  ["Your default tab is", ["Calendar", "Messages", "Search"], ["J", "E", "O"]],
  ["A minor inconvenience makes you", ["Fix it", "Laugh about it", "Analyze society"], ["S", "M", "O"]],
  ["You save posts because", ["They are useful", "They are beautiful", "They might be your personality later"], ["S", "F", "M"]],
  ["You prefer tests that are", ["Short", "Surprisingly detailed", "Built for sharing"], ["P", "O", "E"]],
  ["Your group chat role is", ["Planner", "Therapist", "Plot twist"], ["J", "F", "M"]],
  ["Choose a result vibe", ["Main character energy", "Calm expert energy", "Internet folklore energy"], ["E", "S", "M"]]
];

const zhSbtiQuestions = [
  ["在聚会上，你通常会", ["像现实版群聊一样带动气氛", "找一个人深聊", "像纪录片旁白一样观察全场"], ["E", "I", "O"]],
  ["你的相册里最多的是", ["本来想整理但一直没整理的截图", "食物、朋友和生活碎片", "没有上下文的梗图"], ["P", "S", "M"]],
  ["计划临时变化时，你会", ["立刻适应", "需要一点时间和一点零食", "重新做一个更好的计划"], ["F", "C", "J"]],
  ["你理想的回复风格是", ["快速又热情", "认真又温柔", "一句话精准好笑"], ["E", "F", "M"]],
  ["学习新东西时，你更喜欢", ["先看快速演示", "听完整解释", "直接乱试一轮"], ["S", "J", "P"]],
  ["朋友通常会找你要", ["建议", "鼓励", "带梗但真实的评价"], ["F", "E", "M"]],
  ["你现在的桌面状态是", ["干净得像起飞跑道", "创意天气现场", "这是个人隐私"], ["J", "P", "I"]],
  ["你更相信", ["规律", "感觉", "证据"], ["O", "F", "S"]],
  ["完美周末应该有", ["人和活动", "安静和恢复", "一条支线任务"], ["E", "I", "P"]],
  ["你晚回消息通常是因为", ["想太多", "忘了时间存在", "同时在做五件事"], ["F", "P", "E"]],
  ["你的幽默通常是", ["冷幽默", "荒诞派", "温柔混乱"], ["I", "M", "F"]],
  ["小组任务里你会变成", ["组织者", "脑暴担当", "情绪稳定器"], ["J", "O", "F"]],
  ["你的备忘录里有", ["真正的清单", "未来商业点子", "神秘短句"], ["J", "O", "M"]],
  ["你通常通过什么充电", ["离线独处", "见喜欢的人", "完成一个小任务"], ["I", "E", "J"]],
  ["你做决定时更像", ["列优缺点", "跟着直觉", "问三个人然后按原计划做"], ["S", "F", "M"]],
  ["你的浏览器标签页是", ["控制得很好", "一片研究森林", "个人博物馆"], ["J", "O", "P"]],
  ["你最可能发送", ["语音", "一大段文字", "梗图回复"], ["E", "F", "M"]],
  ["你的社交电量是", ["太阳能供电", "可充电但挑人", "不可预测但很有存在感"], ["E", "I", "P"]],
  ["别人说“问你个小问题”时，你会", ["马上回答", "预感会变成长篇故事", "脑内打开表格"], ["E", "I", "J"]],
  ["你最先注意到的是", ["细节", "氛围", "可能性"], ["S", "F", "O"]],
  ["你的结果卡应该是", ["准确", "适合分享", "有点过于真实"], ["S", "E", "M"]],
  ["你的歌单是", ["精心整理", "情绪浓度很高", "风格完全无法归类"], ["J", "F", "P"]],
  ["你面对截止日期时", ["很早开始", "靠压力启动", "发明新的效率仪式"], ["J", "P", "O"]],
  ["别人常说你", ["很稳", "有强烈但舒服的能量", "很出其不意"], ["S", "F", "M"]],
  ["你默认打开的页面是", ["日历", "消息", "搜索"], ["J", "E", "O"]],
  ["遇到小麻烦时你会", ["解决它", "先笑一下", "开始分析社会"], ["S", "M", "O"]],
  ["你收藏帖子是因为", ["有用", "好看", "以后可能会变成我的人格"], ["S", "F", "M"]],
  ["你更喜欢哪种测试", ["短一点", "意外地详细", "适合分享"], ["P", "O", "E"]],
  ["你在群聊里的角色是", ["计划者", "心理咨询师", "剧情反转"], ["J", "F", "M"]],
  ["选择一种结果气质", ["主角能量", "冷静专家能量", "互联网传说能量"], ["E", "S", "M"]]
];

const frSbtiQuestions = [
  ["Dans une fête, vous avez tendance à", ["Lancer l'ambiance", "Parler profondément avec une personne", "Observer la salle comme un documentaire"], ["E", "I", "O"]],
  ["Votre galerie photo contient surtout", ["Des captures à ranger un jour", "Des repas, amis et petits moments", "Des memes sans contexte"], ["P", "S", "M"]],
  ["Quand le plan change au dernier moment, vous", ["Vous adaptez vite", "Avez besoin d'une minute", "Refaites un meilleur plan"], ["F", "C", "J"]],
  ["Votre style de réponse idéal est", ["Rapide et énergique", "Prudent et chaleureux", "Une phrase parfaite"], ["E", "F", "M"]],
  ["Pour apprendre quelque chose, vous préférez", ["Une démo rapide", "Une explication complète", "Essayer dans le chaos"], ["S", "J", "P"]],
  ["Vos amis viennent vous demander", ["Des conseils", "De l'encouragement", "Une vérité avec humour"], ["F", "E", "M"]],
  ["Votre bureau en ce moment est", ["Un espace net", "Une météo créative", "Un secret personnel"], ["J", "P", "I"]],
  ["Vous faites confiance à", ["Les schémas", "Les vibes", "Les preuves"], ["O", "F", "S"]],
  ["Un week-end parfait contient", ["Du monde et du mouvement", "Du calme", "Une quête secondaire"], ["E", "I", "P"]],
  ["Si vous répondez tard, c'est parce que", ["Vous réfléchissiez trop", "Vous avez oublié le temps", "Vous faisiez cinq choses"], ["F", "P", "E"]],
  ["Votre humour est plutôt", ["Sec", "Absurde", "Chaleureusement chaotique"], ["I", "M", "F"]],
  ["Dans un projet de groupe, vous devenez", ["L'organisateur", "La personne à idées", "Le moral de l'équipe"], ["J", "O", "F"]],
  ["Votre appli notes contient", ["De vraies listes", "Des idées futures", "Des phrases mystérieuses"], ["J", "O", "M"]],
  ["Vous rechargez avec", ["Du temps hors ligne", "Vos personnes préférées", "Une petite tâche finie"], ["I", "E", "J"]],
  ["Vous décidez avec", ["Avantages et inconvénients", "L'instinct", "Trois avis puis votre idée"], ["S", "F", "M"]],
  ["Vos onglets de navigateur sont", ["Sous contrôle", "Une forêt de recherches", "Un musée personnel"], ["J", "O", "P"]],
  ["Vous envoyez plutôt", ["Un vocal", "Un paragraphe", "Un meme"], ["E", "F", "M"]],
  ["Votre batterie sociale est", ["Solaire", "Rechargeable mais sélective", "Imprévisible"], ["E", "I", "P"]],
  ["Quand quelqu'un dit 'petite question', vous", ["Répondez vite", "Vous préparez à une saga", "Ouvrez un tableau mental"], ["E", "I", "J"]],
  ["Vous remarquez d'abord", ["Les détails", "L'ambiance", "Les possibilités"], ["S", "F", "O"]],
  ["Votre carte résultat doit être", ["Précise", "Partageable", "Trop vraie"], ["S", "E", "M"]],
  ["Votre playlist est", ["Soignée", "Émotionnelle", "Sans loi de genre"], ["J", "F", "P"]],
  ["Face aux deadlines, vous", ["Commencez tôt", "Aimez la pression", "Inventez un rituel"], ["J", "P", "O"]],
  ["On vous décrit comme", ["Stable", "Intense mais bien", "Inattendu"], ["S", "F", "M"]],
  ["Votre onglet par défaut est", ["Calendrier", "Messages", "Recherche"], ["J", "E", "O"]],
  ["Un petit problème vous fait", ["Le régler", "En rire", "Analyser la société"], ["S", "M", "O"]],
  ["Vous sauvegardez des posts car", ["Ils sont utiles", "Ils sont beaux", "Ils seront votre personnalité"], ["S", "F", "M"]],
  ["Vous préférez les tests", ["Courts", "Étonnamment précis", "Faciles à partager"], ["P", "O", "E"]],
  ["Dans le groupe, vous êtes", ["Le planificateur", "Le thérapeute", "Le twist"], ["J", "F", "M"]],
  ["Choisissez une vibe de résultat", ["Personnage principal", "Expert calme", "Légende d'internet"], ["E", "S", "M"]]
];

const viSbtiQuestions = [
  ["Ở một bữa tiệc, bạn thường", ["Kéo mọi người vào cuộc vui", "Nói chuyện sâu với một người", "Quan sát như người dẫn phim tài liệu"], ["E", "I", "O"]],
  ["Thư viện ảnh của bạn chủ yếu là", ["Ảnh chụp màn hình chưa sắp xếp", "Đồ ăn, bạn bè, khoảnh khắc nhỏ", "Meme không cần ngữ cảnh"], ["P", "S", "M"]],
  ["Khi kế hoạch đổi phút chót, bạn", ["Thích nghi ngay", "Cần một phút", "Viết lại kế hoạch tốt hơn"], ["F", "C", "J"]],
  ["Kiểu trả lời lý tưởng của bạn là", ["Nhanh và nhiều năng lượng", "Cẩn thận và ấm áp", "Một câu cực chuẩn"], ["E", "F", "M"]],
  ["Khi học điều mới, bạn thích", ["Xem demo nhanh", "Nghe giải thích đầy đủ", "Thử luôn trong hỗn loạn"], ["S", "J", "P"]],
  ["Bạn bè thường hỏi bạn về", ["Lời khuyên", "Sự cổ vũ", "Sự thật kèm chút hài"], ["F", "E", "M"]],
  ["Bàn làm việc của bạn hiện tại", ["Gọn gàng", "Sáng tạo hơi hỗn", "Không tiện công khai"], ["J", "P", "I"]],
  ["Bạn tin vào", ["Quy luật", "Cảm giác", "Bằng chứng"], ["O", "F", "S"]],
  ["Cuối tuần hoàn hảo có", ["Người và hoạt động", "Yên tĩnh để hồi phục", "Một nhiệm vụ phụ"], ["E", "I", "P"]],
  ["Bạn trả lời tin nhắn muộn vì", ["Nghĩ quá nhiều", "Quên thời gian tồn tại", "Đang làm năm việc"], ["F", "P", "E"]],
  ["Gu hài của bạn là", ["Khô", "Vô lý", "Hỗn loạn dễ thương"], ["I", "M", "F"]],
  ["Trong nhóm làm việc, bạn thành", ["Người tổ chức", "Người nghĩ ý tưởng", "Người giữ tinh thần"], ["J", "O", "F"]],
  ["Ứng dụng ghi chú của bạn có", ["Danh sách thật sự", "Ý tưởng tương lai", "Câu bí ẩn"], ["J", "O", "M"]],
  ["Bạn nạp năng lượng bằng", ["Tắt mạng", "Gặp người mình thích", "Hoàn thành việc nhỏ"], ["I", "E", "J"]],
  ["Bạn quyết định bằng", ["Ưu và nhược điểm", "Trực giác", "Hỏi ba người rồi làm ý mình"], ["S", "F", "M"]],
  ["Tab trình duyệt của bạn", ["Trong tầm kiểm soát", "Một khu rừng nghiên cứu", "Bảo tàng cá nhân"], ["J", "O", "P"]],
  ["Bạn dễ gửi", ["Tin nhắn thoại", "Một đoạn dài", "Một meme"], ["E", "F", "M"]],
  ["Pin xã hội của bạn", ["Chạy bằng năng lượng mặt trời", "Sạc được nhưng kén người", "Khó đoán"], ["E", "I", "P"]],
  ["Khi ai đó nói 'hỏi nhanh thôi', bạn", ["Trả lời ngay", "Chuẩn bị cho chuyện dài", "Mở bảng tính trong đầu"], ["E", "I", "J"]],
  ["Bạn để ý trước tiên", ["Chi tiết", "Bầu không khí", "Khả năng"], ["S", "F", "O"]],
  ["Thẻ kết quả nên", ["Chính xác", "Dễ chia sẻ", "Hơi quá thật"], ["S", "E", "M"]],
  ["Playlist của bạn", ["Được chọn kỹ", "Đầy cảm xúc", "Không theo thể loại"], ["J", "F", "P"]],
  ["Với deadline, bạn", ["Bắt đầu sớm", "Dùng áp lực", "Tạo nghi thức năng suất mới"], ["J", "P", "O"]],
  ["Người khác nói bạn", ["Vững", "Mạnh nhưng dễ chịu", "Bất ngờ"], ["S", "F", "M"]],
  ["Tab mặc định của bạn là", ["Lịch", "Tin nhắn", "Tìm kiếm"], ["J", "E", "O"]],
  ["Một phiền toái nhỏ khiến bạn", ["Sửa nó", "Cười trước", "Phân tích xã hội"], ["S", "M", "O"]],
  ["Bạn lưu bài đăng vì", ["Nó hữu ích", "Nó đẹp", "Có thể thành tính cách của bạn"], ["S", "F", "M"]],
  ["Bạn thích bài test", ["Ngắn", "Chi tiết bất ngờ", "Dễ chia sẻ"], ["P", "O", "E"]],
  ["Vai trò của bạn trong group chat", ["Người lập kế hoạch", "Nhà trị liệu", "Cú twist"], ["J", "F", "M"]],
  ["Chọn vibe kết quả", ["Nhân vật chính", "Chuyên gia bình tĩnh", "Huyền thoại internet"], ["E", "S", "M"]]
];

const sbtiTypes = [
  { code: "CTRL", name: "Mastermind", zh: "掌控者", quote: "怎么祥，被我拿捏了吧？", text: "Strategic, controlled, and always three steps ahead.", zhText: "你像一个自带控制台的人，习惯先看全局，再决定每个人该站在哪里。别人还在感受气氛，你已经把风险、节奏、退路和结论都排好了。你的强项是稳、准、会拿捏，弱点是偶尔太想把世界调成自己顺手的模式。" },
  { code: "ATM-er", name: "Sponsor", zh: "送钱者", quote: "你以为我很有钱吗？", text: "Generous, supportive, and usually the one keeping plans alive.", zhText: "你很容易成为朋友局里的隐形赞助商，不一定真的富，但总会在关键时刻掏出时间、精力、情绪价值，甚至一点预算。你怕别人扫兴，也怕场面冷掉，所以常常先替大家把缺口补上。" },
  { code: "Dior-S", name: "Cynic", zh: "屌丝", quote: "等着我屌丝逆袭。", text: "Sharp, sarcastic, and allergic to fake perfection.", zhText: "你嘴上自嘲，心里不服。你很清楚自己暂时没站在光里，但更清楚那些站在光里的人也未必多高级。你适合走反差路线：看似摆烂，实际暗中记账，等一个翻盘时刻。" },
  { code: "BOSS", name: "Leader", zh: "领导者", quote: "方向盘给我，我来开。", text: "Direct, decisive, and comfortable taking charge.", zhText: "你不一定爱管人，但你很难忍受没人管事。混乱出现时，你会自然接过方向盘，把事情拆成步骤，把人安排到位置。你最大的魅力是可靠，最大的危险是别人还没投票，你已经开始执行。" },
  { code: "THAN-K", name: "Thankful", zh: "感恩者", quote: "我感谢苍天！我感谢大地！", text: "Warm, appreciative, and good at noticing kindness.", zhText: "你对善意很敏感，别人随手帮你一下，你可能会记很久。你不是没脾气，只是更愿意先看到好的一面。你的世界观里，人和人之间的温柔非常重要，所以你也常常把感谢说得很认真。" },
  { code: "OH-NO!", name: "Worrier", zh: "哦不人", quote: "哦不！我怎么会是这个人格？！", text: "Sensitive to risk, prepared for everything, and rarely surprised.", zhText: "你的脑内常驻风险预警系统。别人说随便，你已经想到迟到、下雨、没电、冷场、尴尬和第二天后悔。你不是胆小，只是想把不确定性提前拆掉。真正遇到事时，你往往比看起来更能扛。" },
  { code: "GOGO", name: "Go-getter", zh: "行者", quote: "gogogo，出发咯。", text: "Energetic, driven, and happiest when something is moving.", zhText: "你的人生关键词是启动。比起反复讨论，你更想先迈出去，边走边修。你不喜欢停滞，也不太受得了长时间的犹豫。你身上有一种催促世界动起来的能量，适合开局、冲刺和打破僵局。" },
  { code: "SEXY", name: "Charmer", zh: "尤物", quote: "您就是天生的尤物！", text: "Magnetic, expressive, and very aware of the room's attention.", zhText: "你不一定刻意吸引注意，但你知道注意力会怎么流动。你擅长用表情、语气、穿搭或一句话改变场面温度。你像一个自带柔光的人，别人很难完全忽略你。你的问题不是没有魅力，而是魅力太容易被误读。" },
  { code: "LOVE-R", name: "Romantic", zh: "多情者", quote: "爱意太满，现实显得有点贫瘠。", text: "Emotion-led, affectionate, and always ready for a dramatic playlist.", zhText: "你的情绪浓度很高，喜欢把普通瞬间过成电影片段。你很容易被氛围、细节和一句话击中，也很容易替关系赋予意义。你不是恋爱脑那么简单，你只是比别人更相信感受本身值得被认真对待。" },
  { code: "MUM", name: "Caregiver", zh: "妈妈", quote: "或许...我可以叫你妈妈吗？", text: "Protective, practical, and likely to ask if everyone has eaten.", zhText: "你有一种自动照顾人的本能。朋友没吃饭、没带伞、情绪不对，你都容易第一个发现。你不一定温柔讲话，但会做温柔的事。你要小心的是，别把所有人的人生都背到自己身上。" },
  { code: "FAKE", name: "Chameleon", zh: "伪人", quote: "已经，没有人类了。", text: "Adaptable, socially clever, and hard to read on purpose.", zhText: "你很会根据环境切换版本，和谁都能聊两句，也能迅速学会一个圈子的语气。别人觉得你神秘，是因为你从不轻易交出完整说明书。你的能力是适应，风险是适应太久以后忘了自己原本想怎么活。" },
  { code: "OJBK", name: "Whatever", zh: "无所谓人", quote: "我说随便，是真的随便。", text: "Chill, flexible, and impossible to pressure with small drama.", zhText: "你对很多事情的执念都不强，能过就过，能行就行。别人纠结半天的事，你可能一句“也可以”就翻篇了。你不是没有想法，而是觉得大部分小事不值得消耗人生。" },
  { code: "MALO", name: "Monkey", zh: "吗喽", quote: "人生是个副本，而我只是一只吗喽。", text: "Playful, restless, and built for harmless chaos.", zhText: "你身上有很强的玩闹感，越严肃的场合越容易冒出奇怪念头。你擅长把压力变成段子，把无聊变成副本。你的存在会让空气变活，但也可能让认真做事的人短暂崩溃。" },
  { code: "JOKE-R", name: "Joker", zh: "小丑", quote: "原来我们都是小丑。", text: "Funny first, feelings later, and secretly more observant than people think.", zhText: "你习惯先用玩笑挡一下真实情绪。你很会接梗，也很懂人群里的尴尬从哪里来。你的幽默不是单纯吵闹，而是一种保护色：只要大家在笑，就没人追问你心里到底怎么了。" },
  { code: "WOC!", name: "Reactor", zh: "握草人", quote: "卧槽，我怎么是这个人格？", text: "Expressive, reactive, and born to make screenshots happen.", zhText: "你的反应很有存在感，惊讶、吐槽、震撼、无语都能变成一场小型演出。你不适合隐藏情绪，因为脸和嘴都会先一步出卖你。你适合做气氛里的放大器。" },
  { code: "THIN-K", name: "Thinker", zh: "思考者", quote: "已深度思考100s。", text: "Analytical, reflective, and prone to turning small details into theories.", zhText: "你很容易进入分析模式，一件小事也能拆出动机、结构、因果和隐藏变量。你不是爱想太多，你是很难接受事情只有表面那一层。你适合研究问题，也要记得偶尔让大脑下班。" },
  { code: "SHIT", name: "Hater", zh: "愤世者", quote: "这个世界，构石一坨。", text: "Blunt, picky, and surprisingly useful when something needs honest feedback.", zhText: "你对世界的容忍度不高，尤其受不了虚伪、低效和强行感动。你的吐槽可能很狠，但经常精准。你像一个人形差评系统，虽然不好哄，却能帮大家看见问题到底烂在哪里。" },
  { code: "ZZZZ", name: "Sleeper", zh: "装死者", quote: "我没死，我只是在睡觉。", text: "Low-energy, avoidant, and excellent at disappearing from unnecessary noise.", zhText: "你擅长从混乱里撤退。消息可以晚点回，社交可以下次见，麻烦可以先装没看见。你不是没有责任感，只是能量条比较珍贵。你的生存哲学是：能睡过去的风浪，就先睡过去。" },
  { code: "POOR", name: "Minimalist", zh: "贫困者", quote: "我穷，但我很专。", text: "Resourceful, low-maintenance, and proud of doing more with less.", zhText: "你很懂什么叫够用，也很会在有限条件下活出办法。你可能不追求排场，但会把资源用在真正有意义的地方。你不一定真的贫穷，更像是对浪费保持天然警惕。" },
  { code: "MONK", name: "Monk", zh: "僧人", quote: "没有那种世俗的欲望。", text: "Detached, calm, and somehow above the drama.", zhText: "你有一种看破但不说破的气质。别人卷进情绪漩涡时，你像站在岸边看潮水。你不是冷漠，只是很多事在你眼里没必要执着。你的安静本身就带一点距离感。" },
  { code: "IMSB", name: "Self-Attacker", zh: "自我攻击者", quote: "认真的吗？我真的是傻逼么？", text: "Self-critical, intense, and always harder on yourself than on others.", zhText: "你对自己的要求经常比别人高很多，一点小失误也能在心里反复回放。你表面可能在开玩笑，内心其实一直在复盘。你需要记住：自省是能力，自我攻击不是义务。" },
  { code: "SOLO", name: "Soloist", zh: "孤儿", quote: "我哭了，我怎么会是孤儿？", text: "Independent, self-contained, and used to carrying your own weather.", zhText: "你很习惯一个人处理事情，不轻易求助，也不轻易示弱。你不是不需要陪伴，只是太熟悉独自消化。你的孤独感有时像盔甲，有时也像房间里没关掉的灯。" },
  { code: "FUCK", name: "Grass", zh: "草者", quote: "爆！这是什么人格？", text: "Explosive, startled, and always one second away from a dramatic reaction.", zhText: "你的情绪按钮很灵敏，遇到离谱事情时很难保持优雅。你会惊呼、吐槽、震住，然后迅速把现场变成表情包。你不是脾气差，你只是对荒谬世界反应比较诚实。" },
  { code: "DEAD", name: "Deadpan", zh: "死者", quote: "我，还活着吗？", text: "Flatlined, dry, and emotionally buffering in the background.", zhText: "你的外在反应经常像电量耗尽，别人激情输出时，你已经进入灵魂离线模式。你不一定真的无感，只是懒得展示复杂情绪。你的冷淡里有一种疲惫的幽默。" },
  { code: "IMFW", name: "Waste", zh: "废物", quote: "我真的...是废物吗？", text: "Tired, self-mocking, and strangely resilient after every collapse.", zhText: "你常常觉得自己没状态、没效率、没救了，但奇怪的是你每次都还能继续活过下一集。你的废不是失败，而是一种低电量运行模式。别急，你只是还没切到高性能。" },
  { code: "HHHH", name: "Laugher", zh: "傻乐者", quote: "哈哈哈哈哈哈。", text: "Laugh-first, light-hearted, and suspiciously good at surviving awkwardness.", zhText: "你很容易笑，也很会用笑化解尴尬。别人还在判断局势，你已经先笑出声了。你的快乐不一定浅，有时只是你选择用轻松的方式穿过复杂场面。" },
  { code: "DRUNK", name: "Drunk", zh: "酒鬼", quote: "烈酒烧喉，不得不醉。", text: "Loose, dramatic, and sentimental once the guard comes down.", zhText: "你平时可能还算清醒，但一旦情绪松开，就很容易进入豪放又感性的频道。你适合热闹，也容易在热闹里突然认真。你的关键词是上头，但不只是酒精，是气氛。" }
];

const riceQuestions = [
  "Shared a handhold that felt more than casual?", "Made plans specifically as a date?", "Called someone your partner for real?", "Shared a consensual kiss?", "Kept a crush completely private?", "Sent a message with obvious romantic intent?", "Received a note that felt romantic?", "Wrote someone a heartfelt romantic note?", "Danced close enough to feel nervous?", "Realized someone had a secret crush on you?",
  "Stayed out late mainly for the story?", "Skipped an obligation for a non-serious reason?", "Stayed awake all night because plans got fun?", "Took a friends-only trip away from home?", "Went to a party where most faces were strangers?", "Sang in public even though people could hear?", "Played a revealing party question game?", "Entered an event without being fully invited?", "Used a harmless excuse to leave a plan?", "Kept a small life update from family?",
  "Tasted alcohol as an adult or where legal?", "Felt noticeably buzzed from drinking?", "Joined a game built around drinks?", "Spent time at a bar, club, or nightlife venue?", "Bought alcohol legally for yourself or others?", "Chose a safer ride home after a night out?", "Tried smoking or vaping?", "Tried cannabis where it is legal for adults?", "Declined a substance offer you did not want?", "Helped someone get home safely after going out?",
  "Got called out for breaking a rule?", "Received an official warning for behavior?", "Been stopped by traffic or security authority?", "Paid a fine because of a mistake?", "Lost an ID, card, or key during a night out?", "Pretended to be older than you were?", "Used an account that was not technically yours?", "Damaged something and delayed admitting it?", "Made a serious apology after messing up?", "Had a rumor about you travel around?",
  "Had a direct talk about where a relationship was going?", "Said a romantic love confession first?", "Received a romantic love confession?", "Went through a breakup that changed your routine?", "Stayed friendly with someone after dating ended?", "Felt jealousy affect a relationship?", "Tried dating someone from far away?", "Met an online match in a public place?", "Created a profile on a dating app?", "Deleted a dating app for dramatic reasons?",
  "Shared a personal photo you later wished you had not?", "Posted something and removed it soon after?", "Had a post spread quickly in your circle?", "Found out someone blocked you?", "Blocked someone to protect your peace?", "Reread old messages for emotional reasons?", "Made a close-friends or private audience list?", "Muted someone instead of confronting them?", "Turned an online friendship into an in-person one?", "Joined a fandom or internet community deeply?",
  "Went swimming with fewer clothes than usual?", "Kissed more than one person within a month?", "Had a late-night conversation that felt intimate?", "Stayed overnight near someone you liked?", "Had someone walk you home in a romantic mood?", "Had a vacation moment that felt like a movie?", "Went on a first date that became a memorable story?", "Got asked out when you did not expect it?", "Asked someone out yourself?", "Developed feelings for a friend?",
  "Attended a large live music event?", "Took an unplanned trip for fun?", "Missed transportation because fun plans ran long?", "Stayed somewhere budget or shared while traveling?", "Got lost in a place you did not know well?", "Made a new friend while away from home?", "Tried food outside your comfort zone?", "Did something mainly because it would become a story?", "Wrote down experiences you wanted to try someday?", "Checked something meaningful off a personal list?",
  "Had a major argument in a group chat?", "Watched a friend group split into sides?", "Hosted people at your place or organized a gathering?", "Cleaned up after other people's fun?", "Forgot an important date for someone?", "Planned a surprise for a friend or partner?", "Became the responsible person in a messy situation?", "Rebuilt a friendship after distance or conflict?", "Chose to end a friendship intentionally?", "Made a close friend after school age?",
  "Shared a quiz result because it felt accurate?", "Compared personal scores with friends?", "Retook a quiz to see if your result changed?", "Made a playlist with someone specific in mind?", "Cried at a movie where others could see?", "Typed a message, deleted it, then sent another version?", "Changed your appearance after a life shift?", "Kept private notes about your feelings?", "Learned something about yourself that was uncomfortable?", "Told the truth even though it made the moment awkward?"
];

const riceQuestionTranslations = {
  zh: [
    "有过浪漫牵手？", "约过会？", "谈过恋爱？", "亲吻过别人？", "有过没说出口的暗恋？", "发过暧昧消息？", "收到过情书？", "写过情书？", "和别人贴近跳舞？", "有过秘密仰慕者？"
  ],
  fr: [
    "Avez-vous déjà tenu la main de quelqu’un romantiquement ?", "Avez-vous déjà eu un rendez-vous ?", "Avez-vous déjà été en couple ?", "Avez-vous déjà embrassé quelqu’un ?", "Avez-vous déjà eu un crush secret ?", "Avez-vous déjà envoyé un message flirt ?", "Avez-vous déjà reçu une lettre d’amour ?", "Avez-vous déjà écrit une lettre d’amour ?", "Avez-vous déjà dansé près de quelqu’un ?", "Avez-vous déjà eu un admirateur secret ?"
  ],
  vi: [
    "Bạn đã từng nắm tay ai đó theo kiểu lãng mạn chưa?", "Bạn đã từng đi hẹn hò chưa?", "Bạn đã từng có một mối quan hệ chưa?", "Bạn đã từng hôn ai đó chưa?", "Bạn đã từng thích thầm ai đó chưa?", "Bạn đã từng nhắn tin tán tỉnh chưa?", "Bạn đã từng nhận thư tình chưa?", "Bạn đã từng viết thư tình chưa?", "Bạn đã từng nhảy gần ai đó chưa?", "Bạn đã từng có người thầm thích chưa?"
  ]
};

function localizedRiceQuestion(index, lang) {
  return riceQuestionTranslations[lang]?.[index] || riceQuestions[index];
}

const riceBands = [
  { min: 90, label: "Very high score", text: "You may have had fewer of the listed experiences so far. That is not better or worse, just one snapshot." },
  { min: 70, label: "High score", text: "You have probably tried some common social or romantic experiences while skipping many others." },
  { min: 40, label: "Middle score", text: "Your answers suggest a broad mix of experiences. Most people land somewhere in the middle." },
  { min: 0, label: "Low score", text: "You checked many items. Treat the score as a conversation starter, not a judgment." }
];

function byId(id) {
  return document.getElementById(id);
}

function initSbtiQuiz() {
  const root = byId("sbti-quiz");
  if (!root) return;
  const isZh = root.dataset.lang === "zh";
  const docLang = document.documentElement.lang || "en";
  const isFr = docLang.startsWith("fr");
  const isVi = docLang.startsWith("vi");
  const questions = isZh ? zhSbtiQuestions : isFr ? frSbtiQuestions : isVi ? viSbtiQuestions : sbtiQuestions;
  let index = 0;
  const picks = [];

  function render() {
    const q = questions[index];
    root.innerHTML = `
      <div class="question-count">${isZh ? "题目" : "Question"} ${index + 1} / ${questions.length}</div>
      <div class="progress"><span style="width:${(index / questions.length) * 100}%"></span></div>
      <h2 class="question-title">${q[0]}</h2>
      <div class="options">
        ${q[1].map((option, i) => `<button class="option" data-pick="${q[2][i]}">${option}</button>`).join("")}
      </div>
      <div class="quiz-footer">
        <button class="button secondary" data-back ${index === 0 ? "disabled" : ""}>${isZh ? "上一题" : "Back"}</button>
        <p>${isZh ? "娱乐测试，不代表科学诊断。" : "For entertainment only, not a scientific diagnosis."}</p>
      </div>
    `;
    root.querySelectorAll(".option").forEach((btn) => {
      btn.addEventListener("click", () => {
        picks[index] = btn.dataset.pick;
        index += 1;
        if (index >= questions.length) showSbtiResult(root, picks, isZh ? "zh" : isFr ? "fr" : isVi ? "vi" : "en");
        else render();
      });
    });
    const back = root.querySelector("[data-back]");
    back.addEventListener("click", () => {
      index = Math.max(0, index - 1);
      render();
    });
  }
  render();
}

function showSbtiResult(root, picks, lang = "en") {
  const isZh = lang === "zh";
  const counts = picks.reduce((acc, key) => {
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([key]) => key).join("");
  const score = picks.join("").split("").reduce((sum, char, i) => sum + char.charCodeAt(0) * (i + 3), top.length);
  const type = sbtiTypes[score % sbtiTypes.length];
  const resultCopy = {
    en: {
      title: "Your SBTI Type",
      share: "Share Result",
      retake: "Retake Test",
      allTypes: "View All Types",
      typesHref: "/sbti-types/",
      shareText: `My SBTI type is ${type.code}`
    },
    zh: {
      title: "你的 SBTI 类型",
      share: "分享结果",
      retake: "重新测试",
      allTypes: "查看全部类型",
      typesHref: "/zh/sbti-types/",
      shareText: `我的 SBTI 类型是 ${type.code}`
    },
    fr: {
      title: "Votre type SBTI",
      share: "Partager le résultat",
      retake: "Refaire le test",
      allTypes: "Voir tous les types",
      typesHref: "/fr/sbti-types/",
      shareText: `Mon type SBTI est ${type.code}`
    },
    vi: {
      title: "Loại SBTI của bạn",
      share: "Chia sẻ kết quả",
      retake: "Làm lại test",
      allTypes: "Xem tất cả loại",
      typesHref: "/vi/sbti-types/",
      shareText: `Loại SBTI của tôi là ${type.code}`
    }
  }[lang] || {
    title: "Your SBTI Type",
    share: "Share Result",
    retake: "Retake Test",
    allTypes: "View All Types",
    typesHref: "/sbti-types/",
    shareText: `My SBTI type is ${type.code}`
  };
  root.innerHTML = `
    <div class="result-card sbti-result">
      <p class="eyebrow">${resultCopy.title}</p>
      ${typeAvatar(type)}
      <div class="result-code">${type.code}</div>
      <h2>${isZh ? type.zh : type.name}</h2>
      <p class="type-quote">"${isZh ? type.quote : type.text}"</p>
      <p>${isZh ? type.zhText : type.text}</p>
      <div class="actions">
        <button class="button primary" data-share="${type.code} - ${type.name}">${resultCopy.share}</button>
        <button class="button secondary" data-restart>${resultCopy.retake}</button>
        <a class="button ghost" href="${resultCopy.typesHref}">${resultCopy.allTypes}</a>
      </div>
    </div>
  `;
  root.querySelector("[data-restart]").addEventListener("click", () => window.location.reload());
  attachShare(root.querySelector("[data-share]"), resultCopy.shareText);
}

function typeAvatar(type) {
  const skin = type.code.length % 2 === 0 ? "#f1c19b" : "#e8b58f";
  const shirtMap = {
    "CTRL": "#d9b48f",
    "ATM-er": "#87b866",
    "Dior-S": "#111827",
    "BOSS": "#d6c06a",
    "THAN-K": "#6b7280",
    "OH-NO!": "#5b6472",
    "GOGO": "#e4a582",
    "SEXY": "#d6b45f",
    "LOVE-R": "#d9344a",
    "MUM": "#6ec7a8",
    "FAKE": "#2f8b57",
    "OJBK": "#e7c1a5",
    "MALO": "#9b6b2f",
    "JOKE-R": "#d9eee9",
    "WOC!": "#9f8f75",
    "THIN-K": "#d1b394",
	    "SHIT": "#d8b58f",
	    "ZZZZ": "#b7d889",
	    "POOR": "#3f7f59",
	    "MONK": "#c9832d",
	    "IMSB": "#b7c38b",
	    "SOLO": "#2d3748",
	    "FUCK": "#93c572",
	    "DEAD": "#111827",
	    "IMFW": "#68a36f",
	    "HHHH": "#efb184",
	    "DRUNK": "#4b5563"
	  };
	  const shirt = shirtMap[type.code] || "#8aa0b8";
	  const mood = type.code.includes("OH") || type.code === "IMSB" ? "worried" : type.code.includes("ZZ") || type.code === "DEAD" ? "sleepy" : type.code.includes("JOKE") || type.code === "HHHH" ? "happy" : "calm";
	  const mouth = mood === "happy" ? "M43 67 Q50 74 57 67" : mood === "worried" ? "M43 70 Q50 64 57 70" : mood === "sleepy" ? "M44 68 H56" : "M43 68 Q50 70 57 68";
	  const extra = {
	    "ATM-er": '<rect x="18" y="88" width="19" height="11" rx="2" fill="#7fc96b"/><text x="27" y="97" text-anchor="middle" font-size="8" font-weight="900" fill="#fff">$</text>',
	    "BOSS": '<path d="M42 43 L48 31 L56 43 L64 31 L70 43 Z" fill="#ffc857"/>',
	    "LOVE-R": '<path d="M86 86 C78 78 93 70 96 80 C99 70 113 78 105 86 L96 96 Z" fill="#ff4d6d"/>',
	    "MALO": '<path d="M28 105 C12 104 16 83 30 88" fill="none" stroke="#9b6b2f" stroke-width="6" stroke-linecap="round"/>',
	    "JOKE-R": '<circle cx="56" cy="70" r="5" fill="#d9344a"/>',
	    "WOC!": '<text x="88" y="53" font-size="18" font-weight="900" fill="#ff4d6d">!</text>',
	    "THIN-K": '<path d="M20 52 L42 39 L44 60 L31 80 Z" fill="#2f343d" opacity="0.9"/>',
	    "ZZZZ": '<rect x="9" y="91" width="46" height="28" rx="8" fill="#a9cf79"/><text x="86" y="57" font-size="13" font-weight="900" fill="#6c63ff">Z</text>',
	    "POOR": '<path d="M22 92 L12 116" stroke="#3f7f59" stroke-width="7" stroke-linecap="round"/>',
	    "MONK": '<circle cx="56" cy="50" r="18" fill="#f4c7a3"/><path d="M40 53 Q56 66 72 53" fill="none" stroke="#c9832d" stroke-width="5"/>',
	    "SOLO": '<path d="M22 104 L10 119" stroke="#2d3748" stroke-width="8" stroke-linecap="round"/>',
	    "FUCK": '<path d="M38 39 L45 25 L51 39 L57 24 L63 39 L70 26 L73 43 Z" fill="#5d8f36"/>',
	    "DEAD": '<rect x="19" y="95" width="74" height="23" rx="4" fill="#1f2937"/><path d="M28 95 L78 70" stroke="#d1d5db" stroke-width="8" stroke-linecap="round"/>',
	    "DRUNK": '<path d="M82 91 L98 73" stroke="#ffc857" stroke-width="6" stroke-linecap="round"/><circle cx="101" cy="70" r="5" fill="#ffc857"/>'
	  }[type.code] || "";
	  return `
    <div class="type-avatar" aria-hidden="true">
      <svg class="avatar-card" viewBox="0 0 112 138" role="img">
        <rect x="3" y="3" width="106" height="132" rx="22" fill="#fff" stroke="#e4e7f0" stroke-width="2"/>
        <text x="56" y="19" text-anchor="middle" class="avatar-kicker">SBTI</text>
        <text x="56" y="33" text-anchor="middle" class="avatar-code">${type.code}</text>
        <path d="M31 54 L20 88 L39 83 Z" fill="#2f343d"/>
        <path d="M81 54 L92 88 L73 83 Z" fill="#2f343d"/>
        <path d="M32 48 Q56 25 80 48 L77 76 Q56 96 35 76 Z" fill="#2f343d"/>
        <path d="M34 58 Q56 43 78 58 L73 89 Q56 105 39 89 Z" fill="${skin}"/>
        <path d="M33 58 L50 42 L46 62 Z" fill="#3a404b"/>
        <path d="M79 58 L62 42 L66 62 Z" fill="#3a404b"/>
        <circle cx="45" cy="66" r="3" fill="#2b2f38"/>
        <circle cx="67" cy="66" r="3" fill="#2b2f38"/>
        <path d="${mouth}" fill="none" stroke="#8f5a48" stroke-width="3" stroke-linecap="round"/>
        <path d="M39 96 L73 96 L82 123 L30 123 Z" fill="${shirt}"/>
	        <path d="M39 96 Q56 110 73 96" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.7"/>
	        <path d="M33 105 L20 118" stroke="${shirt}" stroke-width="9" stroke-linecap="round"/>
	        <path d="M79 105 L92 118" stroke="${shirt}" stroke-width="9" stroke-linecap="round"/>
	        ${extra}
	      </svg>
    </div>
  `;
}

function initSbtiTypes() {
  const root = byId("sbti-types-grid");
  if (!root) return;
  const docLang = document.documentElement.lang || "en";
  const lang = root.dataset.lang || (docLang.startsWith("zh") ? "zh" : docLang.startsWith("fr") ? "fr" : docLang.startsWith("vi") ? "vi" : "en");
  const isZh = lang === "zh";
  root.innerHTML = sbtiTypes.map((type, index) => `
    <article class="type-card">
      <button class="type-summary" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
        ${typeAvatar(type)}
        <span class="type-copy">
          <span class="type-title">${isZh ? type.zh : type.name}</span>
          <span class="type-code">${type.code}</span>
          <span class="type-quote">"${isZh ? type.quote : type.text}"</span>
        </span>
        <span class="type-arrow">⌄</span>
      </button>
      <div class="type-detail" ${index === 0 ? "" : "hidden"}>
        <p ${isZh ? 'lang="zh-CN"' : ""}>${isZh ? type.zhText : englishLongText(type)}</p>
      </div>
    </article>
  `).join("");
  root.querySelectorAll(".type-summary").forEach((button) => {
    button.addEventListener("click", () => {
      const detail = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      detail.hidden = expanded;
    });
  });
}

function englishLongText(type) {
  const suffix = {
    "CTRL": "You tend to scan the whole situation before moving, which makes you great at planning, timing, and keeping a messy group on track.",
    "ATM-er": "You give more than people realize: time, care, attention, and sometimes actual money. Your generosity keeps plans and people alive.",
    "Dior-S": "You use dry humor and self-awareness as armor. Under the cynicism is someone who notices status games and refuses to worship them.",
    "BOSS": "When nobody takes charge, you naturally reach for the wheel. You make decisions quickly and prefer action over endless discussion.",
    "THAN-K": "You remember kindness. Even small gestures land deeply with you, and you often respond by becoming a warm, loyal presence.",
    "OH-NO!": "Your brain runs risk checks in the background. You may worry early, but that also means you are rarely completely unprepared.",
    "GOGO": "Momentum is your comfort zone. You would rather start, learn, and adjust than wait forever for the perfect plan.",
    "SEXY": "You understand attention, tone, and presence. Your charm is not just appearance; it is the way you shift the temperature of a room.",
    "LOVE-R": "You experience life through emotional detail. A tiny moment can become a scene, a song, or a whole inner storyline.",
    "MUM": "You notice what people need before they ask. Your care is practical, protective, and sometimes a little too responsible.",
    "FAKE": "You adapt quickly and read social rules fast. People may find you hard to define because you reveal different versions in different rooms.",
    "OJBK": "You are relaxed about things others overcomplicate. Your flexibility can be calming, as long as it does not become avoidance.",
    "MALO": "You bring playful disruption. When a room gets too serious, your curiosity and chaos can make it breathe again.",
    "JOKE-R": "Humor is your shield and your social tool. You often reveal truth through jokes before you admit what you actually feel.",
    "WOC!": "Your reactions are cinematic. Shock, delight, disbelief, and drama all travel through you quickly and loudly.",
    "THIN-K": "You turn small clues into theories. Your mind likes depth, patterns, and hidden logic, even when everyone else has moved on.",
    "SHIT": "You are a sharp critic of nonsense. Your honesty can sting, but it often points directly at what needs fixing.",
    "ZZZZ": "You conserve energy by disappearing from unnecessary noise. Rest is not laziness for you; it is survival strategy.",
    "POOR": "You know how to do more with less. Your minimalism is part resourcefulness, part refusal to waste yourself on empty display.",
    "MONK": "You keep distance from drama. You are not emotionless; you simply do not believe every conflict deserves your soul.",
    "IMSB": "You can be painfully hard on yourself. Your self-awareness is strong, but it works best when it becomes reflection rather than attack.",
    "SOLO": "You are used to carrying your own weather. Independence protects you, though sometimes it also keeps comfort at a distance.",
    "FUCK": "You react honestly to absurdity. When things get ridiculous, your first response is explosive, vivid, and very human.",
    "DEAD": "You process emotion in low-power mode. Your deadpan surface hides a dry survival humor that keeps you moving.",
    "IMFW": "You may joke about being useless, but somehow you keep coming back. Your resilience often looks like low battery, not defeat.",
    "HHHH": "You survive awkwardness by laughing first. Your lightness is not shallow; it is a way of moving through complicated rooms.",
    "DRUNK": "You are drawn to loosened emotion and big atmosphere. When your guard drops, sincerity and drama both come out."
  };
  return suffix[type.code] || type.text;
}

function initRiceQuiz() {
  const root = byId("rice-quiz");
  if (!root) return;
  const docLang = document.documentElement.lang || "en";
  const lang = root.dataset.lang || (docLang.startsWith("zh") ? "zh" : docLang.startsWith("fr") ? "fr" : docLang.startsWith("vi") ? "vi" : "en");
  const copy = {
    en: {
      eyebrow: "Entertainment Quiz",
      before: "Before You Start",
      intro: "This quiz discusses dating, parties, alcohol, and adult life experiences in a non-graphic way. It is intended for adults, is not targeted to minors, and is not a moral, medical, or psychological assessment.",
      confirm: "I understand",
      backHome: "Go back",
      yes: "Yes, this applies to me",
      no: "No, not yet",
      back: "Back",
      scoring: "Your Rice Purity score starts at 100 and decreases for each Yes.",
      question: "Question"
    },
    zh: {
      eyebrow: "娱乐测试",
      before: "开始之前",
      intro: "这个测试会涉及约会、聚会、酒精和成人生活经历等非露骨话题。它仅供成年人娱乐，不面向未成年人优化，也不是道德、医学或心理评估。",
      confirm: "我了解，开始测试",
      backHome: "返回",
      yes: "是，这符合我",
      no: "否，还没有",
      back: "上一题",
      scoring: "Rice Purity 分数从 100 开始，每选择一个 Yes 会减少。",
      question: "题目"
    },
    fr: {
      eyebrow: "Quiz de divertissement",
      before: "Avant de commencer",
      intro: "Ce quiz aborde les rencontres, les fêtes, l’alcool et des expériences de vie adulte de façon non explicite. Il est destiné aux adultes, ne vise pas les mineurs et ne constitue pas une évaluation morale, médicale ou psychologique.",
      confirm: "Je comprends, commencer",
      backHome: "Retour",
      yes: "Oui, cela me correspond",
      no: "Non, pas encore",
      back: "Retour",
      scoring: "Votre score commence à 100 et diminue à chaque réponse Oui.",
      question: "Question"
    },
    vi: {
      eyebrow: "Bài quiz giải trí",
      before: "Trước khi bắt đầu",
      intro: "Bài quiz này có nhắc đến hẹn hò, tiệc tùng, rượu và một số trải nghiệm đời sống người lớn theo cách không mô tả nhạy cảm. Nội dung dành cho người lớn, không nhắm đến trẻ vị thành niên và không phải đánh giá đạo đức, y tế hay tâm lý.",
      confirm: "Tôi hiểu, bắt đầu",
      backHome: "Quay lại",
      yes: "Có, điều này đúng với tôi",
      no: "Không, chưa từng",
      back: "Quay lại",
      scoring: "Điểm Rice Purity bắt đầu từ 100 và giảm với mỗi câu trả lời Có.",
      question: "Câu hỏi"
    }
  }[lang];
  let confirmed = false;
  let index = 0;
  const answers = [];

  function ageGate() {
    root.innerHTML = `
      <div class="quiz-panel">
        <p class="eyebrow">${copy.eyebrow}</p>
        <h2>${copy.before}</h2>
        <p>${copy.intro}</p>
        <div class="actions">
          <button class="button primary" data-confirm>${copy.confirm}</button>
          <a class="button secondary" href="/">${copy.backHome}</a>
        </div>
      </div>
    `;
    root.querySelector("[data-confirm]").addEventListener("click", () => {
      confirmed = true;
      render();
    });
  }

  function render() {
    if (!confirmed) return ageGate();
    root.innerHTML = `
      <div class="question-count">${copy.question} ${index + 1} / ${riceQuestions.length}</div>
      <div class="progress"><span style="width:${(index / riceQuestions.length) * 100}%"></span></div>
      <h2 class="question-title">${localizedRiceQuestion(index, lang)}</h2>
      <div class="options">
        <button class="option" data-answer="yes">${copy.yes}</button>
        <button class="option" data-answer="no">${copy.no}</button>
      </div>
      <div class="quiz-footer">
        <button class="button secondary" data-back ${index === 0 ? "disabled" : ""}>${copy.back}</button>
        <p>${copy.scoring}</p>
      </div>
    `;
    root.querySelectorAll("[data-answer]").forEach((btn) => {
      btn.addEventListener("click", () => {
        answers[index] = btn.dataset.answer;
        index += 1;
        if (index >= riceQuestions.length) showRiceResult(root, answers);
        else render();
      });
    });
    root.querySelector("[data-back]").addEventListener("click", () => {
      index = Math.max(0, index - 1);
      render();
    });
  }
  render();
}

function showRiceResult(root, answers) {
  const yes = answers.filter((answer) => answer === "yes").length;
  const score = Math.max(0, 100 - yes);
  const band = riceBands.find((item) => score >= item.min);
  const docLang = document.documentElement.lang || "en";
  const lang = docLang.startsWith("zh") ? "zh" : docLang.startsWith("fr") ? "fr" : docLang.startsWith("vi") ? "vi" : "en";
  const resultCopy = {
    en: {
      eyebrow: "Your Rice Purity Score",
      notice: "This quiz is for entertainment only. It is not a measure of worth, morality, health, or maturity.",
      share: "Share Score",
      meaning: "Score Meaning",
      retake: "Retake"
    },
    zh: {
      eyebrow: "你的 Rice Purity 分数",
      notice: "本测试仅供娱乐，不代表价值、道德、健康或成熟程度。",
      share: "分享分数",
      meaning: "分数含义",
      retake: "重新测试"
    },
    fr: {
      eyebrow: "Votre score de pureté",
      notice: "Ce quiz est uniquement destiné au divertissement. Il ne mesure pas la valeur, la morale, la santé ou la maturité.",
      share: "Partager le score",
      meaning: "Signification du score",
      retake: "Recommencer"
    },
    vi: {
      eyebrow: "Điểm Rice Purity của bạn",
      notice: "Bài quiz này chỉ dành cho giải trí. Nó không đo giá trị, đạo đức, sức khỏe hay sự trưởng thành.",
      share: "Chia sẻ điểm",
      meaning: "Ý nghĩa điểm",
      retake: "Làm lại"
    }
  }[lang];
  const bandLabel = {
    en: band.label,
    zh: score >= 90 ? "非常高分" : score >= 70 ? "高分" : score >= 40 ? "中间分数" : "低分",
    fr: score >= 90 ? "Score très élevé" : score >= 70 ? "Score élevé" : score >= 40 ? "Score moyen" : "Score bas",
    vi: score >= 90 ? "Điểm rất cao" : score >= 70 ? "Điểm cao" : score >= 40 ? "Điểm trung bình" : "Điểm thấp"
  }[lang];
  const bandText = {
    en: band.text,
    zh: score >= 90 ? "你勾选的经历较少。这不是好坏判断，只是一个娱乐快照。" : score >= 70 ? "你可能有一些常见经历，但仍保留很多未勾选项。" : score >= 40 ? "你的答案显示经历比较混合，很多人会落在中间区间。" : "你勾选了较多项目。请把它当作聊天话题，而不是价值判断。",
    fr: score >= 90 ? "Vous avez coché peu d’expériences. Ce n’est ni meilleur ni pire, seulement un instantané ludique." : score >= 70 ? "Vous avez probablement quelques expériences courantes, tout en gardant beaucoup de cases non cochées." : score >= 40 ? "Vos réponses montrent un mélange d’expériences. Beaucoup de personnes se situent au milieu." : "Vous avez coché beaucoup d’éléments. Traitez ce score comme un sujet de conversation, pas comme un jugement.",
    vi: score >= 90 ? "Bạn đánh dấu khá ít trải nghiệm. Điều này không tốt hơn hay tệ hơn, chỉ là một ảnh chụp vui." : score >= 70 ? "Bạn có thể đã trải qua một số điều phổ biến nhưng vẫn còn nhiều mục chưa chọn." : score >= 40 ? "Câu trả lời của bạn cho thấy nhiều trải nghiệm khác nhau. Nhiều người nằm ở khoảng giữa." : "Bạn đã chọn khá nhiều mục. Hãy xem điểm này như chủ đề trò chuyện, không phải phán xét."
  }[lang];
  root.innerHTML = `
    <div class="result-card">
      <p class="eyebrow">${resultCopy.eyebrow}</p>
      <div class="score-number">${score}</div>
      <h2>${bandLabel}</h2>
      <p>${bandText}</p>
      <div class="notice"><p>${resultCopy.notice}</p></div>
      <div class="actions">
        <button class="button primary" data-share="Rice Purity Score: ${score}">${resultCopy.share}</button>
        <a class="button secondary" href="/rice-purity-test-score-meaning/">${resultCopy.meaning}</a>
        <button class="button ghost" data-restart>${resultCopy.retake}</button>
      </div>
    </div>
  `;
  root.querySelector("[data-restart]").addEventListener("click", () => window.location.reload());
  attachShare(root.querySelector("[data-share]"), `My Rice Purity score is ${score}`);
}

function attachShare(button, text) {
  button.addEventListener("click", async () => {
    const shareData = { title: "Viral Test Lab", text, url: window.location.href };
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      button.textContent = "Copied";
      setTimeout(() => (button.textContent = "Share Result"), 1300);
    }
  });
}

initSbtiQuiz();
initRiceQuiz();
initSbtiTypes();
