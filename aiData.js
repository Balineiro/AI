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
  {
    name: "Stable Diffusion",
    longDescription:
      "Stable Diffusion est un modèle open-source de génération d’images permettant de créer des visuels détaillés à partir de texte.",
    year: 2022,
    link: "https://stability.ai/",
    owner: "Stability AI",
    categories: ["image"],
    pricing: {
      free: true,
      plans: [
        { name: "API", price: 10, period: "month" }
      ]
    },
  },
  {
    name: "Leonardo AI",
    longDescription:
      "Leonardo AI permet de générer des images de haute qualité avec des modèles spécialisés pour le design, le jeu vidéo et l’art.",
    year: 2023,
    link: "https://leonardo.ai/",
    owner: "Leonardo",
    categories: ["image"],
    pricing: {
      free: true,
      plans: [
        { name: "Premium", price: 12, period: "month" }
      ]
    }
  },
  {
    name: "Pika Labs",
    longDescription:
      "Pika Labs génère des vidéos IA réalistes à partir de texte ou d’images, avec des animations fluides et stylisées.",
    year: 2023,
    link: "https://pika.art/",
    owner: "Pika",
    categories: ["vidéo", "image"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 10, period: "month" }
      ]
    }
  },
  {
    name: "Whisper",
    longDescription:
      "Whisper est un modèle de reconnaissance vocale très précis capable de transcrire et traduire l’audio dans de nombreuses langues.",
    year: 2022,
    link: "https://openai.com/research/whisper",
    owner: "OpenAI",
    categories: ["audio"],
    pricing: {
      free: true,
      plans: []
    }
  },
  {
    name: "LLaMA",
    longDescription:
      "LLaMA est une famille de modèles open-source développée par Meta, optimisée pour le texte et le raisonnement.",
    year: 2023,
    link: "https://ai.meta.com/llama/",
    owner: "Meta",
    categories: ["texte", "chatbot"],
    pricing: {
      free: true,
      plans: []
    }
  },
  {
    name: "Mistral AI",
    longDescription:
      "Mistral AI propose des modèles open-source rapides et performants pour le texte, le raisonnement et le code.",
    year: 2023,
    link: "https://mistral.ai/",
    owner: "Mistral AI",
    categories: ["texte", "code"],
    pricing: {
      free: true,
      plans: [
        { name: "API", price: 8, period: "month" }
      ]
    }
  },
  {
    name: "Hugging Face",
    longDescription:
      "Hugging Face est une plateforme open-source regroupant des milliers de modèles IA, datasets et outils collaboratifs.",
    year: 2016,
    link: "https://huggingface.co/",
    owner: "Hugging Face",
    categories: ["science", "données", "code"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 9, period: "month" }
      ]
    }
  },
  {
    name: "Replit AI",
    longDescription:
      "Replit AI aide les développeurs à écrire du code, corriger des erreurs et générer des projets complets.",
    year: 2023,
    link: "https://replit.com/",
    owner: "Replit",
    categories: ["code"],
    pricing: {
      free: true,
      plans: [
        { name: "Core", price: 20, period: "month" }
      ]
    }
  },
  {
    name: "Synthesia",
    longDescription:
      "Synthesia permet de créer des vidéos avec avatars IA réalistes à partir de texte.",
    year: 2020,
    link: "https://www.synthesia.io/",
    owner: "Synthesia",
    categories: ["vidéo"],
    pricing: {
      free: false,
      plans: [
        { name: "Starter", price: 22, period: "month" }
      ]
    }
  },
  {
    name: "Notion AI",
    longDescription:
      "Notion AI améliore la productivité en générant du texte, résumant des pages et assistant dans l’organisation.",
    year: 2023,
    link: "https://www.notion.so/product/ai",
    owner: "Notion",
    categories: ["texte", "recherche"],
    pricing: {
      free: false,
      plans: [
        { name: "Add-on", price: 10, period: "month" }
      ]
    }
  },
  {
  name: "Adobe Firefly",
  longDescription:
    "Adobe Firefly est un générateur d’images et d’effets visuels intégré à la suite Adobe, conçu pour la création professionnelle.",
  year: 2023,
  link: "https://www.adobe.com/products/firefly.html",
  owner: "Adobe",
  categories: ["image", "vidéo"],
  pricing: {
    free: true,
    plans: [
      { name: "Premium", price: 4.99, period: "month" }
    ]
  }
  },
  {
    name: "Canva AI",
    longDescription:
      "Canva AI propose des outils de génération d’images, de design automatique et d’assistance créative intégrés à Canva.",
    year: 2023,
    link: "https://www.canva.com/ai-image-generator/",
    owner: "Canva",
    categories: ["image", "vidéo"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 12, period: "month" }
      ]
    }
  },
  {
    name: "DeepL",
    longDescription:
      "DeepL est un traducteur IA extrêmement précis, capable de traduire des textes complexes avec un style naturel.",
    year: 2017,
    link: "https://www.deepl.com/",
    owner: "DeepL SE",
    categories: ["texte"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 8.99, period: "month" }
      ]
    }
  },
  {
    name: "Grammarly AI",
    longDescription:
      "Grammarly AI corrige et améliore les textes, propose des reformulations et détecte les incohérences stylistiques.",
    year: 2009,
    link: "https://www.grammarly.com/",
    owner: "Grammarly Inc.",
    categories: ["texte"],
    pricing: {
      free: true,
      plans: [
        { name: "Premium", price: 12, period: "month" }
      ]
    }
  },
  {
    name: "Jasper AI",
    longDescription:
      "Jasper AI est un assistant de rédaction spécialisé dans le marketing, les blogs et les contenus commerciaux.",
    year: 2021,
    link: "https://www.jasper.ai/",
    owner: "Jasper",
    categories: ["texte"],
    pricing: {
      free: false,
      plans: [
        { name: "Creator", price: 39, period: "month" }
      ]
    }
  },
  {
    name: "Copy.ai",
    longDescription:
      "Copy.ai génère des textes marketing, des scripts, des emails et des contenus commerciaux.",
    year: 2020,
    link: "https://www.copy.ai/",
    owner: "CopyAI",
    categories: ["texte"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 49, period: "month" }
      ]
    }
  },
  {
    name: "Wolfram Alpha",
    longDescription:
      "Wolfram Alpha est un moteur de calcul IA capable de résoudre des problèmes mathématiques, scientifiques et techniques.",
    year: 2009,
    link: "https://www.wolframalpha.com/",
    owner: "Wolfram Research",
    categories: ["science", "données"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 5, period: "month" }
      ]
    }
  },
  {
    name: "RapidMiner",
    longDescription:
      "RapidMiner est une plateforme d’analyse de données et de machine learning destinée aux entreprises.",
    year: 2007,
    link: "https://rapidminer.com/",
    owner: "RapidMiner",
    categories: ["science", "données"],
    pricing: {
      free: true,
      plans: [
        { name: "Studio", price: 39, period: "month" }
      ]
    }
  },
  {
    name: "Darktrace",
    longDescription:
      "Darktrace utilise l’IA pour détecter les menaces cyber, analyser les comportements et protéger les réseaux.",
    year: 2013,
    link: "https://darktrace.com/",
    owner: "Darktrace",
    categories: ["science"],
    pricing: {
      free: false,
      plans: [
        { name: "Enterprise", price: 0, period: "custom" }
      ]
    }
  },
  {
    name: "CrowdStrike AI",
    longDescription:
      "CrowdStrike AI analyse les menaces en temps réel et protège les systèmes grâce à l’IA comportementale.",
    year: 2011,
    link: "https://www.crowdstrike.com/",
    owner: "CrowdStrike",
    categories: ["science"],
    pricing: {
      free: false,
      plans: [
        { name: "Falcon", price: 0, period: "custom" }
      ]
    }
  },
  {
    name: "OpenInterpreter",
    longDescription:
      "OpenInterpreter permet d’exécuter du code localement, automatiser des tâches et contrôler l’ordinateur via des instructions textuelles.",
    year: 2023,
    link: "https://openinterpreter.com/",
    owner: "Open Source",
    categories: ["code", "agents"],
    pricing: {
      free: true,
      plans: []
    }
  },
  {
    name: "GPT Engineer",
    longDescription:
      "GPT Engineer génère des projets logiciels complets à partir de descriptions textuelles.",
    year: 2023,
    link: "https://github.com/AntonOsika/gpt-engineer",
    owner: "Open Source",
    categories: ["code", "agents"],
    pricing: {
      free: true,
      plans: []
    }
  },
  {
    name: "BioGPT",
    longDescription:
      "BioGPT est un modèle IA spécialisé dans la recherche biomédicale et l’analyse scientifique.",
    year: 2022,
    link: "https://github.com/microsoft/BioGPT",
    owner: "Microsoft",
    categories: ["science"],
    pricing: {
      free: true,
      plans: []
    }
  },
  {
    name: "Med-PaLM",
    longDescription:
      "Med-PaLM est un modèle IA conçu pour répondre à des questions médicales et analyser des données cliniques.",
    year: 2023,
    link: "https://health.google/",
    owner: "Google",
    categories: ["science"],
    pricing: {
      free: false,
      plans: [
        { name: "Enterprise", price: 0, period: "custom" }
      ]
    }
  },
  {
    name: "AIVA",
    longDescription:
      "AIVA compose de la musique orchestrale et des bandes-son à partir de simples instructions textuelles.",
    year: 2016,
    link: "https://www.aiva.ai/",
    owner: "AIVA Technologies",
    categories: ["audio"],
    pricing: {
      free: true,
      plans: [
        { name: "Standard", price: 11, period: "month" }
      ]
    }
  },
  {
    name: "Amper Music",
    longDescription:
      "Amper Music génère des musiques originales pour les vidéos, jeux et contenus marketing.",
    year: 2014,
    link: "https://www.shutterstock.com/enterprise/music",
    owner: "Shutterstock",
    categories: ["audio"],
    pricing: {
      free: false,
      plans: [
        { name: "Enterprise", price: 0, period: "custom" }
      ]
    }
  },
  {
    name: "Soundraw",
    longDescription:
      "Soundraw crée des musiques personnalisées en fonction du style, du rythme et de l’ambiance souhaitée.",
    year: 2020,
    link: "https://soundraw.io/",
    owner: "Soundraw Inc.",
    categories: ["audio"],
    pricing: {
      free: true,
      plans: [
        { name: "Creator", price: 19.99, period: "month" }
      ]
    }
  },
  {
    name: "Ideogram",
    longDescription:
      "Ideogram génère des images réalistes et stylisées, avec une excellente gestion du texte intégré.",
    year: 2023,
    link: "https://ideogram.ai/",
    owner: "Ideogram",
    categories: ["image"],
    pricing: {
      free: true,
      plans: []
    }
  },
  {
    name: "Playground AI",
    longDescription:
      "Playground AI permet de générer et éditer des images avec des outils avancés de retouche IA.",
    year: 2022,
    link: "https://playground.com/",
    owner: "Playground",
    categories: ["image"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 15, period: "month" }
      ]
    }
  },
  {
    name: "Fotor AI",
    longDescription:
      "Fotor AI propose des outils de retouche photo, de génération d’images et de design assisté par IA.",
    year: 2012,
    link: "https://www.fotor.com/",
    owner: "Fotor",
    categories: ["image"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 8.99, period: "month" }
      ]
    }
  },
  {
    name: "Mem AI",
    longDescription:
      "Mem AI organise automatiquement les notes, documents et idées grâce à une IA de productivité.",
    year: 2021,
    link: "https://mem.ai/",
    owner: "Mem",
    categories: ["texte", "recherche"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 10, period: "month" }
      ]
    }
  },
  {
    name: "Otter.ai",
    longDescription:
      "Otter.ai transcrit les réunions, génère des résumés et identifie les points clés automatiquement.",
    year: 2016,
    link: "https://otter.ai/",
    owner: "Otter.ai",
    categories: ["audio", "texte"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 16.99, period: "month" }
      ]
    }
  },
  {
    name: "Fireflies.ai",
    longDescription:
      "Fireflies.ai enregistre, transcrit et analyse les réunions pour extraire les décisions et actions importantes.",
    year: 2020,
    link: "https://fireflies.ai/",
    owner: "Fireflies",
    categories: ["audio", "texte"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 10, period: "month" }
      ]
    }
  },
  {
    name: "Tableau AI",
    longDescription:
      "Tableau AI analyse les données, génère des visualisations et propose des insights automatisés.",
    year: 2003,
    link: "https://www.tableau.com/",
    owner: "Salesforce",
    categories: ["données", "science"],
    pricing: {
      free: false,
      plans: [
        { name: "Creator", price: 70, period: "month" }
      ]
    }
  },
  {
    name: "Salesforce Einstein",
    longDescription:
      "Einstein est une IA intégrée à Salesforce pour automatiser les ventes, le marketing et l’analyse client.",
    year: 2016,
    link: "https://www.salesforce.com/products/einstein/",
    owner: "Salesforce",
    categories: ["données", "agents"],
    pricing: {
      free: false,
      plans: [
        { name: "Enterprise", price: 0, period: "custom" }
      ]
    }
  },
  {
    name: "Zoho Zia",
    longDescription:
      "Zoho Zia est une IA d’entreprise qui analyse les données, automatise les tâches et assiste les utilisateurs.",
    year: 2018,
    link: "https://www.zoho.com/zia/",
    owner: "Zoho",
    categories: ["données", "agents"],
    pricing: {
      free: true,
      plans: [
        { name: "Premium", price: 14, period: "month" }
      ]
    }
  },
  {
    name: "Elicit",
    longDescription:
      "Elicit utilise l’IA pour rechercher des articles scientifiques, résumer des études et extraire des données.",
    year: 2022,
    link: "https://elicit.org/",
    owner: "Ought",
    categories: ["recherche", "science"],
    pricing: {
      free: true,
      plans: []
    }
  },
  {
    name: "Scite.ai",
    longDescription:
      "Scite.ai analyse les citations scientifiques pour déterminer si un article soutient ou contredit une affirmation.",
    year: 2018,
    link: "https://scite.ai/",
    owner: "Scite",
    categories: ["recherche", "science"],
    pricing: {
      free: true,
      plans: [
        { name: "Pro", price: 12, period: "month" }
      ]
    }
  }
];

export { iaData, officialCategories };