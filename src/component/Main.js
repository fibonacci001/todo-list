import { useState } from "react"
import Bgdark from '../images/bg-desktop-dark.jpg'
import Bglight from '../images/bg-desktop-light.jpg';
import Bgdarkmobile from '../images/bg-mobile-dark.jpg';
import Bglightmobile from '../images/bg-mobile-light.jpg';





const Main = (props) => {
  const darkmode = props.darkMode;
     const Darkmodetoggle = props.toggleDarkMode;
    return ( 
      <main>
        <img src={`${darkmode ? Bglight : Bgdark}`} alt="" className="bg-dark" />
        <img src={`${darkmode ? Bglightmobile : Bgdarkmobile}`} alt="" className="bgmobile-dark" />
      </main>  
     );
}
 
export default Main;