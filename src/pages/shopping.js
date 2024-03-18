import Products from "@/components/Products";
import Layout from "@/components/Layout";

export default function Shopping() {
  return ( <>
    <Layout title={"HUELLITAS - Solidary Shop"}> 

      <h2>Solidarity Shop</h2>

      <p>Every purchase you make has a direct impact on the lives of our adorable animals. Our store offers quality products for your pets and provides you with the opportunity to practice compassionate shopping. The entire amount of your purchases is invested in the facilities and needs of each rescued little animal.
      <br/> Make every purchase count. <span>Thank you for your support!</span> 
      </p>

      <Products />

    </Layout>

  </> );
}
