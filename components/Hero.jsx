import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import Badge from "./Badge";
import Socials from "./Socials";
import DevImg from "./DevImg";

const Hero = () => {
  return (
    <section className="py-12 lg:py-24 bg-hero h-[84vh] lg:pt-28 bg-bottom bg-cover bg-no-repeat dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left space-y-5 mt-10">
            <div className="text uppercase  text-primary tracking-[2px] font-medium">
              Full Stack Web Developer
            </div>
            <h2 className="text-4xl lg:text-[50px] font-semibold lg:font-medium lg:leading-[60px] tracking-[-1px]">
              Hi, I'm Emran Bin Hasan
            </h2>
            <p className="text-muted-foreground text-lg mb-6  font-light w-11/12">
              I'm a developer with no experince ,but im not some bogichogi
              developer.Im im enthusiasic about earning dollars
            </p>
            <div className="flex flex-col gap-y-2 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12">
              <Link href="/contact">
                <Button variant="secondary" className="gap-x-2">
                  Contact me
                  <Send size={18} />
                </Button>
              </Link>
              <Button className="gap-x-2 h-11/12 my-auto">
                Download CV
                <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto lg:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all "
            />
          </div>
          <div className="hidden relative lg:flex">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years Of Experience"
              className="bg-red-600"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={300}
              badgeText="Finished Projects"
              className="bg-red-600"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={210}
              badgeText="Happy Clients"
              className="bg-red-600"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc={"/hero/developer.png"}
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
