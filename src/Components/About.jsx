import React from 'react'
const About = () => {
  return (
    <div id='About' className='bg-color text-light py-4'>
      <div className="container">
        <h1 className='text-center pb-2'>About</h1>
        <div className="row g-lg-5">
              <div className='col-12 col-md-6 col-lg-4'>
                <h2 className='text-violate'>Hi there I'm Pavan</h2>
                <p>And I love to create beautiful and efficient websites in react.And I am proficient in skills like html, css, javaScript, and framework like bootstrap, tailwindCSS, and reactJS </p>
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                  <div>
                  <p className='text-violate'>JAN 2024-JUNE 2024</p>
                  <h4>React Intern, CODEMIND, Pune</h4>
                  </div>
                  <div>
                    <p className=' text-violate'>NOV 2022-JUNE 2024</p>
                    <h4>Master of Computer Application (MCA)</h4>
                  </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4 '>
                <p className=' text-violate'>AUG 2019-JUNE 2022</p>
                <h4>Bachelor of Computer Application (BCA)</h4>

              </div>

          </div>
        </div>
      

      
    </div>
  )
}

export default About
