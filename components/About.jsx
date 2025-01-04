import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  icons,
} from "lucide-react";
import DevImg from "./DevImg";
const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Emran Bin Hasan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+8801601262260",
  },
  {
    icon: <MailIcon size={20} />,
    text: "emranbinhasan.dev@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 8 November 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Dhaka, Bangladesh",
  },
];

const qualificationData = [
  {
    university: "Presidency University",
    qualification: "Bachelor of Science",
    years: 2024,
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="lg:h-[800px] pb-12 lg:py-16">
      <div className="container mx-auto border p-4">
        <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="hidden lg:flex xl:flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[500px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full lg:grid lg:grid-cols-2 lg:border dark:border-none lg:max-w-[500px]">
                <TabsTrigger className="w-[162px] lg:w-auto" value="personal">
                  Personal Information
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] lg:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-4 lg:mt-8">
                <TabsContent value="personal">
                  <div className="space-y-3 text-center">
                    <div className=" mb-2 lg:mb-6 text-center lg:text-left ">
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Unmatched Service Quality for Over 2 Years
                    </h3>
                    <p className="text-muted-foreground mx-auto text-base">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return <div className="flex items-center gap-x-4 mx-auto lg:mx-0"
                                 key={index}>
                                    <span className="text-primary">{item.icon}</span>
                                    <p>{item.text}</p>
                                </div>;
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-center lg:text-left text-primary">Language Skill</h3>
                        <div className="border-b border-border"></div>
                        <p className="text-center lg:text-left">English, Bangla & Japanese</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  Qualifications Info
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
