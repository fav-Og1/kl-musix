import divider from '../assets/divider.png'
import '../features.css'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
import feature4 from '../assets/feature4.png'
import feature5 from '../assets/feature5.png'


export function Features (){

    return (
        <div className="features">
              <img src={divider}  className='divider'/>
                <div className='subhead'>
                    <h3 style={{color:'white'}}>OUR TOP TIER FEATURES</h3>
                    <div className='arrow-block'>
                        <div className='circle-arrow'><i class="fa fa-angle-left" ></i></div>
                        <div  className='circle-arrow'><i class="fa fa-angle-right" ></i></div>
                    </div>
                    
                </div>
                <div className='feature-block'>
                    <img src={feature1}  className='description-features' />
                     <img src={feature2} className='description-features' />
                   <img src={feature3} className='description-features' />
                       <img src={feature4} className='description-features' />
                        <img src={feature5} className='description-features' />
    
                </div>
                <div className='spacer'></div>
        </div>
    )
}

