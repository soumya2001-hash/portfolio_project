import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience on multiple real-world projects, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Through multiple real-world projects, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "VitalCare - A healthcare webapp",
    image: project1,
    description:
      "VitalCare is a web application designed to simplify healthcare management and enhance patient care.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Appwrite", "Twilio"],
    link:"https://vitalcare-updated.vercel.app/"
  },
  {
    title: "PixelAI - Image generation webapp ",
    image: project2,
    description:
      "PixelAI is an AI-powered image generation app that lets users create stunning images from text prompts.Build with cutting-edge technology, it combines AI with seamless user interface for a Creative interface.",
    technologies: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
    link:"https://pixel-aii.netlify.app/"
  },
  {
    title: "PixelChat - Image sharing webapp",
    image: project3,
    description:
      "PixelChat is an image sharing social media platform. Inspired from Pinterest, this web app lets users to post pictures, download images, like and comment on posts.",
    technologies: ["React.js", "Tailwind CSS", "Sanity.io", "Node.js"],
    link:"https://pixelchat.netlify.app/"
  },
  {
    title: "Pen & Pixels - Blogging Platform",
    image: project4,
    description:
      "Pen & Pixel is a personal blog website prototype. Here you can create, edit and delete blog posts. Since there is no database linked at the moment, the changes you have made will be erased between sessions.",
    technologies: ["EJS",  "JavaScript", "CSS" ],
    link:"https://github.com/soumya2001-hash/Pen-and-Pixels"
  },
];

export const CONTACT = {
  address: "Electronic City, Bengaluru, Karnataka ",
  phoneNo: "+91 9448955441 ",
  email: "soumyakudvalli2001@gmail.com",
};
