import imgA from '../bestdesigns/1.gif'
import imgB from "../bestdesigns/2.gif"
import imgC from '../bestdesigns/3.gif'
import imgD from '../bestdesigns/4.gif'
import imgE from '../bestdesigns/5.gif'
import imgF from '../bestdesigns/6.gif'
import imgG from '../bestdesigns/7.jpg'
import imgH from '../bestdesigns/8.jpg'
import imgI from '../bestdesigns/9.jpg'
import imgJ from '../bestdesigns/10.JPG'
import imgK from '../bestdesigns/11.JPG'
import imgL from '../bestdesigns/12.jpg'
import imgM from '../bestdesigns/13.jpg'
import imgN from '../bestdesigns/14.jpg'
import imgO from '../bestdesigns/15.jpg'
import imgP from '../bestdesigns/16.jpg'
import imgQ from '../bestdesigns/17.jpg'
import imgR from '../bestdesigns/18.jpg'
import imgS from '../bestdesigns/19.jpg'
import imgT from '../bestdesigns/20.jpg'
import imgU from '../bestdesigns/21.jpg'
import imgV from '../bestdesigns/22.jpg'
import React from 'react';
import Scroll from '../Scroll/Scroll';
import { SRLWrapper } from "simple-react-lightbox";
import 'tachyons'

let data = [
        {
            id: 1,
            img: imgA
        },
        {
            id: 2,
            img: imgB
        },
        {
            id: 3,
            img: imgC
        },
        {
            id: 4,
            img: imgD
        },
        {
            id: 5,
            img: imgE
        },
        {
            id: 6,
            img: imgF
        },
        {
            id: 7,
            img: imgG
        },
        {
            id: 8,
            img: imgH
        },
        {
            id: 9,
            img: imgI
        },
        {
            id: 10,
            img: imgJ
        },
        {
            id: 11,
            img: imgK
        },
        {
            id: 12,
            img: imgL
        },
        {
            id: 13,
            img: imgM
        },
        {
            id: 14,
            img: imgN
        },
        {
            id: 15,
            img: imgO
        },
        {
            id: 16,
            img: imgP
        },
        {
            id: 17,
            img: imgQ
        },
        {
            id: 18,
            img: imgR
        },
        {
            id: 19,
            img: imgS
        },
        {
            id: 20,
            img: imgT
        },
        {
            id: 21,
            img: imgU
        },
        {
            id: 22,
            img: imgV
        },
    ]

const ImageGallery = () => {
    return(
        <main>
        <h1>These are my graphic designs.</h1>
        <p>I've used Adobe Photoshop and Adobe Illustrator and Figma to make these.</p>
        <SRLWrapper>
        <Scroll>
        {data.map( pic => {
            return(
                <div className='dib grow tc pa2 ma2 shadow-2 br2' key={pic.id}> 
                    <img alt="images" id='imageEnlarge' src={pic.img} width={400} height={400} srl_gallery_image="true"/>
                </div>
            )
        })
        }
        </Scroll>
        </SRLWrapper>
        </main>
    )
}
 
export default ImageGallery;