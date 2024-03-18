import Form from "./Form"

const Adopt = () => {
  return ( <>

    <h2>Adopt</h2>

    <p>If you are considering giving a loving home to a needy pet, please complete our adoption form, and we will be in touch with you soon.</p>
    <p>We want to make sure to provide you with all the necessary information so you can make the best decision for you and your future pet. From details about the care and needs of our animals to advice on transitioning to their new home, we are here to assist you every step of the way.</p>
    <p>We invite you to schedule a visit to the shelter, where you can meet our adorable residents and discover who could become your ideal furry companion.</p>
    <p>We look forward to accompanying you on this exciting journey towards adopting your new pet!</p>

    <div className="form">  
      <Form /> 
    </div>

    <style jsx> {`
      .form{ margin: 30px 0px 20px; }
    `} </style>

  </>)
}

export default Adopt

