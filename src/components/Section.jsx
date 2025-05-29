import screen1 from '../assets/screen1Main.png'
import '../Section.css'
import klperson from '../assets/klpersonmain.png'
import googlePlay from '../assets/googleLogo.png'
import applestore from '../assets/applemain.png'
import { Articles } from './Article'
import { Features } from './Features'
import { useState } from 'react'
import { Modal } from './Modal'
import { Form } from './form'


export function FreeDownload (){

    const message =['Enjoy','unlimited', 'free download.']

    const [showModal, setShowModal] = useState(false)
    
    
    function handleCloseModal(){
        setShowModal(false)
    }


    return(
        <>

 {showModal && (<Modal handleCloseModal={handleCloseModal}>
        <Form  handleCloseModal={handleCloseModal} />
    </Modal>)}
<section>
           <div  className='freeScreen'>
                    <div className='freeD'>
                <p className='textOne message'>
                    Enjoy
                </p>
                <p className='textTwo message'>
                    unlimited
                </p>
                <p className='three message'>
                    free <span className='classB'>download.</span>
                </p>
                
                <p className='message1'>
                    join millions of people today using the <br/>
                    
                        Kloudaa music app
                    
                </p>
                <button className='regbtn2' onClick={ () =>{ setShowModal(true)}} >web app coming soon</button>

                <p  className='message1'>
                        Available now :</p>

                   <div className='downloadClass'>
                   <div className='anc1'  >
                        <a >
                            < img src={applestore} className='downloadLInk' />
                        </a>
                    </div>
                    
                    <div className='anc1' >
                        <a >
                            < img src={googlePlay} className='downloadLInk' />
                        </a>
                    </div>
                   
                
                   </div>
                    <div className='media'>
                             <img style={{marginBottom:'35px'}}src={screen1}  className='screen2' />

                             <p style={{marginBottom:'35px'}} className='textOne sidet'>feel</p> 
                            <p style={{marginBottom:'35px'}} className='textTwo sidet'>
                            music  <span style={{color:'white'}}>in</span> 
                            </p> 
        
                            <p style={{marginBottom:'35px'}} className='classB sidet'>
                            <span style={{color:'white'}}>a</span> new way
                            </p>
                    </div>
                   
             
                     
                 <img src={klperson}  className='klperson'/>
              
                    </div>

                   


                 <div className='freeD1'>
                <img src={screen1}  className='screen1' />
                
                        <p className='textOne sidet'>feel</p> 
                        <p className='textTwo sidet'>
                            music  <span style={{color:'white'}}>in</span> 
                        </p> 
        
                        <p className='classB sidet'>
                            <span style={{color:'white'}}>a</span> new way
                        </p>
                
                
            </div>

        </div> 
        <Articles />
        <Features />  
            
            
          
        </section>

        
        
 
 </>
    )
    
}

