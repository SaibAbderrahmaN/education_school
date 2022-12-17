import React from "react"
import { Typewriter } from "react-simple-typewriter"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='مرحبا بكم' title='قسم السنة أولي إبتدائي' />
            <h1><Typewriter words={[" دروس", " ملخصات" , "تمارين","واجبات","إختبارات"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}     />
</h1>
            <div className='button'>
              <button className='primary-btn'>
                ملفي <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button >
               دروس <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
