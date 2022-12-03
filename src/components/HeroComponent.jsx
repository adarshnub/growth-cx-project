import React from 'react';
import heroImageLg from "../images/image-hero-desktop.png";
import heroImageSm from "../images/image-hero-mobile.png";
import image1 from "../images/client-databiz.svg";
import image2 from "../images/client-audiophile.svg";
import image3 from "../images/client-meet.svg";
import image4 from "../images/client-maker.svg";

//grid grid-cols-1 lg:grid-cols-2

const HeroComponent = () => {
  return (
    <>
    <div className="mx-auto max-w-7xl py-6 ">
    <div className=" flex lg:flex-row flex-col-reverse    ">
        <div className="flex  justify-center  ">
            <div className="flex  flex-col w-3/4 lg:text-left text-center gap-20 pt-20">
                <div className="space-y-12 ">
                    <h1 className="lg:text-7xl text-4xl font-bold lg:tracking-wide  ">Make remote work</h1>
                    <p className="text-gray-600 font-semibold text-lg tracking-wide">Get your team in sync, no matter your location. 
                    Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button className="text-white bg-black text-sm font-bold border py-3 px-4 rounded-xl hover:text-black hover:border-black hover:bg-white">Learn more</button>
                </div>
            
                <div className="flex  justify-center lg:justify-start  gap-7">
                    <img src={image1} 
                    alt="credits" 
                    className="h-4 w-20 "/>
                    <img src={image2} 
                    alt="credits"
                    className="h-4 w-20" />
                    <img src={image3} 
                    alt="credits" 
                    className="h-4 w-20 "/>
                    <img src={image4} 
                    alt="credits" 
                    className="h-4 w-20"/>
                </div>
            </div>
        </div>

        <div className="  flex  justify-center pb-10 lg:pb-0 ">
            <img
                src={heroImageLg}
                alt="heroImageLg"
                className=" hidden lg:block h-auto w-96"/>
            <img
                src={heroImageSm}
                alt="heroImageSm"
                className=" block lg:hidden h-auto w-96 "/>
        </div>
    </div>
    </div>
    </>
    );
}

export default HeroComponent;