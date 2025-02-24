import React from 'react'
import {  FaGithub,  FaLinkedin } from 'react-icons/fa'


const Contact = () => {
  return (
    <section id='contact' className='bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
        <div className='grid lg:grid-cols-2 gap-10'>
          
          {/* Contact Info */}
          <div className='flex flex-col justify-center space-y-8'>
            <div>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'>Let's Talk</h1>
              <p className='text-gray-300 my-5'>I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out. You can contact me through the options below or fill out the form to send a message directly.</p>
              <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
              <p className='text-gray-600 mt-2'>
                <a href="mailto:vikuvikash@gmail.com" className='text-blue-500 hover:underline'>vikuvikash03@gmail.com</a>
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
              <div className='flex gap-3 text-2xl transition-all mt-5'>
                <a href="https://github.com/vikash032002" ><FaGithub className='text-blue-400 hover:text-pink-500' /></a>
                <a href="https://www.linkedin.com/in/vikash-kumar-b1a0231a2/" ><FaLinkedin className='text-blue-400 hover:text-blue-700' /></a>
                
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className='bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-[#854ce6] p-8'>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
            <form 
              action="https://formsubmit.co/a346868dd8c72b96c6f6727ee8870e68" 
              method="POST"
              className='space-y-6'
            >
              {/* FormSubmit Hidden Fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission!" />
              
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Your Name' 
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-300'>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Your Email' 
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
                  placeholder='Your Message'
                ></textarea>
              </div>

              <button 
                type='submit' 
                className='w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
