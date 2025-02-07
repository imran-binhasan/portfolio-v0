import { Card, CardHeader } from "@/components/ui/card";
import { Link2Icon } from "lucide-react";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const projectData = [
    {
      image: "/work/0.png",
      id: 1,
      category: "FullStack",
      name: "FitStat",
      description:
        "FitStat is a fitness platform that helps users hire trainers, book workout classes, and track progress. It ensures secure authentication, smooth payment processing, and real-time tracking. The platform offers a seamless experience with an intuitive interface and personalized training recommendations to help users achieve their fitness goals efficiently.",
      challenges: [
        {
          title: "Real-time Workout Tracking",
          description:
            "Ensuring smooth and responsive tracking of user workouts and fitness progress.",
        },
      ],
      improvements: [
        {
          title: "AI-Based Fitness Recommendations",
          description:
            "Integrating AI to provide personalized workout plans based on user progress and goals.",
        },
      ],
      link: "https://fitstat.netlify.app/",
      github: "https://github.com/emran-binhasan/fitstat-client",
      tech: [
        "react",
        "tailwind",
        "firebase",
        "framer-motion",
        "nodejs",
        "express",
        "jwt",
        "stripe",
      ],
    },
    {
      image: "/work/1.png",
      id: 2,
      category: "Frontend",
      name: "Lingo Fox",
      description:
        "Lingo Fox is an engaging language learning web app designed to simplify mastering new languages. It features interactive lessons, progress tracking, and gamification elements. With a user-friendly interface and smooth animations, it makes learning fun, accessible, and effective for users of all levels.",
      challenges: [
        {
          title: "Gamification Implementation",
          description:
            "Balancing engagement with educational effectiveness while keeping users motivated.",
        },
      ],
      improvements: [
        {
          title: "AI-Powered Voice Recognition",
          description:
            "Adding AI-based pronunciation analysis to improve speaking skills.",
        },
      ],
      link: "https://lingo-fox.netlify.app/",
      github: "/",
      tech: ["react", "tailwind", "firebase", "framer-motion", "aos"],
    },
    {
      image: "/work/2.png",
      id: 3,
      category: "FullStack",
      name: "Lodgio",
      description:
        "Lodgio is a modern hotel booking platform that offers seamless reservations, secure authentication, and a responsive design. Users can search for hotels, check availability, and book stays effortlessly. With real-time search optimization, third-party API integration, and a scalable architecture, Lodgio ensures a fast and user-friendly experience for travelers worldwide.",
      challenges: [
        {
          title: "Real-time Search Optimization",
          description:
            "Ensuring fast and accurate search results while handling large datasets efficiently.",
        },
      ],
      improvements: [
        {
          title: "AI-Powered Recommendations",
          description:
            "Implementing AI to provide personalized hotel suggestions based on user preferences.",
        },
      ],
      link: "https://lodgio.netlify.app/",
      github: "https://github.com/emran-binhasan/lodgio-client",
      tech: [
        "react",
        "tailwind",
        "firebase",
        "framer-motion",
        "nodejs",
        "express",
        "jwt",
      ],
    },
    {
      image: "/work/3.png",
      id: 4,
      category: "Frontend",
      name: "Gadget Heaven",
      description:
        "Gadget Heaven is a sleek e-commerce platform offering a wide range of electronics. Designed with a clean UI, fast navigation, and a responsive layout, users can browse and purchase products effortlessly. The platform ensures a smooth shopping experience with an intuitive interface and optimized performance.",
      challenges: [
        {
          title: "Optimizing Performance",
          description:
            "Ensuring fast load times for high-quality product images and dynamic content.",
        },
      ],
      improvements: [
        {
          title: "Advanced Filtering & Sorting",
          description:
            "Implementing detailed product filtering options to enhance user shopping experience.",
        },
        {
          title: "Advanced State Management",
          description:
            "Using Redux or Context API for managing states",
        },
      ],
      link: "https://gadget-h.netlify.app/",
      github: "https://github.com/emran-binhasan/gadget-heaven-react",
      tech: ["react", "tailwind"],
    },
    {
      image: "/work/4.png",
      id: 5,
      category: "FullStack",
      name: "Visa Glide",
      description:
        "Visa Glide simplifies the visa application process with a user-friendly, online platform. Users can check visa requirements, apply online, and track applications in real-time. The platform ensures secure authentication, smooth navigation, and a seamless user experience, making visa applications more accessible and efficient.",
      challenges: [
        {
          title: "Visa Processing Time Accuracy",
          description:
            "Ensuring real-time updates and reducing discrepancies in processing time estimates.",
        },
      ],
      improvements: [
        {
          title: "Multi-Language Support",
          description:
            "Implementing multilingual support to enhance accessibility for international users.",
        },
      ],
      link: "https://visa-glide.netlify.app/",
      github: "https://github.com/emran-binhasan/visa-glide-client",
      tech: [
        "react",
        "tailwind",
        "firebase",
        "framer-motion",
        "nodejs",
        "express",
      ],
    },
  ];

  const { id } = params;
  const data = projectData.filter((project) => project.id === parseInt(id));
  const {
    name,
    image,
    category,
    description,
    link,
    github,
    tech,
    challenges,
    improvements,
  } = data[0] || {};

  return (
    <div className="w-full flex py-4 px-10 gap-10 justify-between my-5">
      <Card className="group w-[500px] h-[500px] overflow-hidden relative">
        <CardHeader className="p-0">
          <div className="relative w-full h-[500px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 lg:bg-work_project_bg_light lg:dark:bg-work_project_bg_dark lg:bg-[110%] bg-no-repeat overflow-hidden">
            <Image
              className="absolute bottom-0 shadow-2xl"
              width={400}
              priority
              height={400}
              alt={name}
              src={image}
            />
          </div>
        </CardHeader>
      </Card>
      <div className="flex-1 space-y-3">
        <h3>
          <span className="font-medium">Project Name :</span> {name}
        </h3>
        <p>
          <span className="font-medium">Description : </span>
          {description}
        </p>
        <p>
          <span className="font-medium">Technology : </span>
          {tech.map((each, index) => (
            <span className="mx-2 border p-1 rounded" key={index}>
              {each}
            </span>
          ))}
        </p>
        <span className="flex gap-10">
          <Link
            className="border flex px-2 gap-2 items-center py-1 rounded-md"
            href={link}
          >
            Live Link <Link2Icon className="inline p-0.5" />
          </Link>
          <Link
            className="border flex gap-2 items-center px-2 py-1 rounded-md"
            href={github}
          >
            Source Code <Github className="inline p-0.5" />
          </Link>
        </span>
        <div>
          <p className="font-medium">Challenges faced: </p>
          {challenges.length > 0 && challenges.map((each, index) => (
            <span className="text-gray-800 flex flex-col gap-4 ml-6" key={index}>
              <span>
                <span className="font-medium">{each?.title}</span>:{" "}
                <span>{each?.description}</span>
              </span>
            </span>
          )) || "N/A"}
        </div>
        <div>
          <p className="font-medium">Potential Improvements: </p>
          {improvements?.map((each, index) => (
            <span className="text-gray-800 flex flex-col gap-4 ml-6" key={index}>
              <span>
                <span className="font-medium">{each?.title}</span>:{" "}
                <span>{each?.description}</span>
              </span>
            </span>
          )) || "N/A"}
        </div>
      </div>
    </div>
  );
};

export default Page;
