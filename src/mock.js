// Mock data for Full Stack Developer Portfolio

export const mockPortfolioData = {
  profile: {
    name: "Varaha Narasimha Rao Chinni",
    title: "Graduate",
    image: "/profilepic.png",
    about: "Passionate Full Stack Developer with expertise in building scalable web applications. I love solving complex problems and creating efficient, user-friendly solutions. Currently seeking opportunities to contribute to innovative projects and grow as a developer.",
    tagline: "Building the web, one line of code at a time"
  },
  
  contact: {
    github: "https://github.com/narasimha-146",
    email: "narashimha987@gmail.com",
    phone: "+91 9381108077",
    linkedin: "https://www.linkedin.com/in/varaha-narasimha-rao-chinni/"
  },
  
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "Indian Institute of Technology Palakkad",
      duration: "2021 - 2025",
      gpa: "7.85/10.0",
      achievements: []
    },
    {
      id: 2,
      degree: "Class XII",
      institution: "ADITYA JUNIOR COLLEGE",
      duration: "2019 - 2021",
      gpa: "96%",
      achievements: []
    },
    {
      id: 3,
      degree: "Class X",
      institution: "ADITYA HIGH SCHOOL",
      duration: "Completed at 2019",
      gpa: "10.0/10.0",
      achievements: []
    }
  ],
  
  experience: [
    {
      id: 1,
      title: "Full Stack Web Development Intern (MERN Stack)",
      company: "Technocolabs Softwares Pvt. Ltd.",
      duration: "Dec 2024- Jan 2025",
      location: "Remote",
      description: [
        "Engineered 10+ reusable and responsive React.js components, reducing render time and boosting page performance and user experience by 20%.",
        "Optimized 5 core REST APIs with Node.js and Express.js, reducing backend response latency by 30ms.",
        "Designed efficient MongoDB schemas to enhance data retrieval for core application modules.",
        "Contributed to the E-Learning Portal, ensuring clean, scalable, and maintainable code."
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Git", "HTML", "CSS"]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "SkillSphere",
      description: "Engineered a full-stack e-learning platform enabling students and instructors to access courses, track progress, take quizzes, and download certificates.",
      technologies: ["React", "Node.js", "Superbase", "Express.js", "Stripe API", "JWT"],
      features: [
        "Secure user authentication with Supabase and JWT",
        "Course browsing with detailed descriptions and instructor info",
        "Video-based lessons with progress tracking",
        "Stripe payment integration",
        "Integrated quizzes with auto-scoring",
        "Certificate generation upon course completion"
      ],
      liveLink: "https://skill-sphere-eight-pied.vercel.app/",
      githubLink: "https://github.com/narasimha-146/SkillSphere",
      image: "/elearning.jpg"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Developed a full-stack task management application using React.js, Node.js, REST APIs, and MongoDB, enabling seamless task creation and tracking.",
      technologies: [ "React.js","Node.js","Express.js", "REST API", "MongoDB","JWT", "Vercel"],
      features: [
        "User login / authentication support (via form-based login)",
        "Task listing in a dashboard / list view",
        "Create, view, edit, and delete tasks (CRUD for tasks)",
        "Push notifications for task dues and updates",
        "Simple and responsive UI using React and CSS"
      ],
      liveLink: "https://task-manger-frontend-liard.vercel.app/",
      githubLink: "https://github.com/narasimha-146/Task_Manger_frontend",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    }
  ],
  
  skills: {
    frontend: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
    ],
    backend: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Authentication (JWT)", level: "Intermediate" }
    ],
    database: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
    programming: [
      { name: "C++", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vercel/Render", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
    ],
    softskills: [
      { name: "Problem-Solving", level: "Advanced" },
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Communication", level: "Intermediate" },
    ]
  },
  
  certifications: [
    {
      id: 1,
      title: "Build Your Own Static Website (HTML, CSS, Bootstrap)",
      issuer: "NxtWave",
      date: "August 2024",
      link: "https://drive.google.com/file/d/15hw3SwcccXRDGkC2PPW2uEKQ2fJMmNOT/view?usp=drive_link"
    },
    {
      id: 2,
      title: "AWS Mega Workshop",
      issuer: "NxtWave",
      date: "June 2024",
      link: "https://drive.google.com/drive/folders/178HImPMTMP_2Y6wTiUPPjf9XrqY_Klrj"
    },
    {
      id: 3,
      title: "Data Analytics Mega Workshop",
      issuer: "NxtWave",
      date: "January 2023",
      link: "https://drive.google.com/drive/folders/1WVk3qH7rfdI_WT7jpM-E5OZ71KverIrO"
    },
    {
      id: 4,
      title: "Ethical Hacking Mega Workshop",
      issuer: "NxtWave",
      date: "October 2023",
      link: "https://drive.google.com/drive/folders/1LJfbq7cVfJaldSNWrd7vrQwqVXRLrXOL"
    }
  ]
};