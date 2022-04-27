import React from 'react'
import { Button, Button2 } from '../ButtonElement'
import { Column2, Img, ImgWrap, InfoContainer, InforWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtilte, Column1, BtnWrap} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
    <InfoContainer lightBg = {lightBg} id={id}>
        <InforWrapper>
            <InfoRow imgStart = {imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText = {lightText}>{headline}</Heading>
                    <Subtilte darkText = {darkText}>{description}</Subtilte>
                    <BtnWrap>
                        <Button2 to='/search' 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset ={-80} 
                        primary={primary? 1 : 0} 
                        dark={dark ? 1: 0} 
                        dark2={dark2 ? 1 : 0}
                        
                        >{buttonLabel}</Button2>
                    </BtnWrap>
                </TextWrapper>
                
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt= {alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>

        </InforWrapper>
    </InfoContainer>
      
    </>
  )
}

export default InfoSection
