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

const iqQuestions = [
  { c: "visual", d: 1, q: { en: "Which item completes the pattern: circle, square, triangle, circle, square, ?", zh: "哪一项能补全规律：圆形、正方形、三角形、圆形、正方形、？" }, o: { en: ["Circle", "Square", "Triangle", "Star"], zh: ["圆形", "正方形", "三角形", "星形"] }, a: 2, e: { en: "The three shapes repeat in the same order.", zh: "三个图形按固定顺序循环出现。" } },
  { c: "number", d: 1, q: { en: "What comes next: 2, 4, 8, 16, ?", zh: "下一个数字是：2, 4, 8, 16, ?" }, o: { en: ["20", "24", "30", "32"], zh: ["20", "24", "30", "32"] }, a: 3, e: { en: "Each number is doubled.", zh: "每一项都是前一项的 2 倍。" } },
  { c: "logic", d: 1, q: { en: "All zims are lums. Some lums are naks. What must be true?", zh: "所有 Zim 都是 Lum。一些 Lum 是 Nak。以下哪项一定为真？" }, o: { en: ["All zims are naks", "Some naks are zims", "All zims are lums", "No lums are zims"], zh: ["所有 Zim 都是 Nak", "一些 Nak 是 Zim", "所有 Zim 都是 Lum", "没有 Lum 是 Zim"] }, a: 2, e: { en: "Only the first statement is guaranteed.", zh: "只有题干中的第一条关系必然成立。" } },
  { c: "spatial", d: 1, q: { en: "If a clock hand points east and turns 90 degrees clockwise, where does it point?", zh: "如果钟表指针指向东方，顺时针转 90 度后指向哪里？" }, o: { en: ["North", "South", "West", "East"], zh: ["北", "南", "西", "东"] }, a: 1, e: { en: "East rotated clockwise becomes south.", zh: "从东方顺时针旋转 90 度会指向南方。" } },
  { c: "verbal", d: 1, q: { en: "Book is to reading as fork is to:", zh: "书本之于阅读，如叉子之于：" }, o: { en: ["Cooking", "Eating", "Writing", "Drawing"], zh: ["烹饪", "进食", "写作", "绘画"] }, a: 1, e: { en: "A fork is a tool used for eating.", zh: "叉子是用于进食的工具。" } },
  { c: "visual", d: 1.3, q: { en: "In a row, the colors repeat red, blue, blue. Position 8 is:", zh: "颜色按红、蓝、蓝重复排列。第 8 个颜色是：" }, o: { en: ["Red", "Blue", "Green", "Cannot tell"], zh: ["红", "蓝", "绿", "无法判断"] }, a: 1, e: { en: "Positions 2, 3, 5, 6, and 8 are blue.", zh: "第 2、3、5、6、8 位都是蓝色。" } },
  { c: "number", d: 1.3, q: { en: "What comes next: 3, 6, 11, 18, 27, ?", zh: "下一个数字是：3, 6, 11, 18, 27, ?" }, o: { en: ["36", "38", "40", "42"], zh: ["36", "38", "40", "42"] }, a: 1, e: { en: "The increases are +3, +5, +7, +9, so next is +11.", zh: "差值为 +3、+5、+7、+9，下一步是 +11。" } },
  { c: "logic", d: 1.3, q: { en: "Mia is older than Leo. Leo is older than Noor. Who is the youngest?", zh: "Mia 比 Leo 年长，Leo 比 Noor 年长。谁最年轻？" }, o: { en: ["Mia", "Leo", "Noor", "Cannot tell"], zh: ["Mia", "Leo", "Noor", "无法判断"] }, a: 2, e: { en: "The order is Mia, Leo, Noor from oldest to youngest.", zh: "从年长到年轻依次是 Mia、Leo、Noor。" } },
  { c: "spatial", d: 1.3, q: { en: "A cube has one red face opposite one blue face. If red faces up, blue is:", zh: "一个立方体的红色面与蓝色面相对。如果红色面朝上，蓝色面在哪里？" }, o: { en: ["Front", "Back", "Bottom", "Right"], zh: ["前面", "后面", "底面", "右面"] }, a: 2, e: { en: "Opposite the top face is the bottom face.", zh: "与上面相对的是底面。" } },
  { c: "verbal", d: 1.3, q: { en: "Find the closest analogy: seed is to tree as spark is to:", zh: "选择最接近的类比：种子之于树，如火花之于：" }, o: { en: ["Fire", "Rain", "Stone", "Smoke"], zh: ["火", "雨", "石头", "烟"] }, a: 0, e: { en: "A seed can grow into a tree; a spark can grow into a fire.", zh: "种子可以发展成树，火花可以发展成火。" } },
  { c: "visual", d: 1.3, q: { en: "A pattern alternates small-large-large-small-large-large. The next size is:", zh: "大小规律为小、大、大、小、大、大。下一项是：" }, o: { en: ["Small", "Large", "Medium", "Unknown"], zh: ["小", "大", "中", "未知"] }, a: 0, e: { en: "The cycle is small, large, large.", zh: "循环单元是小、大、大。" } },
  { c: "number", d: 1.7, q: { en: "What comes next: 1, 1, 2, 3, 5, 8, ?", zh: "下一个数字是：1, 1, 2, 3, 5, 8, ?" }, o: { en: ["11", "12", "13", "15"], zh: ["11", "12", "13", "15"] }, a: 2, e: { en: "Each term is the sum of the previous two.", zh: "每一项等于前两项之和。" } },
  { c: "logic", d: 1.7, q: { en: "If no painters are singers and all singers are dancers, which is possible?", zh: "如果没有画家是歌手，且所有歌手都是舞者，以下哪项可能成立？" }, o: { en: ["A painter is a singer", "A singer is not a dancer", "A painter is a dancer", "No dancer is a singer"], zh: ["某个画家是歌手", "某个歌手不是舞者", "某个画家是舞者", "没有舞者是歌手"] }, a: 2, e: { en: "Painters cannot be singers, but they may still be dancers.", zh: "画家不能是歌手，但仍可能是舞者。" } },
  { c: "spatial", d: 1.7, q: { en: "A shape points north. Rotate it 180 degrees, then 90 degrees counterclockwise. It points:", zh: "一个箭头指向北。先旋转 180 度，再逆时针旋转 90 度。它指向：" }, o: { en: ["North", "East", "South", "West"], zh: ["北", "东", "南", "西"] }, a: 1, e: { en: "North becomes south after 180 degrees; south rotated counterclockwise becomes east.", zh: "北转 180 度为南，南再逆时针 90 度为东。" } },
  { c: "verbal", d: 1.7, q: { en: "Choose the odd one out.", zh: "选出不同类的一项。" }, o: { en: ["Whisper", "Shout", "Murmur", "Silent"], zh: ["低语", "喊叫", "喃喃说", "沉默"] }, a: 3, e: { en: "The first three are ways of using voice; silent means no voice.", zh: "前三项都是发声方式，沉默表示不发声。" } },
  { c: "visual", d: 1.7, q: { en: "In each pair, the second symbol is the first mirrored left-right. Which pair breaks the rule?", zh: "每一组中，第二个符号都是第一个的左右镜像。哪一组不符合规律？" }, o: { en: ["b / d", "p / q", "E / Ǝ", "N / Z"], zh: ["b / d", "p / q", "E / Ǝ", "N / Z"] }, a: 3, e: { en: "N mirrored left-right is still a reversed N-like form, not Z.", zh: "N 的左右镜像不是 Z。" } },
  { c: "number", d: 1.7, q: { en: "What number is missing: 4, 9, 19, 39, ?", zh: "缺失数字是：4, 9, 19, 39, ?" }, o: { en: ["59", "69", "79", "89"], zh: ["59", "69", "79", "89"] }, a: 2, e: { en: "Each term doubles and adds 1.", zh: "每一项都是前一项乘 2 再加 1。" } },
  { c: "logic", d: 1.7, q: { en: "Four people sit in a row. Ana is left of Bo. Cy is right of Bo. Dee is left of Ana. Who is farthest left?", zh: "四个人排成一排。Ana 在 Bo 左边，Cy 在 Bo 右边，Dee 在 Ana 左边。最左边是谁？" }, o: { en: ["Ana", "Bo", "Cy", "Dee"], zh: ["Ana", "Bo", "Cy", "Dee"] }, a: 3, e: { en: "Dee is left of Ana, and Ana is left of Bo.", zh: "Dee 在 Ana 左边，而 Ana 在 Bo 左边。" } },
  { c: "spatial", d: 1.7, q: { en: "Fold a square paper in half vertically, punch a hole near the left folded edge, then unfold. How many holes appear?", zh: "把正方形纸竖向对折，在靠近左侧折边的位置打一个孔，展开后有几个孔？" }, o: { en: ["1", "2", "3", "4"], zh: ["1", "2", "3", "4"] }, a: 1, e: { en: "One punch through folded paper creates two mirrored holes.", zh: "折叠后打一个孔，展开会出现两个镜像孔。" } },
  { c: "verbal", d: 1.7, q: { en: "Fragile is to sturdy as scarce is to:", zh: "脆弱之于坚固，如稀缺之于：" }, o: { en: ["Rare", "Plentiful", "Useful", "Hidden"], zh: ["罕见", "充足", "有用", "隐藏"] }, a: 1, e: { en: "The relationship is opposite meaning.", zh: "这组关系是反义关系。" } },
  { c: "visual", d: 2.2, q: { en: "A 3-step pattern changes by adding one line, then rotating 90 degrees. After add, rotate, add, rotate, the next action is:", zh: "一个三步图形规律为：加一条线，然后旋转 90 度。若已经经历加、转、加、转，下一步是：" }, o: { en: ["Add a line", "Rotate 90 degrees", "Remove a line", "Mirror"], zh: ["加一条线", "旋转 90 度", "去掉一条线", "镜像"] }, a: 0, e: { en: "The operations alternate add, rotate.", zh: "操作按加、转交替进行。" } },
  { c: "number", d: 2.2, q: { en: "What comes next: 2, 6, 12, 20, 30, ?", zh: "下一个数字是：2, 6, 12, 20, 30, ?" }, o: { en: ["40", "42", "44", "46"], zh: ["40", "42", "44", "46"] }, a: 1, e: { en: "The sequence is n × (n + 1): 1×2, 2×3, 3×4, so next is 6×7.", zh: "这是 n × (n + 1)：1×2、2×3、3×4，所以下一项是 6×7。" } },
  { c: "logic", d: 2.2, q: { en: "Exactly one statement is true: A says 'B is true.' B says 'C is true.' C says 'A is false.' Which statement is true?", zh: "恰好只有一句话为真：A 说“B 为真”。B 说“C 为真”。C 说“A 为假”。哪一句为真？" }, o: { en: ["A", "B", "C", "None"], zh: ["A", "B", "C", "都不真"] }, a: 2, e: { en: "If C is true, A is false and B is false, making exactly one true statement.", zh: "若 C 为真，则 A 假、B 假，正好只有一句真话。" } },
  { c: "spatial", d: 2.2, q: { en: "A cube is painted on all outside faces and cut into 27 equal cubes. How many small cubes have exactly two painted faces?", zh: "一个立方体外表面全部涂色，再切成 27 个相同小立方体。有多少个小立方体恰好有两个面被涂色？" }, o: { en: ["6", "8", "12", "18"], zh: ["6", "8", "12", "18"] }, a: 2, e: { en: "A 3×3×3 cube has one edge-center cube on each of 12 edges.", zh: "3×3×3 立方体每条边有 1 个边中小块，共 12 条边。" } },
  { c: "verbal", d: 2.2, q: { en: "If 'opaque' means not letting light through, the best opposite is:", zh: "如果 opaque 表示不透光，最合适的反义词是：" }, o: { en: ["Bright", "Transparent", "Heavy", "Polished"], zh: ["明亮", "透明", "沉重", "光滑"] }, a: 1, e: { en: "Transparent means light can pass through.", zh: "transparent 表示光可以透过。" } },
  { c: "visual", d: 2.2, q: { en: "A row uses this rule: the third symbol combines the first two. If □ + / becomes a square with a diagonal, then ○ + | becomes:", zh: "一排图形规则为：第三个图形合并前两个。若 □ + / 变成带斜线的正方形，则 ○ + | 变成：" }, o: { en: ["Circle with vertical line", "Circle with diagonal line", "Square with vertical line", "Plain circle"], zh: ["带竖线的圆", "带斜线的圆", "带竖线的方形", "普通圆"] }, a: 0, e: { en: "The two symbols are overlaid.", zh: "两个图形被叠加在一起。" } },
  { c: "number", d: 2.2, q: { en: "What comes next: 81, 27, 9, 3, ?", zh: "下一个数字是：81, 27, 9, 3, ?" }, o: { en: ["0", "1", "2", "6"], zh: ["0", "1", "2", "6"] }, a: 1, e: { en: "Each term is divided by 3.", zh: "每一项除以 3。" } },
  { c: "logic", d: 2.2, q: { en: "If the code for CAT is DBU, what is the same code rule for MIND?", zh: "如果 CAT 按同一规则编码为 DBU，那么 MIND 编码为：" }, o: { en: ["NJOF", "LJMC", "NJOE", "MJNE"], zh: ["NJOF", "LJMC", "NJOE", "MJNE"] }, a: 0, e: { en: "Each letter moves one step forward in the alphabet.", zh: "每个字母都向后移动一位。" } },
  { c: "spatial", d: 2.2, q: { en: "Facing north, you turn right, then right, then left. Which way are you facing?", zh: "面朝北，先右转，再右转，再左转。最后面朝哪里？" }, o: { en: ["North", "East", "South", "West"], zh: ["北", "东", "南", "西"] }, a: 1, e: { en: "North to east, east to south, south left to east.", zh: "北右转为东，东右转为南，南左转为东。" } },
  { c: "verbal", d: 2.2, q: { en: "Complete the analogy: editor is to manuscript as sculptor is to:", zh: "完成类比：编辑之于稿件，如雕塑家之于：" }, o: { en: ["Clay", "Gallery", "Paint", "Frame"], zh: ["黏土", "画廊", "颜料", "相框"] }, a: 0, e: { en: "Both transform raw material into a refined work.", zh: "两者都加工原材料，使其成为作品。" } },
  { c: "number", d: 1.3, q: { en: "If 5 machines make 5 parts in 5 minutes, how long do 10 machines need to make 10 parts?", zh: "如果 5 台机器 5 分钟做 5 个零件，那么 10 台机器做 10 个零件需要多久？" }, o: { en: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"], zh: ["5 分钟", "10 分钟", "15 分钟", "20 分钟"] }, a: 0, e: { en: "Each machine makes one part in 5 minutes.", zh: "每台机器 5 分钟做 1 个零件。" } },
  { c: "logic", d: 1.3, q: { en: "If today is Wednesday, what day is 10 days from now?", zh: "如果今天是星期三，10 天后是星期几？" }, o: { en: ["Friday", "Saturday", "Sunday", "Monday"], zh: ["星期五", "星期六", "星期日", "星期一"] }, a: 1, e: { en: "10 days is one week plus 3 days; Wednesday plus 3 is Saturday.", zh: "10 天是一周加 3 天，星期三后 3 天是星期六。" } },
  { c: "spatial", d: 1.3, q: { en: "Which flat shape can fold into a closed cube most directly?", zh: "哪种展开图最可能直接折成立方体？" }, o: { en: ["Six equal squares connected edge to edge", "Four triangles in a line", "One circle and five squares", "Six circles"], zh: ["六个等大的正方形边对边相连", "四个三角形排成一行", "一个圆和五个正方形", "六个圆"] }, a: 0, e: { en: "A cube is made of six square faces.", zh: "立方体由六个正方形面组成。" } },
  { c: "verbal", d: 1.3, q: { en: "Choose the word closest to 'brief'.", zh: "选择与 brief 最接近的词。" }, o: { en: ["Short", "Heavy", "Ancient", "Loud"], zh: ["短暂的", "沉重的", "古老的", "响亮的"] }, a: 0, e: { en: "Brief means short in time or length.", zh: "brief 表示时间或篇幅短。" } },
  { c: "visual", d: 1.7, q: { en: "A tile pattern repeats black, white, white, black. The 11th tile is:", zh: "瓷砖颜色按黑、白、白、黑重复。第 11 块是：" }, o: { en: ["Black", "White", "Gray", "Cannot tell"], zh: ["黑", "白", "灰", "无法判断"] }, a: 1, e: { en: "The 4-tile cycle places white at positions 2, 3, 6, 7, 10, and 11.", zh: "四项循环中第 11 位对应白色。" } },
  { c: "number", d: 1.7, q: { en: "What is 15% of 80?", zh: "80 的 15% 是多少？" }, o: { en: ["8", "10", "12", "15"], zh: ["8", "10", "12", "15"] }, a: 2, e: { en: "10% is 8 and 5% is 4, so 15% is 12.", zh: "10% 是 8，5% 是 4，所以 15% 是 12。" } },
  { c: "logic", d: 2.2, q: { en: "A box contains red and blue balls. Every red ball is large. Some blue balls are large. Which is certain?", zh: "盒子里有红球和蓝球。每个红球都是大的。一些蓝球是大的。以下哪项一定成立？" }, o: { en: ["All large balls are red", "Some large balls are blue", "No blue balls are red", "All blue balls are large"], zh: ["所有大球都是红球", "一些大球是蓝球", "没有蓝球是红球", "所有蓝球都是大的"] }, a: 1, e: { en: "If some blue balls are large, then some large balls are blue.", zh: "既然一些蓝球是大的，就必然存在一些大球是蓝球。" } },
  { c: "spatial", d: 2.2, q: { en: "A map scale says 1 cm equals 5 km. Two towns are 7 cm apart on the map. Real distance is:", zh: "地图比例尺为 1 厘米代表 5 公里。地图上两地相距 7 厘米，实际距离是：" }, o: { en: ["12 km", "25 km", "35 km", "50 km"], zh: ["12 公里", "25 公里", "35 公里", "50 公里"] }, a: 2, e: { en: "7 × 5 km = 35 km.", zh: "7 × 5 公里 = 35 公里。" } },
  { c: "verbal", d: 2.2, q: { en: "Choose the best completion: cautious is to reckless as generous is to:", zh: "选择最佳补全：谨慎之于鲁莽，如慷慨之于：" }, o: { en: ["Kind", "Selfish", "Careful", "Wealthy"], zh: ["善良", "自私", "小心", "富有"] }, a: 1, e: { en: "The relationship is opposites.", zh: "这组关系是反义关系。" } },
  { c: "visual", d: 2.2, q: { en: "A sequence shows one dot, then two dots connected, then three dots connected in a triangle. The next likely figure is:", zh: "图形序列为一个点、两个点相连、三个点连成三角形。下一项最可能是：" }, o: { en: ["Four dots forming a square", "Three dots in a line", "One larger dot", "Five dots in a star"], zh: ["四个点连成正方形", "三个点排成直线", "一个更大的点", "五个点连成星形"] }, a: 0, e: { en: "The pattern increases points and forms the simplest closed figure.", zh: "规律是点数增加，并形成最简单的封闭图形。" } }
];

const iqCategoryLabels = {
  en: { visual: "Visual Patterns", number: "Number Rules", logic: "Logic", spatial: "Spatial Thinking", verbal: "Verbal Analogy" },
  zh: { visual: "图形推理", number: "数字规律", logic: "逻辑判断", spatial: "空间想象", verbal: "语言类推" }
};

function byId(id) {
  return document.getElementById(id);
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag !== "function") return;
  const isToolKeyEvent = name === "tool_start" || name === "tool_complete";
  window.gtag("event", name, {
    ...(isToolKeyEvent ? {
      event_category: "tool_engagement",
      key_event: true,
      conversion: true
    } : {}),
    page_path: window.location.pathname,
    ...params
  });
}

function currentPageLang() {
  const lang = document.documentElement.lang || "en";
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("fr")) return "fr";
  if (lang.startsWith("vi")) return "vi";
  return "en";
}

const dynamicTextTranslations = {
  zh: {
    "Reaction Time Test": "反应速度测试",
    "Click when the screen turns green.": "屏幕变绿时立即点击。",
    "Run five rounds to measure your average visual reaction time. Wait for the green signal, then click or tap as quickly as you can.": "完成 5 轮测试，测量你的平均视觉反应时间。等待绿色信号，然后尽快点击或轻点。",
    "rounds": "轮",
    "result": "结果",
    "Tap": "轻点",
    "friendly": "适配",
    "Start Test": "开始测试",
    "Wait for green...": "等待变绿...",
    "Do not click yet": "还不要点击",
    "Click now": "现在点击",
    "Fast and clean": "快速点击",
    "Too Soon": "太早了",
    "Wait for the green signal.": "请等待绿色信号。",
    "This round does not count. Try again and keep your cursor or finger relaxed until the color changes.": "本轮不计入结果。再试一次，颜色变化前保持手指放松。",
    "Retry Round": "重试本轮",
    "Next Round": "下一轮",
    "Your Reaction Time": "你的反应时间",
    "Elite reflex range": "顶级反应范围",
    "Fast reaction range": "快速反应范围",
    "Typical reaction range": "常见反应范围",
    "Steady but improvable": "稳定但可提升",
    "Average": "平均值",
    "Best": "最佳",
    "Rounds": "轮数",
    "Range": "范围",
    "Share Result": "分享结果",
    "Try Again": "再试一次",
    "CPS Test": "CPS 测试",
    "Click as fast as you can for 5 seconds.": "在 5 秒内尽可能快地点击。",
    "Start clicking": "开始点击",
    "clicks": "次点击",
    "test": "测试",
    "Reset": "重置",
    "Your CPS Result": "你的 CPS 结果",
    "Very fast clicking": "点击非常快",
    "Solid clicking speed": "点击速度不错",
    "Casual clicking speed": "休闲点击速度",
    "Typing Speed Test": "打字速度测试",
    "Type the sample text exactly.": "准确输入示例文本。",
    "Start typing here...": "从这里开始输入...",
    "accuracy": "准确率",
    "errors": "错误",
    "Your Typing Speed": "你的打字速度",
    "Fast typing speed": "打字速度很快",
    "Comfortable typing speed": "打字速度舒适",
    "Practice typing speed": "练习级打字速度",
    "Speed": "速度",
    "Accuracy": "准确率",
    "Time": "时间",
    "Errors": "错误",
    "Keyboard Test": "键盘测试",
    "Press keys to test your keyboard.": "按键测试你的键盘。",
    "Click inside this panel, then press keys. Working keys light up and the latest key appears below.": "点击这个面板，然后按下按键。正常工作的键会亮起，最新按键会显示在下方。",
    "Last key": "最新按键",
    "Code": "键码",
    "Keys tested": "已测按键",
    "None yet": "暂无",
    "Waiting": "等待中",
    "Focus Test": "聚焦测试",
    "Keyboard Polling Rate Test": "键盘轮询率测试",
    "Alternate two keys for 10 seconds.": "交替按两个键 10 秒。",
    "Click Start Test, then quickly press A and S back and forth. The tool ignores held-key repeats and estimates keyboard Hz from real keydown intervals.": "点击开始测试，然后快速交替按 A 和 S。本工具会忽略长按重复，并根据真实按键间隔估算键盘 Hz。",
    "For a cleaner result, alternate two keys instead of holding one key. Holding a key often measures OS repeat behavior.": "为了获得更干净的结果，请交替按两个键，不要长按单键。长按通常测到的是系统重复速度。",
    "Open Keyboard Test": "打开键盘测试",
    "Testing Keyboard Hz": "正在测试键盘 Hz",
    "Press A and S alternately.": "交替按 A 和 S。",
    "Current": "当前",
    "Time Left": "剩余时间",
    "Peak": "峰值",
    "Events": "事件数",
    "Min Interval": "最小间隔",
    "Waiting for key presses...": "等待按键...",
    "Stop Early": "提前停止",
    "First key": "第一个按键",
    "Your Keyboard Hz Result": "你的键盘 Hz 结果",
    "Gaming keyboard range": "游戏键盘范围",
    "Very good input rate": "非常好的输入频率",
    "Good input rate": "良好的输入频率",
    "Standard input rate": "标准输入频率",
    "Keep testing": "继续测试",
    "Run a longer test": "请测试更久一点",
    "Average Hz": "平均 Hz",
    "Peak Hz": "峰值 Hz",
    "Stability": "稳定性",
    "Stable": "稳定",
    "Moderate": "中等",
    "Unstable": "不稳定",
    "Jitter": "抖动",
    "Max Interval": "最大间隔",
    "Ignored Holds": "忽略长按",
    "Browser tests estimate event timing. Results can vary with browser, OS settings, CPU load, wireless connection, and pressing rhythm.": "浏览器测试是在估算事件时序。结果会受到浏览器、系统设置、CPU 负载、无线连接和按键节奏影响。",
    "Mouse Test": "鼠标测试",
    "Click, scroll, and move inside the test area.": "在测试区域内点击、滚动和移动。",
    "Move pointer here, click each button, double-click, and scroll.": "把指针移到这里，点击每个按键，双击并滚动。",
    "Left": "左键",
    "Middle": "中键",
    "Right": "右键",
    "Double": "双击",
    "Wait": "等待",
    "wheel": "滚轮"
  },
  fr: {
    "Reaction Time Test": "Test de Réaction",
    "Click when the screen turns green.": "Cliquez quand l’écran devient vert.",
    "Start Test": "Commencer",
    "Wait for green...": "Attendez le vert...",
    "Do not click yet": "Ne cliquez pas encore",
    "Click now": "Cliquez maintenant",
    "Too Soon": "Trop tôt",
    "Retry Round": "Réessayer",
    "Next Round": "Manche suivante",
    "Your Reaction Time": "Votre temps de réaction",
    "Average": "Moyenne",
    "Best": "Meilleur",
    "Rounds": "Manches",
    "Range": "Écart",
    "Share Result": "Partager",
    "Try Again": "Réessayer",
    "CPS Test": "Test CPS",
    "Click as fast as you can for 5 seconds.": "Cliquez aussi vite que possible pendant 5 secondes.",
    "Start clicking": "Commencez à cliquer",
    "Reset": "Réinitialiser",
    "Your CPS Result": "Votre résultat CPS",
    "Typing Speed Test": "Test de Vitesse de Frappe",
    "Type the sample text exactly.": "Tapez exactement le texte exemple.",
    "Start typing here...": "Commencez à taper ici...",
    "Your Typing Speed": "Votre vitesse de frappe",
    "Speed": "Vitesse",
    "Accuracy": "Précision",
    "Time": "Temps",
    "Errors": "Erreurs",
    "Keyboard Test": "Test Clavier",
    "Press keys to test your keyboard.": "Appuyez sur les touches pour tester votre clavier.",
    "Last key": "Dernière touche",
    "Code": "Code",
    "Keys tested": "Touches testées",
    "None yet": "Aucune",
    "Waiting": "En attente",
    "Focus Test": "Activer le test",
    "Keyboard Polling Rate Test": "Test de Polling Rate Clavier",
    "Alternate two keys for 10 seconds.": "Alternez deux touches pendant 10 secondes.",
    "Open Keyboard Test": "Ouvrir le test clavier",
    "Testing Keyboard Hz": "Test des Hz clavier",
    "Press A and S alternately.": "Appuyez sur A et S en alternance.",
    "Current": "Actuel",
    "Time Left": "Temps restant",
    "Peak": "Pic",
    "Events": "Événements",
    "Min Interval": "Intervalle min.",
    "Waiting for key presses...": "En attente des touches...",
    "Stop Early": "Arrêter",
    "First key": "Première touche",
    "Your Keyboard Hz Result": "Votre résultat clavier Hz",
    "Average Hz": "Hz moyen",
    "Peak Hz": "Pic Hz",
    "Stability": "Stabilité",
    "Stable": "Stable",
    "Moderate": "Moyen",
    "Unstable": "Instable",
    "Jitter": "Jitter",
    "Max Interval": "Intervalle max.",
    "Ignored Holds": "Maintiens ignorés",
    "Mouse Test": "Test Souris",
    "Click, scroll, and move inside the test area.": "Cliquez, faites défiler et bougez dans la zone.",
    "Left": "Gauche",
    "Middle": "Milieu",
    "Right": "Droite",
    "Double": "Double",
    "Wait": "Attente"
  },
  vi: {
    "Reaction Time Test": "Test Phản Xạ",
    "Click when the screen turns green.": "Bấm khi màn hình chuyển xanh.",
    "Start Test": "Bắt đầu",
    "Wait for green...": "Chờ màu xanh...",
    "Do not click yet": "Chưa bấm",
    "Click now": "Bấm ngay",
    "Too Soon": "Quá sớm",
    "Retry Round": "Thử lại vòng này",
    "Next Round": "Vòng tiếp theo",
    "Your Reaction Time": "Thời gian phản xạ của bạn",
    "Average": "Trung bình",
    "Best": "Tốt nhất",
    "Rounds": "Vòng",
    "Range": "Khoảng",
    "Share Result": "Chia sẻ",
    "Try Again": "Thử lại",
    "CPS Test": "CPS Test",
    "Click as fast as you can for 5 seconds.": "Bấm nhanh nhất có thể trong 5 giây.",
    "Start clicking": "Bắt đầu bấm",
    "Reset": "Đặt lại",
    "Your CPS Result": "Kết quả CPS của bạn",
    "Typing Speed Test": "Test Tốc Độ Gõ",
    "Type the sample text exactly.": "Gõ chính xác đoạn mẫu.",
    "Start typing here...": "Bắt đầu gõ ở đây...",
    "Your Typing Speed": "Tốc độ gõ của bạn",
    "Speed": "Tốc độ",
    "Accuracy": "Chính xác",
    "Time": "Thời gian",
    "Errors": "Lỗi",
    "Keyboard Test": "Test Bàn Phím",
    "Press keys to test your keyboard.": "Nhấn phím để test bàn phím.",
    "Last key": "Phím cuối",
    "Code": "Mã",
    "Keys tested": "Phím đã test",
    "None yet": "Chưa có",
    "Waiting": "Đang chờ",
    "Focus Test": "Focus test",
    "Keyboard Polling Rate Test": "Test Polling Rate Bàn Phím",
    "Alternate two keys for 10 seconds.": "Bấm luân phiên hai phím trong 10 giây.",
    "Open Keyboard Test": "Mở test bàn phím",
    "Testing Keyboard Hz": "Đang test keyboard Hz",
    "Press A and S alternately.": "Bấm A và S luân phiên.",
    "Current": "Hiện tại",
    "Time Left": "Còn lại",
    "Peak": "Đỉnh",
    "Events": "Sự kiện",
    "Min Interval": "Khoảng min",
    "Waiting for key presses...": "Đang chờ phím...",
    "Stop Early": "Dừng sớm",
    "First key": "Phím đầu",
    "Your Keyboard Hz Result": "Kết quả keyboard Hz",
    "Average Hz": "Hz trung bình",
    "Peak Hz": "Hz đỉnh",
    "Stability": "Ổn định",
    "Stable": "Ổn định",
    "Moderate": "Trung bình",
    "Unstable": "Không ổn định",
    "Jitter": "Jitter",
    "Max Interval": "Khoảng max",
    "Ignored Holds": "Giữ phím bỏ qua",
    "Mouse Test": "Test Chuột",
    "Click, scroll, and move inside the test area.": "Bấm, cuộn và di chuyển trong vùng test.",
    "Left": "Trái",
    "Middle": "Giữa",
    "Right": "Phải",
    "Double": "Double",
    "Wait": "Chờ"
  }
};

function localizeDynamicDom() {
  const lang = currentPageLang();
  if (lang === "en") return;
  const map = dynamicTextTranslations[lang];
  if (!map || !document.body) return;
  document.querySelectorAll("textarea[placeholder]").forEach((input) => {
    const translated = map[input.getAttribute("placeholder")];
    if (translated) input.setAttribute("placeholder", translated);
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const value = node.nodeValue;
    const trimmed = value.trim();
    if (!trimmed || !map[trimmed]) return;
    node.nodeValue = value.replace(trimmed, map[trimmed]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  localizeDynamicDom();
  const observer = new MutationObserver(() => localizeDynamicDom());
  observer.observe(document.body, { childList: true, subtree: true });
});

function initSbtiQuiz() {
  const root = byId("sbti-quiz");
  if (!root) return;
  const isZh = root.dataset.lang === "zh";
  const docLang = document.documentElement.lang || "en";
  const isFr = docLang.startsWith("fr");
  const isVi = docLang.startsWith("vi");
  const questions = isZh ? zhSbtiQuestions : isFr ? frSbtiQuestions : isVi ? viSbtiQuestions : sbtiQuestions;
  let index = 0;
  let started = false;
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
        if (!started) {
          started = true;
          trackEvent("quiz_start", { quiz_name: "sbti", language: isZh ? "zh" : isFr ? "fr" : isVi ? "vi" : "en" });
        }
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
  trackEvent("quiz_complete", { quiz_name: "sbti", language: lang, result_type: type.code });
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
  const avatars = {
    "CTRL": ["#5b6cff", "#111827", "#ffc857", "visor"],
    "ATM-er": ["#29c184", "#1c7c54", "#f7d154", "cash"],
    "Dior-S": ["#111827", "#3c4454", "#e7d7ff", "shade"],
    "BOSS": ["#f2b84b", "#7a4f12", "#ffe08a", "crown"],
    "THAN-K": ["#7c8da6", "#3f4b5f", "#c8f7d4", "spark"],
    "OH-NO!": ["#7b6cff", "#34304f", "#ff8a80", "alert"],
    "GOGO": ["#ff7a59", "#8a3b28", "#ffd166", "bolt"],
    "SEXY": ["#ff4f8b", "#7d2445", "#ffe0ee", "star"],
    "LOVE-R": ["#ef476f", "#8c1f3f", "#ffd1dc", "heart"],
    "MUM": ["#2ec4b6", "#10645e", "#d5fff9", "leaf"],
    "FAKE": ["#18a058", "#174b35", "#d8fbe7", "mask"],
    "OJBK": ["#b993ff", "#4a347c", "#eee5ff", "shrug"],
    "MALO": ["#b9782f", "#59320f", "#ffe0ad", "banana"],
    "JOKE-R": ["#45c6ff", "#123c58", "#f8f7a1", "smile"],
    "WOC!": ["#ff5f57", "#7c1f1a", "#ffe1de", "bang"],
    "THIN-K": ["#6c63ff", "#252047", "#d8d5ff", "thought"],
    "SHIT": ["#8b6f47", "#4b3920", "#f3dfb6", "slash"],
    "ZZZZ": ["#88c76f", "#345b2b", "#e5ffd7", "sleep"],
    "POOR": ["#3aa66f", "#1d5439", "#c9f4d8", "patch"],
    "MONK": ["#d9913d", "#6f3b12", "#ffe5c7", "halo"],
    "IMSB": ["#9aa66e", "#46502c", "#edf2c6", "crack"],
    "SOLO": ["#374151", "#111827", "#d1d5db", "moon"],
    "FUCK": ["#80b84a", "#345c1e", "#e4ffd0", "spike"],
    "DEAD": ["#1f2937", "#05070b", "#d8dee9", "flat"],
    "IMFW": ["#6abf69", "#285328", "#ddf7d9", "bandage"],
    "HHHH": ["#ffb36b", "#86451f", "#ffe3bd", "laugh"],
    "DRUNK": ["#6366f1", "#262a72", "#e0e7ff", "bubble"]
  };
  const [primary, dark, light, prop] = avatars[type.code] || ["#6c63ff", "#24263a", "#ebe9ff", "spark"];
  const id = `avatar-${type.code.replace(/[^a-z0-9]/gi, "")}`;
  const skin = type.code.length % 2 === 0 ? "#f4bd92" : "#eaa97d";
  const hair = ["#1f2430", "#2f343d", "#4b3527", "#121621"][type.code.length % 4];
  const mood = ["JOKE-R", "HHHH"].includes(type.code) ? "happy" : ["OH-NO!", "IMSB", "FUCK", "WOC!"].includes(type.code) ? "tense" : ["ZZZZ", "DEAD"].includes(type.code) ? "flat" : "calm";
  const mouth = mood === "happy" ? "M53 82 Q64 92 75 82" : mood === "tense" ? "M54 87 Q64 80 74 87" : mood === "flat" ? "M55 84 H73" : "M54 84 Q64 88 74 84";
  const eyes = mood === "flat"
    ? '<path d="M50 72 H57 M71 72 H78" stroke="#1c2230" stroke-width="4" stroke-linecap="round"/>'
    : '<circle cx="53" cy="72" r="3.8" fill="#1c2230"/><circle cx="75" cy="72" r="3.8" fill="#1c2230"/>';
  const propSvg = {
    visor: '<rect x="45" y="65" width="38" height="13" rx="6" fill="#111827"/><path d="M48 71 H80" stroke="#6ee7ff" stroke-width="2" opacity=".9"/>',
    cash: '<rect x="20" y="102" width="24" height="15" rx="3" fill="#71d77d"/><text x="32" y="113" text-anchor="middle" font-size="10" font-weight="900" fill="#fff">$</text>',
    shade: '<path d="M43 67 H58 L56 78 H44 Z M70 67 H85 L82 78 H72 Z M58 71 H70" fill="#111827"/>',
    crown: '<path d="M46 45 L53 31 L64 45 L75 31 L82 45 Z" fill="#ffd166"/><circle cx="53" cy="33" r="3" fill="#fff3b0"/><circle cx="75" cy="33" r="3" fill="#fff3b0"/>',
    spark: '<path d="M88 54 L92 64 L102 68 L92 72 L88 82 L84 72 L74 68 L84 64 Z" fill="#fff176"/>',
    alert: '<path d="M90 46 L106 76 H74 Z" fill="#ff6b6b"/><text x="90" y="70" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">!</text>',
    bolt: '<path d="M90 45 L76 77 H90 L83 104 L107 64 H92 Z" fill="#ffd166"/>',
    star: '<path d="M93 47 L98 61 L113 61 L101 70 L106 84 L93 75 L80 84 L85 70 L73 61 L88 61 Z" fill="#fff0a8"/>',
    heart: '<path d="M92 82 C78 70 91 55 101 65 C111 55 124 70 110 82 L101 91 Z" fill="#ff7aa2"/>',
    leaf: '<path d="M91 66 C106 48 118 65 96 84 C91 77 89 71 91 66 Z" fill="#90f0c0"/><path d="M94 80 C100 72 106 66 114 61" stroke="#1f8a5b" stroke-width="3" fill="none"/>',
    mask: '<path d="M36 68 Q64 55 92 68 L86 86 Q64 76 42 86 Z" fill="#d9ffe6" opacity=".82"/><circle cx="53" cy="74" r="3" fill="#174b35"/><circle cx="75" cy="74" r="3" fill="#174b35"/>',
    shrug: '<path d="M29 105 Q40 94 50 109 M99 105 Q88 94 78 109" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none"/>',
    banana: '<path d="M88 84 C111 88 116 63 103 51 C107 69 100 81 88 84 Z" fill="#ffd166"/><path d="M103 51 L108 49" stroke="#5b3514" stroke-width="3" stroke-linecap="round"/>',
    smile: '<circle cx="91" cy="77" r="17" fill="#fff176"/><path d="M83 75 H88 M94 75 H99 M84 83 Q91 91 99 83" stroke="#123c58" stroke-width="3" fill="none" stroke-linecap="round"/>',
    bang: '<text x="94" y="78" text-anchor="middle" font-size="32" font-weight="950" fill="#fff">!</text>',
    thought: '<circle cx="93" cy="65" r="12" fill="#fff"/><circle cx="79" cy="83" r="5" fill="#fff"/><circle cx="71" cy="94" r="3" fill="#fff"/>',
    slash: '<path d="M27 42 L103 116" stroke="#fff" stroke-width="9" opacity=".75" stroke-linecap="round"/>',
    sleep: '<text x="91" y="64" text-anchor="middle" font-size="16" font-weight="900" fill="#fff">Z</text><text x="104" y="49" text-anchor="middle" font-size="12" font-weight="900" fill="#fff">Z</text>',
    patch: '<rect x="78" y="93" width="21" height="15" rx="3" fill="#f5d46b"/><path d="M82 96 L96 105 M96 96 L82 105" stroke="#8a6a1f" stroke-width="2"/>',
    halo: '<ellipse cx="64" cy="37" rx="25" ry="7" fill="none" stroke="#ffe08a" stroke-width="5"/>',
    crack: '<path d="M65 47 L58 63 L68 72 L61 92" stroke="#46502c" stroke-width="4" fill="none" stroke-linecap="round"/>',
    moon: '<path d="M94 54 C81 60 83 78 98 84 C78 89 66 66 82 51 C86 48 90 48 94 54 Z" fill="#e5e7eb"/>',
    spike: '<path d="M38 45 L45 25 L52 45 L61 24 L68 45 L77 27 L84 50 Z" fill="#5e8f30"/>',
    flat: '<rect x="24" y="103" width="80" height="19" rx="5" fill="#111827"/><path d="M36 103 L92 82" stroke="#e5e7eb" stroke-width="7" stroke-linecap="round"/>',
    bandage: '<rect x="49" y="61" width="31" height="12" rx="4" fill="#fff0ce" transform="rotate(-12 64 67)"/><path d="M58 65 L70 69 M68 63 L60 71" stroke="#c18b42" stroke-width="2"/>',
    laugh: '<path d="M43 83 Q64 102 85 83" stroke="#1c2230" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M45 68 Q51 63 57 68 M71 68 Q77 63 83 68" stroke="#1c2230" stroke-width="4" fill="none" stroke-linecap="round"/>',
    bubble: '<circle cx="93" cy="60" r="13" fill="#ffffff" opacity=".92"/><circle cx="108" cy="48" r="6" fill="#ffffff" opacity=".8"/>'
  }[prop] || "";

  return `
    <div class="type-avatar" aria-hidden="true">
      <svg class="avatar-card" viewBox="0 0 128 156" role="img">
        <defs>
          <linearGradient id="${id}" x1="18" y1="9" x2="110" y2="143" gradientUnits="userSpaceOnUse">
            <stop stop-color="${primary}"/>
            <stop offset="1" stop-color="${dark}"/>
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="120" height="148" rx="26" fill="#fff" stroke="#e4e7f0" stroke-width="2"/>
        <path d="M20 29 Q64 5 108 29 V111 Q92 140 64 144 Q36 140 20 111 Z" fill="url(#${id})"/>
        <circle cx="101" cy="29" r="13" fill="${light}" opacity=".55"/>
        <circle cx="24" cy="109" r="18" fill="#fff" opacity=".16"/>
        <text x="64" y="22" text-anchor="middle" class="avatar-kicker">VIRAL TEST LAB</text>
        <text x="64" y="39" text-anchor="middle" class="avatar-code" fill="${light}">${type.code}</text>
        <path d="M35 105 Q64 83 93 105 L105 135 H23 Z" fill="${dark}"/>
        <path d="M41 105 Q64 121 87 105 L96 135 H32 Z" fill="${primary}"/>
        <path d="M37 63 Q42 38 64 39 Q86 38 91 63 L85 86 Q64 105 43 86 Z" fill="${hair}"/>
        <path d="M40 66 Q64 46 88 66 L82 91 Q64 108 46 91 Z" fill="${skin}"/>
        <path d="M41 65 L57 49 L54 68 Z" fill="${hair}"/>
        <path d="M87 65 L71 49 L74 68 Z" fill="${hair}"/>
        ${eyes}
        <path d="${mouth}" fill="none" stroke="#8a5a45" stroke-width="4" stroke-linecap="round"/>
        <path d="M48 98 Q64 108 80 98" stroke="#fff" stroke-width="5" opacity=".48" fill="none"/>
        ${propSvg}
      </svg>
    </div>
  `;
}

function initSbtiTypes() {
  const root = byId("sbti-types-grid");
  if (!root) return;
  const noindexTypeCodes = new Set(["DEAD", "DRUNK", "FUCK", "POOR", "SEXY", "SHIT"]);
  const publicTypes = sbtiTypes.filter((type) => !noindexTypeCodes.has(type.code));
  const docLang = document.documentElement.lang || "en";
  const lang = root.dataset.lang || (docLang.startsWith("zh") ? "zh" : docLang.startsWith("fr") ? "fr" : docLang.startsWith("vi") ? "vi" : "en");
  const isZh = lang === "zh";
  const guideLink = (type) => {
    if (lang === "zh") return `<p><a href="/zh/sbti-types/${slugForType(type)}/">查看完整类型解释</a></p>`;
    if (lang === "en") return `<p><a href="/sbti-types/${slugForType(type)}/">Read the full type guide</a></p>`;
    return "";
  };
  root.innerHTML = publicTypes.map((type, index) => `
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
        ${guideLink(type)}
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

function slugForType(type) {
  return type.code.toLowerCase().replace(/!/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
      trackEvent("quiz_start", { quiz_name: "rice_purity", language: lang });
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
  trackEvent("quiz_complete", { quiz_name: "rice_purity", language: lang, score });
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

function attachShare(button, text, params = {}) {
  if (!button) return;
  button.addEventListener("click", async () => {
    trackEvent("result_share", params);
    const shareData = { title: "Quick Test Hub", text, url: window.location.href };
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      button.textContent = "Copied";
      setTimeout(() => (button.textContent = "Share Result"), 1300);
    }
  });
}

function initReactionTimeTest() {
  const root = byId("reaction-test");
  if (!root) return;

  const state = {
    phase: "idle",
    timeoutId: null,
    readyAt: 0,
    rounds: [],
    round: 0
  };
  const totalRounds = 5;

  function average(values) {
    return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  }

  function bestLabel(ms) {
    if (ms <= 190) return "Elite reflex range";
    if (ms <= 240) return "Fast reaction range";
    if (ms <= 310) return "Typical reaction range";
    return "Steady but improvable";
  }

  function renderStart() {
    state.phase = "idle";
    root.innerHTML = `
      <div class="tool-card reaction-idle" data-reaction-pad>
        <p class="eyebrow">Reaction Time Test</p>
        <h2>Click when the screen turns green.</h2>
        <p>Run five rounds to measure your average visual reaction time. Wait for the green signal, then click or tap as quickly as you can.</p>
        <div class="tool-stats">
          <span><strong>5</strong> rounds</span>
          <span><strong>ms</strong> result</span>
          <span><strong>Tap</strong> friendly</span>
        </div>
        <button class="button primary" data-reaction-start>Start Test</button>
      </div>
    `;
    root.querySelector("[data-reaction-start]").addEventListener("click", startRound);
  }

  function startRound() {
    if (state.round === 0 && state.rounds.length === 0) {
      trackEvent("tool_start", { tool_name: "reaction_time" });
    }
    window.clearTimeout(state.timeoutId);
    state.phase = "waiting";
    state.round += 1;
    const delay = 1400 + Math.random() * 3200;
    root.innerHTML = `
      <button class="tool-card reaction-pad reaction-waiting" data-reaction-pad>
        <span>Round ${state.round} / ${totalRounds}</span>
        <strong>Wait for green...</strong>
        <em>Do not click yet</em>
      </button>
    `;
    root.querySelector("[data-reaction-pad]").addEventListener("click", tooSoon);
    state.timeoutId = window.setTimeout(() => {
      state.phase = "ready";
      state.readyAt = performance.now();
      root.innerHTML = `
        <button class="tool-card reaction-pad reaction-ready" data-reaction-pad>
          <span>Round ${state.round} / ${totalRounds}</span>
          <strong>Click now</strong>
          <em>Fast and clean</em>
        </button>
      `;
      root.querySelector("[data-reaction-pad]").addEventListener("click", captureReaction);
    }, delay);
  }

  function tooSoon() {
    if (state.phase !== "waiting") return;
    window.clearTimeout(state.timeoutId);
    state.phase = "early";
    root.innerHTML = `
      <div class="tool-card reaction-early">
        <p class="eyebrow">Too Soon</p>
        <h2>Wait for the green signal.</h2>
        <p>This round does not count. Try again and keep your cursor or finger relaxed until the color changes.</p>
        <button class="button primary" data-retry-round>Retry Round</button>
      </div>
    `;
    state.round -= 1;
    root.querySelector("[data-retry-round]").addEventListener("click", startRound);
  }

  function captureReaction() {
    if (state.phase !== "ready") return;
    const ms = Math.round(performance.now() - state.readyAt);
    state.rounds.push(ms);
    if (state.rounds.length >= totalRounds) {
      renderResult();
      return;
    }
    root.innerHTML = `
      <div class="tool-card">
        <p class="eyebrow">Round ${state.round} Result</p>
        <div class="tool-number">${ms}<small>ms</small></div>
        <p>${totalRounds - state.rounds.length} rounds left. Keep the same hand position for a fair average.</p>
        <button class="button primary" data-next-round>Next Round</button>
      </div>
    `;
    root.querySelector("[data-next-round]").addEventListener("click", startRound);
  }

  function renderResult() {
    const avg = average(state.rounds);
    const best = Math.min(...state.rounds);
    const worst = Math.max(...state.rounds);
    trackEvent("tool_complete", { tool_name: "reaction_time", value: avg, unit: "ms" });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your Reaction Time</p>
        <div class="tool-number">${avg}<small>ms</small></div>
        <h2>${bestLabel(avg)}</h2>
        <p>Your best round was ${best}ms and your slowest round was ${worst}ms. For a cleaner comparison, retake the test on the same device and avoid background distractions.</p>
        <div class="result-metrics">
          <div><span>Average</span><strong>${avg}ms</strong></div>
          <div><span>Best</span><strong>${best}ms</strong></div>
          <div><span>Rounds</span><strong>${totalRounds}</strong></div>
          <div><span>Range</span><strong>${worst - best}ms</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-share-reaction>Share Result</button>
          <button class="button ghost" data-restart-reaction>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-reaction]"), `My reaction time average is ${avg}ms`);
    root.querySelector("[data-restart-reaction]").addEventListener("click", () => {
      state.rounds = [];
      state.round = 0;
      renderStart();
    });
  }

  renderStart();
}

function initCpsTest() {
  const root = byId("cps-test");
  if (!root) return;

  const durations = [5, 10, 30];
  let duration = 5;
  let clicks = 0;
  let seconds = duration;
  let timerId = null;
  let running = false;

  function render() {
    root.innerHTML = `
      <div class="tool-card cps-card">
        <p class="eyebrow">CPS Test</p>
        <h2>Click as fast as you can for ${duration} seconds.</h2>
        <div class="duration-options" aria-label="Choose click test duration">
          ${durations.map((item) => `<button class="duration-option${item === duration ? " selected" : ""}" type="button" data-cps-duration="${item}"${running ? " disabled" : ""}>${item}s</button>`).join("")}
        </div>
        <button class="click-zone" data-click-zone>
          <strong>${clicks}</strong>
          <span>${running ? `${seconds.toFixed(1)}s left` : "Start clicking"}</span>
        </button>
        <div class="tool-stats">
          <span><strong data-cps-score>${(clicks / duration).toFixed(1)}</strong> CPS</span>
          <span><strong data-cps-clicks>${clicks}</strong> clicks</span>
          <span><strong>${duration}s</strong> test</span>
        </div>
        <div class="actions">
          <button class="button ghost" data-reset-cps>Reset</button>
        </div>
      </div>
    `;
    root.querySelector("[data-click-zone]").addEventListener("click", click);
    root.querySelector("[data-reset-cps]").addEventListener("click", reset);
    root.querySelectorAll("[data-cps-duration]").forEach((button) => {
      button.addEventListener("click", () => setDuration(Number(button.dataset.cpsDuration)));
    });
  }

  function click() {
    if (!running && seconds > 0) start();
    if (!running) return;
    clicks += 1;
    const number = root.querySelector(".click-zone strong");
    const cps = root.querySelector("[data-cps-score]");
    const total = root.querySelector("[data-cps-clicks]");
    if (number) number.textContent = clicks;
    if (cps) cps.textContent = (clicks / duration).toFixed(1);
    if (total) total.textContent = clicks;
  }

  function start() {
    trackEvent("tool_start", { tool_name: "cps_test" });
    running = true;
    const startedAt = performance.now();
    root.querySelectorAll("[data-cps-duration]").forEach((button) => {
      button.disabled = true;
    });
    timerId = window.setInterval(() => {
      seconds = Math.max(0, duration - (performance.now() - startedAt) / 1000);
      const label = root.querySelector(".click-zone span");
      if (label) label.textContent = `${seconds.toFixed(1)}s left`;
      if (seconds <= 0) finish();
    }, 80);
  }

  function finish() {
    window.clearInterval(timerId);
    running = false;
    const cps = (clicks / duration).toFixed(1);
    trackEvent("tool_complete", { tool_name: "cps_test", value: Number(cps), unit: "cps" });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your CPS Result</p>
        <div class="tool-number">${cps}<small>CPS</small></div>
        <h2>${Number(cps) >= 9 ? "Very fast clicking" : Number(cps) >= 6 ? "Solid clicking speed" : "Casual clicking speed"}</h2>
        <p>You made ${clicks} clicks in ${duration} seconds. Use the same mouse or touch device when comparing attempts.</p>
        <div class="actions">
          <button class="button primary" data-share-cps>Share Result</button>
          <button class="button ghost" data-reset-cps>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-cps]"), `My ${duration}s CPS test result is ${cps} clicks per second`);
    root.querySelector("[data-reset-cps]").addEventListener("click", reset);
  }

  function setDuration(nextDuration) {
    if (running || !durations.includes(nextDuration)) return;
    duration = nextDuration;
    clicks = 0;
    seconds = duration;
    render();
  }

  function reset() {
    window.clearInterval(timerId);
    clicks = 0;
    seconds = duration;
    running = false;
    render();
  }

  render();
}

function initSpacebarClicker() {
  const root = byId("spacebar-clicker");
  if (!root) return;

  let presses = 0;
  let seconds = 10;
  let timerId = null;
  let running = false;
  let startedAt = 0;

  function render() {
    root.innerHTML = `
      <div class="tool-card cps-card">
        <p class="eyebrow">Spacebar Clicker</p>
        <h2>Press the spacebar as fast as you can for 10 seconds.</h2>
        <button class="click-zone keyboard-zone" data-spacebar-zone>
          <strong>${presses}</strong>
          <span>${running ? `${seconds.toFixed(1)}s left` : "Press Space to start"}</span>
        </button>
        <div class="tool-stats">
          <span><strong>${(presses / 10).toFixed(1)}</strong> SPS</span>
          <span><strong>${presses}</strong> presses</span>
          <span><strong>10s</strong> test</span>
        </div>
        <div class="actions">
          <button class="button primary" data-start-spacebar>Start Test</button>
          <button class="button ghost" data-reset-spacebar>Reset</button>
        </div>
        <div class="notice"><p>Focus the test area, then press Space. Holding the key down does not count repeated browser key events.</p></div>
      </div>
    `;
    const zone = root.querySelector("[data-spacebar-zone]");
    zone.addEventListener("click", () => zone.focus());
    zone.addEventListener("keydown", handleKeydown);
    root.querySelector("[data-start-spacebar]").addEventListener("click", () => {
      zone.focus();
      if (!running) start();
    });
    root.querySelector("[data-reset-spacebar]").addEventListener("click", reset);
  }

  function handleKeydown(event) {
    if (event.code !== "Space") return;
    event.preventDefault();
    if (event.repeat) return;
    if (!running && seconds > 0) start();
    if (!running) return;
    presses += 1;
    const number = root.querySelector(".click-zone strong");
    const sps = root.querySelector(".tool-stats span strong");
    if (number) number.textContent = presses;
    if (sps) sps.textContent = (presses / 10).toFixed(1);
  }

  function start() {
    if (running) return;
    trackEvent("tool_start", { tool_name: "spacebar_clicker" });
    running = true;
    startedAt = performance.now();
    const label = root.querySelector(".click-zone span");
    if (label) label.textContent = `${seconds.toFixed(1)}s left`;
    timerId = window.setInterval(() => {
      seconds = Math.max(0, 10 - (performance.now() - startedAt) / 1000);
      const currentLabel = root.querySelector(".click-zone span");
      if (currentLabel) currentLabel.textContent = `${seconds.toFixed(1)}s left`;
      if (seconds <= 0) finish();
    }, 80);
  }

  function finish() {
    window.clearInterval(timerId);
    running = false;
    const sps = (presses / 10).toFixed(1);
    trackEvent("tool_complete", { tool_name: "spacebar_clicker", value: Number(sps), unit: "sps" });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your Spacebar Result</p>
        <div class="tool-number">${sps}<small>SPS</small></div>
        <h2>${Number(sps) >= 8 ? "Very fast spacebar speed" : Number(sps) >= 5 ? "Solid spacebar speed" : "Casual spacebar speed"}</h2>
        <p>You pressed Space ${presses} times in 10 seconds. Retake the test on the same keyboard when comparing attempts.</p>
        <div class="result-metrics">
          <div><span>Speed</span><strong>${sps} SPS</strong></div>
          <div><span>Presses</span><strong>${presses}</strong></div>
          <div><span>Time</span><strong>10s</strong></div>
          <div><span>Input</span><strong>Space</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-share-spacebar>Share Result</button>
          <button class="button ghost" data-reset-spacebar>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-spacebar]"), `My spacebar clicker result is ${sps} presses per second`);
    root.querySelector("[data-reset-spacebar]").addEventListener("click", reset);
  }

  function reset() {
    window.clearInterval(timerId);
    presses = 0;
    seconds = 10;
    running = false;
    startedAt = 0;
    render();
  }

  render();
}

function initDoubleClickTest() {
  const root = byId("double-click-test");
  if (!root) return;

  let clicks = 0;
  let doubleClicks = 0;
  let fastestDouble = 0;
  let lastClickAt = 0;
  let seconds = 10;
  let timerId = null;
  let running = false;
  let startedAt = 0;

  function render() {
    root.innerHTML = `
      <div class="tool-card mouse-card">
        <p class="eyebrow">Double Click Test</p>
        <h2>Click the test area for 10 seconds.</h2>
        <button class="click-zone double-click-zone" data-double-click-zone>
          <strong>${doubleClicks}</strong>
          <span>${running ? `${seconds.toFixed(1)}s left` : "Start clicking"}</span>
        </button>
        <div class="result-metrics">
          <div><span>Clicks</span><strong data-clicks>${clicks}</strong></div>
          <div><span>Double Clicks</span><strong data-double-clicks>${doubleClicks}</strong></div>
          <div><span>Fastest Pair</span><strong data-fastest-double>${fastestDouble ? `${fastestDouble}ms` : "--"}</strong></div>
          <div><span>Timer</span><strong data-double-time>${seconds.toFixed(1)}s</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-start-double-click>Start Test</button>
          <button class="button ghost" data-reset-double-click>Reset</button>
        </div>
        <div class="notice"><p>Use normal single clicks if you are checking for unwanted double-click behavior. Intentional rapid double-clicks will also be counted.</p></div>
      </div>
    `;
    const zone = root.querySelector("[data-double-click-zone]");
    zone.addEventListener("click", handleClick);
    zone.addEventListener("dblclick", handleDoubleClick);
    root.querySelector("[data-start-double-click]").addEventListener("click", () => {
      zone.focus();
      if (!running) start();
    });
    root.querySelector("[data-reset-double-click]").addEventListener("click", reset);
  }

  function handleClick() {
    if (!running && seconds > 0) start();
    if (!running) return;
    const now = performance.now();
    clicks += 1;
    if (lastClickAt) {
      const gap = Math.round(now - lastClickAt);
      if (gap <= 300) fastestDouble = fastestDouble ? Math.min(fastestDouble, gap) : gap;
    }
    lastClickAt = now;
    updateLive();
  }

  function handleDoubleClick(event) {
    event.preventDefault();
    if (!running) return;
    doubleClicks += 1;
    updateLive();
  }

  function start() {
    if (running) return;
    trackEvent("tool_start", { tool_name: "double_click_test" });
    running = true;
    startedAt = performance.now();
    timerId = window.setInterval(() => {
      seconds = Math.max(0, 10 - (performance.now() - startedAt) / 1000);
      updateLive();
      if (seconds <= 0) finish();
    }, 80);
  }

  function updateLive() {
    const clickItem = root.querySelector("[data-clicks]");
    const doubleItem = root.querySelector("[data-double-clicks]");
    const fastestItem = root.querySelector("[data-fastest-double]");
    const timeItem = root.querySelector("[data-double-time]");
    const zoneNumber = root.querySelector(".click-zone strong");
    const zoneLabel = root.querySelector(".click-zone span");
    if (clickItem) clickItem.textContent = clicks;
    if (doubleItem) doubleItem.textContent = doubleClicks;
    if (fastestItem) fastestItem.textContent = fastestDouble ? `${fastestDouble}ms` : "--";
    if (timeItem) timeItem.textContent = `${seconds.toFixed(1)}s`;
    if (zoneNumber) zoneNumber.textContent = doubleClicks;
    if (zoneLabel) zoneLabel.textContent = `${seconds.toFixed(1)}s left`;
  }

  function finish() {
    window.clearInterval(timerId);
    running = false;
    const ratio = clicks ? ((doubleClicks / clicks) * 100).toFixed(1) : "0.0";
    const label = doubleClicks === 0 ? "No browser double-clicks detected" : doubleClicks <= 2 ? "A few double-click events detected" : "Frequent double-click events detected";
    trackEvent("tool_complete", { tool_name: "double_click_test", value: doubleClicks, unit: "events" });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your Double Click Test Result</p>
        <div class="tool-number">${doubleClicks}<small>events</small></div>
        <h2>${label}</h2>
        <p>The browser recorded ${clicks} clicks and ${doubleClicks} double-click events in 10 seconds. If you were only using slow single clicks, repeated double-click events can point to a mouse switch issue.</p>
        <div class="result-metrics">
          <div><span>Clicks</span><strong>${clicks}</strong></div>
          <div><span>Double Clicks</span><strong>${doubleClicks}</strong></div>
          <div><span>Ratio</span><strong>${ratio}%</strong></div>
          <div><span>Fastest Pair</span><strong>${fastestDouble ? `${fastestDouble}ms` : "--"}</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-share-double-click>Share Result</button>
          <button class="button ghost" data-reset-double-click>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-double-click]"), `My double click test recorded ${doubleClicks} double-click events in 10 seconds`);
    root.querySelector("[data-reset-double-click]").addEventListener("click", reset);
  }

  function reset() {
    window.clearInterval(timerId);
    clicks = 0;
    doubleClicks = 0;
    fastestDouble = 0;
    lastClickAt = 0;
    seconds = 10;
    running = false;
    startedAt = 0;
    render();
  }

  render();
}

function initTypingSpeedTest() {
  const root = byId("typing-test");
  if (!root) return;

  const samples = [
    "Quick tests work best when the task is simple, the result is instant, and the page explains what the score means.",
    "A steady typing rhythm usually beats a rushed start, especially when accuracy matters as much as raw speed.",
    "Online tools can be useful when they give people a clear answer without asking for personal information."
  ];
  const text = samples[Math.floor(Math.random() * samples.length)];
  let startedAt = 0;
  let done = false;
  let lastValue = "";

  function render() {
    root.innerHTML = `
      <div class="tool-card typing-card">
        <p class="eyebrow">Typing Speed Test</p>
        <h2>Type the sample text exactly.</h2>
        <div class="typing-sample" data-typing-sample>${text}</div>
        <textarea class="typing-input" data-typing-input rows="5" placeholder="Start typing here..."></textarea>
        <div class="tool-stats">
          <span><strong data-wpm>0</strong> WPM</span>
          <span><strong data-accuracy>100%</strong> accuracy</span>
          <span><strong data-errors>0</strong> errors</span>
        </div>
        <div class="actions">
          <button class="button ghost" data-reset-typing>Reset</button>
        </div>
      </div>
    `;
    root.querySelector("[data-typing-input]").addEventListener("input", update);
    root.querySelector("[data-reset-typing]").addEventListener("click", () => window.location.reload());
  }

  function update(event) {
    if (done) return;
    const value = event.target.value;
    if (value.length - lastValue.length > 8) {
      event.target.value = lastValue;
      const sample = root.querySelector("[data-typing-sample]");
      if (sample) sample.dataset.warning = "Type the passage manually instead of pasting it.";
      return;
    }
    if (!startedAt && value.length) startedAt = performance.now();
    if (startedAt && value.length === 1) {
      trackEvent("tool_start", { tool_name: "typing_speed" });
    }
    let errors = 0;
    for (let index = 0; index < value.length; index += 1) {
      if (value[index] !== text[index]) errors += 1;
    }
    const minutes = Math.max((performance.now() - startedAt) / 60000, 1 / 60000);
    const correctChars = Math.max(0, value.length - errors);
    const wpm = Math.round((correctChars / 5) / minutes);
    const accuracy = value.length ? Math.max(0, Math.round((correctChars / value.length) * 100)) : 100;
    root.querySelector("[data-wpm]").textContent = wpm;
    root.querySelector("[data-accuracy]").textContent = `${accuracy}%`;
    root.querySelector("[data-errors]").textContent = errors;
    paintSample(value);
    lastValue = value;
    if (value === text) finish(wpm, accuracy, errors);
  }

  function paintSample(value) {
    const html = text.split("").map((char, index) => {
      const typed = value[index];
      const className = typed == null ? "" : typed === char ? "ok" : "bad";
      return `<span class="${className}">${char === " " ? "&nbsp;" : char}</span>`;
    }).join("");
    root.querySelector("[data-typing-sample]").innerHTML = html;
  }

  function finish(wpm, accuracy, errors) {
    done = true;
    const seconds = Math.round((performance.now() - startedAt) / 1000);
    trackEvent("tool_complete", { tool_name: "typing_speed", value: wpm, unit: "wpm", accuracy });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your Typing Speed</p>
        <div class="tool-number">${wpm}<small>WPM</small></div>
        <h2>${wpm >= 70 ? "Fast typing speed" : wpm >= 40 ? "Comfortable typing speed" : "Practice typing speed"}</h2>
        <p>You finished in ${seconds} seconds with ${accuracy}% accuracy and ${errors} errors.</p>
        <div class="result-metrics">
          <div><span>Speed</span><strong>${wpm} WPM</strong></div>
          <div><span>Accuracy</span><strong>${accuracy}%</strong></div>
          <div><span>Time</span><strong>${seconds}s</strong></div>
          <div><span>Errors</span><strong>${errors}</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-share-typing>Share Result</button>
          <button class="button ghost" data-reset-typing>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-typing]"), `My typing speed is ${wpm} WPM with ${accuracy}% accuracy`);
    root.querySelector("[data-reset-typing]").addEventListener("click", () => window.location.reload());
  }

  render();
}

function initKeyboardTest() {
  const root = byId("keyboard-test");
  if (!root) return;

  const tested = new Map();
  const keys = [
    ["Escape", "Esc"], ["Digit1", "1"], ["Digit2", "2"], ["Digit3", "3"], ["Digit4", "4"], ["Digit5", "5"], ["Digit6", "6"], ["Digit7", "7"], ["Digit8", "8"], ["Digit9", "9"], ["Digit0", "0"], ["Backspace", "Back"],
    ["Tab", "Tab"], ["KeyQ", "Q"], ["KeyW", "W"], ["KeyE", "E"], ["KeyR", "R"], ["KeyT", "T"], ["KeyY", "Y"], ["KeyU", "U"], ["KeyI", "I"], ["KeyO", "O"], ["KeyP", "P"], ["Enter", "Enter"],
    ["CapsLock", "Caps"], ["KeyA", "A"], ["KeyS", "S"], ["KeyD", "D"], ["KeyF", "F"], ["KeyG", "G"], ["KeyH", "H"], ["KeyJ", "J"], ["KeyK", "K"], ["KeyL", "L"],
    ["ShiftLeft", "Shift"], ["KeyZ", "Z"], ["KeyX", "X"], ["KeyC", "C"], ["KeyV", "V"], ["KeyB", "B"], ["KeyN", "N"], ["KeyM", "M"], ["ShiftRight", "Shift"],
    ["ControlLeft", "Ctrl"], ["AltLeft", "Alt"], ["Space", "Space"], ["AltRight", "Alt"], ["ControlRight", "Ctrl"]
  ];

  function render(last = null) {
    const testedCount = tested.size;
    root.innerHTML = `
      <div class="tool-card keyboard-card" tabindex="0" data-keyboard-area>
        <p class="eyebrow">Keyboard Test</p>
        <h2>Press keys to test your keyboard.</h2>
        <p>Click inside this panel, then press keys. Working keys light up and the latest key appears below.</p>
        <div class="keyboard-status">
          <div><span>Last key</span><strong>${last?.key || "None yet"}</strong></div>
          <div><span>Code</span><strong>${last?.code || "Waiting"}</strong></div>
          <div><span>Keys tested</span><strong>${testedCount}</strong></div>
        </div>
        <div class="keyboard-grid">
          ${keys.map(([code, label]) => `<span class="${tested.has(code) ? "tested" : ""}" data-key-code="${code}">${label}</span>`).join("")}
        </div>
        <div class="actions">
          <button class="button primary" data-focus-keyboard>Focus Test</button>
          <button class="button ghost" data-reset-keyboard>Reset</button>
        </div>
      </div>
    `;
    const area = root.querySelector("[data-keyboard-area]");
    area.addEventListener("keydown", keydown);
    root.querySelector("[data-focus-keyboard]").addEventListener("click", () => area.focus());
    root.querySelector("[data-reset-keyboard]").addEventListener("click", () => {
      tested.clear();
      render();
    });
    if (last) area.focus();
  }

  function keydown(event) {
    event.preventDefault();
    tested.set(event.code, event.key);
    render({ key: event.key === " " ? "Space" : event.key, code: event.code });
  }

  render();
}

function initKeyboardPollingRateTest() {
  const root = byId("keyboard-polling-test");
  if (!root) return;

  const durationMs = 10000;
  const state = {
    running: false,
    startedAt: 0,
    timerId: null,
    events: [],
    lastTime: 0,
    lastCode: "",
    ignoredRepeats: 0
  };

  function formatMs(value) {
    return Number.isFinite(value) ? `${value.toFixed(2)}ms` : "--";
  }

  function hzFromInterval(interval) {
    return interval > 0 ? 1000 / interval : 0;
  }

  function stats() {
    const intervals = state.events.slice(1).map((event, index) => event.time - state.events[index].time).filter((value) => value > 0);
    const rates = intervals.map(hzFromInterval).filter((value) => Number.isFinite(value) && value > 0);
    const avgHz = rates.length ? Math.round(rates.reduce((sum, value) => sum + value, 0) / rates.length) : 0;
    const peakHz = rates.length ? Math.round(Math.max(...rates)) : 0;
    const minInterval = intervals.length ? Math.min(...intervals) : 0;
    const maxInterval = intervals.length ? Math.max(...intervals) : 0;
    const meanInterval = intervals.length ? intervals.reduce((sum, value) => sum + value, 0) / intervals.length : 0;
    const variance = intervals.length ? intervals.reduce((sum, value) => sum + Math.pow(value - meanInterval, 2), 0) / intervals.length : 0;
    const jitter = Math.sqrt(variance);
    const stability = jitter <= 8 && intervals.length >= 12 ? "Stable" : jitter <= 18 && intervals.length >= 8 ? "Moderate" : "Unstable";
    const label = avgHz >= 900 ? "Gaming keyboard range" : avgHz >= 500 ? "Very good input rate" : avgHz >= 250 ? "Good input rate" : avgHz >= 120 ? "Standard input rate" : "Keep testing";

    return { intervals, rates, avgHz, peakHz, minInterval, maxInterval, jitter, stability, label };
  }

  function renderStart() {
    window.clearInterval(state.timerId);
    state.running = false;
    root.innerHTML = `
      <div class="tool-card polling-card" tabindex="0" data-polling-area>
        <p class="eyebrow">Keyboard Polling Rate Test</p>
        <h2>Alternate two keys for 10 seconds.</h2>
        <p>Click Start Test, then quickly press A and S back and forth. The tool ignores held-key repeats and estimates keyboard Hz from real keydown intervals.</p>
        <div class="polling-keys" aria-label="Suggested keys">
          <span>A</span>
          <span>S</span>
        </div>
        <div class="tool-stats">
          <span><strong>10s</strong> test</span>
          <span><strong>Hz</strong> result</span>
          <span><strong>ms</strong> interval</span>
        </div>
        <div class="notice"><p>For a cleaner result, alternate two keys instead of holding one key. Holding a key often measures OS repeat behavior.</p></div>
        <div class="actions">
          <button class="button primary" data-start-polling>Start Test</button>
          <a class="button secondary" href="/keyboard-test/">Open Keyboard Test</a>
        </div>
      </div>
    `;
    const area = root.querySelector("[data-polling-area]");
    root.querySelector("[data-start-polling]").addEventListener("click", () => start(area));
  }

  function start(area) {
    trackEvent("tool_start", { tool_name: "keyboard_polling_rate" });
    Object.assign(state, {
      running: true,
      startedAt: performance.now(),
      events: [],
      lastTime: 0,
      lastCode: "",
      ignoredRepeats: 0
    });
    renderRunning();
    root.querySelector("[data-polling-area]").focus();
    state.timerId = window.setInterval(updateRunning, 80);
  }

  function renderRunning() {
    root.innerHTML = `
      <div class="tool-card polling-card polling-active" tabindex="0" data-polling-area>
        <p class="eyebrow">Testing Keyboard Hz</p>
        <h2>Press A and S alternately.</h2>
        <div class="polling-meter">
          <div>
            <span>Current</span>
            <strong data-current-hz>0 Hz</strong>
          </div>
          <div>
            <span>Time Left</span>
            <strong data-time-left>10.0s</strong>
          </div>
        </div>
        <div class="result-metrics">
          <div><span>Average</span><strong data-avg-hz>0 Hz</strong></div>
          <div><span>Peak</span><strong data-peak-hz>0 Hz</strong></div>
          <div><span>Events</span><strong data-events>0</strong></div>
          <div><span>Min Interval</span><strong data-min-interval>--</strong></div>
        </div>
        <p class="polling-live" data-live-message>Waiting for key presses...</p>
        <div class="actions">
          <button class="button ghost" data-stop-polling>Stop Early</button>
        </div>
      </div>
    `;
    const area = root.querySelector("[data-polling-area]");
    area.addEventListener("keydown", handleKeydown);
    root.querySelector("[data-stop-polling]").addEventListener("click", finish);
  }

  function handleKeydown(event) {
    if (!state.running) return;
    event.preventDefault();
    if (event.repeat) {
      state.ignoredRepeats += 1;
      return;
    }
    const now = performance.now();
    const interval = state.lastTime ? now - state.lastTime : 0;
    state.events.push({ time: now, code: event.code, key: event.key });
    state.lastTime = now;
    state.lastCode = event.code;

    const currentHz = interval ? Math.round(hzFromInterval(interval)) : 0;
    const current = root.querySelector("[data-current-hz]");
    const live = root.querySelector("[data-live-message]");
    if (current) current.textContent = currentHz ? `${currentHz} Hz` : "First key";
    if (live) live.textContent = `Last key: ${event.key === " " ? "Space" : event.key} (${event.code})`;
    updateNumbers();
  }

  function updateNumbers() {
    const result = stats();
    const avg = root.querySelector("[data-avg-hz]");
    const peak = root.querySelector("[data-peak-hz]");
    const events = root.querySelector("[data-events]");
    const minInterval = root.querySelector("[data-min-interval]");
    if (avg) avg.textContent = `${result.avgHz} Hz`;
    if (peak) peak.textContent = `${result.peakHz} Hz`;
    if (events) events.textContent = state.events.length;
    if (minInterval) minInterval.textContent = formatMs(result.minInterval || NaN);
  }

  function updateRunning() {
    if (!state.running) return;
    const elapsed = performance.now() - state.startedAt;
    const remaining = Math.max(0, durationMs - elapsed);
    const timeLeft = root.querySelector("[data-time-left]");
    if (timeLeft) timeLeft.textContent = `${(remaining / 1000).toFixed(1)}s`;
    if (remaining <= 0) finish();
  }

  function finish() {
    if (!state.running && state.events.length === 0) {
      renderStart();
      return;
    }
    window.clearInterval(state.timerId);
    state.running = false;
    const result = stats();
    const responseMs = result.avgHz ? 1000 / result.avgHz : 0;
    const enoughData = state.events.length >= 8;
    trackEvent("tool_complete", { tool_name: "keyboard_polling_rate", value: result.avgHz || 0, unit: "hz", event_count: state.events.length });
    root.innerHTML = `
      <div class="result-card tool-result polling-result">
        <p class="eyebrow">Your Keyboard Hz Result</p>
        <div class="tool-number">${result.avgHz || "--"}<small>Hz</small></div>
        <h2>${enoughData ? result.label : "Run a longer test"}</h2>
        <p>${enoughData ? `Your average was ${result.avgHz}Hz with a peak of ${result.peakHz}Hz. The estimated average input interval is ${formatMs(responseMs)}.` : "There were not enough key presses for a reliable estimate. Try again and alternate A and S for the full 10 seconds."}</p>
        <div class="result-metrics">
          <div><span>Average Hz</span><strong>${result.avgHz || "--"}</strong></div>
          <div><span>Peak Hz</span><strong>${result.peakHz || "--"}</strong></div>
          <div><span>Min Interval</span><strong>${formatMs(result.minInterval || NaN)}</strong></div>
          <div><span>Stability</span><strong>${enoughData ? result.stability : "--"}</strong></div>
        </div>
        <div class="result-metrics">
          <div><span>Events</span><strong>${state.events.length}</strong></div>
          <div><span>Jitter</span><strong>${formatMs(result.jitter || NaN)}</strong></div>
          <div><span>Max Interval</span><strong>${formatMs(result.maxInterval || NaN)}</strong></div>
          <div><span>Ignored Holds</span><strong>${state.ignoredRepeats}</strong></div>
        </div>
        <div class="notice"><p>Browser tests estimate event timing. Results can vary with browser, OS settings, CPU load, wireless connection, and pressing rhythm.</p></div>
        <div class="actions">
          <button class="button primary" data-share-polling>Share Result</button>
          <button class="button ghost" data-restart-polling>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-polling]"), `My keyboard polling rate test result is ${result.avgHz || 0}Hz`);
    root.querySelector("[data-restart-polling]").addEventListener("click", renderStart);
  }

  renderStart();
}

function initMouseTest() {
  const root = byId("mouse-test");
  if (!root) return;

  const state = {
    left: false,
    middle: false,
    right: false,
    double: false,
    wheel: 0,
    x: 0,
    y: 0
  };

  function render() {
    root.innerHTML = `
      <div class="tool-card mouse-card">
        <p class="eyebrow">Mouse Test</p>
        <h2>Click, scroll, and move inside the test area.</h2>
        <div class="mouse-zone" data-mouse-zone>
          <div class="mouse-shape">
            <span class="${state.left ? "active" : ""}">Left</span>
            <span class="${state.middle ? "active" : ""}">Wheel</span>
            <span class="${state.right ? "active" : ""}">Right</span>
          </div>
          <p>Move pointer here, click each button, double-click, and scroll.</p>
        </div>
        <div class="result-metrics">
          <div><span>Left</span><strong>${state.left ? "OK" : "Wait"}</strong></div>
          <div><span>Middle</span><strong>${state.middle ? "OK" : "Wait"}</strong></div>
          <div><span>Right</span><strong>${state.right ? "OK" : "Wait"}</strong></div>
          <div><span>Double</span><strong>${state.double ? "OK" : "Wait"}</strong></div>
        </div>
        <div class="tool-stats">
          <span><strong>${state.wheel}</strong> wheel</span>
          <span><strong>${state.x}</strong> x</span>
          <span><strong>${state.y}</strong> y</span>
        </div>
        <div class="actions">
          <button class="button ghost" data-reset-mouse>Reset</button>
        </div>
      </div>
    `;
    const zone = root.querySelector("[data-mouse-zone]");
    zone.addEventListener("contextmenu", (event) => event.preventDefault());
    zone.addEventListener("mousedown", updateButton);
    zone.addEventListener("dblclick", () => {
      state.double = true;
      render();
    });
    zone.addEventListener("wheel", (event) => {
      event.preventDefault();
      state.wheel += event.deltaY > 0 ? 1 : -1;
      render();
    });
    zone.addEventListener("mousemove", (event) => {
      const rect = zone.getBoundingClientRect();
      state.x = Math.round(event.clientX - rect.left);
      state.y = Math.round(event.clientY - rect.top);
      const x = root.querySelector(".tool-stats span:nth-child(2) strong");
      const y = root.querySelector(".tool-stats span:nth-child(3) strong");
      if (x) x.textContent = state.x;
      if (y) y.textContent = state.y;
    });
    root.querySelector("[data-reset-mouse]").addEventListener("click", () => {
      Object.assign(state, { left: false, middle: false, right: false, double: false, wheel: 0, x: 0, y: 0 });
      render();
    });
  }

  function updateButton(event) {
    if (event.button === 0) state.left = true;
    if (event.button === 1) state.middle = true;
    if (event.button === 2) state.right = true;
    render();
  }

  render();
}

function initMicrophoneTest() {
  const root = byId("microphone-test");
  if (!root) return;

  let stream = null;
  let audioContext = null;
  let analyser = null;
  let frameId = null;
  let peak = 0;

  function render() {
    root.innerHTML = `
      <div class="tool-card media-test-card">
        <p class="eyebrow">Microphone Test</p>
        <h2>Check your mic level in the browser.</h2>
        <p>Start the test, allow microphone access, then speak normally. The meter shows live input level without uploading audio.</p>
        <div class="mic-meter" aria-label="Microphone input meter">
          <span data-mic-level style="width:0%"></span>
        </div>
        <div class="result-metrics">
          <div><span>Status</span><strong data-mic-status>Waiting</strong></div>
          <div><span>Live Level</span><strong data-mic-live>0%</strong></div>
          <div><span>Peak</span><strong data-mic-peak>0%</strong></div>
          <div><span>Privacy</span><strong>Local</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-start-mic>Start Mic Test</button>
          <button class="button ghost" data-stop-mic>Stop</button>
        </div>
        <div class="notice"><p data-mic-message>Your browser will ask for permission before the test can read microphone input.</p></div>
        <div class="device-help" aria-label="Microphone troubleshooting">
          <strong>If the mic test does not move</strong>
          <ul>
            <li>Allow microphone access in the browser prompt.</li>
            <li>Select an input device in system sound settings.</li>
            <li>Close meeting, recording, or streaming apps that may be using the mic.</li>
          </ul>
        </div>
      </div>
    `;
    root.querySelector("[data-start-mic]").addEventListener("click", start);
    root.querySelector("[data-stop-mic]").addEventListener("click", stop);
  }

  function setMessage(message) {
    const item = root.querySelector("[data-mic-message]");
    if (item) item.textContent = message;
  }

  function setStatus(status) {
    const item = root.querySelector("[data-mic-status]");
    if (item) item.textContent = status;
  }

  async function start() {
    trackEvent("tool_start", { tool_name: "microphone_test" });
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("Unsupported");
      setMessage("This browser does not expose microphone testing through getUserMedia.");
      return;
    }
    stop(false);
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      audioContext.createMediaStreamSource(stream).connect(analyser);
      peak = 0;
      setStatus("Listening");
      setMessage("Speak into the microphone and watch the level meter move.");
      trackEvent("tool_complete", { tool_name: "microphone_test", status: "permission_granted" });
      tick();
    } catch (error) {
      setStatus(error.name === "NotFoundError" ? "No mic" : "Blocked");
      setMessage(mediaAccessMessage(error, "microphone"));
    }
  }

  function tick() {
    if (!analyser) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(data);
    const sum = data.reduce((total, value) => total + Math.abs(value - 128), 0);
    const level = Math.min(100, Math.round((sum / data.length) * 3.2));
    peak = Math.max(peak, level);
    const bar = root.querySelector("[data-mic-level]");
    const live = root.querySelector("[data-mic-live]");
    const peakItem = root.querySelector("[data-mic-peak]");
    if (bar) bar.style.width = `${level}%`;
    if (live) live.textContent = `${level}%`;
    if (peakItem) peakItem.textContent = `${peak}%`;
    frameId = window.requestAnimationFrame(tick);
  }

  function stop(update = true) {
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = null;
    if (stream) stream.getTracks().forEach((track) => track.stop());
    stream = null;
    if (audioContext) audioContext.close().catch(() => {});
    audioContext = null;
    analyser = null;
    if (update) {
      setStatus("Stopped");
      setMessage("The microphone stream has been stopped.");
    }
  }

  window.addEventListener("pagehide", () => stop(false));
  render();
}

function initWebcamTest() {
  const root = byId("webcam-test");
  if (!root) return;

  let stream = null;

  function render() {
    root.innerHTML = `
      <div class="tool-card media-test-card">
        <p class="eyebrow">Webcam Test</p>
        <h2>Preview your camera and take a local snapshot.</h2>
        <p>Allow camera access to check focus, framing, brightness, and browser detection. Nothing is uploaded by this page.</p>
        <div class="webcam-frame">
          <video data-webcam-video autoplay muted playsinline></video>
          <canvas data-webcam-canvas hidden></canvas>
          <img data-webcam-shot alt="Captured webcam snapshot" hidden>
        </div>
        <div class="result-metrics">
          <div><span>Status</span><strong data-webcam-status>Waiting</strong></div>
          <div><span>Resolution</span><strong data-webcam-resolution>--</strong></div>
          <div><span>Snapshot</span><strong data-webcam-snapshot>No</strong></div>
          <div><span>Privacy</span><strong>Local</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-start-webcam>Start Camera</button>
          <button class="button secondary" data-snapshot-webcam>Snapshot</button>
          <button class="button ghost" data-stop-webcam>Stop</button>
        </div>
        <div class="notice"><p data-webcam-message>Your browser will ask for permission before the camera preview starts.</p></div>
        <div class="device-help" aria-label="Camera troubleshooting">
          <strong>If the camera test is blocked</strong>
          <ul>
            <li>Allow camera access in the browser prompt.</li>
            <li>Check operating system privacy settings for this browser.</li>
            <li>Close other apps that may already be using the camera.</li>
          </ul>
        </div>
      </div>
    `;
    root.querySelector("[data-start-webcam]").addEventListener("click", start);
    root.querySelector("[data-snapshot-webcam]").addEventListener("click", snapshot);
    root.querySelector("[data-stop-webcam]").addEventListener("click", stop);
  }

  function setText(selector, text) {
    const item = root.querySelector(selector);
    if (item) item.textContent = text;
  }

  async function start() {
    trackEvent("tool_start", { tool_name: "webcam_test" });
    if (!navigator.mediaDevices?.getUserMedia) {
      setText("[data-webcam-status]", "Unsupported");
      setText("[data-webcam-message]", "This browser does not expose camera testing through getUserMedia.");
      return;
    }
    stop(false);
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
      const video = root.querySelector("[data-webcam-video]");
      video.srcObject = stream;
      await video.play();
      setText("[data-webcam-status]", "Live");
      setText("[data-webcam-resolution]", `${video.videoWidth || "--"}x${video.videoHeight || "--"}`);
      setText("[data-webcam-message]", "Camera preview is live. Use Snapshot to capture a local still image.");
      trackEvent("tool_complete", { tool_name: "webcam_test", status: "permission_granted", resolution: `${video.videoWidth || "--"}x${video.videoHeight || "--"}` });
    } catch (error) {
      setText("[data-webcam-status]", error.name === "NotFoundError" ? "No camera" : "Blocked");
      setText("[data-webcam-message]", mediaAccessMessage(error, "camera"));
    }
  }

  function snapshot() {
    const video = root.querySelector("[data-webcam-video]");
    const canvas = root.querySelector("[data-webcam-canvas]");
    const image = root.querySelector("[data-webcam-shot]");
    if (!stream || !video.videoWidth) {
      setText("[data-webcam-message]", "Start the camera before taking a snapshot.");
      return;
    }
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    image.src = canvas.toDataURL("image/png");
    image.hidden = false;
    setText("[data-webcam-snapshot]", "Yes");
    setText("[data-webcam-message]", "Snapshot captured locally in this page.");
  }

  function stop(update = true) {
    if (stream) stream.getTracks().forEach((track) => track.stop());
    stream = null;
    const video = root.querySelector("[data-webcam-video]");
    if (video) video.srcObject = null;
    if (update) {
      setText("[data-webcam-status]", "Stopped");
      setText("[data-webcam-message]", "The camera stream has been stopped.");
    }
  }

  window.addEventListener("pagehide", () => stop(false));
  render();
}

function initGamepadTester() {
  const root = byId("gamepad-tester");
  if (!root) return;

  let frameId = null;
  let running = false;
  let reportedConnection = false;

  function render() {
    root.innerHTML = `
      <div class="tool-card gamepad-card">
        <p class="eyebrow">Gamepad Tester</p>
        <h2>Press any controller button to test inputs.</h2>
        <p>Connect a gamepad or controller, press a button, then start the live tester. Browsers often hide controllers until the first button press.</p>
        <div class="result-metrics">
          <div><span>Status</span><strong data-gamepad-status>Waiting</strong></div>
          <div><span>Name</span><strong data-gamepad-name>None</strong></div>
          <div><span>Buttons</span><strong data-gamepad-buttons>0</strong></div>
          <div><span>Axes</span><strong data-gamepad-axes>0</strong></div>
        </div>
        <div class="gamepad-live">
          <div>
            <h3>Buttons</h3>
            <div class="gamepad-buttons" data-gamepad-button-grid></div>
          </div>
          <div>
            <h3>Axes</h3>
            <div class="gamepad-axes" data-gamepad-axis-grid></div>
          </div>
        </div>
        <div class="actions">
          <button class="button primary" data-start-gamepad>Start Tester</button>
          <button class="button ghost" data-stop-gamepad>Stop</button>
        </div>
        <div class="notice"><p data-gamepad-message>For best results, plug in the controller and press any button once before starting.</p></div>
        <div class="device-help" aria-label="Controller troubleshooting">
          <strong>If no controller appears</strong>
          <ul>
            <li>Reconnect the controller with USB or Bluetooth.</li>
            <li>Press any controller button while this tab is focused.</li>
            <li>Try Chrome or Edge if the current browser does not expose gamepads.</li>
          </ul>
        </div>
      </div>
    `;
    root.querySelector("[data-start-gamepad]").addEventListener("click", start);
    root.querySelector("[data-stop-gamepad]").addEventListener("click", stop);
  }

  function setText(selector, text) {
    const item = root.querySelector(selector);
    if (item) item.textContent = text;
  }

  function currentGamepad() {
    return Array.from(navigator.getGamepads?.() || []).find(Boolean);
  }

  function start() {
    trackEvent("tool_start", { tool_name: "gamepad_tester" });
    if (!navigator.getGamepads) {
      setText("[data-gamepad-status]", "Unsupported");
      setText("[data-gamepad-message]", "This browser does not expose the Gamepad API.");
      return;
    }
    running = true;
    reportedConnection = false;
    setText("[data-gamepad-status]", "Scanning");
    tick();
  }

  function tick() {
    if (!running) return;
    const gamepad = currentGamepad();
    if (!gamepad) {
      setText("[data-gamepad-status]", "No gamepad");
      setText("[data-gamepad-message]", "Press a controller button or reconnect the gamepad, then keep this page focused.");
      frameId = window.requestAnimationFrame(tick);
      return;
    }
    setText("[data-gamepad-status]", "Connected");
    setText("[data-gamepad-name]", gamepad.id || "Gamepad");
    setText("[data-gamepad-buttons]", gamepad.buttons.length);
    setText("[data-gamepad-axes]", gamepad.axes.length);
    setText("[data-gamepad-message]", "Inputs are updating live. Press buttons and move sticks or triggers.");
    if (!reportedConnection) {
      reportedConnection = true;
      trackEvent("tool_complete", { tool_name: "gamepad_tester", status: "connected", buttons: gamepad.buttons.length, axes: gamepad.axes.length });
    }

    const buttonGrid = root.querySelector("[data-gamepad-button-grid]");
    const axisGrid = root.querySelector("[data-gamepad-axis-grid]");
    if (buttonGrid) {
      buttonGrid.innerHTML = gamepad.buttons.map((button, index) => `
        <span class="${button.pressed ? "pressed" : ""}">B${index}<strong>${button.value.toFixed(2)}</strong></span>
      `).join("");
    }
    if (axisGrid) {
      axisGrid.innerHTML = gamepad.axes.map((axis, index) => {
        const offset = Math.round(((axis + 1) / 2) * 100);
        return `
          <div class="axis-row">
            <span>A${index}</span>
            <div><i style="left:${offset}%"></i></div>
            <strong>${axis.toFixed(2)}</strong>
          </div>
        `;
      }).join("");
    }
    frameId = window.requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = null;
    setText("[data-gamepad-status]", "Stopped");
    setText("[data-gamepad-message]", "The live gamepad tester is stopped.");
  }

  window.addEventListener("gamepadconnected", () => {
    if (!running) setText("[data-gamepad-status]", "Detected");
  });
  window.addEventListener("pagehide", stop);
  render();
}

function mediaAccessMessage(error, deviceName) {
  if (error?.name === "NotAllowedError" || error?.name === "SecurityError") {
    return `${capitalize(deviceName)} permission was blocked. Use the browser site settings to allow access, then start the test again.`;
  }
  if (error?.name === "NotFoundError" || error?.name === "DevicesNotFoundError") {
    return `No ${deviceName} device was detected. Connect or enable one in system settings, then try again.`;
  }
  if (error?.name === "NotReadableError" || error?.name === "TrackStartError") {
    return `The ${deviceName} is present but another app or system setting may be using it. Close other apps and retry.`;
  }
  return `${capitalize(deviceName)} access failed. Check browser permission, system privacy settings, and connected devices.`;
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
}

function initIqQuiz() {
  const root = byId("iq-quiz");
  if (!root) return;

  const lang = root.dataset.lang || ((document.documentElement.lang || "en").startsWith("zh") ? "zh" : "en");
  const labels = {
    en: {
      eyebrow: "Ready when you are",
      title: "40-question cognitive ability test",
      intro: "You will have 30 minutes. Choose the best answer for each item. Unanswered questions count as incorrect.",
      start: "Start Test",
      question: "Question",
      back: "Back",
      next: "Skip",
      finish: "Finish Test",
      timer: "Time left",
      answered: "answered",
      resultEyebrow: "Your Cognitive Ability Result",
      range: "Estimated range",
      percentile: "Estimated percentile",
      speed: "Pacing",
      share: "Share Result",
      retake: "Retake",
      review: "Review missed questions",
      notice: "This result is for entertainment and self-reflection only. It is not a clinical IQ score or diagnostic assessment.",
      copied: "Copied"
    },
    zh: {
      eyebrow: "准备好即可开始",
      title: "40 题认知能力测试",
      intro: "测试限时 30 分钟。每题选择一个最佳答案，未作答题目按错误计算。",
      start: "开始测试",
      question: "题目",
      back: "上一题",
      next: "跳过",
      finish: "提交测试",
      timer: "剩余时间",
      answered: "已答",
      resultEyebrow: "你的认知能力结果",
      range: "估算区间",
      percentile: "估算百分位",
      speed: "答题节奏",
      share: "分享结果",
      retake: "重新测试",
      review: "查看错题解析",
      notice: "本结果仅供娱乐和自我认知参考，不是临床 IQ 分数或诊断评估。",
      copied: "已复制"
    }
  }[lang];

  let index = 0;
  let startedAt = 0;
  let timerId = null;
  let remaining = 30 * 60;
  const answers = new Array(iqQuestions.length).fill(null);
  const timeSpent = new Array(iqQuestions.length).fill(0);
  const enteredAt = { value: 0 };

  function text(value) {
    return value[lang] || value.en;
  }

  function formatTime(totalSeconds) {
    const minutes = Math.floor(Math.max(0, totalSeconds) / 60);
    const seconds = Math.max(0, totalSeconds) % 60;
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  function startScreen() {
    root.innerHTML = `
      <p class="eyebrow">${labels.eyebrow}</p>
      <h2>${labels.title}</h2>
      <p>${labels.intro}</p>
      <div class="iq-test-stats">
        <span>40</span>
        <span>30 min</span>
        <span>5 areas</span>
      </div>
      <div class="notice"><p>${labels.notice}</p></div>
      <div class="actions"><button class="button primary" data-start-iq>${labels.start}</button></div>
    `;
    root.querySelector("[data-start-iq]").addEventListener("click", () => {
      startedAt = Date.now();
      enteredAt.value = Date.now();
      trackEvent("quiz_start", { quiz_name: "iq_test", language: lang });
      timerId = window.setInterval(tick, 1000);
      renderQuestion();
    });
  }

  function tick() {
    remaining -= 1;
    const timer = root.querySelector("[data-iq-timer]");
    if (timer) timer.textContent = formatTime(remaining);
    if (remaining <= 0) showIqResult();
  }

  function storeTime() {
    if (!enteredAt.value) return;
    timeSpent[index] += Math.round((Date.now() - enteredAt.value) / 1000);
    enteredAt.value = Date.now();
  }

  function renderQuestion() {
    const item = iqQuestions[index];
    const answered = answers.filter((answer) => answer !== null).length;
    root.innerHTML = `
      <div class="iq-topline">
        <span>${labels.question} ${index + 1} / ${iqQuestions.length}</span>
        <strong>${labels.timer}: <span data-iq-timer>${formatTime(remaining)}</span></strong>
      </div>
      <div class="progress"><span style="width:${(answered / iqQuestions.length) * 100}%"></span></div>
      <div class="question-count">${iqCategoryLabels[lang][item.c]} · ${answered}/${iqQuestions.length} ${labels.answered}</div>
      <h2 class="question-title">${text(item.q)}</h2>
      <div class="options">
        ${text(item.o).map((option, optionIndex) => `<button class="option ${answers[index] === optionIndex ? "selected" : ""}" data-iq-answer="${optionIndex}">${option}</button>`).join("")}
      </div>
      <div class="quiz-footer">
        <button class="button secondary" data-iq-back ${index === 0 ? "disabled" : ""}>${labels.back}</button>
        <button class="button ghost" data-iq-next>${index === iqQuestions.length - 1 ? labels.finish : labels.next}</button>
      </div>
    `;

    root.querySelectorAll("[data-iq-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        storeTime();
        answers[index] = Number(button.dataset.iqAnswer);
        if (index >= iqQuestions.length - 1) showIqResult();
        else {
          index += 1;
          renderQuestion();
        }
      });
    });
    root.querySelector("[data-iq-back]").addEventListener("click", () => {
      storeTime();
      index = Math.max(0, index - 1);
      renderQuestion();
    });
    root.querySelector("[data-iq-next]").addEventListener("click", () => {
      storeTime();
      if (index >= iqQuestions.length - 1) showIqResult();
      else {
        index += 1;
        renderQuestion();
      }
    });
  }

  function showIqResult() {
    if (timerId) window.clearInterval(timerId);
    storeTime();

    const categoryScores = {};
    const categoryMax = {};
    let raw = 0;
    let maxRaw = 0;
    let correct = 0;

    iqQuestions.forEach((item, questionIndex) => {
      const base = 10 * item.d;
      const isCorrect = answers[questionIndex] === item.a;
      const pace = isCorrect && timeSpent[questionIndex] > 0 && timeSpent[questionIndex] <= 25 ? 1.08 : isCorrect && timeSpent[questionIndex] >= 75 ? 0.92 : 1;
      const score = isCorrect ? base * pace : 0;
      raw += score;
      maxRaw += base * 1.08;
      correct += isCorrect ? 1 : 0;
      categoryScores[item.c] = (categoryScores[item.c] || 0) + score;
      categoryMax[item.c] = (categoryMax[item.c] || 0) + base * 1.08;
    });

    const ratio = raw / maxRaw;
    const estimate = Math.round(72 + ratio * 66);
    const percentile = Math.max(3, Math.min(99, Math.round(4 + ratio * 94)));
    const minutesUsed = Math.max(1, Math.round((Date.now() - startedAt) / 60000));
    const band = getIqBand(estimate, lang);
    trackEvent("quiz_complete", { quiz_name: "iq_test", language: lang, score: estimate, percentile });
    const categoryRows = Object.keys(iqCategoryLabels[lang]).map((category) => {
      const pct = Math.round(((categoryScores[category] || 0) / (categoryMax[category] || 1)) * 100);
      return `
        <div class="ability-row">
          <span>${iqCategoryLabels[lang][category]}</span>
          <div class="ability-bar"><i style="width:${Math.max(4, pct)}%"></i></div>
          <strong>${pct}%</strong>
        </div>
      `;
    }).join("");
    const missed = iqQuestions.map((item, questionIndex) => ({ item, questionIndex })).filter(({ item, questionIndex }) => answers[questionIndex] !== item.a).slice(0, 8);
    const missedHtml = missed.length ? missed.map(({ item, questionIndex }) => `
      <details class="review-item">
        <summary>${labels.question} ${questionIndex + 1}: ${text(item.q)}</summary>
        <p><strong>${lang === "zh" ? "正确答案" : "Correct answer"}:</strong> ${text(item.o)[item.a]}</p>
        <p>${text(item.e)}</p>
      </details>
    `).join("") : `<p>${lang === "zh" ? "你没有错题，表现非常稳定。" : "No missed questions. Very steady performance."}</p>`;

    root.innerHTML = `
      <div class="result-card iq-result">
        <p class="eyebrow">${labels.resultEyebrow}</p>
        <div class="score-number">${estimate}</div>
        <h2>${band.title}</h2>
        <p>${band.text}</p>
        <div class="result-metrics">
          <div><span>${labels.range}</span><strong>${Math.max(70, estimate - 7)}-${estimate + 7}</strong></div>
          <div><span>${labels.percentile}</span><strong>${percentile}%</strong></div>
          <div><span>${labels.speed}</span><strong>${minutesUsed} min</strong></div>
          <div><span>${lang === "zh" ? "正确题数" : "Correct"}</span><strong>${correct}/${iqQuestions.length}</strong></div>
        </div>
        <div class="ability-panel">${categoryRows}</div>
        <div class="notice"><p>${labels.notice}</p></div>
        <div class="actions">
          <button class="button primary" data-share="IQ test result: ${estimate}">${labels.share}</button>
          <button class="button ghost" data-restart>${labels.retake}</button>
        </div>
        <h3>${labels.review}</h3>
        <div class="review-list">${missedHtml}</div>
      </div>
    `;
    root.querySelector("[data-restart]").addEventListener("click", () => window.location.reload());
    attachShare(root.querySelector("[data-share]"), lang === "zh" ? `我的认知能力测试估算结果是 ${estimate}` : `My cognitive ability test estimate is ${estimate}`);
  }

  startScreen();
}

function getIqBand(score, lang) {
  const bands = {
    en: [
      { min: 131, title: "High-level reasoning performance", text: "Your answers suggest very strong pattern recognition and reasoning performance in this online test." },
      { min: 116, title: "Excellent reasoning range", text: "You performed especially well across several cognitive areas, with solid accuracy under time pressure." },
      { min: 101, title: "Good reasoning range", text: "Your result shows above-average performance for this test, with clear strengths to build on." },
      { min: 86, title: "Typical reasoning range", text: "Your result sits in the common range for this entertainment test. Category scores can show where to practice." },
      { min: 0, title: "Foundational reasoning range", text: "This result may reflect pacing, focus, or unfamiliar item types. Try again when rested for a cleaner snapshot." }
    ],
    zh: [
      { min: 131, title: "高水平推理表现", text: "你的答案显示出很强的模式识别和推理表现，尤其适合继续挑战高难度题型。" },
      { min: 116, title: "优秀推理区间", text: "你在多个认知维度上表现稳定，在限时环境下仍保持了不错的准确率。" },
      { min: 101, title: "良好推理区间", text: "本次结果高于常见区间，建议结合分类表现继续加强短板题型。" },
      { min: 86, title: "普通推理区间", text: "本次表现处于常见范围。你可以查看五维画像，找到更适合练习的方向。" },
      { min: 0, title: "基础推理区间", text: "这个结果可能受到节奏、专注度或题型熟悉度影响。休息后重测会更接近真实状态。" }
    ]
  }[lang];
  return bands.find((band) => score >= band.min);
}

initSbtiQuiz();
initRiceQuiz();
initSbtiTypes();
initIqQuiz();
initReactionTimeTest();
initCpsTest();
initSpacebarClicker();
initDoubleClickTest();
initTypingSpeedTest();
initKeyboardTest();
initKeyboardPollingRateTest();
initMouseTest();
initMicrophoneTest();
initWebcamTest();
initGamepadTester();
