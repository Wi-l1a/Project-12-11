import React from 'react'
import s from './Main.module.scss'
import { Hero } from './Hero/Hero'
import { HowItWorks } from './HowItWorks/HowItWorks'
import { PopularAds } from './PopularAds/PopularAds'


const Main = () => {

    return (
        <>
            <Hero />
            <HowItWorks />
            <PopularAds />
        </>
    )
}

export default Main