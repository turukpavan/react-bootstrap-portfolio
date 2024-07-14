import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9sr33xk', 'template_2agrm88', form.current, {
        publicKey: '-NC7MOzOAKfa93NXi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id='Contact' className='container py-4'>
      <h1 className='text-center '>contact</h1>
      <p className='text-center mb-3'>For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a href="turukpavan@gmmail.com" target="_blank" rel="noopener noreferrer">turukpavan@gmail.com</a></p>
      <form  ref={form} onSubmit={sendEmail}>
      <div class="mb-4">

    <input type="text"
      name='from_name'
     className="form-control"
      id="exampleInputText" 
      placeholder='enter name'/>
  </div>

  <div class="mb-4">
    <input type="email"
    name='from_email'
     className="form-control"
      id="exampleInputEmail1"
       aria-describedby="emailHelp"
        placeholder='enter email'/>

    <div id="emailHelp" class="form-text" >We'll never share your email with anyone else.</div>
  </div>

  
 
  <button type="submit" value="Send" className="button w-100">Submit</button>
</form>
    </div>
  )
}

export default Contact
