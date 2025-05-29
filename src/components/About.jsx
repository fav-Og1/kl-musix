import about from '../assets/about.png'

export function About () {

    return(
        <>
            <div className='about-page'>
                <img src={about}  className='about-pic'/>
                <div className='about-context'>
                   <h3>About Kloudaa</h3> 

<p>Kloudaa is a music streaming platform that gives users access to a large catalog of music. 
    It uses a freemium revenue model that offers a basic, limited, ad-supported service for free and an unlimited premium service for a subscription fee.
  </p>  

<p>Our vision: is to establish a standard and world class music streaming services platform that will accommodate users from all across the world.</p>

<p>Our mission: is to provide professional and user-friendly music streaming platform that will make available a wide genre of music to music lovers all across the world at an affordable subscription. 
We are also on a mission to unleash the creative potential of people by providing a million artists with a means of subsistence and billions of followers with a means of appreciating and being inspired by their work.
 </p>
                </div>
            </div>
        </>
    )
}