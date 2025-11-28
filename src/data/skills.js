// src/data/skills.js

// 로고 이미지 경로는 네 프로젝트 구조에 맞게 수정해줘!
import pythonLogo from "../assets/skill-logos/python.png";
import pandasLogo from "../assets/skill-logos/pandas.png";
import numpyLogo from "../assets/skill-logos/numpy.png";
import sklearnLogo from "../assets/skill-logos/sklearn.png";
import tensorflowLogo from "../assets/skill-logos/tensorflow.png";
import pysparkLogo from "../assets/skill-logos/pyspark.png";
import seleniumLogo from "../assets/skill-logos/selenium.png";
import jupyterLogo from "../assets/skill-logos/jupyter.png";

const skillCategories = [
  {
    id: "data",
    label: "Data Engineering",
    description: "데이터 수집·전처리·EDA·모델링·ML/DL 개발 경험",
    skills: [
      { id: "python", name: "Python", logo: pythonLogo, level: 5 },
      { id: "pandas", name: "Pandas", logo: pandasLogo, level: 5 },
      { id: "numpy", name: "Numpy", logo: numpyLogo, level: 5 },
      { id: "sklearn", name: "sklearn", logo: sklearnLogo, level: 4 },
      { id: "tf", name: "TensorFlow", logo: tensorflowLogo, level: 4 },
      { id: "pyspark", name: "PySpark", logo: pysparkLogo, level: 4 },
      { id: "selenium", name: "Selenium", logo: seleniumLogo, level: 4 },
      { id: "jupyter", name: "Jupyter", logo: jupyterLogo, level: 5 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Python·Java 기반 서버 개발 및 REST API 구현 경험",
    skills: [
      // 나중에 실제 로고/이미지 준비되면 추가
      // { id: "flask", name: "Flask", logo: flaskLogo, level: 4 },
    ],
  },
  {
    id: "db",
    label: "Database",
    description: "관계형 DB 모델링 및 SQL 작성 경험",
    skills: [],
  },
  {
    id: "infra",
    label: "Infra & Tools",
    description: "개발·협업 환경 구성 및 다양한 도구 활용 경험",
    skills: [],
  },
];

export { skillCategories };