
import screen1 from '../assets/screen1Main.png'
import screen2 from '../assets/screen2Main.png'
import '../Section.css'
import klperson from '../assets/klpersonmain.png'
import googlePlay from '../assets/googleLogo.png'
import applestore from '../assets/applemain.png'
import { Articles } from './Article'


export function FreeDownload (){

    const message =['Enjoy','unlimited', 'free download.']


    return(
        <home>
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
                    <span>
                        Kloudaa music app
                    </span>
                </p>
                <button className='regbtn2' >Web app coming soon</button>

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

                   <img src={screen2}  className='screen2' /> 
             
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
            
            
            
          
        </home>

        
        

    )
    
}

