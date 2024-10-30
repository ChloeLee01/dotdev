import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", to: "/home" },
  { label: "Features", to: "/features" },
  // { label: 'Workflow', to: '/workflow' },
  // { label: 'Pricing', to: 'pricing' },
  // { label: 'Testimonials', to: 'testimonials' },
];

export const authLink = [
  { label: "Sign In", to: "/Signin" },
  { label: "Sign Up", to: "/Signup" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    src: "https://res.cloudinary.com/indysigner/image/fetch/c_fill/f_auto,q_auto/https://main--smart-interface-design-patterns.netlify.app/static/img/blog/drag-and-drop-ux/01-drag-and-drop-for-design-systems.png",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    src: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*cc45v97Kbv5QGQc8.jpg",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    src: "https://bettersolutions.com/word/templates/builtin-filenewdialog.png",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    src: "https://raw.githubusercontent.com/microsoft/vscode-livepreview/main/img/open-context-menu.gif",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    src: "https://www.proofhub.com/articles/wp-content/uploads/2024/02/55-Best-Online-Collaboration-Tools-Software-for-Teams-2023.jpg",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    src: "https://images.klipfolio.com/website/public/0fe60100-ca67-42af-83ae-dc3c08c17681/Website%20Analytics.png",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { to: "/Getting-Started", text: "Getting Started" },
  { to: "/Documentation", text: "Documentation" },
  { to: "/Tutorials", text: "Tutorials" },
  { to: "/API-Reference", text: "API Reference" },
  { to: "/Community-Forums", text: "Community Forums" },
];

export const platformLinks = [
  { to: "Features", text: "Features" },
  { to: "Supported-Devices", text: "Supported Devices" },
  { to: "System-Requirements", text: "System Requirements" },
  { to: "Downloads", text: "Downloads" },
  { to: "Release-Notes", text: "Release Notes" },
];

export const communityLinks = [
  { to: "Events", text: "Events" },
  { to: "Meetups", text: "Meetups" },
  { to: "Conferences", text: "Conferences" },
  { to: "Hackathons", text: "Hackathons" },
  { to: "Jobs", text: "Jobs" },
];

export const heroLinks = [
  { to: "start-for-free", text: "start for free" },
  { to: "documentation", text: "documentation" },
];