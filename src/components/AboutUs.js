import Carousel from "./CarouselAboutUs";

const AboutUs = () => {
  return ( <>

    <h2>About Us</h2>

    <h3>Welcome to Huellitas!!</h3>

    <p>We celebrate the life-changing bond between humans and animals. Here, we embrace the incredible power of unconditional love that our furry friends bring into our lives. </p>
    <p>Huellitas is more than just a shelter; we're a haven for abandoned and mistreated animals, offering them a safe refuge while we tirelessly seek loving forever homes for each and every one of them.</p>
    <p>Our journey began with a group of compassionate individuals united by a simple yet powerful mission: to provide shelter, care, and affection to the homeless pets in our community. Since then, we've worked tirelessly to create a nurturing environment where every animal feels cherished and valued.</p>
    <p>We provide more than just the basics; we offer comprehensive veterinary care, socialization programs, and engaging activities to ensure the well-being and happiness of each pet as they await their forever families.</p>
    <p>Our team is made up of passionate animal advocates and dedicated professionals who are committed to ensuring that every pet receives the love and attention they deserve. Together with our incredible network of volunteers and donors, we form the heart and soul of Huellitas.</p>
    <p>Beyond rescue and adoption, we are deeply committed to educating our community about responsible pet ownership and preventing animal neglect and abuse.</p>
    <p>Every time one of our pets finds their forever home, our hearts overflow with gratitude and joy. We are honored to be a part of these life-changing connections, and we look forward to continuing to transform lives, one paw at a time.</p>
    <p>Thank you for joining us on this journey to create a brighter future for all our four-legged friends. </p>

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
