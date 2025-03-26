// Import images for Dashboard TWD
import HeroSectionTWD from "../assets/images/dashboardTWD/homeTWD.jpeg";
import ClinicTWD from "../assets/images/dashboardTWD/clinicTWD.jpeg";
import LifestyleTWD from "../assets/images/dashboardTWD/lifestyleTWD.jpeg";

// Import images for Website TWD
import HeroSectionTWDWeb from "assets/images/webTWD/homeTWDWeb.png";
import HealthTWDWeb from "assets/images/webTWD/healthTWDWeb.png";
import StaffTWDWeb from "assets/images/webTWD/staffTWDWeb.png";

// Import images for Rosa Cleaning
import HeroSectionRosa from "../assets/images/rosaCleaning/heroSectionRosa.png";
import PriceRosa from "../assets/images/rosaCleaning/priceRosa.png";
import StepsRosa from "../assets/images/rosaCleaning/stepsRosa.png";

// Define image collections
const dashboardTWDImages = [
  { id: 1, src: HeroSectionTWD, alt: "Hero section TWD" },
  { id: 2, src: ClinicTWD, alt: "Clinic TWD" },
  { id: 3, src: LifestyleTWD, alt: "Lifestyle TWD" },
  { id: 4, src: HeroSectionTWD, alt: "Hero section TWD" },
  { id: 5, src: ClinicTWD, alt: "Clinic TWD" },
];

const twdWebImages = [
  { id: 1, src: HeroSectionTWDWeb, alt: "Hero section website TWD" },
  { id: 2, src: HealthTWDWeb, alt: "Health website TWD" },
  { id: 3, src: StaffTWDWeb, alt: "Staff website TWD" },
  { id: 4, src: HeroSectionTWDWeb, alt: "Hero section website TWD" },
  { id: 5, src: HealthTWDWeb, alt: "Health website TWD" },
];

const rosaCleaningImages = [
  { id: 1, src: HeroSectionRosa, alt: "Hero section RosaCleaning" },
  { id: 2, src: PriceRosa, alt: "Pricing RosaCleaning" },
  { id: 3, src: StepsRosa, alt: "Steps RosaCleaning" },
  { id: 4, src: HeroSectionRosa, alt: "Hero section RosaCleaning" },
  { id: 5, src: PriceRosa, alt: "Pricing RosaCleaning" },
];

const dashboardFrameworks = ['react', 'tailwind']
const  twdWebFrameworks = ['react', 'css']
const  rosaCleaningFrameworks = ['Vue', 'css']

export const PROJECT_LIST_DATA = [
  {
    id: 1,
    projectName: "Dashboard TWD",
    rule: "Front-End Developer",
    description: "The Wellbeing Doctors' dashboard facilitates the creation of personalized action plans for users, alongside features for tracking health progress and accessing various health resources.",
    show: "Watch live",
    liveLink: "https://app.thewellbeingdoctors.com/auth?redirect=/dashboard/",
    gitHub: "https://github.com/twd-tech/twd-health",
    projectImages: dashboardTWDImages,
    frameworksList:dashboardFrameworks,
  },
  {
    id: 2,
    projectName: "TWD Website",
    rule: "Front-End Developer/ Web Designer",
    description: "The Wellbeing Doctors' website provides comprehensive information about the services offered, including details on pricing, health improvement strategies, getting started, partnerships, and testimonials.",
    show: "Watch live",
    liveLink: "https://thewellbeingdoctors.com/",
    gitHub: "https://github.com/twd-tech/website",
    projectImages: twdWebImages,
    frameworksList:twdWebFrameworks,
  },
  {
    id: 3,
    projectName: "Rosa Cleaning",
    rule: "Front-End Developer/ Web Designer",
    description: "Rosa Cleaning's website offers a comprehensive platform for cleaning services, enabling users to schedule appointments, and customize cleaning plans (not live yet).",
    show: "Figma",
    liveLink: "https://www.figma.com/proto/uGHdoF52BopWJxx44cr3wR/Untitled?type=design&node-id=564-461&t=ulYqSWCH6enl6Qa7-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=544%3A536&mode=design",
    gitHub: "https://github.com/Braulin96/RosaCleaning",
    projectImages: rosaCleaningImages,
    frameworksList:rosaCleaningFrameworks,
  }
];
