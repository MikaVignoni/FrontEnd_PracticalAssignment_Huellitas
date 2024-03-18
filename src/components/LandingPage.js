import { useState, useEffect } from 'react';
import Link from 'next/link';

const LandingPage = () => {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const landingPage = document.querySelector('.LandingPage');
    const imageUrlBase = "/img/Landing_Page/LandingPage_";
    const imageExtension = ".webp";

    function changeBackgroundImage() {
      landingPage.style.backgroundImage = `url('${imageUrlBase}${imageIndex}${imageExtension}')`;
      setImageIndex(prevIndex => (prevIndex % 3) + 1); 
    }

    const intervalId = setInterval(changeBackgroundImage, 5000);

    return () => clearInterval(intervalId);

  }, [imageIndex]);

  return ( <>
    <div className="LandingPage">
      <Link href="/about_us"> 

        <div className="Background_Logotype">
          <img id="Logotype"  src="../Logotype.png"  alt="Logotype with the word Huellitas. which translates to 'little pawprints' in English"  />
        </div>

        <div className="Meet_Us">
          <img id="Icon" src="../Huellita_Icon.png" alt="Paw Icon" />
          <h1>Meet Us</h1>
        </div>
      
      </Link>
    </div> 

    <style jsx>
    {`
      .Meet_Us,
      .Background_Logotype{
        position: absolute;
        background:  #FFFFFF80;
        transform: translate(-50%, -0%);
      }

      .Meet_Us{ 
        height: 50px;
        width: 260px;
        bottom: 50px;
        left: 50%;
        display: flex; flex-direction:row;
        align-items: center;
        justify-content: space-evenly; 
      }

      .Background_Logotype{
        height: 65px;
        width: 255px;
        padding: 10px 30px;
        top: 50px;
        left: 50%;
      }

      img{
        height: 45px;
        opacity: 0.7;
      }

      #icon{
        height: 30px;
      }
    `}
    </style>

  </>);
}

export default LandingPage;
