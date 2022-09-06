import {
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  Image,
  Link,
} from "@chakra-ui/react";
import { MyCodeBlock } from "./components/MyCodeBlock";

export const GITHUB_URL = "https://github.com/jacksonet00";
export const LINKEDIN_URL = "https://linkedin.com/in/jacksonet00";
export const SOURCE_CODE_URL =
  "https://github.com/jacksonet00/jacksontaylor.info";
export const HOME_PAGE_DATA = {
  greeting: {
    headline: "greetings",
    subText: `i'm jackson, a software developer.`,
  },
  aboutMe: {
    paragraphs: [
      `I’m a senior at the University of Florida 🐊 studying Computer Science with a minor in Math. During my first three years at UF, I've had the opportunity to participate in hackathons and build a variety of personal projects, serve as a Teaching Assistant, and intern full time as a Software Engineer in the SF Bay Area 🌁.`,
      `When I'm not coding or browsing Pinterest, I enjoy practicing yoga 🧘🏼‍♂️, running 🏃🏼‍♂️, and engaging with the community through volunteering and working at local coffee shops ☕️. I'm passionate about technology and excited by any opportunity to direct that passion towards making a positive impact in peoples' lives.`,
    ],
  },
  projects: [
    {
      title: "Sock: for shared spaces",
      link: "https://thesockapp.com",
      description: "A cross-platform native mobile app for roommates to manage shared spaces. Sock (beta) has received over 50 downloads and has approximately 20 daily active users.",
      tags: ["Typescript", "React Native", "Google Cloud Platform"],
    },
    {
      title: "Applied Data Science: Content Recommendation Systems",
      link: "https://medium.com/@jacksonet00/applied-data-science-content-recommendation-systems-6904ffafdf4",
      description: "An analysis of a variety of machine learning approaches relevant for content recommendation with sparse data.",
      tags: ["Content Filtering", "Collaborative Filtering", "Sparse NN"],
    },
  ],
  experiences: [
    {
      company: "Meta",
      role: "Software Engineer Intern",
      date: "May 2022 - August 2022",
      bullets: [ // todo: add bolding
        "Optimized a core ML predictor node for Instagram and Messenger in C++ resulting in 15% lower CPU utilization and 10% higher throughput which freed 146 machines across 20 regions during a company wide server crunch.",
        `Designed and implemented a local cache for Messenger's Video recommendation serving infra which reduced CPU utilization by 10% while consuming less than one gigabyte of memory.`
      ],
      tags: ["Machine Learning", "C++", "PHP", "Python",],
    },
    {
      company: "JP Morgan Chase",
      role: "Software Engineer Intern",
      date: "June 2021 - August 2021",
      bullets: [
        `Developed an internal tool used daily by 450 customer support agents with a REST API accessed by 150 developers.`,
        `Upgraded merchant services terminal with automatic authentication and improved navigation which led to a 35% improvement in time to complete critical customer service tasks.`,
      ],
      tags: ["Fullstack Development", "Javascript",  "React", "Java",],
    },
  ],
  skills: [
    {
      type: "Application Development",
      items: [
        "Typescript",
        "React-Native",
        "React",
        "Node",
        "Docker",
        "Cloud Services",
      ],
    },
    {
      type: "Backend Development",
      items: ["Java", "Python", "C++", "SQL", "REST", "GraphQL"],
    },
    {
      type: "Data Analysis",
      items: [
        "Python",
        "Numpy",
        "Matplotlib",
        "Pandas",
        "Machine Learning",
        "Google Sheets",
      ],
    },
  ],
};

export const CHAKRA_UI_MARKDOWN_OPTIONS = {
  wrapper: "article",
  overrides: {
    h1: {
      component: Heading,
      props: {
        fontSize: "4xl",
        marginBottom: 6,
      },
    },
    h2: {
      component: Heading,
      props: {
        fontSize: "3xl",
        marginBottom: 6,
      },
    },
    h3: {
      component: Heading,
      props: {
        fontSize: "2xl",
        marginBottom: 6,
      },
    },
    h4: {
      component: Heading,
      props: {
        fontSize: "xl",
        marginBottom: 6,
      },
    },
    h5: {
      component: Heading,
      props: {
        fontSize: "lg",
        marginBottom: 6,
      },
    },
    h6: {
      component: Heading,
      props: {
        fontSize: "md",
        marginBottom: 6,
      },
    },
    p: {
      component: Text,
      props: {
        fontSize: "lg",
        marginBottom: 6,
      },
    },
    ul: {
      component: UnorderedList,
      props: {
        fontSize: "lg",
        marginBottom: 6,
      },
    },
    ol: {
      component: OrderedList,
      props: {
        fontSize: "lg",
        marginBottom: 6,
      },
    },
    li: {
      component: ListItem,
      props: {
        fontSize: "lg",
      },
    },
    code: {
      component: MyCodeBlock,
      props: {
        marginBottom: 6,
      },
    },
    img: {
      component: Image,
      props: {
        marginBottom: 6,
        marginTop: 6,
      },
    },
    a: {
      component: Link,
      props: {
        marginBottom: 6,
        textDecoration: "underline",
        isExternal: true,
      },
    },
  },
};
