import { useState } from 'react'
import logo from '../assets/kloudaa logo.png'
import { FaBars   } from 'react-icons/fa'


export function Layout(props){

    const { children } = props

    const [show,setShow] = useState(false)

     function onShowclick ()  {
             if ( show == false) {
                 setShow(true)
             } else {setShow(false)};
         }

   const header = (
         <header className='header'>
                <div className='logoHolder'>
                     <img src={logo}  className='klogo'/> 
                </div> 
                { show &&
                 <nav className='NavOptions'>
                     <ul>About</ul>
                     <ul>Privacy Policy</ul>
                     <ul> Terms and Conditions</ul>
                 </nav>
     }
     
                 <nav className='navOptions'>
                     <ul>About</ul>
                     <ul>Privacy Policy</ul>
                     <ul> Terms and Conditions</ul>
                 </nav>
                 <FaBars 
                     onClick={onShowclick}
                     className='optionMenu'
                 />
                 <button className='regbtn'> Web App Coming Soon</button>
                 
             </header>
         
   );

   const footer = (
     <div>
        <footer>
            
        </footer>

     </div>
   )

return(
    <>
         {header}
            <main>
                {children}
            </main>
       {footer}

    </>
      
            
    )
}