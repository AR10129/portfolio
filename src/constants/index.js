import { Features } from "tailwindcss";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Project",
    link: "#project",
  },
  {
    name: "Skills",
    link: "#skills",
  },
 
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python & ML Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Web Elements",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git & Dev Tools",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python & ML Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Web Elements",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & Dev Tools",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    ts: "Tech Stack:  Next.js, Firebase, Tailwind CSS, Vapi AI, shadcn/ui, Google Gemeni, Zod",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "InterVue AI",
    breif: " AI-based mock interview platform",
    Features: [
      "Developed a full-stack AI mock interview platform using Next.js, TailwindCSS, and OpenAI, allowing users to simulate interview sessions and receive dynamic AI-generated responses.",
      "Integrated Clerk for user authentication and UploadThing for secure resume file uploads and management.",
      "Designed a user dashboard with session history tracking, role-based access control, and a responsive UI built with TailwindCSS and ShadCN components.",
    ],
  },
  {
    ts: "Dependencies:  OpenCV, MediaPipe, Streamlit, NumPy, Pillow, scikit-learn, Pandas",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "MyPalette",
    breif: "Integrating color analysis with shopping",
    Features: [
      "Developed a color-personalization app using OpenCV, MediaPipe, and Streamlit to recommend fashion items based on users’ dominant facial color palettes.",
      "Applied 12-season color theory to generate personalized clothing color schemes and matched them to real-world Myntra catalog filters.",
      "Engineered an end-to-end workflow that includes face detection, color clustering (KMeans), and interactive product recommendations via a web interface.",
    ],
  },
  {
    ts: "Tech Stack:  Node.js, Express.js, MongoDB",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "SubTrackr",
    breif: "A Subscription Management System API",
    Features: [
      "Developed a backend API using Node.js, Express, and MongoDB to manage user subscriptions with full CRUD functionality and secure data storage.",
      "Implemented JWT-based authentication and bcrypt password hashing, along with structured middleware for logging and global error handling using Morgan.",
      "Integrated Zod for request validation and used dotenv to manage environment-based configuration in a production-ready codebase.",
    ],
  },
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/ay_raj29",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/AR10129",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/Charizard_29",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/ayushi-raj-94bb43271",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};