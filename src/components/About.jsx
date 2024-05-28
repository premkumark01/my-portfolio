import React from 'react'
import aboutImg from '../assets/about.jpg'
import background from '../assets/background.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg text-justify'>
                    Hi, I'm Premkumar K, a full stack developer based in Chennai, India, with over 4 years of experience in web development. 
                    I specialize in both front-end and back-end technologies. 
                    I excel at creating dynamic and responsive web applications, bringing both the technical and visual aspects of digital products to life. 
                    My proficiency extends to using tools like Git, Docker, and cloud services such as Azure. 
                    I am passionate about solving complex problems, collaborating with teams, and continuously learning to deliver high-quality, user-friendly solutions. 
                    I am happiest when I am creating, learning, exploring, and thinking about how to make things better. 
                    Let's connect and create something amazing together!
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={background} width={300}
                height={300} />
        </div>
    </div>
  )
}

export default About