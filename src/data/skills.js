// src/data/skills.js

// DataEngineering 로고
import pythonLogo from "../assets/skill-logos/python.png";
import pandasLogo from "../assets/skill-logos/pandas.png";
import numpyLogo from "../assets/skill-logos/numpy.png";
import sklearnLogo from "../assets/skill-logos/sklearn.png";
import tensorflowLogo from "../assets/skill-logos/tensorflow.png";
import pysparkLogo from "../assets/skill-logos/pyspark.png";
import seleniumLogo from "../assets/skill-logos/selenium.png";
import jupyterLogo from "../assets/skill-logos/jupyter.png";
import bs4Logo from "../assets/skill-logos/bs4.png";
import kerasLogo from "../assets/skill-logos/keras.png";

// Backend 로고
import reactLogo from "../assets/skill-logos/react.png";
import flaskLogo from "../assets/skill-logos/flask.png";
import javaLogo from "../assets/skill-logos/java.png";
import jsLogo from "../assets/skill-logos/javascript.png";
import cppLogo from "../assets/skill-logos/cpp.png";
import cLogo from "../assets/skill-logos/c.png";
import cssLogo from "../assets/skill-logos/css.png";
import htmlLogo from "../assets/skill-logos/html.png";
import androidstudioLogo from "../assets/skill-logos/androidstudio.png";

// DB 로고
import mysqlLogo from "../assets/skill-logos/mysql.png";
import apachetomcatLogo from "../assets/skill-logos/apachetomcat.png";
import oracleLogo from "../assets/skill-logos/oracledb.png";

// Infra & Tools 로고
import linuxLogo from "../assets/skill-logos/linux.png";
import gitLogo from "../assets/skill-logos/git.png";
import vscodelLogo from "../assets/skill-logos/vscode.png";
import vsLogo from "../assets/skill-logos/vs.png";
import eclipseLogo from "../assets/skill-logos/eclipse.png";
import figmaLogo from "../assets/skill-logos/figma.png";
import excelLogo from "../assets/skill-logos/excel.png";
import pptLogo from "../assets/skill-logos/ppt.png";
import wordLogo from "../assets/skill-logos/word.png";
import hangeulLogo from "../assets/skill-logos/hangeul.png";

const skillCategories = [
  {
    id: "data",
    label: "Data Engineering",
    description: "데이터 수집 · 전처리 · EDA · 모델링 · ML/DL 개발 경험",
    skills: [
      { id: "python", name: "Python", logo: pythonLogo, level: 4 },
      { id: "pandas", name: "Pandas", logo: pandasLogo, level: 4 },
      { id: "numpy", name: "Numpy", logo: numpyLogo, level: 4 },
      { id: "sklearn", name: "sklearn", logo: sklearnLogo, level: 2.5 },
      { id: "tf", name: "TensorFlow", logo: tensorflowLogo, level: 2.5 },
      { id: "pyspark", name: "PySpark", logo: pysparkLogo, level: 2.5 },
      { id: "selenium", name: "Selenium", logo: seleniumLogo, level: 3 },
      { id: "jupyter", name: "Jupyter", logo: jupyterLogo, level: 4 },
      { id: "keras", name: "Keras", logo: kerasLogo, level: 2.5 },
      { id: "bs4", name: "BeautifulSoup", logo: bs4Logo, level: 3 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Python · Java 기반 서버 개발 및 REST API 구현 경험",
    skills: [
      { id: "react", name: "React", logo: reactLogo, level: 2.5 },
      { id: "flask", name: "Flask", logo: flaskLogo, level: 2.5 },
      { id: "java", name: "Java", logo: javaLogo, level: 2 },
      { id: "javascript", name: "JavaScript", logo: jsLogo, level: 2.5 },
      { id: "cpp", name: "C++", logo: cppLogo, level: 3.5 },
      { id: "c", name: "C", logo: cLogo, level: 3.5 },
      { id: "css", name: "CSS", logo: cssLogo, level: 3 },
      { id: "html", name: "HTML", logo: htmlLogo, level: 3.5 },
      { id: "androidstudio", name: "AndroidStudio", logo: androidstudioLogo, level: 3 },
    ],
  },
  {
    id: "db",
    label: "Database",
    description: "관계형 DB 모델링 및 SQL 작성 경험",
    skills: [
      { id: "mysql", name: "MySQL", logo: mysqlLogo, level: 5 },
      { id: "apache", name: "ApacheTomcat", logo: apachetomcatLogo, level: 2 },
      { id: "oracle", name: "OracleDB", logo: oracleLogo, level: 2 },
    ],
  },
  {
    id: "infra",
    label: "Infra & Tools",
    description: "개발 · 협업 환경 구성 및 다양한 도구 활용 경험",
    skills: [
      // { id: "jupyter", name: "Jupyter", logo: jupyterLogo, level: 3.5 },
      // { id: "androidstudio", name: "Android Studio", logo: androidstudioLogo, level: 2 },
      { id: "linux", name: "Linux", logo: linuxLogo, level: 3 },
      { id: "git", name: "Git", logo: gitLogo, level: 3.5 },
      { id: "vs", name: "VisualStudio", logo: vsLogo, level: 3.5 },
      { id: "vscode", name: "VScode", logo: vscodelLogo, level: 4.5 },
      { id: "eclipse", name: "Eclipse", logo: eclipseLogo, level: 2 },
      { id: "figma", name: "Figma", logo: figmaLogo, level: 3 },
      { id: "word", name: "Word", logo: wordLogo, level: 4.5 },
      { id: "excel", name: "Excel", logo: excelLogo, level: 3.5 },
      { id: "ppt", name: "PowerPoint", logo: pptLogo, level: 4.5 },
      { id: "hangeul", name: "한글", logo: hangeulLogo, level: 4 },
    ],
  },
];

export { skillCategories };