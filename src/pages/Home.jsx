import React from 'react'
import Hero from '../components/Hero'
import Haulage from '../components/Haulage'
import Convoy from '../components/Convoy'
import StatsSection from '../components/History'

function Home() {
  return (
    <div className="">
        <Hero />
        <Haulage />
        <Convoy />
        <StatsSection />
    </div>
  )
}

export default Home