import { useState, useContext, useEffect } from 'react';
import ShoppingCart from './icons/ShoppingCart';
import { ShoppingContext } from "../context/ShoppingContextProvider";
import Link from 'next/link';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => { setMenuOpen(!menuOpen); };

  const {READ_DATA, infoCartState } = useContext(ShoppingContext);
  useEffect(() => {READ_DATA()}, []);
  const { ItemsInCart } = infoCartState;


  return ( <>
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={menuOpen ? "navbar-list open" : "navbar-list"}>
          <li> <Link href="/"> Home </Link> </li>
          <li> <Link href="/about_us"> About Us </Link> </li>
          <li> <Link href="/shopping"> Solidary Shop </Link> </li>
        </ul>

        <Link className="logo" href="/">
          <img id="Icon" src="../Huellita_Icon.png" alt="Paw Icon" />
          <img id="Logotype"  src="../Logotype.png"  alt="Logotype with the word Huellitas. which translates to 'little pawprints' in English"  />
        </Link>

        <div className="cart">
          <div id='ItemsInCart'> <p id='NumberItems'> {ItemsInCart} </p> </div>
          <Link href="/cart"> <ShoppingCart />  </Link>
        </div>

      </nav>

    <style jsx> {`
      .navbar {
        background-color: var(--colorPrincipal);
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px;
        color: black;
        font-weight: bold;
      }

      .navbar-list {
        padding: 30px;
        margin: 20px 0px 0px;
        display: flex;
        display: none;  
        position: absolute;
        top: 60px; 
        background-color:var(--colorPrincipal); 
        z-index: 1000; 
        transition: transform 0.3s ease-in-out; 
        transform: translateY(-100%);
        text-align: left;
        flex-direction: column;
      }

      .navbar-list.open { display: flex;  transform: translateY(0); }
      .navbar-list li { margin-bottom: 10px; }
      .navbar-list li:last-child { margin-bottom: 0; }
      .menu-toggle {  cursor: pointer;  padding: 0px 20px; display: flex;  flex-direction: column; justify-content: space-between; height: 25px;}

      .bar { width: 25px; height: 3px; background-color: var(--colorTexto); margin: 2px 0px; }
      .cart {color: var(--colorText); font-size: 5px; padding-right: 15px;}
      #Icon, #Logotype {height: 30px; padding: 0px 10px; width: auto;}
      #ItemsInCart{
        border-radius: 50%; 
        background: var(--colorTexto); 
        height:25px; width: 25px; 
        display: flex; 
        align-items: center; 
        justify-content:center; 
        z-index: 1001;
        transform: translate(120%, 40%);
      }

      #NumberItems{color: var(--colorDetalles);   font-size: 13px;}


      @media (min-width: 650px) {
        .navbar { height: 100px;}
        .cart { font-size: 10px; padding: 0px 20px; }
        #Icon, #Logotype { height: 45px; }
        .menu-toggle { height: 30px;}
        .bar{width: 30px; margin: 3px 0px;}
      }

    `} </style>

  </> );
};

export default NavBar;