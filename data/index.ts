export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "lg:w-auto lg:h-auto object-contain lg:max-w-full lg:max-h-full object-contain w-auto h-full mx-auto my-auto",
    titleClassName: "justify-end",
    img: "/Rutgers_Scarlet_Knights_logo.svg.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I earned a B.A. in Computer Science and Data Science with a minor in Quantitative Economics from Rutgers University, combining technical expertise with a strong analytical foundation.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    description: "I’m a hardworking recent graduate with a passion for both technology and fitness. With a strong problem-solving mindset and over five years of training in the gym, I bring discipline and dedication to everything I do.",
    title: "@uhl.fit on Instagram",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/gym-icon-png-kansas-city-5.png",
  },

  {
    id: 5,
    title: "Currently working at PsychoGenics and Classy Solutions",
    description: "Data Scientist and Software Developer",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to reach out?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio (this site!)",
    des: "A showcase of my projects, skills, and accomplishments, highlighting my expertise in software development, data analysis, and problem-solving. Explore my journey through code and creativity.",
    img: "/This_Site_Project.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/tyleruhl02/tyleruhl02.github.io",
  },
  {
    id: 2,
    title: "Real Estate Investment Analysis",
    des: "A Python project that models the best places to buy property using historical housing price trends.",
    img: "/Real_Estate_Project.png",
    iconLists: ["/Python_Logo.png", "/Pandas_Logo.svg", "/Numpy_Logo.png", "/Matplotlib_Logo.png"],
    link: "https://github.com/tyleruhl02/Real-Estate-Investment-Analysis",
  },
  {
    id: 3,
    title: "Advanced C Programming Projects",
    des: "A collection of C programming projects showcasing advanced problem-solving, efficient algorithms, and systems-level development.",
    img: "/C_Projects.png",
    iconLists: ["/C_Logo.png"],
    link: "https://github.com/tyleruhl02/C-Projects",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/tyleruhl02/Apple-Website",
  },
];

export const hobbies = [
  {
    image: "/IMG_1229.png"
  },
  {
    image: "/IMG_8082.jpeg"
  },
  {
    image: "/IMG_0725.png"
  },
  {
    image: "/IMG_0420.jpeg"
  },
  {
    image: "/IMG_1230.jpeg"
  },
  {
    image: "/IMG_7084.JPEG"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Science Intern - PsychoGenics Inc.",
    desc: "	• Implemented Bayesian optimization with scikit-learn to increase behavior detection effectiveness by 30%\n • Visualized data and created graphs in Python for weekly sprint meetings using Matplotlib\n • Restructured and filtered thousands of files efficiently in Python with Pandas\n	• Collaborated with the team using Git and the Linux terminal to manage and upload code",
    className: "md:col-span-2",
    thumbnail: "/PsychoGenics_Logo.jpg",
  },
  {
    id: 2,
    title: "Database & Full-Stack Developer - Classy Solutions",
    desc: " • Designed and optimized relational databases for course scheduling, including schema creation, efficient queries, and data integrity constraints\n • Developed full-stack applications using React and Node.js, implementing dynamic tables, interactive UI components, and RESTful API endpoints\n • Collaborated with team, handling data manipulation, error handling, and secure endpoints for database operations",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Software Engineer - TalkOrb LLC",
    desc: " • Created Virtument, an online database and interface for providing therapist referrals based on individual needs\n • Used Wix and Velo (Wix’s version of JavaScript); created and queried databases\n • Developed my knowledge of web-development tools and skills and was asked to continue in the fall and winter",
    className: "md:col-span-2",
    thumbnail: "/TalkOrb_Logo.jpg",
  },
  {
    id: 4,
    title: "Cashier - Wegmans Food Markets",
    desc: " • Worked 18 hours a week as a cashier and other store responsibilities while maintaining a 4.0 GPA during my senior year in high school; currently work during school breaks; scholarship recipient",
    className: "md:col-span-2",
    thumbnail: "/Wegmans_Logo.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/tyleruhl02"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/feed/"
  },
];