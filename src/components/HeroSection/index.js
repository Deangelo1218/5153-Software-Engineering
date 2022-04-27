import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import Video from '../../video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer id= 'home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Cooking Made Easy</HeroH1>
            <HeroP>
                Join our family today to go from zero to hero when it comes to cooking!
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter = {onHover} onMouseLeave = {onHover} primary ='true' dark ='true'>
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
