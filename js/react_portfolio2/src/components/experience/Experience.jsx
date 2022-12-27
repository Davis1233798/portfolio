import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='container experience__container'>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Css</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Javasript</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Scss</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

          </div>
        </div>
        <div className='experience__backend'>
          <h4>Backend Development</h4>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </article>
                            <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>PowerBuilder</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>SQLsrv</h4>
                <small className='text-light'>Experienced</small>
              </article>
                            <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </article>
                            <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </article>
                            <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Solidity</h4>
                <small className='text-light'>Experienced</small>
              </article>
        </div>




      </div>
    </section>
  )
}

export default Experience