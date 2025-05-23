import { useState } from 'react'
import logo from '../assets/kloudaa logo.png'
import '../Header.css'
import { FaBars   } from 'react-icons/fa'

export function Header (){
 
    const [show,setShow] = useState(false)
    const onShowclick = () => {
        if ( show == false) {
            setShow(true)
        } else {setShow(false)};
    }

    return(

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
    )
}

