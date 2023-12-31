import '../styles/Layout.css'
import { Outlet, useLocation } from 'react-router-dom';
import SocialMedia from "./SocialMedia.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import home from "../assets/images/img1.png"
import eshop from "../assets/images/img20.png"
import compte from "../assets/images/img37.png"
import signup from "../assets/images/img19.png"
import orderConfirmed from "../assets/images/img23.png"
/*import notFound from '../assets/images/404Error.jpg'*/

function Layout() {
  const location = useLocation();

  let bgImg = home;
  let bgClass = ''

  // Définir des classes spécifiques pour chaque NavLink actif
    if (location.pathname === '/eshop') {
      bgImg = eshop;
      bgClass = 'eshopRadiant'
    } else if (location.pathname === '/eshop/cart') {
      bgImg = '';
      bgClass = ''
    } else if (location.pathname === '/eshop/cart/orderRecap/deliveryPayment/orderConfirmed') {
      bgImg = orderConfirmed;
      bgClass = 'bgRadiant orderConfirmedImg'
    } else if (location.pathname === '/compte') {
      bgImg = compte;
      bgClass = 'compteRadiant'
    } else if (location.pathname === '/signup') {
      bgImg = signup;
      bgClass = 'bgRadiant'
    } else if (location.pathname === '/login') {
      bgImg = signup
      bgClass = 'bgRadiant'
    } else if (location.pathname === '/') {
      bgImg = home
      bgClass = ''
    } else {
      bgImg = ''
      bgClass=''
    }

  return (
    <>
      <div id="appContainer" className={bgClass}>
        <div className='backgroundImg w-100'>
          <img src={bgImg} alt="background-pic" className='backgroundImg' />
        </div>
        <div id="appBody">
          <SocialMedia />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout 