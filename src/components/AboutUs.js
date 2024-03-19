import Carousel from "./CarouselAboutUs";

const AboutUs = () => {
  return ( <>

    <h2>Sobre Nosotros</h2>

    <h3>¡Bienvenido a Huellitas!</h3>

    <p> En Huellitas, creemos en el poder transformador del amor incondicional que las mascotas brindan a nuestras vidas. Somos un refugio comprometido con el bienestar y la protección de animales abandonados y maltratados, ofreciéndoles un hogar temporal seguro mientras buscamos familias amorosas que los adopten para siempre.</p>
    <p>Nuestra historia comenzó con un pequeño grupo de amantes de los animales que se unieron con un objetivo común: proporcionar refugio, atención médica y cariño a las mascotas desamparadas de nuestra comunidad. Desde entonces, hemos dedicado incansables esfuerzos para ofrecer un ambiente cálido y acogedor donde cada animal se sienta querido y valorado.</p>
    <p>Proporcionamos un techo sobre sus cabezas y comida en sus platos; también les ofrecemos atención veterinaria integral, programas de socialización y actividades recreativas para asegurarnos de que cada mascota se sienta segura, feliz y saludable mientras espera su hogar definitivo.</p>
    <p>Nuestro equipo está formado por apasionados defensores de los derechos de los animales y profesionales comprometidos que trabajan arduamente para garantizar que cada mascota reciba el amor y la atención que merece. Además, contamos con una red de voluntarios dedicados y generosos donantes que son el corazón de nuestra organización.</p>
    <p>En Huellitas estamos comprometidos con el rescate y la adopción de mascotas, sino también con la educación de la comunidad sobre la importancia de la tenencia responsable de animales y la prevención del abandono y el maltrato animal.</p>
    <p>Cada vez que una mascota encuentra un hogar amoroso y una familia para siempre, sentimos una profunda gratitud y alegría por ser parte de esa conexión especial. Nos emociona seguir transformando vidas, una pata a la vez.</p>
    <p> Gracias por visitar Huellitas y ser parte de este viaje para hacer del mundo un lugar mejor para todas las criaturas de cuatro patas. </p>
  
    <div className="Carousel" >
      <Carousel />
    </div>

    <style jsx> {`
      .Carousel{
        margin: 30px 0px 20px;
      }

    `} </style>
  
  </> );
};

export default AboutUs;