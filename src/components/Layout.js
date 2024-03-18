import NavBar from "./NavBar"
import Footer  from "./Footer";
import Head from 'next/head'
import ShoppingContextProvider from "../context/ShoppingContextProvider"


export default function Layout({title,children}) {
  return ( <>
    <Head>
      <title>{title ? title : "HUELLITAS"}</title>
      <meta name="description" content="Huellitas" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main>
      <ShoppingContextProvider>
      
      <NavBar />
      <div className="Page-Content">
        {children}
      </div>
      </ShoppingContextProvider>

      <Footer />

    </main>


    <style jsx> {`
      main{
        position: relative;
        
      }

      .Page-Content{
        max-width: 1000px;
        margin: 0 auto;
        min-height: 74vh;
      }

      .Footer {
        position: fixed;
        bottom: 0px;
        width: 100%;
      }

    `} </style>


  </>);
}
