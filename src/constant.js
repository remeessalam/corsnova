import {
  Code,
  Smartphone,
  BrainCircuit,
  BrainCog,
  MessageCircle,
  Cpu,
  BarChart2,
  Layers,
  Briefcase,
  Cloud,
  PenTool,
  PencilRuler,
} from "lucide-react";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";

export { logoImg };

export const companyDetails = {
  phone: "+91 7425860950",
  address: "1502, Vista 2, Uniworld City, New Town Kolkata : 700156",
  email: "techteam@corsnova.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO of Innovative Tech Corp",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Partnering with CORSNOVA has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”",
  },
  {
    id: 2,
    name: "Sarah Jardin",
    position: "Director of Operations at Green Future Ltd",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The exceptional team at CORSNOVA took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”",
  },
  {
    id: 3,
    name: "Velicia Jamez",
    position: "CTO of Health Innovations Group",
    img: require("./assets/images/testimonial3.png"),
    desc: "“CORSNOVA stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Website Development (Full Stack)",
    icon: Code,
    description:
      "Our full-stack development services provide end-to-end solutions, combining front-end and back-end expertise for a future-proof digital presence.",
    link: "/services/website-development",
    additionalDetails: {
      overview:
        "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, these digital tools have revolutionized the way we interact, communicate, and conduct business. Website development involves a blend of creativity, technical expertise, and an understanding of user needs.",
      services: [
        {
          title: "Front-end Development",
          description:
            "Building responsive and interactive user interfaces using modern frameworks like React, Angular, and Vue.js.",
        },
        {
          title: "Back-end Development",
          description:
            "Developing robust and scalable server-side applications with technologies like Node.js, Django, and Ruby on Rails.",
        },
        {
          title: "Full-stack Development",
          description:
            "Integrating both front-end and back-end expertise to deliver complete digital solutions.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Mobile App Development (Android and iOS)",
    icon: Smartphone,
    description:
      "We build high-performance mobile applications for Android and iOS, ensuring seamless user experience and cutting-edge functionality.",
    link: "/services/mobile-app-development",
    additionalDetails: {
      overview:
        "Mobile applications have transformed the way we interact with technology. Developing a mobile app involves understanding user behavior, selecting the right technology stack, and ensuring high performance across various devices.",
      services: [
        {
          title: "Android Development",
          description:
            "Creating powerful and scalable Android applications using Kotlin, Java, and Jetpack components.",
        },
        {
          title: "iOS Development",
          description:
            "Building smooth and engaging iOS applications using Swift, Objective-C, and the latest Apple frameworks.",
        },
        {
          title: "Cross-platform Development",
          description:
            "Leveraging frameworks like React Native and Flutter to develop apps for both Android and iOS.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Artificial Intelligence Development and Integration",
    icon: BrainCircuit,
    description:
      "Leverage AI to drive innovation and automate processes for your business.",
    link: "/services/ai-development",
    additionalDetails: {
      overview:
        "Artificial Intelligence is revolutionizing industries by providing intelligent solutions that adapt to business needs. Our AI services integrate advanced algorithms and machine learning to optimize operations.",
      services: [
        {
          title: "AI Strategy Consulting",
          description:
            "Guiding your business on how to leverage AI effectively.",
        },
        {
          title: "Machine Learning Integration",
          description:
            "Implementing machine learning models for predictive analytics and automation.",
        },
        {
          title: "AI-powered Automation",
          description:
            "Streamlining processes through intelligent automation solutions.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Generative AI Applications",
    icon: BrainCog,
    description:
      "Innovate with generative AI to create dynamic, creative solutions for content, design, and more.",
    link: "/services/generative-ai",
    additionalDetails: {
      overview:
        "Generative AI harnesses the power of advanced algorithms to produce unique content and streamline creative processes, enabling innovative solutions in various industries.",
      services: [
        {
          title: "Content Generation",
          description: "Automating content creation for marketing and media.",
        },
        {
          title: "Design Automation",
          description:
            "Enhancing creative workflows with AI-driven design tools.",
        },
        {
          title: "Creative Tool Integration",
          description:
            "Integrating generative AI tools to boost creative productivity.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Chatbot Development / AI Calling",
    icon: MessageCircle,
    description:
      "Implement intelligent chatbot solutions and AI-driven calling systems to enhance customer engagement.",
    link: "/services/chatbot-development",
    additionalDetails: {
      overview:
        "Chatbots are transforming customer service by providing 24/7 support and personalized interaction, enhancing engagement and operational efficiency.",
      services: [
        {
          title: "Chatbot Design",
          description: "Creating intuitive and engaging chatbot interfaces.",
        },
        {
          title: "AI Voice Integration",
          description:
            "Incorporating voice recognition for seamless user interaction.",
        },
        {
          title: "Conversational UI",
          description: "Designing natural and efficient conversation flows.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Custom Software Development",
    icon: PencilRuler,
    description:
      "Tailored software solutions designed to meet the unique needs of your business.",
    link: "/services/custom-software-development",
    additionalDetails: {
      overview:
        "Custom software development allows businesses to build solutions that precisely match their operational requirements and drive competitive advantage.",
      services: [
        {
          title: "Bespoke Application Development",
          description:
            "Developing custom applications tailored to your business processes.",
        },
        {
          title: "System Integration",
          description:
            "Integrating disparate systems into a cohesive solution.",
        },
        {
          title: "Maintenance & Support",
          description:
            "Providing ongoing support and updates for your software.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Machine Learning Solutions",
    icon: Cpu,
    description:
      "Deploy machine learning models that drive predictive analytics and intelligent decision-making.",
    link: "/services/machine-learning",
    additionalDetails: {
      overview:
        "Machine Learning enables systems to learn from data, providing insights and automation for better decision-making across various business functions.",
      services: [
        {
          title: "Model Development",
          description:
            "Creating and training machine learning models tailored to your data.",
        },
        {
          title: "Predictive Analytics",
          description: "Leveraging data to forecast trends and outcomes.",
        },
        {
          title: "Data Integration",
          description:
            "Integrating machine learning with your existing data infrastructure.",
        },
      ],
    },
  },
  {
    id: 8,
    title: "Data Analytics and Data Science",
    icon: BarChart2,
    description:
      "Transform raw data into actionable insights with advanced analytics and data science methodologies.",
    link: "/services/data-analytics",
    additionalDetails: {
      overview:
        "Data analytics and data science combine statistical analysis with modern technology to uncover hidden patterns and drive strategic decision-making.",
      services: [
        {
          title: "Data Visualization",
          description: "Turning complex data into clear, visual insights.",
        },
        {
          title: "Statistical Analysis",
          description:
            "Applying rigorous statistical methods to interpret data.",
        },
        {
          title: "Big Data Solutions",
          description:
            "Managing and analyzing large volumes of data efficiently.",
        },
      ],
    },
  },
  {
    id: 9,
    title: "Blockchain Development",
    icon: Layers,
    description:
      "Implement secure and transparent blockchain solutions to revolutionize your business processes.",
    link: "/services/blockchain-development",
    additionalDetails: {
      overview:
        "Blockchain technology provides decentralized and immutable solutions that enhance security and foster trust in digital transactions, transforming traditional business models.",
      services: [
        {
          title: "Smart Contract Development",
          description:
            "Developing self-executing contracts with the terms directly written into code.",
        },
        {
          title: "Decentralized Applications",
          description:
            "Building applications that run on decentralized networks.",
        },
        {
          title: "Blockchain Integration",
          description:
            "Integrating blockchain technology into your existing systems.",
        },
      ],
    },
  },
  {
    id: 10,
    title: "IT Consulting and Strategy",
    icon: Briefcase,
    description:
      "Expert IT consulting to align your technology strategy with your business goals.",
    link: "/services/it-consulting",
    additionalDetails: {
      overview:
        "Our IT consulting services provide strategic guidance and expert insights to optimize your technology investments and drive business growth.",
      services: [
        {
          title: "Technology Assessment",
          description:
            "Evaluating your current IT infrastructure and identifying areas for improvement.",
        },
        {
          title: "Strategic Planning",
          description:
            "Developing a roadmap that aligns technology with your business objectives.",
        },
        {
          title: "Implementation Roadmaps",
          description:
            "Providing clear steps to achieve your IT strategy effectively.",
        },
      ],
    },
  },
  {
    id: 11,
    title: "Cloud Migration Services",
    icon: Cloud,
    description:
      "Seamlessly migrate your infrastructure to the cloud for scalability and efficiency.",
    link: "/services/cloud-migration",
    additionalDetails: {
      overview:
        "Cloud migration is critical for modern businesses seeking to enhance agility, reduce costs, and improve scalability by leveraging cloud technologies.",
      services: [
        {
          title: "Infrastructure Assessment",
          description:
            "Evaluating your current infrastructure for cloud readiness.",
        },
        {
          title: "Migration Planning",
          description:
            "Developing a strategic plan to move your systems to the cloud.",
        },
        {
          title: "Cloud Integration",
          description:
            "Ensuring smooth integration of cloud services with your existing systems.",
        },
      ],
    },
  },
  {
    id: 12,
    title: "UI/UX Designing",
    icon: PenTool,
    description:
      "Design engaging user interfaces and experiences that captivate your audience.",
    link: "/services/ui-ux-designing",
    additionalDetails: {
      overview:
        "UI/UX design is essential for creating intuitive and visually appealing digital products that deliver exceptional user experiences.",
      services: [
        {
          title: "User Research",
          description:
            "Conducting research to understand user needs and behaviors.",
        },
        {
          title: "Wireframing & Prototyping",
          description:
            "Creating blueprints and prototypes to visualize the design.",
        },
        {
          title: "Visual Design",
          description:
            "Crafting visually compelling designs that resonate with users.",
        },
      ],
    },
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
