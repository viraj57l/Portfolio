import React, { useState } from 'react'
import './contact.css'
import axios from 'axios';

const Contact = () => {

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    subject:'',
    message:'',
  });

  const [errors,setErrors]=useState({});

  const validateForm = () =>{
    let formErrors={};
    if(!formData.name) formErrors.name='Name is required';
    if(!formData.email) formErrors.email='Email is required';
    if(!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email address is invalid';
    if(!formData.subject) formErrors.subject ='Subject is required';
    if(!formData.message) formErrors.message='Message is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length===0;
  };

  const handleChange = (e) =>{
    setFormData({...formData ,[e.target.name]:e.target.value});
  };

  const handleSubmit =async (e) =>{
    e.preventDefault();
    if(validateForm()){
      try{
        const res =await axios.post('https://portfolio-server-site-silk.vercel.app/api/contact',formData);
        console.log('Message sent:', res.data);
        alert("Message Sent");
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      }catch(error){
        console.log('Error sending message',error);
      }
    }
  };

  


  return (
   <section className="contact container section" id="contact">
    <h2 className="section__title">Get In Touch</h2>

    <div className="contact__container grid">
      <div className="contact__info">
        <h3 className="contact__title">Let's talk about everything!</h3>
        <p className="contact__details">Don't like forms? Send me an email. 👋</p>
      </div>

      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__form-group">
          <div className="contact__form-div">
            <input
             type="text" 
             name="name"
             value={formData.name}
             onChange={handleChange}
             className="contact__form-input" 
            placeholder='Insert your name'/>
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="contact__form-div">
            <input type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact__form-input" 
            placeholder='Insert your email'/>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
        </div>

          <div className="contact__form-div">
            <input 
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact__form-input" 
            placeholder='Insert your subject'/>
             {errors.subject && <p className="error-message">{errors.subject}</p>}
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea 
             name="message"
             value={formData.message}
             onChange={handleChange}
             cols="30" 
             rows="10"
            className='contact__form-input'
            placeholder='Write your message'/>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button className='btn' type='submit'>Send Message</button>
        
      </form>

    </div>
   </section>
  )
}

export default Contact
