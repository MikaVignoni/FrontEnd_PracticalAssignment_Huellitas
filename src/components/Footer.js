import Link from 'next/link';
import Mail from './icons/Mail';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Whatsapp from './icons/Whatsapp';
import MapaPin from './icons/MapaPin';


const Footer = () => {
  return ( <>
    <footer className="container">
      <div className='footer-links'>
        <Link href="/" >
          <img src="../Huellita_Icon.png" height="60px" alt="huellita" id="Huella_Icon"/>
          <img src="../Logotype.png" alt="Logotipo Huellitas" id='Huellitas_Texto' />
        </Link>       
      </div>

      <div className="social">
        <h4>Follow us:</h4> 
        <div className='footer-links'>
          <div className='social-links'>
            <Link href="https://facebook.com" target="_blank">  <Facebook />  </Link>
            <Link href="https://instagram.com" target="_blank">  <Instagram />  </Link>
            <Link href="https://whatsapp.com" target="_blank">  <Whatsapp />  </Link>
          </div>
        </div>

        <div className="footer-row">
          <Link href="mailto:huellitas@refugio.com" target="_blank">  <Mail />  </Link>
          <h4>huellitas@refugio.com</h4> 
        </div>

        <div className="footer-row">
          <Link href="https://maps.app.goo.gl/3wurT9ngYZiiyjT4A" target="_blank">  <MapaPin />  </Link>
          <h4>Argentina</h4> 
        </div>
      </div>
    </footer>
    
    <style jsx>{`
      footer {
        background-color: var(--colorPrincipal);
        padding: 20px;
      }
      .container {
        display: flex;
        justify-content: space-around;
      }
      .footer-links img {
        display: block;
        height: 60px;
        justify-content: center;
      }

      #Huellitas_Texto{display: none;}

      .social {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .footer-row h4 { margin-left: 10px; }

      .footer-row{
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .social-links { display: flex; align-items: center; }

      .social-links > * { margin-right: 10px; }

      @media (min-width: 880px) { .social {flex-direction: row;} }

      @media (min-width: 1300px) {
        #Huellitas_Texto{display:inline; width: 150px; height: auto; transform: translate(0%, -50%)}
        #Huella_Icon{height: 60px; width: auto;   transform: translate(0%, -35%)}
      }

    `}</style>
  </>);
};

export default Footer;