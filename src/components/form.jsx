import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css';






export function Form (props) {

    const {handleCloseModal} = props
     
    return (
        <>
        <h2>Register now</h2>
        <p className="form-title">Name</p>
        <input placeholder="John"  className="form-text"/>
        <p className="form-title">Email</p>
        <input placeholder="@gmail.com" className="form-text"/>
        <p className="form-title">Phone Number</p>
        
          <PhoneInput

            country={'us'}
            
          />
        
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
           <button onClick={handleCloseModal} className="submit-button">
            <h2>submit</h2>
         </button>
        </div>
       
        
        </>
    )
}