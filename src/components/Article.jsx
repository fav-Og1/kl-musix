
import kldouble from '../assets/klmain.png'

import '../Article.css'


export function Articles (){

    


    return(
        <article className='articles'>
            <img src={kldouble} className='kldouble' />
            <div>
                <h3 style={{color: 'white'}}>PLAY TOP SONGS FROM DIFFERENT <br/>
                 COUNTRIES
                </h3> 
                <p>
                    Find your favorite music playlist easily and <br />
                    quickly that can be accessed anytime, <br />
                    and anywhere
                </p> 
                <div className='songStats'>
                    <div className='numbStat'>
                        <h4>80m+</h4>
                        <p>Licensed Songs</p>
                    </div>
                    <div className='numbStat'>
                        <h4>240K + </h4>
                        <p>Playlist Songs</p>
                    </div>
                    <div className='numbStat'>
                        <h4>200m +</h4>
                        <p>Users</p>
                    </div>
                </div>
                
            </div>
              

          
        </article>
          
            
        

    )
    
}

