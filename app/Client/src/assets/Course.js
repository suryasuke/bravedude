import BoltIcon from '@mui/icons-material/Bolt';
import machine from './Images/machine-learn.png'
import data_vis from './Images/data-vis.png'
import ios from './Images/ios.png'
const Course = [
  {
    id: 1,
    Title: "Full Stack Web Development",
    Duration: "2-3 Months",
    Rating: "4.9",
    Mode: "Online & Offline",
    Level: "Intermediate",
    Badge: `Most Popular`,
    Description: "Learn to build complete web applications from scratch using modern technologies like React, Node.js, and PostgreSQL. This course covers both frontend and backend development. You'll work on real-world projects and deploy your own applications. Ideal for those aiming to become a full-stack developer.",
    Topics: [
      {crse : "HTML", IMG : "https://img.icons8.com/color/48/html-5--v1.png"},
      {crse:"CSS", IMG: "https://img.icons8.com/color/48/css3.png"},
      {crse:"JavaScript", IMG: "https://img.icons8.com/color/48/javascript--v1.png"},
      {crse:"React.js", IMG: "https://img.icons8.com/color/48/react-native.png"},
      {crse:"Node.js", IMG: "https://img.icons8.com/color/48/nodejs.png"},
      {crse:"Express.js", IMG: "https://img.icons8.com/color/48/express-js.png"},
      {crse:"MongoDB", IMG: "https://img.icons8.com/color/48/mongodb.png"},
      {crse:"PostgreSQL", IMG: "https://img.icons8.com/color/48/postgreesql.png"},
      {crse : "Git"}
    ]
  },
  {
  id: 7,
  Title: "Artificial Intelligence & Machine Learning",
  Duration: "3-4 Months",
  Rating: "4.9",
  Mode: "Online & Offline",
  Level: "Advanced",
  Description: "Gain expertise in AI and Machine Learning by exploring supervised, unsupervised, and deep learning techniques. Learn to implement models using TensorFlow and PyTorch with real-world datasets. This course is perfect for aspiring data scientists and AI engineers.",
  Topics: [
    {crse: "Python", IMG: "https://img.icons8.com/color/48/python.png"},
    {crse: "Machine Learning Algorithms", IMG: "https://img.icons8.com/color/48/artificial-intelligence.png"},
    {crse: "Deep Learning", IMG: "https://img.icons8.com/color/48/brain.png"},
    {crse: "TensorFlow", IMG: "https://img.icons8.com/color/48/tensorflow.png"},
    {crse: "PyTorch", IMG: "https://img.icons8.com/color/48/pytorch.png"},
  ]
},
{
  id: 8,
  Title: "Cloud Computing with AWS & Azure",
  Duration: "2-3 Months",
  Rating: "4.7",
  Mode: "Online",
  Level: "Intermediate",
  Description: "Master the fundamentals of cloud computing with hands-on training in AWS and Microsoft Azure. Learn how to deploy, scale, and manage applications in the cloud with practical case studies.",
  Topics: [
    {crse: "AWS", IMG: "https://img.icons8.com/color/48/amazon-web-services.png"},
    {crse: "Azure", IMG: "https://img.icons8.com/color/48/azure-1.png"},
    {crse: "Cloud Deployment"},
    {crse: "Serverless Computing"},
    {crse: "Cloud Security"},
  ]
},
{
  id: 9,
  Title: "DevOps & Automation",
  Duration: "2-3 Months",
  Rating: "4.6",
  Mode: "Online & Offline",
  Level: "Intermediate",
  Description: "Learn the DevOps culture and practices with CI/CD pipelines, containerization, and automation tools. Get hands-on experience with Docker, Kubernetes, and Jenkins to streamline the software development lifecycle.",
  Topics: [
    {crse: "Docker", IMG: "https://img.icons8.com/color/48/docker.png"},
    {crse: "Kubernetes", IMG: "https://img.icons8.com/color/48/kubernetes.png"},
    {crse: "Jenkins", IMG: "https://img.icons8.com/color/48/jenkins.png"},
    {crse: "CI/CD"},
    {crse: "Automation"},
  ]
},
{
  id: 10,
  Title: "Blockchain Development",
  Duration: "2-3 Months",
  Rating: "4.5",
  Mode: "Online",
  Level: "Intermediate",
  Description: "Understand the core concepts of blockchain technology and learn to develop decentralized applications (dApps) on Ethereum and other platforms. This course is perfect for those interested in Web3 and crypto technologies.",
  Topics: [
    {crse: "Ethereum", IMG: "https://img.icons8.com/color/48/ethereum.png"},
    {crse: "Solidity", IMG: "https://img.icons8.com/color/48/solidity.png"},
    {crse: "Smart Contracts"},
    {crse: "Web3.js"},
    {crse: "Cryptography"},
  ]
},
{
  id: 11,
  Title: "UI/UX Design",
  Duration: "1-2 Months",
  Rating: "4.8",
  Mode: "Offline & Online",
  Level: "Beginner",
  Description: "Learn user interface and user experience design principles. Master tools like Figma and Adobe XD, conduct user research, and create wireframes and prototypes. Build design portfolios to showcase your creativity.",
  Topics: [
    {crse: "Figma", IMG: "https://img.icons8.com/color/48/figma--v1.png"},
    {crse: "Adobe XD", IMG: "https://img.icons8.com/color/48/adobe-xd--v1.png"},
    {crse: "Wireframing"},
    {crse: "Prototyping"},
    {crse: "User Research"},
  ]
}
,
  {
    id: 2,
    Title: "Data Science",
    Duration: "2-3 Months",
    Rating: "4.8",
    Mode: "Online & Offline",
    Level: "Intermediate",
    Description: "Master data science tools and techniques with Python as your foundation. Learn to clean, analyze, and visualize data. Dive deep into machine learning concepts with practical case studies. Build your portfolio with real-world datasets and projects.",
    Topics: [
      {crse: "Python", IMG: "https://img.icons8.com/color/48/python.png"},
      {crse: "Machine Learning", IMG: machine},
      {crse: "Data Visualization", IMG: data_vis},
      {crse: "Pandas", IMG: "https://img.icons8.com/color/48/pandas.png"},
      {crse: "NumPy", IMG: "https://img.icons8.com/color/48/numpy.png"},
    ]
  },
  {
    id: 3,
    Title: "Frontend Web Development",
    Duration: "2-3 Months",
    Rating: "4.7",
    Mode: "Offline",
    Level: "Beginner",
    Description: "Start your web development journey by mastering the core technologies: HTML, CSS, JavaScript, and React. Learn how to build responsive and interactive websites from scratch. This course is ideal for beginners who want to become front-end developers.",
    Topics: [
      {crse: "HTML", IMG: "https://img.icons8.com/color/48/html-5--v1.png"},
      {crse: "CSS", IMG: "https://img.icons8.com/color/48/css3.png"},
      {crse: "JavaScript", IMG: "https://img.icons8.com/color/48/javascript--v1.png"},
      {crse: "React.js", IMG: "https://img.icons8.com/color/48/react-native.png"},
    ]
  },
  {
    id: 4,
    Title: "Mobile App Development",
    Duration: "2-3 Months",
    Rating: "4.6",
    Mode: "Online",
    Level: "Intermediate",
    Description: "Learn to build high-performance mobile apps using React Native, Flutter, and native platforms. Understand UI/UX design principles and publish your apps on app stores. This course is perfect for developers who want to enter mobile development.",
    Topics: [
      {crse: "React Native", IMG: "https://img.icons8.com/color/48/react-native.png"},
      {crse: "Flutter", IMG: "https://img.icons8.com/color/48/flutter.png"},
      {crse: "Android Development", IMG: "https://img.icons8.com/color/48/android-os.png"},
      {crse: "iOS Development", IMG: ios},
    ]
  },
  {
    id: 5,
    Title: "Cybersecurity",
    Duration: "2-3 Months",
    Rating: "4.5",
    Mode: "Offline",
    Level: "Advanced",
    Description: "Dive into the world of digital defense by learning ethical hacking, penetration testing, and cryptography. Understand how to secure systems against threats. Perfect for IT professionals looking to specialize in cybersecurity roles.",
    Topics: [
      {crse: "Network Security"},
      {crse: "Ethical Hacking"},
      {crse: "Penetration Testing"},
      {crse: "Cryptography"},
    ]
  },
  {
    id: 6,
    Title: "Core Java Programming",
    Duration: "2-3 Months",
    Rating: "4.5",
    Mode: "Online & Offline",
    Level: "Beginner",
    Description: "Build a strong foundation in Java programming with a focus on object-oriented concepts. Learn essential data structures, algorithms, and how to apply Java in real-world projects. This course prepares you for advanced Java frameworks and backend roles.",
    Topics: [
      {crse: "Java", IMG: "https://img.icons8.com/color/48/java-coffee-cup-logo.png"},
      {crse: "Object-Oriented Programming"},
      {crse: "Data Structures"},
      {crse: "Algorithms"},
      {crse: "Spring Framework"},
    ]
  }
];

export default Course;
