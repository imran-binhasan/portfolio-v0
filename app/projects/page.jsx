"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";

const projectData = [
  {
    image: "/work/3.png",
    category: "Frontend",
    name: "lingo fox",
    description:
      "Lingo fox a is a language learning web app to ease our learning",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Backend",
    name: "dashboard fox",
    description:
      "Lingo fox a is a language learning web app to ease our learning",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Fullstack",
    name: "nestivo",
    description:
      "Lingo fox a is a language learning web app to ease our learning",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Fullstack",
    name: "visa glide",
    description:
      "Lingo fox a is a language learning web app to ease our learning",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "All Projects",
  ...new Set(projectData.map((each) => each.category)),
];
console.log(uniqueCategories);

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All Projects");
  const filteredProjects = projectData.filter(project => {
    return category === 'All Projects'? project: project.category === category;
  });
  console.log(filteredProjects)
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-6 lg:mb-12 text-center">My Projects</h2>
        <Tabs defaultValue={category} className="mb-20 lg:mb-3">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[600px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg lg:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
                return <TabsContent key={index} value={category}>
                    <ProjectCard project={project}/>
                </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
