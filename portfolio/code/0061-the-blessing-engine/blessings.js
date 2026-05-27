const blessings = [
  // LOSS
  {
    text: "May the thing you lost have been small enough to carry but large enough to have mattered.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "loss", "gone", "missing", "can't find", "disappeared", "misplaced", "nowhere"],
    texture: "gentle"
  },
  {
    text: "May the last thing they said to you have been ordinary, and may that be enough.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["death", "died", "funeral", "grief", "mourning", "passed", "gone", "widow", "orphan"],
    texture: "warm"
  },
  {
    text: "May the empty chair at the table hold what you cannot.",
    type: "loss",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["empty", "chair", "table", "dinner", "meal", "family", "gathering", "seat", "place setting"],
    texture: "warm"
  },
  {
    text: "May you find the document you need on the first try, and may it say what you hoped it would.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["document", "paperwork", "form", "file", "bureaucracy", "office", "administration", "desk", "search", "find"],
    texture: "dry"
  },
  {
    text: "May your phone not ring during the silence you finally found.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: ["silence"],
    keywords: ["quiet", "silence", "peace", "alone", "rest", "break", "still"],
    texture: "dry"
  },
  {
    text: "May the next person who sees you not ask how you're doing.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["grief", "funeral", "condolences", "sympathy", "mourning", "crying", "sad", "death"],
    texture: "sharp"
  },
  {
    text: "May your hands know the difference between giving up and letting go.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["letting go", "give up", "release", "surrender", "stop trying", "move on", "quit", "done", "enough"],
    texture: "warm"
  },
  {
    text: "May the memory that surfaces uninvited be a kind one.",
    type: "loss",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["memory", "remember", "flashback", "uninvited", "sudden", "surfaces", "past", "haunt"],
    texture: "cool"
  },
  {
    text: "May you not need to be the strong one tomorrow.",
    type: "loss",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["strong", "strength", "tough", "holding together", "brave", "resilient", "support", "carry", "burden"],
    texture: "warm"
  },
  {
    text: "May the person you miss dream about you tonight, and wake up confused in a good way.",
    type: "loss",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["miss", "longing", "distance", "apart", "away", "dream", "think about", "wonder"],
    texture: "warm"
  },
  {
    text: "May the rain wait until you're inside.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["rain", "weather", "walk", "commute", "outside", "caught", "storm"],
    texture: "dry"
  },
  {
    text: "May the old photos stay where you put them.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["photo", "pictures", "album", "memories", "old", "archive", "storage", "box"],
    texture: "gentle"
  },
  {
    text: "May the grief that comes out sideways find a direction that doesn't hurt the people you love.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["anger", "snapping", "lashing out", "irritable", "frustrated", "grief", "unfair"],
    texture: "sharp"
  },
  {
    text: "May the last page of the book in the waiting room be torn out, so you can leave it unfinished without guilt.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: ["waiting"],
    keywords: ["waiting", "waiting room", "doctor", "appointment", "delay", "queue", "line"],
    texture: "dry"
  },
  {
    text: "May your feet carry you out the door before your mind has finished arguing about it.",
    type: "anticipation",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["exercise", "run", "walk", "gym", "move", "workout", "door", "morning"],
    texture: "sharp"
  },
  {
    text: "May the friend you've been meaning to text be the one who texts first.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["friend", "text", "message", "reach out", "talk", "catch up", "meaning to", "should"],
    texture: "warm"
  },
  {
    text: "May your confession be met with laughter, and may it be the kind that includes you.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["confession", "admit", "truth", "honest", "tell", "reveal", "secret", "wrong"],
    texture: "warm"
  },
  {
    text: "May the call connect, and may the voicemail you leave not need a second take.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["call", "phone", "voicemail", "dial", "ring", "reach", "contact"],
    texture: "gentle"
  },
  {
    text: "May your apology be accepted before you finish it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["apologize", "sorry", "apology", "forgive", "mistake", "wrong", "fault"],
    texture: "gentle"
  },
  {
    text: "May the conversation you're dreading be shorter than you imagined, and may you say the true thing.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["dreading", "conversation", "talk", "difficult", "hard talk", "confront", "honest", "serious"],
    texture: "sharp"
  },
  {
    text: "May the thing you're about to say be the right thing, and may you know it by how your chest loosens after.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["say", "speak", "admit", "confess", "tell", "truth", "honest", "words"],
    texture: "warm"
  },
  {
    text: "May your return be met with something other than a list of what went wrong while you were gone.",
    type: "return",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["return", "home", "back", "trip", "travel", "away", "gone", "arrived"],
    texture: "dry"
  },
  {
    text: "May the person you were be glad of the person you became, or at least understand why.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["past self", "younger", "changed", "different", "who i was", "used to be", "become"],
    texture: "warm"
  },
  {
    text: "May the bed be made. If not, may you not care.",
    type: "return",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["bed", "home", "tired", "sleep", "exhausted", "hotel", "return", "room"],
    texture: "dry"
  },
  {
    text: "May your child not ask the question you don't have an answer for, or may you find that you do.",
    type: "return",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["child", "kid", "parent", "question", "answer", "explain", "family", "home"],
    texture: "gentle"
  },
  {
    text: "May the mail be good news or nothing at all.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["mail", "letter", "package", "delivery", "post", "email", "inbox"],
    texture: "dry"
  },
  {
    text: "May the commute make sense as a thing you chose once, even if you've forgotten why.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["commute", "traffic", "train", "bus", "drive", "work", "morning", "routine"],
    texture: "cool"
  },
  {
    text: "May the password you need be the first one you try.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["password", "login", "computer", "locked out", "account", "access", "forgot"],
    texture: "dry"
  },
  {
    text: "May the printer work on the first try.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["printer", "print", "paper", "jam", "machine", "copy"],
    texture: "dry"
  },
  {
    text: "May the email you've been avoiding write itself while you're getting coffee.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: ["email"],
    keywords: ["email", "write", "procrastinate", "avoid", "draft", "send"],
    texture: "gentle"
  },
  {
    text: "May you recognize the room when you return to it.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["return", "home", "recognize", "familiar", "room", "place"],
    texture: "cool"
  },
  {
    text: "May the song you can't remember the name of appear in the first search result.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["song", "music", "melody", "stuck in head", "earworm", "remember", "name", "search"],
    texture: "warm"
  },
  {
    text: "May the dark come early, and may it find you already inside.",
    type: "loss",
    time: "evening",
    season: "winter",
    avoidance: [],
    keywords: ["dark", "darkness", "sunset", "night", "early", "winter", "gloomy"],
    texture: "gentle"
  },
  {
    text: "May the cold snap arrive after you've brought the plants in.",
    type: "tedium",
    time: "morning",
    season: "autumn",
    avoidance: [],
    keywords: ["cold", "plants", "garden", "frost", "weather", "freeze", "winter coming"],
    texture: "gentle"
  },
  {
    text: "May you catch the green light and know it was for you.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["green light", "drive", "commute", "luck", "favor", "signal"],
    texture: "warm"
  },
  {
    text: "May the deadline pass like weather.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: ["deadline"],
    keywords: ["deadline", "due", "overdue", "late", "project", "submit", "rush"],
    texture: "cool"
  },
  {
    text: "May your coffee be the temperature you forgot to check for.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["coffee", "tea", "morning", "cup", "warm", "drink", "sip"],
    texture: "gentle"
  },
  {
    text: "May your second thought be quicker than your first reflex.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["react", "anger", "respond", "pause", "think", "impulse", "first reaction"],
    texture: "sharp"
  },
  {
    text: "May the call come when you are doing something that can be interrupted, and may you answer.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["call", "answer", "phone", "ring", "busy", "important"],
    texture: "warm"
  },
  {
    text: "May the right words come out of your mouth, and may you leave before they go wrong.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["eulogy", "speech", "say", "words", "funeral", "memorial", "tribute", "speak"],
    texture: "sharp"
  },
  {
    text: "May the road you're on know where it's going, since you clearly don't.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "driving", "road", "direction", "map", "route", "confused", "wrong turn"],
    texture: "dry"
  },
  {
    text: "May you not need to rehearse the moment in order to survive it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["rehearse", "nervous", "anxious", "practice", "prepare", "dread", "worry"],
    texture: "sharp"
  },
  {
    text: "May your throat open at the right moment, and may the tears wait until you're alone.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["cry", "tears", "throat", "choke", "hold together", "emotional", "public"],
    texture: "warm"
  },
  {
    text: "May the slow line be the right one for once.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["line", "queue", "wait", "slow", "grocery", "store", "checkout", "customer"],
    texture: "dry"
  },
  {
    text: "May the weather forecast be wrong in your favor.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["weather", "forecast", "rain", "sun", "umbrella", "coat", "predict"],
    texture: "gentle"
  },
  {
    text: "May you be interrupted by something worth stopping for.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["interrupted", "focus", "concentrate", "distract", "busy", "flow"],
    texture: "warm"
  },
  {
    text: "May the laundry be dry when you remember it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["laundry", "wash", "dry", "clothes", "fold", "chore"],
    texture: "dry"
  },
  {
    text: "May you reach the bottom of the page and realize you were reading, not just looking at words.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["read", "book", "focus", "attention", "page", "concentrate", "distracted"],
    texture: "cool"
  },
  {
    text: "May you not be the one who has to explain it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["explain", "defend", "justify", "argue", "clarify", "account"],
    texture: "dry"
  },
  {
    text: "May the period between not knowing and knowing be brief.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["waiting", "results", "test", "diagnosis", "answer", "news", "know", "uncertain"],
    texture: "sharp"
  },
  {
    text: "May the letter that arrives today be the one you've been waiting for.",
    type: "anticipation",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["letter", "mail", "news", "waiting", "arrive", "response", "reply"],
    texture: "warm"
  },
  {
    text: "May the test be negative, or may the positive come with a plan.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["test", "results", "medical", "diagnosis", "doctor", "lab", "positive", "negative", "health"],
    texture: "warm"
  },
  {
    text: "May the interview be with someone who actually read your resume.",
    type: "anticipation",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["interview", "job", "hire", "resume", "application", "career", "position"],
    texture: "dry"
  },
  {
    text: "May the sweat dry before anyone sees.",
    type: "anticipation",
    time: "anytime",
    season: "summer",
    avoidance: [],
    keywords: ["sweat", "nervous", "anxious", "hot", "stage", "present", "perform"],
    texture: "dry"
  },
  {
    text: "May you outlast the weather.",
    type: "tedium",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["winter", "cold", "freeze", "snow", "storm", "endure", "last", "survive"],
    texture: "cool"
  },
  {
    text: "May the conversation about money be shorter than expected.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["money", "budget", "rent", "bills", "cost", "afford", "pay", "salary", "debt"],
    texture: "dry"
  },
  {
    text: "May the tears you swallow not go to the wrong place.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hold back tears", "swallow", "choke", "suppress", "public", "cry", "emotional"],
    texture: "sharp"
  },
  {
    text: "May you need the courage you find.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["courage", "brave", "scared", "fear", "bold", "daring", "step", "leap"],
    texture: "sharp"
  },
  {
    text: "May you find the thing you weren't looking for.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["search", "find", "discover", "unexpected", "surprise", "serendipity"],
    texture: "warm"
  },
  {
    text: "May the tree you pass every day survive the storm, and may you notice that it did.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tree", "storm", "survive", "notice", "pass", "daily", "routine", "commute"],
    texture: "warm"
  },
  {
    text: "May your feet find the stairs in the dark, and may your hand find the rail.",
    type: "tedium",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["dark", "stairs", "night", "fall", "careful", "step", "midnight", "bathroom"],
    texture: "gentle"
  },
  {
    text: "May you know the difference between grief and guilt, and may you drop the one you're carrying for no reason.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["guilt", "grief", "regret", "blame", "fault", "carry", "burden", "should have"],
    texture: "sharp"
  },
  {
    text: "May you be forgiven for what you didn't know you were doing.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "forgiveness", "didn't know", "ignorance", "mistake", "unintentional", "clueless"],
    texture: "gentle"
  },
  {
    text: "May the room be warm when you arrive.",
    type: "return",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["cold", "arrive", "warm", "room", "home", "enter", "inside"],
    texture: "warm"
  },
  {
    text: "May you not need to recover from the people who love you.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["family", "love", "overwhelming", "exhausting", "recovery", "home", "visit", "holiday"],
    texture: "sharp"
  },
  {
    text: "May you not be late for the thing that doesn't mind.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["late", "rushing", "hurry", "clock", "time", "morning", "oversleep"],
    texture: "dry"
  },
  {
    text: "May you sleep through the night, and may the dream you forget be a kind one.",
    type: "tedium",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["sleep", "night", "dream", "rest", "insomnia", "wake", "toss", "turn"],
    texture: "gentle"
  },
  {
    text: "May you be the kind of tired that sleep can fix.",
    type: "tedium",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "exhausted", "sleep", "rest", "drain", "weary", "fatigue"],
    texture: "warm"
  },
  {
    text: "May the meeting you're dreading be cancelled, or may you surprise yourself with competence.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["meeting", "cancelled", "dread", "work", "competence", "presentation", "conference"],
    texture: "dry"
  },
  {
    text: "May the stairs be worth it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["stairs", "elevator", "climb", "effort", "walk", "up", "exercise"],
    texture: "dry"
  },
  {
    text: "May the meal be worth the dishes.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["cook", "dishes", "meal", "kitchen", "clean", "dinner", "dining"],
    texture: "gentle"
  },
  {
    text: "May your refund be processed without a phone call.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["refund", "return", "customer service", "money back", "transaction", "purchase"],
    texture: "dry"
  },
  {
    text: "May the app work the first time.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["app", "technology", "work", "load", "crash", "bug", "update", "install"],
    texture: "dry"
  },
  {
    text: "May the deadline be artificial, and may you treat it that way.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: ["deadline"],
    keywords: ["deadline", "due", "urgent", "pressure", "stress", "overdue", "hurry"],
    texture: "cool"
  },
  {
    text: "May you never need to be the smartest person in the room.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["smart", "intelligent", "imposter", "room", "know", "confident"],
    texture: "warm"
  },
  {
    text: "May you inherit more than just a list of phone numbers to call.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["inherit", "estate", "will", "death", "family", "parent", "passing"],
    texture: "dry"
  },
  {
    text: "May you receive the news standing up.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["news", "phone call", "standing", "shock", "receiving", "hear"],
    texture: "sharp"
  },
  {
    text: "May the road you didn't take not haunt you. May it barely occur to you at all.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["choice", "decide", "road", "path", "alternative", "regret", "haunt", "what if"],
    texture: "cool"
  },
  {
    text: "May you find your way back to the place you didn't know you'd left.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "find way", "back", "return", "home", "where", "belong"],
    texture: "gentle"
  },
  {
    text: "May your hands be steady when they need to be, and may they shake when they're allowed to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hands", "steady", "shake", "nervous", "calm", "precision", "surgery", "performance"],
    texture: "warm"
  },
  {
    text: "May the door be unlocked. May the light be on.",
    type: "return",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["door", "unlock", "light", "home", "arrive", "welcome", "enter", "night"],
    texture: "warm"
  },
  {
    text: "May the small wrong stay small.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wrong", "mistake", "error", "small", "minor", "fix", "accident"],
    texture: "cool"
  },
  {
    text: "May the silence after they leave be bearable, and may it not last longer than it needs to.",
    type: "loss",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["leave", "left", "gone", "silence", "after", "empty", "alone"],
    texture: "cool"
  },
  {
    text: "May the thing you did wrong be the kind of wrong that teaches without scarring.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wrong", "mistake", "teach", "learn", "scar", "consequence", "lesson"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think they're thinking.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["assume", "think they think", "paranoid", "judgment", "opinion", "mind", "imagine"],
    texture: "sharp"
  },
  {
    text: "May you not need to grieve alone, but may you be allowed to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["grieve", "alone", "mourn", "solitude", "company", "space"],
    texture: "gentle"
  },
  {
    text: "May the wind be at your back for the boring parts.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wind", "walk", "boring", "tedium", "routine", "help", "ease"],
    texture: "gentle"
  },
  {
    text: "May the batteries still have charge.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["battery", "charge", "power", "device", "phone", "flashlight", "tool"],
    texture: "dry"
  },
  {
    text: "May the person you're becoming not forget how you got here.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["becoming", "change", "grow", "forget", "past", "journey", "transform"],
    texture: "warm"
  },
  {
    text: "May the break be clean.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["break", "clean", "bone", "relationship", "end", "split", "fracture", "snap"],
    texture: "sharp"
  },
  {
    text: "May you know the right time to stop looking.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["search", "stop", "give up", "let go", "find", "accept", "lost", "over"],
    texture: "cool"
  },
  {
    text: "May the pain you're carrying be proportional to what happened, and may you trust your own measurement.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["pain", "proportional", "measure", "trust", "grief", "hurt", "compare", "valid"],
    texture: "cool"
  },
  {
    text: "May you not have to explain why you're laughing.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["laugh", "humor", "explain", "inappropriate", "timing", "funny"],
    texture: "dry"
  },
  {
    text: "May you find the grace to let the argument go, or the stamina to finish it properly.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["argument", "fight", "grace", "stamina", "resolve", "conflict", "disagree"],
    texture: "sharp"
  },
  {
    text: "May the doctor have good news or no news at all.",
    type: "anticipation",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["doctor", "news", "appointment", "health", "results", "medical", "diagnosis"],
    texture: "warm"
  },
  {
    text: "May the list of things you're putting off include something you can finish in the next ten minutes.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: ["procrastinating"],
    keywords: ["procrastinate", "put off", "avoid", "list", "task", "todo", "finish", "overwhelm"],
    texture: "dry"
  },
  {
    text: "May the sun catch you somewhere you can stand in it.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["sun", "light", "warm", "stand", "outside", "morning", "window"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to leave, and may leaving be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["brave", "leave", "escape", "go", "exit", "walk", "enough"],
    texture: "sharp"
  },
  {
    text: "May the thing you've been avoiding turn out to have already resolved itself.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["avoiding", "resolved", "over", "past", "gone", "skip", "dodge"],
    texture: "cool"
  },
  {
    text: "May the train come when the sign says it will, just this once.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["train", "schedule", "sign", "arrival", "depart", "platform", "transit", "late"],
    texture: "dry"
  },
  {
    text: "May you find what you dropped before something finds your foot.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["drop", "fell", "floor", "lost", "small", "find", "foot"],
    texture: "dry"
  },
  {
    text: "May your inbox be full of things you actually want to read.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["inbox", "email", "read", "spam", "newsletter", "message", "morning"],
    texture: "gentle"
  },
  {
    text: "May the cookies you left in the oven not be the ones you forgot about.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["oven", "cookies", "bake", "burn", "forget", "timer", "kitchen", "cooking"],
    texture: "warm"
  },
  {
    text: "May the coffee shop be open and the line be short.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["coffee shop", "open", "line", "morning", "queue", "cafe"],
    texture: "gentle"
  },
  {
    text: "May the meeting start late so your lateness doesn't matter.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["late", "meeting", "start", "delay", "morning", "commute", "arrive"],
    texture: "dry"
  },
  {
    text: "May your phone die at exactly the right moment.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["phone", "battery", "die", "charge", "power", "screen", "device"],
    texture: "cool"
  },
  {
    text: "May the check engine light have been lying.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["car", "engine", "light", "mechanic", "repair", "broken", "warning", "dashboard"],
    texture: "dry"
  },
  {
    text: "May the sweater you're wearing be warm enough that you don't have to think about the temperature.",
    type: "tedium",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["sweater", "warm", "coat", "cold", "temperature", "clothes", "winter"],
    texture: "gentle"
  },
  {
    text: "May the key work on the first try, and may the door not stick.",
    type: "return",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["key", "lock", "door", "stick", "home", "enter", "unlock", "open"],
    texture: "gentle"
  },
  {
    text: "May your favorite pen not run out until the sentence is finished.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["pen", "write", "run out", "ink", "paper", "sentence", "finish"],
    texture: "gentle"
  },
  {
    text: "May the WiFi hold.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wifi", "internet", "connection", "signal", "network", "router", "drop"],
    texture: "dry"
  },
  {
    text: "May the Wi-Fi hold just long enough.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wifi", "internet", "drop", "signal", "connection", "video", "call"],
    texture: "dry"
  },
  {
    text: "May the small mercy be enough for today.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["mercy", "small", "today", "enough", "get through", "survive", "day"],
    texture: "gentle"
  },
  {
    text: "May you remember the name the moment after it stops mattering that you forgot it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["name", "forget", "remember", "introduction", "face", "tip of tongue"],
    texture: "dry"
  },
  {
    text: "May you have the good scissors when you need them.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["scissors", "tool", "find", "drawer", "cut", "good", "where"],
    texture: "dry"
  },
  {
    text: "May your stomach settle before you have to stand up and pretend it has.",
    type: "anticipation",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["stomach", "nausea", "sick", "nervous", "pretend", "fine", "morning"],
    texture: "dry"
  },
  {
    text: "May the library have it on the shelf.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["library", "book", "shelf", "available", "borrow", "find", "read"],
    texture: "gentle"
  },
  {
    text: "May your parents be proud of something you actually did, not just something you told them about.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["parents", "proud", "truth", "honest", "achievement", "family", "approval"],
    texture: "sharp"
  },
  {
    text: "May the right person sit next to you on the plane.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["plane", "seat", "neighbor", "flight", "travel", "next to", "stranger"],
    texture: "warm"
  },
  {
    text: "May you get there before it closes, and may it be worth the hurry.",
    type: "anticipation",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["closing", "hurry", "store", "arrive", "time", "deadline", "last minute"],
    texture: "gentle"
  },
  {
    text: "May the person sitting across from you at dinner actually be there.",
    type: "anticipation",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["dinner", "present", "across", "attention", "there", "listen", "date"],
    texture: "warm"
  },
  {
    text: "May the snow wait until you're home, or until you've decided to stay out.",
    type: "tedium",
    time: "evening",
    season: "winter",
    avoidance: [],
    keywords: ["snow", "home", "weather", "stay", "decide", "winter", "storm"],
    texture: "gentle"
  },
  {
    text: "May your accent return to you in the old country, or may your new one be forgiven.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["accent", "language", "home", "country", "return", "foreign", "belong"],
    texture: "warm"
  },
  {
    text: "May the reunion not require you to become someone you're not anymore.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["reunion", "past", "role", "pretend", "become", "class", "family", "old"],
    texture: "sharp"
  },
  {
    text: "May the person who knew you before recognize you now.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["recognize", "before", "now", "change", "know", "see", "old friend"],
    texture: "warm"
  },
  {
    text: "May the dinner your mother makes taste the way you've been telling yourself it does.",
    type: "return",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["mother", "dinner", "home", "taste", "memory", "cook", "childhood", "family"],
    texture: "warm"
  },
  {
    text: "May you find the place unchanged enough to remember why you left.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["unchanged", "place", "left", "remember", "why", "home", "return", "visit"],
    texture: "cool"
  },
  {
    text: "May the heat break by evening.",
    type: "tedium",
    time: "afternoon",
    season: "summer",
    avoidance: [],
    keywords: ["heat", "summer", "hot", "break", "evening", "cool", "swelter"],
    texture: "cool"
  },
  {
    text: "May the light last long enough to finish what you started outside.",
    type: "tedium",
    time: "afternoon",
    season: "summer",
    avoidance: [],
    keywords: ["light", "outside", "finish", "yard", "garden", "project", "daylight"],
    texture: "warm"
  },
  {
    text: "May the afternoon nap be forgiven.",
    type: "tedium",
    time: "afternoon",
    season: "anytime",
    avoidance: [],
    keywords: ["nap", "afternoon", "rest", "guilt", "sleep", "tired", "lazy"],
    texture: "gentle"
  },
  {
    text: "May the garden forgive your neglect, and may the weeds be pullable.",
    type: "tedium",
    time: "anytime",
    season: "spring",
    avoidance: [],
    keywords: ["garden", "weeds", "neglect", "overgrown", "yard", "plant", "pull"],
    texture: "gentle"
  },
  {
    text: "May the seeds you planted come up, even though you forgot to water them.",
    type: "anticipation",
    time: "morning",
    season: "spring",
    avoidance: [],
    keywords: ["seeds", "plant", "water", "grow", "garden", "forget", "spring"],
    texture: "warm"
  },
  {
    text: "May the first warm day of the year find you with nothing you have to do.",
    type: "anticipation",
    time: "morning",
    season: "spring",
    avoidance: [],
    keywords: ["warm", "first", "year", "nothing", "free", "spring", "outside"],
    texture: "warm"
  },
  {
    text: "May the pollen not find you, or may the pharmacy be open.",
    type: "tedium",
    time: "morning",
    season: "spring",
    avoidance: [],
    keywords: ["pollen", "allergy", "sneeze", "pharmacy", "medicine", "spring", "season"],
    texture: "dry"
  },
  {
    text: "May the thaw reveal something other than what you buried.",
    type: "return",
    time: "anytime",
    season: "spring",
    avoidance: [],
    keywords: ["thaw", "buried", "reveal", "spring", "melt", "ground", "hidden"],
    texture: "cool"
  },
  {
    text: "May the first frost hold off until the tomatoes are done.",
    type: "tedium",
    time: "morning",
    season: "autumn",
    avoidance: [],
    keywords: ["frost", "tomatoes", "garden", "autumn", "harvest", "first", "freeze"],
    texture: "gentle"
  },
  {
    text: "May the leaves not fall until you've seen them turn.",
    type: "tedium",
    time: "afternoon",
    season: "autumn",
    avoidance: [],
    keywords: ["leaves", "fall", "turn", "color", "autumn", "tree", "miss"],
    texture: "warm"
  },
  {
    text: "May the jacket you bought last year still fit.",
    type: "return",
    time: "morning",
    season: "autumn",
    avoidance: [],
    keywords: ["jacket", "fit", "last year", "autumn", "clothes", "cold", "drawer"],
    texture: "dry"
  },
  {
    text: "May the apples be good this year.",
    type: "tedium",
    time: "anytime",
    season: "autumn",
    avoidance: [],
    keywords: ["apples", "harvest", "season", "fruit", "crop", "autumn", "pick"],
    texture: "warm"
  },
  {
    text: "May the darkness that comes early not find you alone with your worst thoughts.",
    type: "loss",
    time: "evening",
    season: "winter",
    avoidance: [],
    keywords: ["dark", "alone", "thoughts", "winter", "evening", "mind", "spiral"],
    texture: "sharp"
  },
  {
    text: "May the pipes not freeze.",
    type: "tedium",
    time: "night",
    season: "winter",
    avoidance: [],
    keywords: ["pipes", "freeze", "plumbing", "cold", "winter", "burst", "heat"],
    texture: "dry"
  },
  {
    text: "May the car start.",
    type: "tedium",
    time: "morning",
    season: "winter",
    avoidance: [],
    keywords: ["car", "start", "cold", "winter", "engine", "battery", "morning"],
    texture: "dry"
  },
  {
    text: "May the slippery patch be empty when you cross it.",
    type: "tedium",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["ice", "slippery", "fall", "cross", "walk", "winter", "slide"],
    texture: "dry"
  },
  {
    text: "May the long night hold something other than waiting.",
    type: "loss",
    time: "night",
    season: "winter",
    avoidance: [],
    keywords: ["long", "night", "waiting", "winter", "solstice", "dark"],
    texture: "cool"
  },
  {
    text: "May the cold make you glad for the body that suffers it.",
    type: "tedium",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["cold", "body", "alive", "feel", "winter", "warm", "inside"],
    texture: "warm"
  },
  {
    text: "May the thing you've been holding your breath for be worth the exhale.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["breath", "waiting", "finally", "relief", "exhale", "release", "tension"],
    texture: "warm"
  },
  {
    text: "May the old dog sleep through the fireworks.",
    type: "tedium",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["dog", "fireworks", "loud", "noise", "sleep", "scared", "old", "pet"],
    texture: "warm"
  },
  {
    text: "May the art be worth the museum.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["art", "museum", "worth", "exhibit", "gallery", "see", "expectation"],
    texture: "cool"
  },
  {
    text: "May you remember the dream that explains the feeling you woke up with.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["dream", "feeling", "woke", "morning", "explain", "remember", "strange"],
    texture: "cool"
  },
  {
    text: "May the oven be at the right temperature, and may the recipe be right about how long it takes.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["oven", "temperature", "recipe", "bake", "minutes", "cook", "timer"],
    texture: "dry"
  },
  {
    text: "May you finish what you started, or may you understand why you didn't.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["finish", "start", "abandon", "project", "incomplete", "why"],
    texture: "cool"
  },
  {
    text: "May the quiet be the kind that heals, not the kind that warns.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["quiet", "silence", "heal", "warn", "peace", "danger", "calm"],
    texture: "cool"
  },
  {
    text: "May your heart stay ahead of your doubts, even if it's only by a step.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["heart", "doubt", "ahead", "step", "forward", "courage", "fear"],
    texture: "warm"
  },
  {
    text: "May the mirror not show you what you already believe.",
    type: "anticipation",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["mirror", "see", "believe", "self", "reflection", "image", "morning"],
    texture: "cool"
  },
  {
    text: "May you believe the person who says you look tired, or may you prove them wrong without having to say so.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "look", "comment", "appearance", "prove", "rest"],
    texture: "dry"
  },
  {
    text: "May the invitation be genuine.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["invitation", "genuine", "include", "want", "welcome", "party", "event"],
    texture: "cool"
  },
  {
    text: "May you eat when you're hungry, and may the food be there.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["eat", "hungry", "food", "meal", "nourish", "sustenance"],
    texture: "gentle"
  },
  {
    text: "May the friend you haven't called yet understand, or may you finally pick up the phone.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: ["calling"],
    keywords: ["friend", "call", "haven't", "phone", "reach out", "guilt"],
    texture: "warm"
  },
  {
    text: "May the bend in the road be gentle.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["road", "bend", "gentle", "curve", "drive", "turn", "direction"],
    texture: "gentle"
  },
  {
    text: "May you not need to prove what you already know.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["prove", "know", "justify", "demonstrate", "worth", "competent"],
    texture: "cool"
  },
  {
    text: "May the new year feel new for at least a day.",
    type: "anticipation",
    time: "morning",
    season: "winter",
    avoidance: [],
    keywords: ["new year", "fresh", "start", "resolution", "change", "january", "beginning"],
    texture: "cool"
  },
  {
    text: "May the prayer you don't believe in be answered anyway.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["prayer", "believe", "faith", "doubt", "hope", "anyway", "answer"],
    texture: "warm"
  },
  {
    text: "May your back not go out until you're somewhere it can go out.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["back", "pain", "body", "spasm", "somewhere", "safe"],
    texture: "dry"
  },
  {
    text: "May you be the first one to mention the thing no one is saying, and may it be a relief.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["mention", "saying", "unspoken", "elephant", "room", "relief", "honest", "acknowledge"],
    texture: "sharp"
  },
  {
    text: "May the ghost be kind, if it comes.",
    type: "loss",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["ghost", "visit", "night", "haunt", "dream", "memory", "presence"],
    texture: "cool"
  },
  {
    text: "May the water be warm when the power comes back.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["water", "warm", "power", "outage", "shower", "electricity", "come back"],
    texture: "gentle"
  },
  {
    text: "May the bus arrive while you're still optimistic.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["bus", "arrive", "wait", "optimistic", "transit", "schedule", "stop"],
    texture: "dry"
  },
  {
    text: "May you not miss the moment because you were documenting it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["document", "photo", "camera", "phone", "capture", "miss", "present"],
    texture: "sharp"
  },
  {
    text: "May the scarf be long enough.",
    type: "tedium",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["scarf", "cold", "winter", "long", "wrap", "warm"],
    texture: "gentle"
  },
  {
    text: "May your lungs remember how to breathe without you telling them to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["breathe", "lungs", "anxiety", "panic", "automatic", "body", "remember"],
    texture: "gentle"
  },
  {
    text: "May you never need the thing you packed just in case.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["packed", "just in case", "emergency", "prepare", "never need", "bag"],
    texture: "dry"
  },
  {
    text: "May the scarf be where you left it.",
    type: "tedium",
    time: "morning",
    season: "winter",
    avoidance: [],
    keywords: ["scarf", "lost", "where", "winter", "coat", "leave"],
    texture: "dry"
  },
  {
    text: "May the stranger who sees you cry assume it's allergies.",
    type: "loss",
    time: "anytime",
    season: "spring",
    avoidance: [],
    keywords: ["stranger", "cry", "allergies", "public", "tears", "season"],
    texture: "dry"
  },
  {
    text: "May the ladder be steady and the top shelf be worth reaching.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ladder", "steady", "top shelf", "reach", "safe", "tall", "climb"],
    texture: "dry"
  },
  {
    text: "May you find the book you started last winter and may you remember what was happening.",
    type: "tedium",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["book", "started", "winter", "remember", "finish", "story", "continue"],
    texture: "warm"
  },
  {
    text: "May your alarm clock break and may your body know when to wake.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["alarm", "clock", "wake", "body", "morning", "sleep", "natural"],
    texture: "gentle"
  },
  {
    text: "May the wind be warm enough that you don't have to decide about the window.",
    type: "tedium",
    time: "anytime",
    season: "spring",
    avoidance: [],
    keywords: ["wind", "window", "warm", "decide", "open", "spring", "breeze"],
    texture: "gentle"
  },
  {
    text: "May the fly find its own way out.",
    type: "tedium",
    time: "anytime",
    season: "summer",
    avoidance: [],
    keywords: ["fly", "bug", "insect", "window", "out", "summer", "buzz"],
    texture: "dry"
  },
  {
    text: "May you find the front row seat that doesn't require you to be brave.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["front row", "seat", "brave", "concert", "show", "performance"],
    texture: "warm"
  },
  {
    text: "May the river be low enough to cross, or may you not need to.",
    type: "tedium",
    time: "anytime",
    season: "spring",
    avoidance: [],
    keywords: ["river", "cross", "flood", "bridge", "water", "season"],
    texture: "cool"
  },
  {
    text: "May the train not leave without you, or may it not be yours.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["train", "leave", "miss", "yours", "platform", "schedule"],
    texture: "dry"
  },
  {
    text: "May you not be the topic of conversation in the room you just left.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["conversation", "left", "room", "topic", "talk about", "behind", "gossip"],
    texture: "sharp"
  },
  {
    text: "May the rain stop long enough for you to get where you're going, or may you not mind getting wet.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["rain", "stop", "wet", "weather", "walk", "mind", "dry"],
    texture: "gentle"
  },
  {
    text: "May the story you tell about yourself still be true.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["story", "tell", "yourself", "true", "narrative", "identity", "still"],
    texture: "cool"
  },
  {
    text: "May you be able to afford the thing that will actually help.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afford", "help", "cost", "price", "need", "money", "buy"],
    texture: "sharp"
  },
  {
    text: "May the stain come out.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["stain", "clean", "wash", "remove", "cloth", "shirt", "spill"],
    texture: "dry"
  },
  {
    text: "May you find the thing you borrowed before they ask for it back.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["borrowed", "return", "find", "ask", "lend", "thing"],
    texture: "dry"
  },
  {
    text: "May the birthday feel like a beginning, not a countdown.",
    type: "anticipation",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["birthday", "beginning", "countdown", "celebrate", "age", "year"],
    texture: "warm"
  },
  {
    text: "May you still be proud of the thing you made, even after you've shown it to someone.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["proud", "made", "show", "create", "share", "work", "art"],
    texture: "warm"
  },
  {
    text: "May the complaint you've been drafting never need to be sent.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["complaint", "draft", "send", "resolve", "fix", "customer"],
    texture: "cool"
  },
  {
    text: "May you find the tools you need before the store closes.",
    type: "tedium",
    time: "afternoon",
    season: "anytime",
    avoidance: [],
    keywords: ["tools", "store", "close", "project", "fix", "hardware", "need"],
    texture: "dry"
  },
  {
    text: "May the person who loves you know when to stop asking questions.",
    type: "return",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "questions", "stop", "asking", "enough", "partner"],
    texture: "warm"
  },
  {
    text: "May you not need to perform your grief for it to be real.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["perform", "grief", "real", "show", "prove", "feel", "enough"],
    texture: "sharp"
  },
  {
    text: "May the universe not notice your small rebellion, or may it be amused.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["universe", "rebellion", "amused", "break rules", "small", "defy"],
    texture: "dry"
  },
  {
    text: "May you not be alone with the thing you just realized.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "realized", "just", "understood", "truth", "moment", "sink in"],
    texture: "sharp"
  },
  {
    text: "May the night shift end before you forget what daytime looks like.",
    type: "tedium",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["night shift", "work", "daytime", "end", "long", "dark", "clock"],
    texture: "dry"
  },
  {
    text: "May you recognize the feeling when it comes back, and may you not be afraid of it.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["feeling", "back", "recognize", "afraid", "return", "familiar", "emotion"],
    texture: "warm"
  },
  {
    text: "May the water be calm enough that you can see the bottom.",
    type: "tedium",
    time: "anytime",
    season: "summer",
    avoidance: [],
    keywords: ["water", "calm", "bottom", "see", "clear", "lake", "ocean", "swim"],
    texture: "cool"
  },
  {
    text: "May the cat come home.",
    type: "loss",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["cat", "home", "lost", "pet", "missing", "animal", "wander"],
    texture: "warm"
  },
  {
    text: "May the ice be thick enough, or may you not need to find out.",
    type: "tedium",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["ice", "thick", "cross", "winter", "lake", "frozen", "safe"],
    texture: "cool"
  },
  {
    text: "May the photograph be in focus, and may the light have been kind.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["photograph", "focus", "light", "kind", "camera", "moment", "capture"],
    texture: "warm"
  },
  {
    text: "May the spring not arrive until you're ready to be moved by it.",
    type: "anticipation",
    time: "anytime",
    season: "winter",
    avoidance: [],
    keywords: ["spring", "ready", "moved", "arrive", "winter", "wait", "season"],
    texture: "cool"
  },
  {
    text: "May your feet find the path, even when your eyes can't.",
    type: "tedium",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["path", "feet", "eyes", "dark", "find", "walk", "trust"],
    texture: "warm"
  },
  {
    text: "May you trust the silence between heartbeats more than the noise around you.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["silence", "heartbeats", "noise", "trust", "calm", "still", "listen"],
    texture: "cool"
  },
  {
    text: "May the one unbreakable thing stay unbroken.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["unbreakable", "broken", "stay", "fragile", "hold", "keep", "protect"],
    texture: "sharp"
  },
  {
    text: "May you wake before the alarm, rested, and may the morning be worth it.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["wake", "alarm", "rested", "morning", "worth", "early", "refresh"],
    texture: "warm"
  },
  {
    text: "May the zipper not catch, just this once.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["zipper", "catch", "jacket", "bag", "stuck", "break", "fix"],
    texture: "dry"
  },
  {
    text: "May the thing that's been stuck become unstuck, or may you learn to live around it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["stuck", "unstuck", "live", "around", "jam", "window", "jar", "lid"],
    texture: "cool"
  },
  {
    text: "May you have been right to wait.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wait", "right", "patient", "delay", "hold", "decision"],
    texture: "cool"
  },
  {
    text: "May the bridge hold for one more crossing.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["bridge", "hold", "cross", "old", "trust", "structure"],
    texture: "cool"
  },
  {
    text: "May the small animal you almost hit be faster than you thought.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["animal", "hit", "road", "drive", "fast", "swerve", "miss"],
    texture: "sharp"
  },
  {
    text: "May you not need to rehearse goodbye in order to mean it.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["goodbye", "rehearse", "mean", "leave", "part", "farewell", "last"],
    texture: "sharp"
  },
  {
    text: "May the last light hold while you find the switch.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["light", "switch", "dark", "find", "last", "evening", "fade"],
    texture: "gentle"
  },
  {
    text: "May you be brave in the way that counts, even if no one sees it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["brave", "counts", "see", "quiet", "internal", "invisible", "courage"],
    texture: "warm"
  },
  {
    text: "May you not have to become someone else to survive this.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["survive", "become", "someone else", "change", "lose self", "endure"],
    texture: "sharp"
  },
  {
    text: "May the library still be open when you get there.",
    type: "tedium",
    time: "afternoon",
    season: "anytime",
    avoidance: [],
    keywords: ["library", "open", "arrive", "hours", "close", "book"],
    texture: "gentle"
  },
  {
    text: "May the train arrive before you talk yourself out of going.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["train", "arrive", "talk out", "going", "doubt", "courage", "depart"],
    texture: "warm"
  },
  {
    text: "May you be the kind of person someone calls when they need to not be alone at 3 AM.",
    type: "return",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["call", "alone", "3 am", "need", "person", "friend", "night"],
    texture: "warm"
  },
  {
    text: "May the match light on the first strike.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["match", "light", "strike", "fire", "candle", "first"],
    texture: "dry"
  },
  {
    text: "May you not need to be fixed, and may no one try.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["fixed", "broken", "repair", "need", "whole", "enough"],
    texture: "sharp"
  },
  {
    text: "May the earworm be a song you actually like.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["earworm", "song", "stuck", "head", "music", "repeat", "melody"],
    texture: "warm"
  },
  {
    text: "May you remember where you parked before you need to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["parked", "remember", "car", "lot", "where", "find", "garage"],
    texture: "dry"
  },
  {
    text: "May the thing you need to remember come back to you at the right moment, not three hours later.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["remember", "right moment", "later", "forgot", "recall", "thought", "slip"],
    texture: "dry"
  },
  {
    text: "May the ghost that visits be someone you loved.",
    type: "loss",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["ghost", "visit", "loved", "night", "dream", "presence", "haunt"],
    texture: "warm"
  },
  {
    text: "May the bridge you burned not be the one you need.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["bridge", "burned", "need", "regret", "past", "destroy", "relationship"],
    texture: "sharp"
  },
  {
    text: "May you get the chance to be the person you promised you'd be.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["chance", "promised", "person", "become", "vow", "intention", "follow through"],
    texture: "warm"
  },
  {
    text: "May you have the exact change for the meter.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["change", "meter", "parking", "coins", "exact", "money"],
    texture: "dry"
  },
  {
    text: "May the deadline pass without anyone noticing you barely made it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: ["deadline"],
    keywords: ["deadline", "barely", "made", "pass", "notice", "submit"],
    texture: "dry"
  },
  {
    text: "May the prayer you forgot to say be heard regardless.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["prayer", "forgot", "heard", "regardless", "faith", "grace"],
    texture: "warm"
  },
  {
    text: "May the light find you before the dark settles in.",
    type: "loss",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["light", "dark", "settle", "evening", "before", "find", "shadow"],
    texture: "warm"
  },
  {
    text: "May you be forgiven for the thing you didn't do, but should have.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgiven", "didn't", "should", "omission", "regret", "guilt", "failed"],
    texture: "cool"
  },
  {
    text: "May the sign be clear, or may you not need a sign.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["sign", "clear", "direction", "choose", "path", "decide", "guide"],
    texture: "cool"
  },
  {
    text: "May you arrive before you're expected, and may there be nowhere you need to be next.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["arrive", "expected", "nowhere", "next", "time", "free", "schedule"],
    texture: "warm"
  },
  {
    text: "May the elevator arrive before you give up and take the stairs.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["elevator", "arrive", "stairs", "wait", "building", "floor", "lift"],
    texture: "dry"
  },
  {
    text: "May you not need to be strong for the people who should be strong for you.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["strong", "people", "should", "support", "burden", "carry", "alone"],
    texture: "sharp"
  },
  {
    text: "May the repair be covered by the warranty you almost didn't buy.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["repair", "warranty", "covered", "fix", "broken", "pay"],
    texture: "dry"
  },
  {
    text: "May the snow day be real and not just a rumor.",
    type: "anticipation",
    time: "morning",
    season: "winter",
    avoidance: [],
    keywords: ["snow day", "real", "rumor", "cancel", "school", "stay home"],
    texture: "warm"
  },
  {
    text: "May you find your way to the place where what you know matters more than what you don't.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["find", "way", "know", "matter", "place", "belong", "competence"],
    texture: "warm"
  },
  {
    text: "May the flood not reach the things that can't be replaced.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["flood", "reach", "replace", "water", "damage", "save", "keep"],
    texture: "sharp"
  },
  {
    text: "May the book you're looking for be on the first shelf you check.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["book", "shelf", "find", "look", "check", "search", "library"],
    texture: "gentle"
  },
  {
    text: "May the wound heal before the scar tissue makes you stiff.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wound", "heal", "scar", "stiff", "body", "recovery", "hurt"],
    texture: "warm"
  },
  {
    text: "May you have been kind enough that the people you leave behind remember kindness first.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["kind", "remember", "kindness", "leave", "behind", "legacy", "after"],
    texture: "warm"
  },
  {
    text: "May the distraction be worth what it distracts you from.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["distraction", "worth", "distract", "avoid", "escape", "entertain"],
    texture: "cool"
  },
  {
    text: "May you still know wonder, even after everything.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wonder", "still", "after", "everything", "capacity", "awe", "marvel"],
    texture: "warm"
  },
  {
    text: "May the sunset be visible from where you're stuck in traffic.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["sunset", "visible", "traffic", "stuck", "sky", "evening", "commute"],
    texture: "warm"
  },
  {
    text: "May you not have to choose between the two things you need.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["choose", "two", "need", "both", "impossible", "either", "or"],
    texture: "sharp"
  },
  {
    text: "May the complaint fall on ears that were already planning to help.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["complaint", "ears", "help", "listen", "receptive", "understand"],
    texture: "warm"
  },
  {
    text: "May the last slice be yours, and may no one else want it.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["slice", "yours", "pizza", "cake", "share", "last", "food"],
    texture: "dry"
  },
  {
    text: "May the thing that broke be the thing you were meaning to replace anyway.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broke", "replace", "broken", "thing", "new", "excuse", "upgrade"],
    texture: "dry"
  },
  {
    text: "May the person you miss miss you back, and may neither of you need to say it first.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["miss", "miss you", "back", "first", "mutual", "longing", "distance"],
    texture: "warm"
  },
  {
    text: "May the stain be on the part of the shirt that tucks in.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["stain", "shirt", "tuck", "hide", "lunch", "spill", "food"],
    texture: "dry"
  },
  {
    text: "May you never need the emergency contact you listed.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["emergency", "contact", "listed", "form", "safe", "hospital"],
    texture: "cool"
  },
  {
    text: "May you find the lid that fits, and may it seal.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lid", "fit", "seal", "container", "jar", "match", "close"],
    texture: "dry"
  },
  {
    text: "May you forgive yourself first, since you're the one who has to live with you.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "yourself", "first", "live", "self", "mercy"],
    texture: "warm"
  },
  {
    text: "May the thing you've been meaning to do be easier than you've been imagining.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["meaning to", "do", "easier", "imagining", "procrastinate", "task", "dread"],
    texture: "gentle"
  },
  {
    text: "May the wind blow in the direction you're already walking.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wind", "walk", "direction", "help", "push", "ease", "effort"],
    texture: "gentle"
  },
  {
    text: "May you not forget the feeling of being held, even when you are alone.",
    type: "loss",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["held", "forget", "alone", "touch", "remember", "embrace", "night"],
    texture: "warm"
  },
  {
    text: "May the next person you see smile at you, and may you smile back without thinking.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["smile", "person", "see", "next", "stranger", "kindness", "exchange"],
    texture: "warm"
  },
  {
    text: "May the recipe work without the ingredient you don't have.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["recipe", "ingredient", "missing", "substitute", "cook", "improvise"],
    texture: "dry"
  },
  {
    text: "May the elevator be on your floor when you get there.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["elevator", "floor", "wait", "arrive", "lobby", "building"],
    texture: "dry"
  },
  {
    text: "May the stranger who helped you know that they did.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["stranger", "helped", "know", "did", "gratitude", "unknown", "pass"],
    texture: "warm"
  },
  {
    text: "May you not be the one to make it weird.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["weird", "awkward", "make", "social", "situation", "tension"],
    texture: "dry"
  },
  {
    text: "May you find your way home without GPS, and may the route be shorter than you remember.",
    type: "return",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["home", "GPS", "find", "way", "route", "shorter", "remember", "drive"],
    texture: "warm"
  },
  {
    text: "May the person you're about to meet already know your name, and be glad of it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["meet", "name", "glad", "introduction", "know", "recognize", "expect"],
    texture: "warm"
  },
  {
    text: "May the rain come after the picnic, or not at all.",
    type: "tedium",
    time: "anytime",
    season: "spring",
    avoidance: [],
    keywords: ["rain", "picnic", "after", "outdoor", "plan", "weather", "spring"],
    texture: "gentle"
  },
  {
    text: "May you have the right adapter, and may it be in the bag you brought.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["adapter", "right", "bag", "charger", "travel", "plug", "cord", "pack"],
    texture: "dry"
  },
  {
    text: "May you outgrow the thing that used to fit, and may you notice before you try to wear it again.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["outgrow", "fit", "wear", "change", "size", "clothes", "old", "grow"],
    texture: "cool"
  },
  {
    text: "May you be brave enough to ask, and may the answer be worth the asking.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ask", "answer", "worth", "question", "brave", "risk", "bold"],
    texture: "warm"
  },
  {
    text: "May the silence after the argument be the kind that heals, not the kind that hardens.",
    type: "loss",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["silence", "argument", "heal", "harden", "fight", "after", "tension"],
    texture: "warm"
  },
  {
    text: "May you not need to explain the joke, and may they laugh in the right places.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["joke", "explain", "laugh", "humor", "timing", "audience"],
    texture: "dry"
  },
  {
    text: "May the bus stop be exactly where you think it is.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["bus stop", "where", "find", "correct", "stop", "corner", "route"],
    texture: "dry"
  },
  {
    text: "May you be the kind of tired that a nap can fix, not the kind that sleep makes worse.",
    type: "tedium",
    time: "afternoon",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "nap", "fix", "sleep", "worse", "rest", "afternoon"],
    texture: "cool"
  },
  {
    text: "May you not need the backup plan, but may you have one.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["backup", "plan", "need", "have", "prepare", "contingency", "safety"],
    texture: "cool"
  },
  {
    text: "May the last page be the best one.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["last page", "best", "book", "read", "finish", "end", "story"],
    texture: "warm"
  },
  {
    text: "May you say what you mean before the moment passes, and may it be kinder than what you almost said.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["say", "mean", "moment", "passes", "kind", "almost", "words"],
    texture: "warm"
  },
  {
    text: "May the meeting be shorter than scheduled, and may the extra time be yours.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["meeting", "shorter", "scheduled", "extra", "time", "calendar"],
    texture: "dry"
  },
  {
    text: "May you have the exact amount of energy the day requires, no more and no less.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["energy", "exact", "day", "requires", "enough", "spare", "match"],
    texture: "cool"
  },
  {
    text: "May the morning not ask too much of you before coffee.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["morning", "coffee", "ask", "too much", "before", "demand"],
    texture: "gentle"
  },
  {
    text: "May you never need to use the thing you learned from the worst thing that happened to you.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["learned", "worst", "happen", "use", "prepare", "trauma", "skill"],
    texture: "cool"
  },
  {
    text: "May the things you carry be worth the weight.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["carry", "weight", "worth", "bag", "load", "burden", "pack"],
    texture: "cool"
  },
  {
    text: "May the right words come to you when you need them, and may the wrong ones stay where they belong.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["words", "right", "wrong", "say", "speak", "think", "mouth"],
    texture: "warm"
  },
  {
    text: "May the thing you've been holding onto be worth the grip, or may you find the strength to open your hand.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["holding", "grip", "open", "hand", "let go", "release", "clench", "grasp"],
    texture: "warm"
  },
  {
    text: "May the people who love you be patient with the person you're becoming.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "patient", "becoming", "change", "grow", "tolerate", "accept"],
    texture: "warm"
  },
  {
    text: "May the moment you're about to have be worthy of the moment you're about to lose.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["moment", "worthy", "lose", "trade", "exchange", "present", "time"],
    texture: "cool"
  },
  {
    text: "May the right key be the first one you try, and may it turn without argument.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["key", "first", "try", "turn", "lock", "door", "open", "without"],
    texture: "gentle"
  },
  {
    text: "May you recognize the people who are good for you before you need them to be.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["recognize", "good", "before", "need", "people", "friend", "notice"],
    texture: "warm"
  },
  {
    text: "May the thing you've been waiting for arrive gently, not all at once.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["waiting", "arrive", "gently", "all at once", "gradual", "ready"],
    texture: "gentle"
  },
  {
    text: "May you be wrong about what you think they meant.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["think", "meant", "wrong", "assume", "interpret", "misunderstand", "charitable"],
    texture: "cool"
  },
  {
    text: "May the promise you made still be true when it comes time to keep it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["promise", "made", "true", "keep", "honor", "vow", "commit"],
    texture: "warm"
  },
  {
    text: "May the things you're good at be the things that matter today.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["good at", "matter", "today", "skill", "strength", "useful", "talent"],
    texture: "warm"
  },
  {
    text: "May you not need the luck you've been counting on.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["luck", "counting", "need", "chance", "fortune", "rely"],
    texture: "cool"
  },
  {
    text: "May the next three hours be the kind that make the last three worth it.",
    type: "tedium",
    time: "afternoon",
    season: "anytime",
    avoidance: [],
    keywords: ["hours", "worth", "last", "next", "afternoon", "day", "redeem"],
    texture: "cool"
  },
  {
    text: "May the person you're becoming not be someone you'd be afraid to meet.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["becoming", "afraid", "meet", "future self", "stranger", "grow"],
    texture: "cool"
  },
  {
    text: "May the seat you choose be the one with the view, or at least the one without the glare.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["seat", "view", "glare", "choose", "window", "position", "table"],
    texture: "dry"
  },
  {
    text: "May the change you're afraid of be the one that saves you.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["change", "afraid", "saves", "transform", "fear", "necessary"],
    texture: "warm"
  },
  {
    text: "May the thing you can't say be heard anyway.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["can't say", "heard", "unsaid", "know", "understand", "silence", "wordless"],
    texture: "warm"
  },
  {
    text: "May the person you've become be someone the person you were would be proud of, or at least intrigued by.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["become", "were", "proud", "intrigued", "self", "past", "who"],
    texture: "cool"
  },
  {
    text: "May you never be so certain that you stop looking, and never so uncertain that you stop walking.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["certain", "uncertain", "looking", "walking", "balance", "doubt", "confidence"],
    texture: "cool"
  },
  {
    text: "May you find the words for the thing you've been feeling, and may they fit.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["words", "feeling", "find", "fit", "name", "express", "describe"],
    texture: "warm"
  },
  {
    text: "May you be kind when you're tired, and may the people around you return the favor.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["kind", "tired", "favor", "return", "evening", "patience", "gentle"],
    texture: "warm"
  },
  {
    text: "May the light be flattering, just this once.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["light", "flattering", "photo", "mirror", "see", "face"],
    texture: "dry"
  },
  {
    text: "May you not need to fake it, and may the real thing be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["fake", "real", "enough", "authentic", "pretend", "genuine"],
    texture: "warm"
  },
  {
    text: "May you trust yourself to know the difference between persistence and stubbornness.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["persistence", "stubbornness", "difference", "know", "trust", "discern"],
    texture: "cool"
  },
  {
    text: "May the small kindness you did yesterday be the thing someone remembers today.",
    type: "return",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["kindness", "yesterday", "remembers", "today", "small", "good deed"],
    texture: "warm"
  },
  {
    text: "May the distance between here and there be shorter than you think.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["distance", "shorter", "think", "far", "close", "closer", "journey"],
    texture: "warm"
  },
  {
    text: "May the pain you're feeling be the kind that means something is healing, not the kind that means something is wrong.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["pain", "healing", "wrong", "meaning", "growth", "recovery", "hurt"],
    texture: "warm"
  },
  {
    text: "May you find the place where the WiFi is fast and the coffee is free.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wifi", "fast", "coffee", "free", "cafe", "work", "laptop"],
    texture: "dry"
  },
  {
    text: "May the next song be the one you didn't know you needed to hear.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["song", "need", "hear", "next", "music", "surprise", "radio", "shuffle"],
    texture: "warm"
  },
  {
    text: "May the thing you're about to do be worth the courage it took to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["about to", "do", "worth", "courage", "start", "begin", "brave"],
    texture: "warm"
  },
  {
    text: "May you be the person someone else is thinking of right now, and may it help.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["someone", "thinking", "help", "thought", "remember", "mind"],
    texture: "warm"
  },
  {
    text: "May the argument you're about to have end in something other than silence.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["argument", "have", "end", "silence", "resolve", "fight", "talk"],
    texture: "warm"
  },
  {
    text: "May you be strong enough to be gentle.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["strong", "gentle", "soft", "power", "restraint", "force"],
    texture: "warm"
  },
  {
    text: "May the trust you give be returned, or may you learn without paying too much for the lesson.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "returned", "learn", "lesson", "cost", "give", "vulnerability"],
    texture: "cool"
  },
  {
    text: "May the night be the kind that holds you, not the kind that swallows.",
    type: "loss",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["night", "holds", "swallows", "dark", "safe", "embrace", "consume"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to begin, and patient enough to continue.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["brave", "begin", "patient", "continue", "start", "persevere", "endurance"],
    texture: "warm"
  },
  {
    text: "May the thing you lost come back to you as something you found.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "come back", "found", "return", "transform", "recover"],
    texture: "warm"
  },
  {
    text: "May you never need to prove what you're worth to someone who should already know.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["prove", "worth", "already know", "value", "deserve", "convince"],
    texture: "sharp"
  },
  {
    text: "May the thing you're afraid to say be the thing someone needs to hear.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "say", "need", "hear", "truth", "difficult", "honest"],
    texture: "warm"
  },
  {
    text: "May you find the grace to let the small things go so you can carry the things that matter.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["grace", "small things", "go", "carry", "matter", "prioritize", "release"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think they're saying behind your back.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["saying", "behind", "back", "gossip", "think", "wrong", "assume"],
    texture: "cool"
  },
  {
    text: "May the path you're on be the right one, even if it doesn't feel like it yet.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["path", "right", "feel", "yet", "trust", "journey", "direction"],
    texture: "warm"
  },
  {
    text: "May you not need to be perfect, and may the people around you not need you to be.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["perfect", "need", "people", "around", "enough", "standard"],
    texture: "warm"
  },
  {
    text: "May you find the stillness in the middle of the noise, and may it be enough.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["stillness", "noise", "middle", "enough", "quiet", "chaos", "peace"],
    texture: "cool"
  },
  {
    text: "May the thing you're dreading be easier than you think, and may you be proud of how you handled it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["dreading", "easier", "think", "proud", "handle", "face", "challenge"],
    texture: "warm"
  },
  {
    text: "May you not have to choose between who you are and who you need to be.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["choose", "who", "are", "need", "be", "authentic", "role", "identity"],
    texture: "cool"
  },
  {
    text: "May the coffee be strong enough to help and weak enough to let you sleep tonight.",
    type: "tedium",
    time: "afternoon",
    season: "anytime",
    avoidance: [],
    keywords: ["coffee", "strong", "weak", "sleep", "tonight", "balance", "afternoon"],
    texture: "dry"
  },
  {
    text: "May you be the kind of person you'd want to sit next to on a long flight.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["sit", "next", "flight", "long", "person", "kind", "travel", "companion"],
    texture: "warm"
  },
  {
    text: "May the person you're worried about be fine, and may they tell you so.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["worried", "fine", "tell", "concern", "reassure", "loved one"],
    texture: "warm"
  },
  {
    text: "May you not lose the ability to be surprised by goodness.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["surprised", "goodness", "wonder", "cynicism", "hope", "capacity"],
    texture: "warm"
  },
  {
    text: "May the wound heal clean, and may the scar remind you of something worth surviving.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wound", "heal", "scar", "remind", "survive", "worth", "mark"],
    texture: "warm"
  },
  {
    text: "May you not be too late for the thing that waits for you.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "waits", "time", "arrive", "opportunity", "chance"],
    texture: "warm"
  },
  {
    text: "May you find the thing you were looking for in the last place you look, and may it be the first place you tried.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["looking", "find", "last place", "first", "search", "locate"],
    texture: "warm"
  },
  {
    text: "May you have enough, and may you know it when you do.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["enough", "know", "when", "sufficient", "content", "recognize"],
    texture: "cool"
  },
  {
    text: "May the thing that's been weighing on you turn out to be lighter than you thought.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["weighing", "lighter", "thought", "burden", "lift", "easier"],
    texture: "warm"
  },
  {
    text: "May you be the person who walks into the room and makes it lighter, not heavier.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["walk", "room", "lighter", "heavier", "presence", "impact", "mood"],
    texture: "warm"
  },
  {
    text: "May you never need to use the emergency fund, but may you always have one.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["emergency fund", "need", "have", "savings", "money", "security"],
    texture: "cool"
  },
  {
    text: "May the person you're becoming be someone you'd want to know.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["becoming", "want", "know", "future self", "grow", "meet"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to ask for what you need, and may you receive it without guilt.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ask", "need", "receive", "guilt", "brave", "accept", "help"],
    texture: "warm"
  },
  {
    text: "May the thing that broke be the thing that lets the light in.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broke", "light", "broken", "crack", "window", "frame"],
    texture: "warm"
  },
  {
    text: "May you not need to be reminded of what you already know.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["reminded", "already", "know", "wisdom", "internal", "repeat"],
    texture: "cool"
  },
  {
    text: "May you have the right words for the wrong moment, and may they work anyway.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["words", "wrong", "moment", "work", "anyway", "imperfect", "enough"],
    texture: "cool"
  },
  {
    text: "May the thing you've been putting off take less time than you thought it would.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["putting off", "less time", "thought", "task", "procrastinate", "quick"],
    texture: "dry"
  },
  {
    text: "May the person you're thinking of be thinking of you too.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["thinking", "too", "miss", "connection", "synchronize", "wonder"],
    texture: "warm"
  },
  {
    text: "May you be gentle with yourself today, and may tomorrow forgive what today couldn't fix.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["gentle", "today", "tomorrow", "forgive", "fix", "mercy"],
    texture: "warm"
  },
  {
    text: "May the moment you're in be enough, and may you know it before it passes.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["moment", "enough", "know", "passes", "present", "aware", "now"],
    texture: "warm"
  },
  {
    text: "May you not need to earn the right to rest, and may you rest anyway.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["earn", "rest", "right", "deserve", "tired", "permission"],
    texture: "warm"
  },
  {
    text: "May you be the kind of brave that doesn't look brave from the outside.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["brave", "outside", "quiet", "internal", "invisible", "strength"],
    texture: "warm"
  },
  {
    text: "May the small thing you're about to do matter more than you think it will.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["small", "do", "matter", "more", "impact", "ripple", "gesture"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think you deserve.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["deserve", "wrong", "think", "worth", "better", "expectation"],
    texture: "cool"
  },
  {
    text: "May you find the courage to begin before you're ready, and may readiness come in the doing.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["courage", "begin", "ready", "doing", "start", "prepare"],
    texture: "warm"
  },
  {
    text: "May the distance between who you are and who you want to be be shorter than you think.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["distance", "who", "are", "want", "shorter", "think", "gap"],
    texture: "warm"
  },
  {
    text: "May you be patient with the time it takes, and may the result be worth the wait.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["patient", "time", "result", "worth", "wait", "delay", "patience"],
    texture: "warm"
  },
  {
    text: "May you not need to be strong all the time, and may someone notice when you can't be.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["strong", "all the time", "notice", "can't", "weak", "support"],
    texture: "warm"
  },
  {
    text: "May the road ahead be straight enough to see where it's going and winding enough to be interesting.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["road", "straight", "winding", "see", "interesting", "balance"],
    texture: "cool"
  },
  {
    text: "May you find the thing you didn't know you were looking for, and may it be exactly what you needed.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["didn't know", "looking", "needed", "discover", "surprise", "unexpected"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is impossible.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["impossible", "wrong", "think", "limit", "capability", "surprise"],
    texture: "warm"
  },
  {
    text: "May you not need to carry everything alone, and may you learn to ask before you break.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["carry", "alone", "ask", "break", "burden", "help", "support"],
    texture: "warm"
  },
  {
    text: "May you be the kind of tired that feels earned, not the kind that feels stolen.",
    type: "tedium",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "earned", "stolen", "evening", "rest", "deserve"],
    texture: "cool"
  },
  {
    text: "May the day ahead be the kind you can handle, and may you know it by noon.",
    type: "tedium",
    time: "morning",
    season: "anytime",
    avoidance: [],
    keywords: ["day", "ahead", "handle", "noon", "manage", "survive", "cope"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think you're capable of, and may you find out gently.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["capable", "wrong", "gently", "discover", "strength", "surprise"],
    texture: "warm"
  },
  {
    text: "May the small mercy be enough, and may you recognize it when it comes.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["mercy", "small", "enough", "recognize", "comes", "grace"],
    texture: "warm"
  },
  {
    text: "May you not need to be everything to everyone, and may the people who need you be patient.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["everything", "everyone", "patient", "enough", "pressure", "expectation"],
    texture: "warm"
  },
  {
    text: "May you find the place where you don't have to explain yourself, and may you stay there.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["place", "explain", "stay", "belong", "accept", "understood"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is broken beyond repair.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "repair", "wrong", "think", "fix", "restore", "beyond"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to say the thing that needs to be said, and kind enough to say it gently.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["brave", "say", "needs", "said", "kind", "gently", "truth", "compassion"],
    texture: "warm"
  },
  {
    text: "May you not need to be the one who holds it all together, and may it hold together anyway.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hold", "together", "one", "anyway", "pressure", "responsibility"],
    texture: "warm"
  },
  {
    text: "May the thing you're waiting for be worth the wait, and may it come before you stop believing it will.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["waiting", "worth", "come", "stop believing", "hope", "patience", "faith"],
    texture: "warm"
  },
  {
    text: "May you find the thing you need in the place you least expect to find it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["find", "need", "least expect", "surprise", "discover", "unexpected"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is the end.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["end", "wrong", "think", "finish", "over", "conclusion"],
    texture: "warm"
  },
  {
    text: "May you be strong enough to hold on, and wise enough to know when to let go.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["strong", "hold", "wise", "let go", "know", "when", "discern"],
    texture: "warm"
  },
  {
    text: "May the thing you're afraid to lose be the thing that stays.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "lose", "stays", "keep", "hold", "fear"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think you can't do.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["can't", "do", "wrong", "think", "capability", "limit", "able"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to take the road less traveled, and may it lead somewhere worth going.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["road", "less traveled", "lead", "worth", "going", "brave", "choose"],
    texture: "warm"
  },
  {
    text: "May you find the strength to do the thing you're afraid to do, and may you find it within yourself.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["strength", "do", "afraid", "within", "yourself", "courage", "internal"],
    texture: "warm"
  },
  {
    text: "May you be the kind of person you would want your children to become, or may you be forgiven for the difference.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["children", "become", "forgiven", "difference", "model", "parent"],
    texture: "warm"
  },
  {
    text: "May the thing you're holding onto be worth the cost of keeping it, or may you find the grace to let it go.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["holding", "worth", "cost", "keeping", "grace", "let go", "release"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think you know about yourself.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["know", "yourself", "wrong", "think", "discover", "surprise", "identity"],
    texture: "cool"
  },
  {
    text: "May you find the peace you're looking for in the place you already are.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["peace", "looking", "place", "already", "here", "present", "content"],
    texture: "warm"
  },
  {
    text: "May the next thing that happens be the thing you didn't know you were hoping for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["next", "happens", "hoping", "didn't know", "surprise", "unexpected"],
    texture: "warm"
  },
  {
    text: "May you not need to be the one who fixes it, and may it be fixed anyway.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["fix", "one", "anyway", "resolve", "without", "you"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to fail, and may the failure teach you something worth learning.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["brave", "fail", "teach", "learn", "worth", "mistake", "growth"],
    texture: "warm"
  },
  {
    text: "May you find the person you were looking for, and may they be glad you found them.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["find", "person", "looking", "glad", "found", "search", "reunion"],
    texture: "warm"
  },
  {
    text: "May the things you've lost be replaced by things you didn't know you needed.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "replaced", "didn't know", "needed", "unexpected", "gain"],
    texture: "warm"
  },
  {
    text: "May you not need to be the one who always knows what to do, and may someone else know for once.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["know", "what to do", "someone else", "for once", "burden", "responsibility"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel alive, and may it be something you can keep.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alive", "feel", "keep", "sustain", "passion", "joy", "hold"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is permanent.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["permanent", "wrong", "think", "change", "nothing lasts", "temporary"],
    texture: "warm"
  },
  {
    text: "May the thing you're building be worth the effort, and may you see it finished.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["building", "worth", "effort", "see", "finished", "create", "complete"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love the things that leave, and may they stay anyway.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "leave", "stay", "anyway", "brave", "risk", "hold"],
    texture: "warm"
  },
  {
    text: "May you find the place where your heart feels at home, and may it be somewhere you can stay.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["heart", "home", "stay", "belong", "place", "find"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "wrong", "think", "time", "chance", "opportunity"],
    texture: "warm"
  },
  {
    text: "May the road ahead be kinder than the road behind, and may you be kind enough to notice.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["road", "ahead", "behind", "kind", "notice", "journey", "compare"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the waiting bearable, and may it be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["waiting", "bearable", "enough", "patience", "endure", "while"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to say yes to the thing that scares you, and may it be worth the fear.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["yes", "scares", "worth", "fear", "brave", "risk", "opportunity"],
    texture: "warm"
  },
  {
    text: "May you not need to be the one who always gives, and may someone give to you for once.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["give", "always", "for once", "receive", "balance", "generosity"],
    texture: "warm"
  },
  {
    text: "May the next thing you try work on the first attempt.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["try", "work", "first", "attempt", "succeed", "immediate"],
    texture: "warm"
  },
  {
    text: "May you find the thing you've been missing, and may it not be what you thought it was.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["missing", "find", "thought", "different", "discover", "realize"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think you can't survive.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["survive", "can't", "wrong", "think", "endure", "through"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the hard things worth it, and may you hold onto it.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hard", "worth", "hold", "reason", "why", "keep", "going"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust again, and may the trust be deserved.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "again", "deserved", "brave", "risk", "vulnerable"],
    texture: "warm"
  },
  {
    text: "May the next thing you hear be good news, and may it come from someone you love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hear", "good news", "love", "someone", "next", "receive"],
    texture: "warm"
  },
  {
    text: "May the thing you're afraid to hope for be the thing that comes true.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "hope", "comes true", "wish", "dream", "want"],
    texture: "warm"
  },
  {
    text: "May you find the right question to ask, and may someone know the answer.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["question", "answer", "right", "ask", "someone", "know"],
    texture: "warm"
  },
  {
    text: "May you be the kind of person someone remembers kindly, and may they tell the story gently.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["remember", "kindly", "story", "tell", "gently", "legacy", "after"],
    texture: "warm"
  },
  {
    text: "May you not need to be the one who always understands, and may you be understood anyway.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["understand", "always", "understood", "anyway", "confusion", "clarity"],
    texture: "warm"
  },
  {
    text: "May the thing you're looking for find you before you stop looking.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["looking", "find", "before", "stop", "search", "seek"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to stay when leaving would be easier, and wise enough to leave when staying would be harder.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["stay", "leave", "easier", "harder", "brave", "wise", "choose"],
    texture: "warm"
  },
  {
    text: "May the things that matter most be the things that last, and may you know which ones they are.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["matter", "last", "know", "which", "important", "endure", "prioritize"],
    texture: "warm"
  },
  {
    text: "May you find the peace that passes understanding, and may it be enough to carry you through.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["peace", "understanding", "enough", "carry", "through", "transcend"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is unforgivable.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["unforgivable", "wrong", "think", "forgive", "mercy", "grace"],
    texture: "warm"
  },
  {
    text: "May the next chapter be better than the last, and may you be the one who writes it.",
    type: "return",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["chapter", "better", "writes", "story", "next", "author"],
    texture: "warm"
  },
  {
    text: "May you find the strength to try again, and may the result be different this time.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["try again", "strength", "different", "result", "persist", "repeat"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to speak the truth, even when your voice shakes.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["truth", "speak", "voice", "shakes", "brave", "honest"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the silence feel less empty, and may it be close by.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["silence", "empty", "fill", "close", "near", "comfort", "presence"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is the only way.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["only way", "wrong", "think", "alternative", "option", "path"],
    texture: "warm"
  },
  {
    text: "May the things you can't change be the things that change you for the better.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["can't change", "better", "transform", "accept", "grow", "adapt"],
    texture: "warm"
  },
  {
    text: "May you find the grace to accept what you cannot change, and may you change what you can.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["grace", "accept", "cannot change", "change", "serenity", "wisdom"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to take the first step, even when you can't see the whole staircase.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["first step", "staircase", "see", "brave", "begin", "unknown"],
    texture: "warm"
  },
  {
    text: "May you find the thing you were meant to do, and may it be something you love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["meant to do", "love", "purpose", "calling", "find", "work"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "deserve", "request"],
    texture: "warm"
  },
  {
    text: "May the things you've lost become the things that make you who you are.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "who", "are", "become", "shape", "identity", "transform"],
    texture: "warm"
  },
  {
    text: "May you find the courage to say no, and may the yes come easier after.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["no", "say", "yes", "easier", "boundaries", "choose", "courage"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is impossible to forgive.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["impossible", "forgive", "wrong", "think", "mercy", "release"],
    texture: "warm"
  },
  {
    text: "May the next time you laugh be sooner than you think, and may it be real.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["laugh", "sooner", "real", "joy", "genuine", "next"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the pain worth it, and may it last longer than the pain does.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["pain", "worth", "last", "longer", "reason", "meaning", "purpose"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to show up, and may that be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["show up", "enough", "brave", "present", "appear", "try"],
    texture: "warm"
  },
  {
    text: "May the next thing you try be the thing that works, and may you recognize it when it does.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["try", "works", "recognize", "next", "succeed", "realize"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too good for you.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too good", "wrong", "think", "deserve", "worthy", "enough"],
    texture: "warm"
  },
  {
    text: "May you find the thing you've been searching for, and may it be closer than you think.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["searching", "find", "closer", "think", "near", "discover"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love again, and may the love be returned.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "again", "returned", "brave", "risk", "open"],
    texture: "warm"
  },
  {
    text: "May the things that broke you be the things that make you stronger.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broke", "stronger", "resilience", "transform", "through"],
    texture: "warm"
  },
  {
    text: "May you find the strength to keep going, and may the road be easier than you think.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["strength", "keep going", "road", "easier", "think", "endure", "persevere"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to ask for help, and may the help come quickly.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ask", "help", "quickly", "brave", "support", "receive"],
    texture: "warm"
  },
  {
    text: "May you find the thing that brings you joy, and may you make time for it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["joy", "time", "make", "find", "bring", "prioritize"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "wrong", "think", "difficult", "challenge", "capability"],
    texture: "warm"
  },
  {
    text: "May the things that scare you be the things that save you.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["scare", "save", "fear", "transform", "brave", "confront"],
    texture: "warm"
  },
  {
    text: "May you find the courage to keep trying, and may the trying be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trying", "courage", "enough", "persist", "effort", "attempt"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be vulnerable, and may it be received with gentleness.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["vulnerable", "gentleness", "brave", "open", "receive", "exposed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the struggle worth it, and may it be something you can keep.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["struggle", "worth", "keep", "meaning", "purpose", "retain"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is broken beyond repair.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "repair", "wrong", "think", "fix", "restore", "beyond"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the journey worth it, and may the destination exceed your expectations.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["journey", "worth", "destination", "exceed", "expectations", "arrive"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be yourself, and may that be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["yourself", "enough", "brave", "authentic", "real", "genuine"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you whole, and may it not be something you have to earn.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["whole", "earn", "find", "deserve", "complete", "wholeness"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is impossible.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["impossible", "wrong", "think", "limit", "capability", "surprise"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the dark less frightening, and may it be closer than you think.",
    type: "loss",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["dark", "frightening", "closer", "light", "comfort", "near"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to let go of what no longer serves you, and may the space it leaves be filled with something better.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["let go", "no longer serves", "space", "better", "release", "replace"],
    texture: "warm"
  },
  {
    text: "May you find the peace you're looking for, and may it be in the last place you look.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["peace", "looking", "last place", "find", "search", "rest"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to try again, and may this time be different.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["try again", "different", "brave", "persist", "attempt", "repeat"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel alive, and may it be something you can have.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alive", "feel", "have", "possess", "keep", "sustain"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is the end of the story.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["end", "story", "wrong", "think", "continue", "chapter"],
    texture: "warm"
  },
  {
    text: "May you find the thing you've been looking for, and may it be exactly what you need.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["looking", "find", "exactly", "need", "search", "discover"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to believe in something again, and may it be worth believing in.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["believe", "again", "worth", "faith", "trust", "hope"],
    texture: "warm"
  },
  {
    text: "May you find the strength to face tomorrow, and may tomorrow be gentler than today.",
    type: "loss",
    time: "evening",
    season: "anytime",
    avoidance: [],
    keywords: ["tomorrow", "strength", "face", "gentler", "today", "next day"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think you can't handle.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["handle", "can't", "wrong", "think", "manage", "cope"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the wait worthwhile, and may it come before you stop hoping.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["wait", "worthwhile", "come", "hoping", "hope", "patient"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to walk away, and may the thing you walk toward be better than what you left.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["walk away", "toward", "better", "left", "brave", "leave", "go"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can carry with you.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "carry", "with", "company", "presence", "comfort"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to bear.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "bear", "wrong", "think", "carry", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing you've been missing, and may it not be gone after all.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["missing", "find", "not gone", "still here", "lost", "recover"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to open your heart again, and may it not be broken this time.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["open", "heart", "again", "broken", "this time", "risk", "love"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the hard days easier, and may you remember it when you need it.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hard days", "easier", "remember", "need", "comfort", "cope"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too far away.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too far", "wrong", "think", "distance", "reach", "close"],
    texture: "warm"
  },
  {
    text: "May you find the thing that brings you peace, and may it be something you can return to again and again.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["peace", "return", "again and again", "find", "sustaining", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be honest about what you need, and may you receive it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["honest", "need", "receive", "brave", "ask", "vulnerable"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be enough for today.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "enough", "today", "courage", "comfort"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to forgive.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "too much", "wrong", "think", "mercy", "grace"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can follow.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "follow", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust yourself, and may you be worth trusting.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "yourself", "worth", "rely", "confident", "self"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the silence feel less heavy, and may it be close enough to reach.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["silence", "heavy", "close", "reach", "lighten", "comfort"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to when you need it.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "need", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to let someone in, and may they be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["let in", "someone", "worth", "risk", "open", "trust", "vulnerable"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something that lasts.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "lasts", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "deserve", "request"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes the dark feel less endless, and may it be something you can hold onto.",
    type: "loss",
    time: "night",
    season: "anytime",
    avoidance: [],
    keywords: ["dark", "endless", "hold", "onto", "light", "hope", "anchor"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to try something new, and may it be something you love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["new", "try", "love", "discover", "brave", "experience"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to do.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "do", "wrong", "think", "difficult", "capability"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can carry with you.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "carry", "with", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to forgive yourself, and may you be worth forgiving.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "yourself", "worth", "mercy", "grace", "self"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can follow.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "follow", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to carry.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "carry", "wrong", "think", "burden", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "trust", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope again, and may the hope be justified.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "again", "justified", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to change.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "change", "wrong", "think", "transform", "grow"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "trust", "courage", "comfort", "safe"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to ask for what you want, and may you get it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ask", "want", "get", "brave", "request", "desire"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can trust.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "trust", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to hope for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "hope", "wrong", "think", "desire", "dream"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "trust", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love again, and may the love be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "again", "worth", "risk", "brave", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can trust.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "trust", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to forgive.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "too hard", "wrong", "think", "mercy", "grace"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "hold", "onto", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be yourself, and may you find people who love you for who you are.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["yourself", "be", "love", "who", "are", "authentic", "accept"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can hold onto.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "hold", "onto", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "try", "wrong", "think", "attempt", "begin"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "hold", "onto", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust again, and may the trust be rewarded.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "again", "rewarded", "brave", "risk", "vulnerable"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can hold onto.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "hold", "onto", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to give.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "give", "wrong", "think", "generous", "offer"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "hold", "onto", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to start over, and may the new beginning be better than the old ending.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["start over", "new beginning", "better", "old ending", "brave", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "love", "wrong", "think", "heart", "open"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to say what you feel, and may it be received with love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["say", "feel", "received", "love", "brave", "honest", "express"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to change.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "change", "wrong", "think", "transform", "grow"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "trust", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope again, and may the hope be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "again", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "request", "deserve"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to open your heart, and may it be filled with something beautiful.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["open", "heart", "filled", "beautiful", "brave", "receive", "love"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to begin.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "begin", "wrong", "think", "start", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be vulnerable, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["vulnerable", "worth", "risk", "brave", "open", "exposed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to hope.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "hope", "wrong", "think", "desire", "dream"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may the love be returned.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "returned", "brave", "risk", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "share", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "try", "wrong", "think", "attempt", "effort"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust, and may the trust be well-placed.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "well-placed", "brave", "risk", "vulnerable", "faith"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope, and may the hope be justified.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "justified", "brave", "faith", "trust", "optimism"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to bear.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "bear", "wrong", "think", "carry", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to begin again, and may this time be different.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["begin again", "different", "brave", "start", "fresh", "new"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to change.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "change", "wrong", "think", "transform", "grow"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to try, and may the trying be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["try", "enough", "brave", "attempt", "effort", "succeed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to forgive.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "too hard", "wrong", "think", "mercy", "grace"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can trust.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "trust", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "worth", "risk", "brave", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "trust", "courage", "comfort", "safe"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "deserve", "request"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "trust", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust yourself, and may you find what you're looking for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "yourself", "find", "looking", "for", "confident", "self"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can trust.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "trust", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "try", "wrong", "think", "attempt", "begin"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "trust", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can hold onto.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "hold", "onto", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to carry.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "carry", "wrong", "think", "burden", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "hold", "onto", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to start over, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["start over", "worth", "it", "brave", "fresh", "new"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "hold", "onto", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to do.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "do", "wrong", "think", "difficult", "capability"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can hold onto.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "hold", "onto", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to ask, and may you receive.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ask", "receive", "brave", "request", "deserve", "granted"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "hold", "onto", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "love", "wrong", "think", "heart", "open"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to forgive, and may it set you free.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "set", "free", "brave", "mercy", "grace", "release"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "share", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to give.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "give", "wrong", "think", "generous", "offer"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "worth", "it", "brave", "risk", "vulnerable"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope again, and may the hope be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "again", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "request", "deserve"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to open your heart, and may it be filled with love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["open", "heart", "filled", "love", "brave", "receive"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to begin.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "begin", "wrong", "think", "start", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be vulnerable, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["vulnerable", "worth", "risk", "brave", "open", "exposed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to hope.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "hope", "wrong", "think", "desire", "dream"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may the love be returned.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "returned", "brave", "risk", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "share", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "try", "wrong", "think", "attempt", "effort"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust, and may the trust be well-placed.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "well-placed", "brave", "risk", "vulnerable", "faith"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope, and may the hope be justified.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "justified", "brave", "faith", "trust", "optimism"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to bear.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "bear", "wrong", "think", "carry", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to begin again, and may this time be different.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["begin again", "different", "brave", "start", "fresh", "new"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to change.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "change", "wrong", "think", "transform", "grow"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to try, and may the trying be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["try", "enough", "brave", "attempt", "effort", "succeed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to forgive.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "too hard", "wrong", "think", "mercy", "grace"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can trust.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "trust", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "worth", "risk", "brave", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "trust", "courage", "comfort", "safe"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "deserve", "request"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "trust", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust yourself, and may you find what you're looking for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "yourself", "find", "looking", "for", "confident", "self"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can trust.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "trust", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "try", "wrong", "think", "attempt", "begin"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "trust", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can hold onto.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "hold", "onto", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to carry.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "carry", "wrong", "think", "burden", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "hold", "onto", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to start over, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["start over", "worth", "it", "brave", "fresh", "new"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "hold", "onto", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to do.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "do", "wrong", "think", "difficult", "capability"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can hold onto.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "hold", "onto", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to ask, and may you receive.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ask", "receive", "brave", "request", "deserve", "granted"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "hold", "onto", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "love", "wrong", "think", "heart", "open"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to forgive, and may it set you free.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "set", "free", "brave", "mercy", "grace", "release"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "share", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to give.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "give", "wrong", "think", "generous", "offer"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "worth", "it", "brave", "risk", "vulnerable"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope again, and may the hope be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "again", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "request", "deserve"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to open your heart, and may it be filled with love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["open", "heart", "filled", "love", "brave", "receive"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to begin.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "begin", "wrong", "think", "start", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be vulnerable, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["vulnerable", "worth", "risk", "brave", "open", "exposed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to hope.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "hope", "wrong", "think", "desire", "dream"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may the love be returned.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "returned", "brave", "risk", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "share", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "try", "wrong", "think", "attempt", "effort"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust, and may the trust be well-placed.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "well-placed", "brave", "risk", "vulnerable", "faith"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope, and may the hope be justified.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "justified", "brave", "faith", "trust", "optimism"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to bear.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "bear", "wrong", "think", "carry", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to begin again, and may this time be different.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["begin again", "different", "brave", "start", "fresh", "new"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to change.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "change", "wrong", "think", "transform", "grow"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to try, and may the trying be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["try", "enough", "brave", "attempt", "effort", "succeed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to forgive.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "too hard", "wrong", "think", "mercy", "grace"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can trust.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "trust", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "worth", "risk", "brave", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "trust", "courage", "comfort", "safe"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "deserve", "request"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "trust", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust yourself, and may you find what you're looking for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "yourself", "find", "looking", "for", "confident", "self"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can trust.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "trust", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "try", "wrong", "think", "attempt", "begin"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "trust", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can hold onto.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "hold", "onto", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to carry.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "carry", "wrong", "think", "burden", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "hold", "onto", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to start over, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["start over", "worth", "it", "brave", "fresh", "new"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "hold", "onto", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to do.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "do", "wrong", "think", "difficult", "capability"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can hold onto.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "hold", "onto", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to ask, and may you receive.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ask", "receive", "brave", "request", "deserve", "granted"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "hold", "onto", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "love", "wrong", "think", "heart", "open"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to forgive, and may it set you free.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "set", "free", "brave", "mercy", "grace", "release"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "share", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to give.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "give", "wrong", "think", "generous", "offer"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "worth", "it", "brave", "risk", "vulnerable"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope again, and may the hope be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "again", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "request", "deserve"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to open your heart, and may it be filled with love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["open", "heart", "filled", "love", "brave", "receive"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to begin.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "begin", "wrong", "think", "start", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be vulnerable, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["vulnerable", "worth", "risk", "brave", "open", "exposed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to hope.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "hope", "wrong", "think", "desire", "dream"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may the love be returned.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "returned", "brave", "risk", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "share", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "try", "wrong", "think", "attempt", "effort"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust, and may the trust be well-placed.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "well-placed", "brave", "risk", "vulnerable", "faith"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope, and may the hope be justified.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "justified", "brave", "faith", "trust", "optimism"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to bear.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "bear", "wrong", "think", "carry", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to begin again, and may this time be different.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["begin again", "different", "brave", "start", "fresh", "new"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to change.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "change", "wrong", "think", "transform", "grow"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to try, and may the trying be enough.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["try", "enough", "brave", "attempt", "effort", "succeed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to forgive.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "too hard", "wrong", "think", "mercy", "grace"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can trust.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "trust", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "worth", "risk", "brave", "open", "heart"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "trust", "courage", "comfort", "safe"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "deserve", "request"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "trust", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust yourself, and may you find what you're looking for.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "yourself", "find", "looking", "for", "confident", "self"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can trust.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "trust", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to try.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "try", "wrong", "think", "attempt", "begin"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can trust.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "trust", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can hold onto.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "hold", "onto", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to carry.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "carry", "wrong", "think", "burden", "handle"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "hold", "onto", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to start over, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["start over", "worth", "it", "brave", "fresh", "new"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "hold", "onto", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too hard to do.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too hard", "do", "wrong", "think", "difficult", "capability"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can hold onto.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "hold", "onto", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to ask, and may you receive.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["ask", "receive", "brave", "request", "deserve", "granted"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can hold onto.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "hold", "onto", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "love", "wrong", "think", "heart", "open"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to forgive, and may it set you free.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["forgive", "set", "free", "brave", "mercy", "grace", "release"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "share", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to give.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "give", "wrong", "think", "generous", "offer"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "share", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to trust, and may it be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["trust", "worth", "it", "brave", "risk", "vulnerable"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can share.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "share", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to start.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "start", "wrong", "think", "begin", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can share.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "share", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to hope again, and may the hope be worth it.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["hope", "again", "worth", "it", "brave", "faith", "trust"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can return to.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "return", "to", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to ask.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "ask", "wrong", "think", "request", "deserve"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less afraid, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["afraid", "less", "return", "to", "courage", "comfort", "brave"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to open your heart, and may it be filled with love.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["open", "heart", "filled", "love", "brave", "receive"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less broken, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["broken", "less", "return", "to", "heal", "mend", "repair"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too late to begin.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too late", "begin", "wrong", "think", "start", "fresh"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less tired, and may it be something you can return to.",
    type: "tedium",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["tired", "less", "return", "to", "rest", "energy", "renew"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to be vulnerable, and may it be worth the risk.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["vulnerable", "worth", "risk", "brave", "open", "exposed"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less alone, and may it be something you can return to.",
    type: "loss",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["alone", "less", "return", "to", "connection", "together", "company"],
    texture: "warm"
  },
  {
    text: "May you be wrong about what you think is too much to hope.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["too much", "hope", "wrong", "think", "desire", "dream"],
    texture: "warm"
  },
  {
    text: "May you find the thing that makes you feel less lost, and may it be something you can share.",
    type: "anticipation">
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["lost", "less", "share", "direction", "guide", "path"],
    texture: "warm"
  },
  {
    text: "May you be brave enough to love, and may the love be returned.",
    type: "anticipation",
    time: "anytime",
    season: "anytime",
    avoidance: [],
    keywords: ["love", "returned", "brave", "risk", "open", "heart"],
    texture: "warm"
  }
];

module.exports = blessings;
