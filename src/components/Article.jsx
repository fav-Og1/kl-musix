import { useState } from 'react'
import kldouble from '../assets/klmain.png'
import screen2 from '../assets/screen2Main.png'
import '../Article.css'
import klperson from '../assets/klpersonmain.png'
import googlePlay from '../assets/googleLogo.png'
import applestore from '../assets/applemain.png'

export function Articles (){

    


    return(
        <article className='articles'>
            <img src={kldouble} className='kldouble' />
           <h3 style={{color: 'white'}}>PLAY TOP SONGS FROM <br/>
                FROM DIFFERENT COUNTRIES
           </h3>     


        </article>
            
            
        

    )
    
}

