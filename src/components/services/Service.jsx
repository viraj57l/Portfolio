import React from 'react'
import './service.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-4.svg'


const data = [
  {
    id: 1,
    image: Image1,
    title: "Front-end",
    description:`JavaScript: Proficient in using JavaScript to 
    add dynamic behavior to websites, working with both ES6+ syntax
    and modern front-end libraries.
    HTML/CSS: Knowledgeable in crafting
    responsive, accessible, and well-structured user interfaces with 
    semantic HTML and modern CSS techniques.
     React Framework: Skilled in building reactive,
     component-based single-page applications with React,
      utilizing hooks, context, and state management.`,
  },
  {
    id: 2,
    image: Image2,
    title: "Back-end",
    description:
      `Core Java: Strong foundation in Java for building robust, object-oriented solutions, with emphasis on multithreading, data structures, and algorithmic efficiency.
      Spring Boot Framework: Rapid development framework for creating standalone, production-ready Spring applications with embedded servers and minimal configuration.
      Spring Microservices: Expertise in developing scalable, loosely coupled microservices architecture using Spring Cloud and other Spring ecosystem tools for distributed systems.`,
  },
  {
    id: 3,
    image: Image3,
    title: "Databases",
    description:
      `MySQL: A relational database management system used for structured data storage, query optimization, and transaction management.
      PostgreSQL: An advanced open-source relational database known for extensibility, complex queries, and support for ACID compliance, suitable for large-scale applications.`,
  },
];


const Service = () => {
  return (
   
  <section className="services__container section" id="services">
    <h2 className="section__title">Skills</h2>

    <div className="services__container grid">
      {data.map(({id,image,title,description})=>{
        return(
        <div className="services__card" key={id}>
          <img src={image} alt='' className='services__img'/>
          <h3 className="services__title">{title}</h3>
          <p className="services__description">{description}</p>
        </div>
        );
      })}
    </div>
  </section>
  );
};

export default Service
