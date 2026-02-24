import React from 'react'
import Hero from '../../src/Components/AboutPages/Hero'
import Cards from '../../src/Components/AboutPages/Cards'
import OurServiceJourney from '../../src/Components/AboutPages/OurServiceJourney'
import TeamSection from '../../src/Components/AboutPages/TeamSection'


const AboutPage = () => {
  return (
    <div>
        <Hero/>
        <Cards/>
        <OurServiceJourney/>
        <TeamSection/>
    </div>
  )
}

export default AboutPage