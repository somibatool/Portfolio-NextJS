"use client";
import React , {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from "./TabButton";
import { title } from 'process';
import { Content } from 'next/font/google';
const  TAB_DATA=[
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>React Js</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Tailwind Css</li>
                <li>Wordpress</li>
                <li>Next</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
           <ul className='list-disc pl-2'>
            <li>Fullstack Academy of code </li>
            <li>University of UK cambridge</li>
           </ul>
        )
    },
    {
        title:"Certification",
        id:"certification",
        content:(
            <ul className='list-disc pl-2'>
                <li>Game Development</li>
                <li>Advance frontend Development</li>
                <li>Wordpress Development </li>
                <li>Game Development</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab , setTab]= useState("skills");
    const [isPending ,startTransition  ] = useTransition();
     
   const handleTabChange = (id) => {
  startTransition(() => {
    setTab(id);
  });
};

  return (
    <div className='text-white'> 
        <div className='md:grid  md:grid-cols-2 gap-8 items-center py-8  px-4 xl:gap-16 sm:py-16 xl:py-16'>
         <Image src="/images/hero-section.jpeg" alt='about img' className='rounded-md' width={400} height={400}/>
         <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>
                About Me
            </h2>
            <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem cupiditate quam fuga labore obcaecati aperiam aliquam. Molestiae, consequatur corporis quae officiis libero commodi accusamus, itaque, atque dolore quibusdam tempore sit. Lorem ipsum dolor sit amet cenda? Accusantium minus nulla earum, praesentium officia reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='flex flex-row  mt-8'>
                <TabButton
                 selectTab={()=>handleTabChange("skills")} 
                 active={tab=="skills"}> Skills
                </TabButton>
                 <TabButton
                 selectTab={()=>handleTabChange("education")} 
                 active={tab=="education"}>Education
                </TabButton>
                 <TabButton
                 selectTab={()=>handleTabChange("certification")} 
                 active={tab=="certification"}>Certification
                </TabButton>
                     
               
            </div>
            <div className='mt-8 '>{TAB_DATA.find((t)=>t.id===tab).content}</div>
         </div>

        </div>
    </div>
  )
} 

export default AboutSection