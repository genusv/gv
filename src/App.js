import React, {useState,useRef,useEffect} from 'react'
import logo from './Assets/logo.svg';
import lets from './Assets/lets.svg';
import phone from './Assets/phone.svg';
import globe from './Assets/globe.svg';
import gico from './Assets/gico.svg';
import wallet from './Assets/wallethome.svg';
import topt from './Assets/topt.svg';
import spline from './Assets/spline.svg';
import './App.css';
import Gvt from './Assets/Gvt_2.mp4';

function App() {

  const [screen, setscreen] = useState(1)

  function _screen(i){ if(screen===i){return({display:"block"})}else{return({display:"none"})} }

  return (
    <div id="main" >

      
        <div id="home_wall" style={_screen(1)} ></div>
      <div id="home_scroll" style={_screen(1)} >
      <div id="home_main" >
      <div id="home" >
        <div id="home_top_bar" >
        <div id="logo" ><img alt="img" id="img_fx" src={logo} /></div>
          <div id="main-name" >GENUS VILLA</div>
          <div className="home_bt" id="btt_skin" onClick={e=> setscreen(1)} ><button id="bt_default">Get Started</button></div></div>

          <div id="home_text" >
        <div id='tx1' className='plce1'>
        In pursuit of knowledge, Learning is a treasure to unlock the golden door to change the world.
        </div>

        <div id="home_motive" >
        Transcend boundaries, metamorphose into your true self. Unleash the dormant power within; the key to unlocking your boundless potential is in your hands. Transform, evolve, and embrace the extraordinary journey of self-discovery.
        </div>
        </div>


        <div id="LGS" >
          <div id="getstarted_ico" >
          <img alt="img" id="img" src={lets} /></div>
          <div id="itexdad" >
          <div id="itex"> Let's get Started! </div>
          <div id="itex2" > Watch this quick demo video to see how to get started</div></div>
        </div>
        
      </div>

        </div>

        <div id="geo" >
          <div id="top_countries" >Top Countries</div>
          <div id="home_L2" ><img alt="img" id="img_f" src={globe} /></div>
        </div>

        <div id="home_L3" >
          <div id="online_com" >Online communities's make people more creative</div>
          <div id="creative_home" >
            <center>
            <div id="cre_items" > 
            <div id="cr_ico" ><img alt="img" id="img_f" src={wallet} /></div> 
            <div id="mini_header" >Set Up Your Account</div>
            <div id="small_text" > Begin your unforgettable user experience at Genus villa. Get started to unlock full experience </div> </div>
            
            <div id="cre_items" > 
            <div id="cr_ico" ><img alt="img" id="img_f" src={gico} /></div> 
            <div id="mini_header" >Set Up Profile</div>
            <div id="small_text" > Unlimited customization without limits; get started to withness enhanced Ai assisted setup </div> </div>
            
            <div id="cre_items" > 
            <div id="cr_ico" ><img alt="img" id="img_f" src={logo} /></div> 
            <div id="mini_header" >Genus Ai</div>
            <div id="small_text" > Genus Villa Ai is here to support you throughout your Genus experience. </div> </div>
            
            <div id="cre_items" > 
            <div id="cr_ico" ><img alt="img" id="img_f" src={topt} /></div> 
            <div id="mini_header" > Multi theme option</div>
            <div id="small_text" > Choose between different screen mode to customize your premium experience. </div> </div>
            
            </center>
          </div>

        </div>

        <div id="home_L4" hidden="hidden" >
          <center>
            <div id="spl" ><img alt="img" id="img" src={spline} /></div> 

            <div id="online_com" >Subscribe to Genus villa</div>
            <div id="quick_mail" >Info@genusvilla.com</div>
            <div id="btt_skin" ><button id="bt_default" >Send Email</button></div>
            </center>
        </div>

        <div id="home_L5" >
          <div>
        <div id="logo_base" >
        <div id="foot_image" ><img alt="img" id="img_f" src={logo} /></div>
        </div>
            <div id="bsl_text" > Transform your life through interactive Learning </div>
        
        </div>

        <div id="flatfoot" >
          <div id="small_text" > Copy right 2024 Genusvilla, All right reserved </div>
          <div id="small_text" > Privacy Policy Terms & Conditions </div>
        </div>

        </div>

</div>

{/*----------------------------_screen 2-----------------------------------*/}

<div id="p2"  style={_screen(2)} >
  <div id="two_tango" >
    <div id="size_flex" ><div id="logo_flex" ><img alt="img" id="unimg" src={logo} /></div></div>
    <div id="size_flex2" ><div id="logo_flex" ><img alt="img" id="unimg" src={logo} /></div></div>
  </div>
</div>

      <div id="vid" style={_screen(1)} ><video src={Gvt} autoPlay loop muted /></div>
    </div>
  );
}

export default App;
