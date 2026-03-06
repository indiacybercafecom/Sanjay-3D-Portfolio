import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Aadhar Services",
    icon: web,
  },
  {
    title: "PAN Card Assistance",
    icon: mobile,
  },
  {
    title: "Government Forms",
    icon: backend,
  },
  {
    title: "Digital Documentation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founder",
    company_name: "India Cyber Cafe",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2020 - Present",
    points: [
      "Helping citizens complete Aadhar registration and verification processes.",
      "Assisting with PAN card applications and documentation.",
      "Guiding people through online government forms and applications.",
      "Providing digital documentation and verification services to underserved communities.",
    ],
  },
  {
    title: "Digital Services Manager",
    company_name: "India Cyber Cafe",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Streamlining government service access for citizens across multiple districts.",
      "Managing digital documentation processes and verification systems.",
      "Training staff on latest digital government services and platforms.",
      "Ensuring quality support and timely completion of all citizen requests.",
    ],
  },
  {
    title: "Customer Relations Specialist",
    company_name: "India Cyber Cafe",
    icon: shopify,
    iconBg: "#383E56",
    date: "2020 - 2021",
    points: [
      "Building trust and long-term relationships with customers.",
      "Resolving issues related to digital service applications.",
      "Providing guidance on government forms and documentation.",
      "Maintaining high customer satisfaction through dedicated support.",
    ],
  },
  {
    title: "Founder & Community Leader",
    company_name: "India Cyber Cafe",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2020 - Present",
    points: [
      "Building a community-focused digital service platform.",
      "Expanding access to government services in underserved areas.",
      "Continuously improving service quality and customer experience.",
      "Empowering citizens through better access to digital India services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "India Cyber Cafe helped me complete my Aadhar registration smoothly. Sanjay and his team were very professional and patient. Highly recommended!",
    name: "Priya Sharma",
    designation: "Teacher",
    company: "Delhi",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I was confused about PAN card application, but the team at India Cyber Cafe guided me through every step. Excellent service!",
    name: "Rajesh Kumar",
    designation: "Businessman",
    company: "Mumbai",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Getting help with government forms was so easy thanks to India Cyber Cafe. They saved me so much time and stress!",
    name: "Anjali Singh",
    designation: "Student",
    company: "Bangalore",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Aadhar Services",
    description:
      "India Cyber Cafe provides complete assistance with Aadhar registration, verification, and updates. We help citizens navigate the entire process smoothly and securely with expert guidance.",
    tags: [
      {
        name: "aadhar",
        color: "blue-text-gradient",
      },
      {
        name: "government",
        color: "green-text-gradient",
      },
      {
        name: "verification",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "PAN Card Assistance",
    description:
      "India Cyber Cafe assists individuals and businesses with PAN card applications, corrections, and related documentation. Our team ensures quick and hassle-free processing.",
    tags: [
      {
        name: "pancard",
        color: "blue-text-gradient",
      },
      {
        name: "income",
        color: "green-text-gradient",
      },
      {
        name: "taxation",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Government Forms",
    description:
      "From pension applications to license renewals, India Cyber Cafe helps citizens complete all types of government forms with accuracy and ease. Expert support at every step.",
    tags: [
      {
        name: "forms",
        color: "blue-text-gradient",
      },
      {
        name: "government",
        color: "green-text-gradient",
      },
      {
        name: "applications",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
