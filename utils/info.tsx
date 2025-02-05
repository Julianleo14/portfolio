import {
    FaAws,
    FaCar,
    FaDocker,
    FaFigma,
    FaGitAlt,
    FaGithub,
    FaGitlab,
    FaGoogle,
    FaHtml5,
    FaJava,
    FaLinkedin,
    FaPencilAlt,
    FaPhone,
    FaReact
} from "react-icons/fa";
import {MdComputer, MdEmail} from "react-icons/md";
import {CgFileDocument, CgReadme} from "react-icons/cg";
import {GiFlowerPot, GiMagnifyingGlass, GiReptileTail, GiStarSwirl, GiTimeSynchronization} from "react-icons/gi";
import {TbMessageCircleCheck, TbMovie} from "react-icons/tb";
import {IoIosSchool, IoLogoCss3, IoLogoJavascript} from "react-icons/io";
import {BiLogoTypescript} from "react-icons/bi";
import {SiJest, SiMongodb, SiMysql, SiPostman, SiSpringboot, SiWebpack} from "react-icons/si";
import {RiNextjsFill, RiTeamFill} from "react-icons/ri";
import {IoInfinite, IoLogoFirebase, IoLogoVercel} from "react-icons/io5";
import React from "react";
import {BsPersonLinesFill} from "react-icons/bs";
import {DiScrum} from "react-icons/di";

export const contactInfo = {
    tel: {
        icon: <FaPhone size={25}/>,
        info: "+57 3192670195"
    },
    email: {
        icon: <MdEmail size={25}/>,
        info: "leonardojl14g@gmail.com"
    },
    LinkedIn: {
        icon: <FaLinkedin size={25}/>,
        info: "https://www.linkedin.com/in/julian-leonardo-garcia/"
    },
    Github: {
        icon: <FaGithub size={25}/>,
        info: "https://github.com/Julianleo14"
    }
}
export const hobbies = {
    reading:
        {
            icon: <CgReadme size={25}/>,
            info: "Reading literature, articles and tech news."
        },
    writing:
        {
            icon: <FaPencilAlt size={25}/>,
            info: "Writing literature"
        },
    gardening:
        {
            icon: <GiFlowerPot size={25}/>,
            info: "Gardening"
        },
    movies:
        {
            icon: <TbMovie size={25}/>,
            info: "Movies, anime, animation, science fiction..."
        },
}
export const techs = {
    Javascript:
        {
            icon: <IoLogoJavascript size={25}/>,
            info: "2+ years"
        },
    React:
        {
            icon: <FaReact size={25}/>,
            info: "2+ years"
        },
    TypeScript:
        {
            icon: <BiLogoTypescript size={25}/>,
            info: "1+ year"
        },
    MySQL:
        {
            icon: <SiMysql size={25}/>,
            info: "1+ year"
        },
    MongoDB:
        {
            icon: <SiMongodb size={25}/>,
            info: "1+ year"
        },
    NextJs:
        {
            icon: <RiNextjsFill size={25}/>,
            info: "2+ years"
        },
    Figma:
        {
            icon: <FaFigma size={25}/>,
            info: "2+ years"
        },
    Postman:
        {
            icon: <SiPostman size={25}/>,
            info: "2+ years"
        },
    Jest:
        {
            icon: <SiJest size={25}/>,
            info: "1+ years"
        },
    AWS:
        {
            icon: <FaAws size={25}/>,
            info: "1 year"
        },
    Docker:
        {
            icon: <FaDocker size={25}/>,
            info: "1 year"
        },
    Git:
        {
            icon: <FaGitAlt size={25}/>,
            info: "3+ years"
        },
    GitLabCI:
        {
            icon: <FaGitlab size={25}/>,
            info: "2+ years"
        },
    Vercel:
        {
            icon: <IoLogoVercel size={25}/>,
            info: "2+ years"
        },
    Java:
        {
            icon: <FaJava size={25}/>,
            info: "1 year"
        },
    SpringBoot:
        {
            icon: <SiSpringboot size={25}/>,
            info: "1 year"
        },
    Webpack:
        {
            icon: <SiWebpack size={25}/>,
            info: "1 year"
        },
    html:
        {
            icon: <FaHtml5 size={25}/>,
            info: "2+ years"
        },
    css:
        {
            icon: <IoLogoCss3 size={25}/>,
            info: "2+ years"
        },
    firebase:
        {
            icon: <IoLogoFirebase size={25}/>,
            info: "1 year"
        },

}
export const skills = {
    agile:
        {
            icon: <DiScrum size={25}/>,
            info: "Agile and Scrum"
        },
    google:
        {
            icon: <FaGoogle size={25}/>,
            info: "Proficient in Google and LLMs"
        },
    teamwork:
        {
            icon: <RiTeamFill size={25}/>,
            info: "Teamwork"
        },
    Curiosity:
        {
            icon: <GiMagnifyingGlass size={25}/>,
            info: "Curiosity"
        },
    proactive:
        {
            icon: <GiStarSwirl size={25}/>,
            info: "Proactive"
        },
    adaptability:
        {
            icon: <GiReptileTail size={25}/>,
            info: "Adaptability"
        },
    autonomy:
        {
            icon: <MdComputer size={25}/>,
            info: "Autonomy"
        },
    time:
        {
            icon: <GiTimeSynchronization size={25}/>,
            info: "Time Management"
        },
    persistence:
        {
            icon: <IoInfinite size={25}/>,
            info: "Persistence"
        },
    learn:
        {
            icon: <IoIosSchool size={25}/>,
            info: "Continuous learning"
        },
    communication:
        {
            icon: <TbMessageCircleCheck size={25}/>,
            info: "Communication"
        },

}
export const projects = {
    HR_MANAGEMENT:
        {
            icon: <BsPersonLinesFill size={25}/>,
            info: "HR and recruitment platform",
            details: "NextJs, Material UI, TypeScript, MongoDB, Vercel, Jest, responsive."
        },
    CAR_RENTING:
        {
            icon: <FaCar size={25}/>,
            info: "Car Rental",
            details: "Material UI, ReactJS, MYSQL, JAVA, Spring Boot, Jest, responsive."
        },
    LAWYER_PLATFORM:
        {
            icon: <CgFileDocument size={25}/>,
            info: "Lawyer platform",
            details: "Material UI, ReactJS, responsive, Husky."
        },

}

