
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
  title: "AI and Machine Learning Engineer",
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
  profile: "Computer Science graduate with research experience in Natural Language Processing, Computer Vision, and Generative AI. I work on multimodal learning, information retrieval, and large language models, with hands-on experience building AI systems using RAG, transformer-based models, and deep learning frameworks."
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
    title: "Towards Responsible Multimodal Medical Reasoning via Context-Aligned Vision-Language Models",
    authors: "Sumra Khan, Sagar Chhabriya, Aizan Z, Sheeraz A, Amgad Muneer, Anas Zafar, Shaina Raza, Rizwan Qureshi",
    date: "2026",
    venue: "arXiv Preprint, Computer Vision and Pattern Recognition (CVPR)",
    pdfLink: "https://arxiv.org/pdf/2604.08815",
    doiLink: "#"
  },
  {
    title: "A Modular Empirical Analysis of RAG Pipelines on WikiQA and SQuAD: The Roles of Chunking, Embeddings, Retrieval, and Model Scale",
    authors: "Sagar Chhabriya, Sumra Khan, Mansoor Ahmed",
    date: "2026",
    venue: "Journal: ARRAY (Elsevier)",
    pdfLink: "https://ceur-ws.org/Vol-4173/T9-8.pdhttps://papers.ssrn.com/sol3/papers.cfm?abstract_id=6339962",
    doiLink: "#"
  },
  {
    title: "FAST-HASOC 2025: Multimodal and Multilingual Approaches for Hate Speech and Offensive Content Detection in Hindi Memes",
    authors: "Muhammad Rafi, Saif, ..., Sagar Chhabriya",
    date: "2025",
    venue: "CEUR Workshop Proceedings, Vol-4173",
    pdfLink: "https://ceur-ws.org/Vol-4173/T9-8.pdf",
    doiLink: "#"
  },
  {
    title: "Agentic Retrieval-Augmented Generation: A Compact Review",
    authors: "Sagar Chhabriya, Sumra Khan, Dr. Rizwan Ahmed Khan, Mansoor Ahmed",
    date: "2025",
    venue: "Journal of Computers and Intelligent Systems, Vol-3, No-4",
    pdfLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=erpf3JgAAAAJ&citation_for_view=erpf3JgAAAAJ:u-x6o8ySG0sC",
    doiLink: "#"
  }
];

export const CONFERENCES: ConferenceItem[] = [
  { title: "Datasets for Pakistani Languages", date: "Dec 2025", location: "Registered Attendee, C-RAAT Webinar (Online)" },
  { title: "Modern NLP and South Asian Languages", date: "Nov 2025", location: "Remote Participant, C-RAAT Symposium @ MAJU, Karachi" },
  { title: "2nd NLP Symposium", date: "July 2025", location: "In-person Attendee, MAJU Campus, Karachi" },
  { title: "1st ICCA @ Salim Habib University", date: "May 2025", location: "Presented: Agentic Retrieval-Augmented Generation: A Compact Review" }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "atomcamp",
    role: "Machine Learning Trainer",
    location: "Islamabad (Remote)",
    period: "Aug 2025 – Present",
    highlights: [
      "Mentored 110+ learners and guided 55+ students to deploy end-to-end machine learning projects.",
      "Designed capstone projects and authored technical guides for Docker and Conda environment setup.",
      "Conduct weekly live sessions on ML, DL, NLP, and MLOps; mentor students in Dockerization and CI/CD.",
      "Lead MLOps modules covering data acquisition, experiment tracking (W&B), and GCP workflows.",
      "Provide 1:1 technical mentorship and code reviews to ensure consistent student progress and code quality."
    ]
  },
  {
    company: "10Pearls",
    role: "Data Science Intern (Shine Program)",
    location: "Karachi (Remote)",
    period: "Dec 2025 – Feb 2026",
    highlights: [
      "Architected a production-ready AQI forecasting platform using Python, FastAPI, Streamlit, and MongoDB Atlas.",
      "Engineered automated pipelines for hourly data ingestion and daily retraining via GitHub Actions.",
      "Integrated feature store with time-series preprocessing (rolling windows, lag features).",
      "Deployed ensemble models (RF, XGBoost, LightGBM) via CI/CD to Railway with a FastAPI backend.",
      "Built and deployed an interactive AQI dashboard on Streamlit Community Cloud for real-time monitoring."
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
      "Fine-tuned Multilingual BERT (mBERT) against ML baselines (SVM, Naive Bayes).",
      "Conducted comprehensive literature reviews on multilingual NLP to inform model design strategies.",
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
      "Created algorithmic challenges boosting student LeetCode solve rates by 35%.",
      "Led weekly code reviews and debugging workshops for intermediate C++ proficiency.",
      "Achieved 90% student advancement to advanced programming concepts and projects."
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
    description: ["Architected a RAG chatbot for university queries by scraping web data and structuring JSONL QA pairs.", "Deployed on Streamlit Cloud with FAISS and automated CI/CD for continuous updates.", "Integrated semantic search to handle ambiguous student queries with high precision."],
    link: "https://github.com/SagarChhabriya/",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "atombot",
    tech: ["Python", "Streamlit", "FAISS", "Gemini-flash-2.0"],
    description: ["Engineered a RAG assistant automating student FAQs for course content and coding assignments.", "Implemented CI/CD workflow for automated Streamlit deployment to support 24/7 availability.", "Designed robust prompt templates to reduce hallucination and keep responses curriculum-relevant."],
    link: "https://github.com/SagarChhabriya/atombot",
    image: "/images/atombot.png"
  },
  {
    title: "Churn Predictor",
    tech: ["Docker", "GCP", "W&B", "GitHub Actions"],
    description: ["Developed churn prediction classifier and tracked experiments via W&B while serving predictions on Streamlit.", "Productionized the workflow via Docker and CI/CD (GitHub Actions -> GCP Artifact Registry -> Cloud Run).", "Integrated Confusion Matrix and ROC metrics into the dashboard for stakeholder analysis."],
    link: "https://github.com/SagarChhabriya/mlops-project",
    image: "/images/churn.png"
  },
  {
    title: "Salary Predictor",
    tech: ["Docker", "Streamlit", "Python"],
    description: ["Deployed a salary prediction app (90% R2), improving accuracy by 15% through comprehensive preprocessing.", "Containerized the app with Docker and implemented CI/CD for cross-platform compatibility.", "Added interactive Plotly visualizations to analyze salary trends across demographics."],
    link: "https://github.com/SagarChhabriya/ml-project",
    image: "/images/predictor.png"
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
  cgpa: "3.70/4.0",
  period: "Sept 2022 – May 2026",
  location: "Sukkur, Pakistan"
};

export const CERTIFICATIONS: CertificationItem[] = [
  { title: "Hacktoberfest 2025 Super Contributor", description: "Recognized as a top open-source contributor during Hacktoberfest." },
  { title: "Data Science & AI Bootcamp", description: "atomcamp: 4-month specialized training in ML, DL, NLP, and MLOps." },
  { title: "Master Trainee PVE (EU-funded)", description: "Trained 185+ students in violent extremism prevention." },
  { title: "GitHub Foundations Exam", description: "Certified in Git, GitHub Actions, and project management." },
  { title: "DigiSkills Training", description: "Pakistan government program: Freelancing and WordPress Certification." },
  { title: "AWS DeepRacer League", description: "Competed in autonomous racing using RL models." },
  { title: "Aspire Institute Leaders Program 2024", description: "Successfully completed Cohort 1 leadership training." },
  { title: "Prime Minister’s Laptop Award 2023", description: "National merit recipient for academic excellence in Computer Science." },
  { title: "Book Review Competition Winner 2022", description: "Secured 1st place among 17 sections across 5 SIBAU campuses." }
];
