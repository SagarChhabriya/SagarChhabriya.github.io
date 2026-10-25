import {
  PublicationItem,
  ExperienceItem,
  ProjectItem,
  AwardItem,
} from './types';

export const PERSONAL = {
  name: 'Sagar Chhabriya',
  tagline: 'Aspiring PhD Student · Multimodal ML & Trustworthy AI',
  email: 'sagarchhabriya34@gmail.com',
  affiliation: 'Sukkur IBA University',
  location: 'Sukkur, Pakistan',
  profileImage: 'https://github.com/SagarChhabriya.png',
  cv: '/SagarChhabriyaResume.pdf',
  links: {
    email: 'mailto:sagarchhabriya34@gmail.com',
    github: 'https://github.com/SagarChhabriya',
    linkedin: 'https://www.linkedin.com/in/sagar-chhabriya',
    scholar: 'https://scholar.google.com/citations?user=erpf3JgAAAAJ&hl=en',
    portfolio: 'https://sagarchhabriya.github.io',
  },
  bio: `I am a final-year BS Computer Science student at Sukkur IBA University (Gold Medalist, CGPA 3.71/4.0), applying for CS PhD programs for Fall 2027. My research focuses on multimodal machine learning, vision–language models, and trustworthy AI—especially medical image–text understanding, retrieval-augmented generation, and rigorous evaluation of language models.`,
  interests: [
    'Multimodal Machine Learning',
    'Vision–Language Models',
    'Trustworthy AI',
    'Medical Image and Image–Text Understanding',
    'Retrieval-Augmented Generation',
    'Evaluation of Language Models',
  ],
};

export const EDUCATION = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Sukkur IBA University',
  period: 'Sept 2022 – Aug 2026',
  location: 'Sukkur, Pakistan',
  cgpa: '3.71/4.0',
  distinction: 'Gold Medalist',
  coursework:
    'Machine Learning, Artificial Intelligence, Computer Vision, Data Science, Probability and Statistics, Linear Algebra, Design and Analysis of Algorithms, Human–Computer Interaction',
};

export const PUBLICATIONS: PublicationItem[] = [
  {
    title:
      'A Modular Empirical Analysis of RAG Pipelines on WikiQA and SQuAD: The Roles of Chunking, Embeddings, Retrieval, and Model Scale',
    authors:
      'Sagar Chhabriya, Sumra Khan, Inad Alqurashi, Mansoor Ahmed, Rizwan Qureshi',
    venue: 'Under minor revision',
    year: '2026',
    note: 'First author and corresponding author',
    links: [
      {
        label: 'Preprint',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6339962',
      },
      {
        label: 'Code',
        url: 'https://github.com/SagarChhabriya/empirical-analysis-of-RAG',
      },
    ],
  },
  {
    title:
      'Hirebase: A Cloud-Native Platform for AI-Assisted Recruitment with a Voice Interview Agent',
    authors: 'Sagar Chhabriya, H. Dhingana, N. N. Dahar, A. Qadir',
    venue:
      'Bulletin of Toraigyrov University, Physics and Mathematics Series',
    year: '2026',
    links: [
      {
        label: 'DOI',
        url: 'https://doi.org/10.48081/BTOUPhMath3.2026/30-44',
      },
    ],
  },
  {
    title:
      'Towards Responsible Multimodal Medical Reasoning via Context-Aligned Vision-Language Models',
    authors:
      'Sumra Khan, Sagar Chhabriya, Aizan Zafar, Sheeraz Arif, Amgad Muneer, Anas Zafar, Shaina Raza, Rizwan Qureshi',
    venue: 'KnowledgeMR Workshop @ CVPR 2026 (poster); arXiv:2604.08815',
    year: '2026',
    note: 'Second author',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2604.08815' },
    ],
  },
  {
    title: 'Agentic Retrieval-Augmented Generation: A Compact Review',
    authors:
      'Sagar Chhabriya, Sumra Khan, Rizwan Ahmed Khan, Mansoor Ahmed',
    venue:
      'Journal of Computers and Intelligent Systems, 3(4):283–296',
    year: '2025',
    links: [
      {
        label: 'Paper',
        url: 'https://journals.iub.edu.pk/index.php/JCIS/article/view/4369',
      },
    ],
  },
  {
    title:
      'FAST-HASOC 2025: Multimodal and Multilingual Approaches for Hate Speech and Offensive Content Detection in Hindi Memes',
    authors:
      'Muhammad Rafi, Saif Ur Rehman Awan, Ramsha Jat, Aiman Falak, Fatimah Ansari, Ahmed Raza, Sagar Chhabriya',
    venue: 'FIRE 2025 Working Notes, CEUR-WS Vol. 4173, pp. 625–631',
    year: '2025',
    links: [
      { label: 'PDF', url: 'https://ceur-ws.org/Vol-4173/T9-8.pdf' },
    ],
  },
];

export const RESEARCH: ExperienceItem[] = [
  {
    title: 'Context-Aligned Reasoning for Medical Vision-Language Models',
    org: 'KnowledgeMR @ CVPR 2026 (poster) · Second author',
    period: 'Apr 2026',
    venueLink: {
      label: 'arXiv',
      url: 'https://arxiv.org/abs/2604.08815',
    },
    bullets: [
      'Co-authored a framework in which a frozen vision–language model must reconcile radiomic statistics, Grad-CAM activations, and vocabulary-grounded cues before returning a structured chest X-ray answer with evidence, uncertainty, and safety notes—reducing fluent but weakly grounded conclusions.',
      'Conducted cross-dataset evaluation on CheXpert; radiomic features achieved AUC 0.71 while text embeddings reached 0.50.',
      'Found that image-plus-text conditioning reduced average hallucinated keywords from 1.14 to 0.25; tool-augmented reasoning shortened evidence explanations from 19.4 to 15.3 words without increasing model confidence.',
      'Designed the methodology figure, quantitative tables, and conference poster.',
    ],
  },
  {
    title:
      'A Modular Empirical Analysis of RAG Pipelines on WikiQA and SQuAD',
    org: 'First author and corresponding author · Under minor revision',
    period: '2025–2026',
    venueLink: {
      label: 'SSRN',
      url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6339962',
    },
    bullets: [
      'Isolated four design levers—6 chunking strategies, 9 embedding models, dense/BM25/hybrid retrieval, and 7 generators (82M–7B)—across 44 main configurations and 18 ablations on WikiQA and SQuAD.',
      'Built a reproducible BEIR-style benchmark showing that corpus construction errors alone can force Exact Match to zero regardless of the generator.',
      'Reported retrieval metrics (Hit@k, MRR, answer-in-context) beside answer quality with 95% bootstrap intervals and paired significance tests.',
      'Found that the generator dominates (SQuAD EM 0.00 → 0.65 from 82M to 3B instruction-tuned), BM25 trails dense retrieval (Hit@5 0.754 vs 0.902), and chunking has no significant effect.',
    ],
  },
  {
    title: 'Sentiment Classification of Hindi–English Memes (HASOC 2025)',
    org: 'NLP Research Assistant, VSL Lab, FAST-NUCES',
    period: 'June 2025 – Aug 2025',
    location: 'Karachi, Pakistan',
    venueLink: {
      label: 'FIRE Working Notes',
      url: 'https://ceur-ws.org/Vol-4173/T9-8.pdf',
    },
    bullets: [
      'Developed a TF-IDF and Random Forest pipeline for ternary sentiment classification of noisy OCR-extracted Hindi–Hinglish meme text (1,133 training samples).',
      'Diagnosed weak baselines via manual instance inspection (OCR noise, code-mixing, task-specific patterns) and curated Hindi–Hinglish stopword and offensive-term dictionaries.',
      'Improved macro-F1 from ~0.64 to 0.70 on the test set with five-fold stratified cross-validation; co-authored the FIRE 2025 Working Notes paper.',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Machine Learning Trainer',
    org: 'atomcamp',
    period: 'Aug 2025 – Present',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Mentored 80+ learners and guided 30+ students through end-to-end AI/ML projects and deployments.',
      'Conduct weekly sessions on ML, DL, NLP, Generative AI, MLOps, Docker, CI/CD, and cloud deployment.',
      'Designed capstone projects, coding labs, and technical guides; provide 1:1 mentorship and code reviews.',
    ],
  },
  {
    title: 'Programming Fundamentals Course Instructor',
    org: 'Times Tech Computer Center',
    period: 'Feb 2025 – May 2025',
    location: 'Kandhkot, Pakistan',
    bullets: [
      'Delivered a four-month C++ course to 15+ secondary-school students covering core syntax and structured programming.',
      'Designed 25+ hands-on exercises and debugging activities.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Hire-Base (AI-Assisted HR & Recruitment Platform)',
    tech: 'React, FastAPI, PostgreSQL, Supabase, Azure, LiveKit, Groq, Deepgram',
    link: 'https://github.com/SagarChhabriya/agentic-hr',
    bullets: [
      'End-to-end HR platform for onboarding, hiring, assessments, interviews, and recruiter insights.',
      'AI voice-interview agent with LiveKit, Groq/Llama 3.1, Deepgram STT/TTS, and VAD; CI/CD via GitHub Actions.',
    ],
  },
  {
    title: 'Graph Neural Networks for Aerodynamic Drag Prediction',
    tech: 'PyTorch, PyTorch Geometric, GraphSAGE, CFD',
    bullets: [
      'GNN framework predicting aerodynamic drag from airfoil CFD meshes (nodal velocities + connectivity).',
      'GraphSAGE with Top-K pooling; test R² 0.9837, outperforming CNN and shallow regression baselines.',
    ],
  },
];

export const CONFERENCES = [
  {
    title: '1st ICCA @ Salim Habib University',
    detail:
      'Presented: Agentic Retrieval-Augmented Generation: A Compact Review',
    date: 'May 2025',
  },
];

export const AWARDS: AwardItem[] = [
  {
    title: 'Gold Medalist',
    detail: 'BS Computer Science, Sukkur IBA University',
  },
  {
    title: 'Hacktoberfest 2025 Super Contributor',
    detail: 'Recognized open-source contributor',
    link: 'https://www.holopin.io/@sagarchhabriya3#badges',
  },
  {
    title: 'Master Trainee PVE (EU-funded)',
    detail: 'Trained 185+ students in violent extremism prevention',
    link: 'https://www.linkedin.com/posts/sagar-chhabriya_activity-7296574905934909440-XMnX',
  },
  {
    title: 'GitHub Foundations Exam',
    detail: 'Certified in Git, GitHub Actions, and project management',
    link: 'https://www.credly.com/badges/ad76b653-1048-4090-bcf6-605bf97148ad/',
  },
  {
    title: 'Aspire Institute Leaders Program 2024',
    detail: 'Completed Cohort 1 leadership training',
  },
  {
    title: "Prime Minister's Laptop Award 2023",
    detail: 'National merit recipient for academic excellence in Computer Science',
  },
  {
    title: 'Book Review Competition Winner 2022',
    detail: '1st place among 17 sections across 5 SIBAU campuses',
  },
];

export const SKILLS = [
  {
    name: 'Programming',
    items: 'Python, C++, Java',
  },
  {
    name: 'ML & NLP',
    items:
      'Scikit-learn, PyTorch, TensorFlow/Keras, NLTK, Hugging Face Transformers, FAISS, LangChain',
  },
  {
    name: 'MLOps & Cloud',
    items:
      'Docker, GitHub Actions, W&B, GCP Cloud Run, AWS (EC2, S3), Azure Web Apps',
  },
  {
    name: 'Web & Tools',
    items: 'FastAPI, Streamlit, Git, GitHub Codespaces',
  },
];
