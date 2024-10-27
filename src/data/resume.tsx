import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

import WORD_CAFE from "../../public/WORD_CAFE.jpg";
import UNILINK from "../../public/UNILINK.jpeg";
import GYANASETU from "../../public/GYANASETU.jpg";

export const DATA = {
  name: "Madan Bhat",
  url: "https://imadanbhat.vercel.app",
  location: "India, UDUPI",
  locationLink: "",
  description:
    "I am 17 year old beginner software developer passionate about coding",
  summary:
    "Hello! I'm Madan Bhat, a passionate Frontend Developer based in Udupi, Karnataka. I love turning complex problems into simple,  beautiful, and intuitive designs.",
  avatarUrl: "/me.png",
  skills: ["React", "React-Native", "Typescript", "Node.js"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "imadanbhat@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Madan-Bhat",
        icon: Icons.github,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/madan___2007",
        icon: Icons.instagram,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/imadanbhat",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Gyanasetu",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "WordCafe - Landing Page",
      href: "https://wordcafe.vercel.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "WordCafe is a unique platform that makes sharing stories easy and engaging.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://wordcafe.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: WORD_CAFE,
    },
    {
      title: "Unilink",
      href: "https://github.com/Madan-Bhat/unilink",
      dates: "June 2023 - Jan-2024",
      active: true,
      description:
        "Unilink is a real-time chat app built with Firebase and React Native, allowing users to connect instantly. It combines seamless messaging with an intuitive, user-friendly interface.",
      technologies: ["firebase", "React Native"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Madan-Bhat/unilink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: UNILINK,
    },
    {
      title: "Gyanasetu",
      href: "https://gyanasetu.vercel.app",
      dates: "June 2024 - present",
      active: true,
      description:
        "Gyanasetu simplifies school management with event organization, attendance tracking, and alerts. It helps teachers and students stay connected, streamlining daily tasks for schools and colleges.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://gyanasetu.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: GYANASETU,
    },
  ],
} as const;
