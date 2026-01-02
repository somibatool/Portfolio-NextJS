"use client"
import React , {useState} from 'react'
import ProjectCards from './ProjectCards'
import ProjectTag from  './ProjectTag'

const projectData=[
    {
        id:1,
        title:"react portfolio website",
        description:"project 1 description",
        image: "/images/project/1.png",
        tag: ["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"Photography Portfolio Website ",
        description:"project 2 description",
        image: "/images/project/2.png",
        tag: ["All", "Web"],
         gitUrl:"/",
        previewUrl:"/"
    },
        {
        id:3,
        title:"E-commerce Website ",
        description:"project 3 description",
        image: "/images/project/3.png",
        tag: ["All", "Web"],
         gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:4,
        title:"Photography Portfolio Website ",
        description:"project 4 description",
        image: "/images/project/4.png",
        tag: ["All", "Web"],
         gitUrl:"/",
        previewUrl:"/"
    },
     {
        id:5,
        title:"Photography Portfolio Website ",
        description:"project 4 description",
        image: "/images/project/5.png",
        tag: ["All", "Web"],
         gitUrl:"/",
        previewUrl:"/"
    },
     {
        id:6,
        title:"Photography Portfolio Website ",
        description:"project 4 description",
        image: "/images/project/6.png",
        tag: ["All", "Web"],
         gitUrl:"/",
        previewUrl:"/"
    },

]

const ProjectSection = () => {
    const [tag, setTag] = useState("ALL");

    const handleTagChange=(newTag)=>{
        setTag(newTag);
    };
   const filteredProjects = projectData.filter((project) => {
    return project.tag.includes(tag);
});
  return (
    <div>
       <h2 className='text-white text-4xl  font-bold  text-center mt-4 mb-6'>My Project </h2>
       <div className='text-white flex flex-row justify-center gap-2 py-6' >
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
<ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
<ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />

       {/* <ProjectTag 
       onClick={handleTagChange} 
       name="ALL"
        isSelected={tag==="ALL"}/>
         <ProjectTag 
       onClick={handleTagChange} 
       name="Web"
        isSelected={tag==="Web"}/>
         <ProjectTag 
       onClick={handleTagChange} 
       name="Mobile"
        isSelected={tag==="Mobile"}/> */}
       </div>
   <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
  {filteredProjects.map(project => (
    <ProjectCards
      key={project.id}
      title={project.title}
      description={project.description}
      imgUrl={project.image}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
    />
  ))}
</div>

    </div>
  )
}

export default ProjectSection