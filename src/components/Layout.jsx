import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/kloudaa logo.png'
import express from '../assets/express1.png'
import { FaBars   } from 'react-icons/fa'
import footplaystore from '../assets/footplaystore.png'
import footapplestore from '../assets/footapplestore.png'
import fbsmall from '../assets/fb.svg'
import igsmall from '../assets/ig.svg'
import tiktoksmall from '../assets/tt.svg'
import ytsmall from '../assets/yt.svg'
import { Modal } from './Modal'
import { Form } from './form'




export function Layout(props){

    const { children } = props
        const [showModal, setShowModal] = useState(false)

    const [show,setShow] = useState(false)

     function onShowclick ()  {
             if ( show == false) {
                 setShow(true)
                 

             } else {setShow(false)};
 }

        

   const header = (
         <header className='header'>
            <Link to='/'>
                <div  className='logoHolder'>

                     <img src={logo}  className='klogo'/> 
                </div>
            </Link>
                { show &&
                 <nav className='NavOptions'>
                     <ul onClick={onShowclick}><Link to='/about'>About</Link></ul>
                     <ul onClick={onShowclick}><Link to='/termscon'>Terms and Condition</Link></ul>
                     <ul onClick={onShowclick}> <Link to='/privacy'>Privacy Policy</Link></ul>
                 </nav>
     }
     
                 <nav className='navOptions'>
                      <ul><Link to='/about'>About</Link></ul>
                     <ul><Link to='/termscon'>Terms and Condition</Link></ul>
                     <ul> <Link to='/privacy'>Privacy Policy</Link></ul>
                 </nav>
                 <FaBars 
                     onClick={onShowclick}
                     className='optionMenu'
                 />
                 <button className='regbtn' onClick={ () => { setShowModal(true)}}> Web App Coming Soon</button>
                 
             </header>
         
   );

   const footer = (
     <div>
        <footer>
            <div className='express-holder'>
                <img src={express} className='express' />
            </div>
            <h2>LISTEN TO YOUR MUSIC EASILY</h2>
            <p> You can download the kloudaa app using the available </p>
            <p>platform</p>
            <div className='footerLogos'>
                 <img src={footapplestore} />
                 <img src={footplaystore} />
            </div>

            <div className='footerContact'>
                <div >
                    <img src={logo} />
                    <p> Copyrights 2025, all rights reserved</p>
                </div>
                
                <div className='cntFormat'>
                    <h4>Company</h4>
                    <ul>
                        <Link to='/about'>About</Link>
                    </ul>
                    <ul>
                        <Link to='/about'>Terms and Conditions</Link>
                    </ul>
                    <ul>
                        <Link to='/about'>Privacy policy</Link>
                    </ul>
                </div>
                <div className='support-box' >
                    <h4>support</h4>
                    <Link><img src={fbsmall} className='foot-icon'/></Link>
                    <Link><img src={igsmall} className='foot-icon' /></Link>
                    <Link><img src={tiktoksmall} className='foot-icon' /></Link>
                    <Link><img src={ytsmall}  className='foot-icon'/></Link>
                </div>
            </div>
        </footer>

     </div>
   )
 function handleCloseModal (){
    setShowModal(false)
 }
return(
    <>
    {showModal && (<Modal handleCloseModal={handleCloseModal}>
        <Form  handleCloseModal={handleCloseModal} />
    </Modal>)}
      
         {header}
          
            <main >
                {children}
            
            </main>
        
       {footer}

    </>
      
        
    )
}