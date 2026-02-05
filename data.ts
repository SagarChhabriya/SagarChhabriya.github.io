
import {
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  CertificationItem,
  ServiceItem,
  PublicationItem,
  ConferenceItem
} from './types';

export const PERSONAL_INFO = {
  name: "Sagar Chhabriya",
  title: "AI & Machine Learning Engineer",
  email: "sagarchhabriya6@gmail.com",
  phone: "+92-332-336-2473",
  location: "Karachi, Pakistan",
  linkedin: "https://linkedin.com/in/sagar-chhabriya",
  github: "https://github.com/SagarChhabriya",
  website: "https://SagarChhabriya.github.io/",
  profileImage: "https://github.com/SagarChhabriya.png",
  socials: {
    facebook: "https://facebook.com/sagar.chhabriya.71",
    twitter: "https://x.com/SagarChhabriya",
    instagram: "https://instagram.com/sagar_chhabriya_/",
    stackoverflow: "https://stackoverflow.com/users/26491667/sagar-chhabriya",
    medium: "https://medium.com/@sagar-chhabriya"
  },
  profile: "My research lies at the intersection of NLP, Information Retrieval, and Machine Learning. I study agentic RAG systems that enable autonomous question-answering and knowledge discovery. I am particularly interested in text mining for insight extraction from unstructured data and retrieval systems that enhance efficiency and relevance in large-scale digital environments."
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Web Design",
    description: "Crafting visually stunning and user-friendly websites tailored to meet your needs. I focus on creating seamless user experiences with a keen eye for aesthetics and functionality.",
    icon: "fa-solid fa-code"
  },
  {
    title: "Chatbot Development",
    description: "Specializing in building AI-powered RAG-based chatbots using LlamaIndex and LangChain, ensuring accurate and real-time answers from your proprietary data.",
    icon: "fa-solid fa-robot"
  },
  {
    title: "Machine Learning",
    description: "Developing intelligent solutions powered by algorithms. From predictive models to data-driven insights, I leverage AI to solve complex problems and enhance decision-making.",
    icon: "fa-solid fa-brain"
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "Agentic Retrieval-Augmented Generation: A Compact Review",
    authors: "Sagar Chhabriya, Sumra Khan, Dr. Rizwan Ahmed Khan, Mansoor Ahmed",
    date: "May 2025",
    venue: "Presented at 1st ICCA @ Salim Habib University",
    pdfLink: "#",
    doiLink: "#"
  }
];

export const CONFERENCES: ConferenceItem[] = [
  { title: "2nd NLP Symposium", date: "July 2025", location: "MAJU Campus, Karachi" },
  { title: "Modern NLP and South Asian Languages", date: "Nov 2025", location: "C-RAAT Symposium @ MAJU" },
  { title: "Datasets for Pakistani Languages", date: "Dec 2025", location: "C-RAAT Webinar" }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "atomcamp",
    role: "Machine Learning Teaching Assistant",
    location: "Islamabad (Remote)",
    period: "Aug 2025 – Present",
    highlights: [
      "Mentored 80+ learners and guided 45+ students to deploy end-to-end ML projects.",
      "Designed capstone projects and technical guides for environment setup (Docker/Conda).",
      "Conducted weekly live sessions on NLP and MLOps; mentored students in CI/CD.",
      "Led MLOps modules covering data acquisition, experiment tracking (W&B), and GCP workflows."
    ]
  },
  {
    company: "10Pearls",
    role: "Data Science Intern (Shine Program)",
    location: "Karachi (Remote)",
    period: "Dec 2025 – Feb 2026",
    highlights: [
      "Architected production-ready AQI forecasting platform using FastAPI and MongoDB Atlas.",
      "Engineered automated pipelines for hourly data ingestion and daily retraining via GitHub Actions.",
      "Integrated feature store with time-series preprocessing (rolling windows, lag features).",
      "Deployed ensemble models (RF, XGBoost, LightGBM) via CI/CD to Railway."
    ]
  },
  {
    company: "FAST-NUCES",
    role: "NLP Research Assistant (Full-time)",
    location: "Karachi (On-Site)",
    period: "June 2025 – Aug 2025",
    highlights: [
      "Project: Automatic multi-modal classification of religious hate content from social media (HASOC 2025).",
      "Engineered custom multilingual lexical resources improving model performance by 2-5%.",
      "Fine-tuned Multilingual BERT (mBERT) against ML baselines (SVM, Noive Bayes).",
      "Leveraged GPU-accelerated frameworks (TensorFlow & PyTorch) for large-scale experimentation."
    ]
  },
  {
    company: "Times Tech Computer Center",
    role: "Programming Fundamentals Course Instructor",
    location: "Kandhkot, Sindh",
    period: "Feb 2025 – May 2025",
    highlights: [
      "Delivered 4-month C++ curriculum to 15+ grade IX-XII students.",
      "Designed 25+ hands-on coding exercises building structured programming fundamentals.",
      "Created algorithmic challenges boosting student LeetCode solve rates by 35%."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "10PearlsAQI",
    tech: ["WeatherAPI", "FastAPI", "Docker", "MongoDB", "GitHub Actions"],
    description: ["Architected AQI prediction system with automated hourly data ingestion.", "Implemented daily model retraining pipelines and versioned models."],
    link: "https://github.com/SagarChhabriya/10PearlsAQI",
    image: "/images/10pearls.png"
  },
  {
    title: "Unify",
    tech: ["Python", "Streamlit", "FAISS", "GitHub Actions"],
    description: ["Architected RAG chatbot for university queries by scraping web data.", "Integrated semantic search to handle ambiguous queries."],
    link: "https://github.com/SagarChhabriya/",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "atombot",
    tech: ["Python", "Streamlit", "FAISS", "Gemini-flash-2.0"],
    description: ["Engineered RAG assistant automating student FAQs regarding course content.", "Designed robust prompt templates to reduce hallucination."],
    link: "https://github.com/SagarChhabriya/atombot",
    image: "/images/atombot.png"
  },
  {
    title: "Churn Predictor",
    tech: ["Docker", "GCP", "W&B", "GitHub Actions"],
    description: ["Developed churn prediction classifier, tracking experiments via W&B.", "Productionized workflow via Docker and CI/CD to GCP Artifact Registry."],
    link: "https://github.com/SagarChhabriya/mlops-project",
    image: "/images/churn.png"
  },
  {
    title: "Salary Predictor",
    tech: ["Docker", "Streamlit", "Python"],
    description: ["Deployed salary prediction app (90% R2), improving accuracy by 15% via preprocessing.", "Containerized app for cross-platform compatibility."],
    link: "https://github.com/SagarChhabriya/ml-project",
    image: "/images/predictor.png"
  },
  {
    title: "Cafe Billing App",
    tech: ["C#", "Desktop", "SQL"],
    description: ["Desktop application for managing café billing and transactions.", "Streamlines order processing and generates bills."],
    link: "https://www.linkedin.com/posts/sagar-chhabriya_cafebilling-softwaredevelopment-csharp-activity-7244411974040604672-dk-X",
    image: "/images/cafe-billing.png"
  },
  {
    title: "Jarvis A.I Assistant",
    tech: ["Python", "TensorFlow", "NLP"],
    description: ["Advanced AI application designed for personal assistance.", "Leverages deep learning for natural language understanding."],
    link: "https://github.com/SagarChhabriya/JarvisCA",
    image: "/images/jarvis.png"
  }
];

export const SKILLS: SkillCategory[] = [
  { name: "Programming", skills: ["Python", "MySQL", "C++", "Java"] },
  { name: "GenAI & LLMs", skills: ["RAG", "LangChain", "LangGraph", "LlamaIndex", "CrewAI", "Gemini API", "FAISS", "Pinecone", "Chroma"] },
  { name: "ML/DL Frameworks", skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "NLTK", "spaCy"] },
  { name: "MLOps & Cloud", skills: ["Docker", "Kubernetes", "GitHub Actions", "MLflow", "W&B", "DVC", "GCP", "AWS", "Azure"] },
  { name: "Web & Dev Tools", skills: ["FastAPI", "Streamlit", "Flask", "Git", "Postman", "Web Design"] }
];

export const EDUCATION = {
  school: "Sukkur IBA University",
  degree: "Bachelor of Science in Computer Science",
  cgpa: "3.67/4.0",
  period: "Sept 2022 – May 2026 (Expected)",
  location: "Sukkur, Pakistan"
};

export const CERTIFICATIONS: CertificationItem[] = [
  { title: "Data Science & AI Bootcamp", description: "atomcamp: 4-month specialized training in ML, DL, NLP, and MLOps." },
  { title: "GitHub Foundations Exam", description: "Certified in Git, GitHub Actions, and project management." },
  { title: "DigiSkills Training", description: "Pakistan government program: Freelancing and WordPress Certification." },
  { title: "Developing Python Packages", description: "DataCamp certification in PyPI publishing & package engineering." },
  { title: "AWS DeepRacer League", description: "Competed in autonomous racing using RL models." },
  { title: "Aspire Institute Leaders Program 2024", description: "Leadership training for global social impact." },
  { title: "Prime Minister’s Laptop Award 2023", description: "National merit recipient for academic excellence." }
];
