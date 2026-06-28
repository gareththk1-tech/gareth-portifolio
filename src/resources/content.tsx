import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Gareth",
  lastName: "Tan",
  name: `Gareth Tan`,
  role: "Aspiring Engineer",
  avatar: "/images/avatar.jpg",
  email: "gareththk1@gmail.com",
  location: "Asia/Singapore",
  languages: ["English", "Chinese"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s fun place</>,
  description: <>Updates on my projects, learning journey, and engineering insights.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gareth-tan-252729342/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/garethttan/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>welcome to my life!</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">East Java Trip</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Take a look at my adventures!
        </Text>
      </Row>
    ),
    href: "/blog/east-java-trip",
  },
  subline: (
    <>
      I&apos;m {person.firstName}, an aspiring engineer currently serving NS as an{" "}
      <Text as="span" size="xl" weight="strong">Airforce Instructor</Text>{" "}
      at SAFTI MI. I spend my free time building projects and preparing for university.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Gareth is a Singapore-based aspiring engineer currently serving National Service as an
        Airforce Instructor at SAFTI MI, OCS. With a passion for running, fitness, and continuous
        self-improvement, he spends his free time building software projects and preparing for
        NTU&apos;s Renaissance Engineering programme. Let&apos;s work together!
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "SAFTI MI, OCS",
        timeframe: "2024 - Present",
        role: "Airforce Instructor (NSF)",
        achievements: [
          <>
            Serving National Service as an Airforce Instructor at the Officer Cadet School,
            responsible for training and developing the next generation of Singapore Armed Forces officers.
          </>,
          <>
            Cultivating leadership, discipline, and effective communication through hands-on
            instruction and close mentorship of officer cadets.
          </>,
        ],
        images: [],
      },
      {
        company: "ETG Tuition Agency",
        timeframe: "2023 - 2024",
        role: "Social Media Intern & Personal Assistant",
        achievements: [
          <>
            Drove marketing and advertising efforts across social media platforms, growing the
            agency&apos;s online presence and audience engagement.
          </>,
          <>
            Supported the agency director as a personal assistant, managing scheduling,
            correspondence, and day-to-day administrative operations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Nanyang Technological University",
        description: <>Incoming student AY'27 of the Renaissance Engineering Programme — an interdisciplinary degree cultivating engineering leaders and innovators.</>,
      },
      {
        name: "Hwachong Institution",
        description: <>Graduated from Hwachong Institution, building a strong foundation in academics and leadership.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Web Development",
        description: (
          <>Building and designing web applications using modern frameworks and tools.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Figma",
        description: (
          <>Designing and prototyping user interfaces with Figma.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/landscape1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/portrait1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/landscape2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/portrait2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/landscape3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/portrait3.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/landscape4.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
