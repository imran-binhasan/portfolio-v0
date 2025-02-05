'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/0.png",
    category: "FullStack",
    name: "FitStat",
    description: "FitStat is a fitness platform for hiring trainers, booking classes, and tracking progress to achieve fitness goals.",
    link: "https://fitstat.netlify.app/",
    github: "https://github.com/emran-binhasan/fitstat-client",
  },
  {
    image: "/work/2.png",
    category: "FullStack",
    name: "Lodgio",
    description: "Lodgio is a comprehensive online platform for seamless hotel booking experiences.",
    link: "https://lodgio.netlify.app/",
    github: "https://github.com/emran-binhasan/lodgio-client",
  },
  {
    image: "/work/4.png",
    category: "FullStack",
    name: "Visa Glide",
    description: "Visa Glide simplifies the visa application process with a streamlined, online platform.",
    link: "https://visa-glide.netlify.app/",
    github: "/",
  },
  ];
  

const Work = () => {



  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className=" max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left mb-10 lg:h-[400px] flex flex-col justify-center lg:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="mb-8 subtitle mx-auto">Checkout my latest projects</p>
                <Link className='mx-auto text-center' href='/projects'>
                <Button >All Projects</Button>
                </Link>
            </div>
            {/* Slider */}
            <div className="lg:max-w-[800px] lg:absolute right-0 top-0">
                <Swiper className='h-[450px]' 
                slidesPerView={1} breakpoints={{
                    640: {
                        slidesPerView: 2
                    },  
                }}
                spaceBetween = {30}
                modules={[Pagination]}
                pagination ={{clickable: true}}
                >
                    {projectData.slice(0,4).map((project,index) => {
                        return <SwiperSlide key={index}>
                            <ProjectCard project={project}/>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work