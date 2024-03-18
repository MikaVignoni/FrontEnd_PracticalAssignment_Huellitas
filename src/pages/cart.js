import Layout from "../components/Layout";
import YourCart from "../components/YourCart";


export default function Cart() {
  return (<>
    <Layout title={"HUELLITAS - Shopping Cart"}> 

      <h2>Your Shopping Cart</h2>
      <p>Every purchase you make has a direct impact on the lives of our adorable animals.</p>
      <p><span>Thank you for your support!</span></p>

      <YourCart />

    </Layout>

    <style jsx> {`
      span{
        color: var(--colorPrincipal);
        font-weight: 600;
        font-size: 14px;
      }
    `} </style>

  </> );
}