/* ============================     CATÉGORIES OFFICIELLES  ============================ */

const officialCategories = [
  "texte",
  "chatbot",
  "image",
  "vidéo",
  "audio",
  "code",
  "science",
  "agents",
  "données",
  "recherche",
];

/* ============================   DONNÉES IA   ============================ */

const iaData = [
  {
    name: "ChatGPT",
    longDescription:
      "ChatGPT permet de générer du texte, répondre à des questions, créer du contenu et assister dans des tâches complexes.",
    year: 2022,
    link: "https://chat.openai.com/",
    owner: "OpenAI",
    categories: ["texte", "chatbot"],
    pricing: {
      free: true,
      plans: [{ name: "Plus", price: 20, period: "month" }],
    },
  },
  {
    name: "MidJourney",
    longDescription:
      "MidJourney génère des images à partir de descriptions textuelles, offrant un rendu artistique de haute qualité.",
    year: 2021,
    link: "https://www.midjourney.com/",
    owner: "MidJourney Inc.",
    categories: ["image"],
    pricing: {
      free: false,
      plans: [
        { name: "Basic", price: 10, period: "month" },
        { name: "Standard", price: 30, period: "month" },
      ],
    },
  },
  {
    name: "AlphaFold",
    longDescription:
      "AlphaFold prédit la structure 3D des protéines à partir de séquences d’acides aminés.",
    year: 2020,
    link: "https://www.deepmind.com/research/highlighted-research/alphafold",
    owner: "DeepMind",
    categories: ["science"],
    pricing: {
      free: true,
      plans: [],
    },
  },
  {
    name: "Copilot",
    longDescription:
      "GitHub Copilot aide les développeurs en proposant des complétions intelligentes et du code généré automatiquement.",
    year: 2021,
    link: "https://github.com/features/copilot",
    owner: "GitHub (Microsoft)",
    categories: ["code", "texte"],
    pricing: {
      free: false,
      plans: [
        { name: "Individual", price: 10, period: "month" },
        { name: "Business", price: 19, period: "month" },
      ],
    },
  },
  {
    name: "Runway Gen-2",
    longDescription:
      "Runway permet de générer des vidéos à partir de texte ou d’images.",
    year: 2023,
    link: "https://runwayml.com/",
    owner: "Runway",
    categories: ["vidéo", "image"],
    pricing: {
      free: true,
      plans: [{ name: "Standard", price: 15, period: "month" }],
    },
  },
  {
    name: "ElevenLabs",
    longDescription:
      "ElevenLabs propose une synthèse vocale ultra réaliste et du clonage de voix.",
    year: 2022,
    link: "https://elevenlabs.io/",
    owner: "ElevenLabs",
    categories: ["audio"],
    pricing: {
      free: true,
      plans: [{ name: "Starter", price: 5, period: "month" }],
    },
  },
  {
    name: "Suno",
    longDescription:
      "Suno permet de générer de la musique complète à partir de simples instructions textuelles.",
    year: 2023,
    link: "https://suno.ai/",
    owner: "Suno",
    categories: ["audio"],
    pricing: {
      free: true,
      plans: [{ name: "Pro", price: 10, period: "month" }],
    },
  },
  {
    name: "Perplexity",
    longDescription:
      "Perplexity est un moteur de recherche IA qui fournit des réponses sourcées et conversationnelles.",
    year: 2022,
    link: "https://www.perplexity.ai/",
    owner: "Perplexity AI",
    categories: ["recherche", "chatbot"],
    pricing: {
      free: true,
      plans: [{ name: "Pro", price: 20, period: "month" }],
    },
  },
  {
    name: "Claude",
    longDescription:
      "Claude est un assistant conversationnel avancé spécialisé dans la compréhension profonde.",
    year: 2023,
    link: "https://claude.ai/",
    owner: "Anthropic",
    categories: ["texte", "chatbot"],
    pricing: {
      free: true,
      plans: [{ name: "Pro", price: 20, period: "month" }],
    },
  },
  {
    name: "Gemini",
    longDescription:
      "Gemini est un modèle multimodal capable de comprendre texte, images, audio et vidéo.",
    year: 2024,
    link: "https://gemini.google.com/",
    owner: "Google",
    categories: ["texte", "image", "audio", "vidéo", "recherche"],
    pricing: {
      free: true,
      plans: [{ name: "Advanced", price: 20, period: "month" }],
    },
  },
  {
    name: "DALL·E 3",
    longDescription:
      "DALL·E 3 génère des images détaillées et cohérentes à partir de descriptions textuelles.",
    year: 2023,
    link: "https://openai.com/dall-e-3",
    owner: "OpenAI",
    categories: ["image"],
    pricing: {
      free: true,
      plans: [{ name: "Credits", price: 15, period: "pack" }],
    },
  },
  {
    name: "Devin",
    longDescription:
      "Devin est un agent IA capable d’exécuter des tâches complexes de développement logiciel.",
    year: 2024,
    link: "https://www.cognition-labs.com/",
    owner: "Cognition Labs",
    categories: ["agents", "code"],
    pricing: {
      free: false,
      plans: [{ name: "Enterprise", price: 0, period: "custom" }],
    },
  },
  {
    name: "AutoGPT",
    longDescription:
      "AutoGPT est un agent autonome capable de planifier et exécuter des tâches en plusieurs étapes.",
    year: 2023,
    link: "https://github.com/Significant-Gravitas/Auto-GPT",
    owner: "Open Source",
    categories: ["agents"],
    pricing: {
      free: true,
      plans: [],
    },
  },
  {
    name: "DataRobot",
    longDescription:
      "DataRobot automatise la création de modèles prédictifs et l’analyse de données.",
    year: 2019,
    link: "https://www.datarobot.com/",
    owner: "DataRobot",
    categories: ["données", "science"],
    pricing: {
      free: false,
      plans: [{ name: "Business", price: 0, period: "custom" }],
    },
  },
];
