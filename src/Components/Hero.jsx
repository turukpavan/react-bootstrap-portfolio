import React from 'react'

const Hero = () => {
  return (
    <div id='Hero' className='bg-color text-light  d-flex flex-column align-items-center justify-content-center '>
        <div className='hero_content '>
            <p>I'm</p>
            <h1 className='text-violate '>Pavan Turuk</h1>
            <p className=' float-end'>React Developer</p>
        </div>
            <button className='button px-4'><a href="/Pavan_ReactDeveloper_Resume1.pdf" download className=' text-decoration-none text-light '>resume</a></button>
      
    </div>
  )
}

export default Hero
