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
        image: '/work/3.png',
        category: 'frontend',
        name:'lingo fox',
        description: 'Lingo fox a is a language learning web app to ease our learning',
        link: '/',
        github: '/'
    },
     {
        image: '/work/1.png',
        category: 'backend',
        name:'dashboard fox',
        description: 'Lingo fox a is a language learning web app to ease our learning',
        link: '/',
        github: '/'
    },
    {
        image: '/work/4.png',
        category: 'fullstack',
        name:'nestivo',
        description: 'Lingo fox a is a language learning web app to ease our learning',
        link: '/',
        github: '/'
    },
     {
        image: '/work/2.png',
        category: 'fullstack',
        name:'visa glide',
        description: 'Lingo fox a is a language learning web app to ease our learning',
        link: '/',
        github: '/'
     },

    
]

const Work = () => {



  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className=" max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left mb-10 lg:h-[400px] flex flex-col justify-center lg:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="mb-8 subtitle mx-auto">Lorem, ipsum dolor sit amet consectetur</p>
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