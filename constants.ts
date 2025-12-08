import { Project, SkillCategory, Education } from './types';

export const PERSONAL_INFO = {
  name: "SWAROOP B M",
  role: "Aspiring Data Scientist & Machine Learning Engineer",
  email: "swaroopbm352004@gmail.com",
  phone: "+91 9110656049",
  location: "India",
  summary: "Detail-oriented and results-driven data scientist skilled in machine learning, predictive modeling, and statistical analysis. Experienced in building end-to-end data-driven solutions using Python, Scikit-learn, Pandas, and NumPy. Proficient in data preprocessing, feature engineering, EDA, and model evaluation for actionable insights.",
  socials: {
    github: "https://github.com/swarubm",
    linkedin: "https://www.linkedin.com/in/swaroop-b-m-9937b2243",
    twitter: "https://x.com/SWARUBM?t=PXHFS51wU0CNRIsIVosjGg&s=09",
    googleCloud: "https://www.skills.google/profile/badges",
    kaggle: "https://www.kaggle.com/swarubm"
  }
};

export const PROJECTS: Project[] = [
  {
    title: "ML PROJECTS",
    description: "Built a classification model using Logistic Regression, Random Forest, and XGBoost to predict thyroid disease presence from patient medical attributes with high accuracy. Deployed using Flask.",
    technologies: ["Python", "Machine Learning", "Flask", "XGBoost"],
    link: "https://github.com/swarubm/ML-ALGORITHMS"
  },
  {
    title: "Netflix Catalog Analysis",
    description: "Analyzed Netflix dataset to uncover global content trends, genre popularity, and production patterns using Python, Pandas, and Matplotlib.",
    technologies: ["Python", "Pandas", "Matplotlib", "EDA"],
    link: "https://github.com/swarubm/DATA-ANALYSIS-PROJECTS/blob/main/netflix.ipynb"
  },
  {
    title: "Global Sugarcane Production Analysis",
    description: "Performed exploratory data analysis on FAO datasets to study sugarcane yield, acreage, and production distribution across countries and continents.",
    technologies: ["Data Analysis", "Feature Engineering", "Visualization"]
  },
  {
    title: "Black Friday Retail Analytics",
    description: "Developed a data-driven analysis of customer demographics and purchase behavior to identify product mix and pricing trends.",
    technologies: ["Scikit-learn", "Seaborn", "Analytics"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming & Tools",
    items: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "XGBoost", "TensorFlow", "Keras", "SQL"]
  },
  {
    category: "Data Handling",
    items: ["Data Cleaning", "Preprocessing", "Feature Engineering", "Visualization", "SQL"]
  },
  {
    category: "Machine Learning",
    items: ["Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Clustering", "Hyperparameter Tuning"]
  },
  {
    category: "Deep Learning",
    items: ["Neural Networks", "CNN", "Model Training", "Optimization"]
  },
  {
    category: "Platforms",
    items: ["Jupyter Notebook", "Google Colab", "GitHub"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech",
    institution: "Dr. T Thimmaiah Institute of Technology, KGF",
    year: "2022 - 2026",
    score: "70%"
  },
  {
    degree: "Class 12th",
    institution: "Karnataka State Board",
    year: "2022",
    score: "74%"
  },
  {
    degree: "Class 10th",
    institution: "KSEEB",
    year: "2020",
    score: "85%"
  }
];