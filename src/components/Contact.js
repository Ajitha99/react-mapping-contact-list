import { useState } from "react"
import "../styles/contact.css"
import DetailContact from "./DetailContact";




function Contact (props) {
    const [showResults, setShowResults] = useState(false)
    const onClick = (e) => {
        e.preventDefault();
        setShowResults(true);
    }

    return(
      
            <div className="divContact">
                    
            <div className="imgDiv"><img id ="left" src={props.contactData.picture.large} alt="person"/></div>    
            <div className="contactDiv">
                <h1>{props.contactData.name.first} {props.contactData.name.last}</h1>
                <h3>Home: {props.contactData.phone}</h3>
                <h3>Mobile: {props.contactData.cell}</h3>
            </div>
            {/* <div className="moreDiv"><a href="data.html" onClick={clickEvent(props.contactData)}>More Info</a></div>  */}
            <div className="moreDiv"><button onClick={onClick}>More Info</button>
                {showResults ? <DetailContact data = {props.contactData}/>: null}
            </div>  
        </div>
      
       
       
    )
}
export default Contact;











// function btnClick(){
//     <div className="divBtnMouseOver">
//         <h1>{props.contactData.name.first} {props.contactData.name.last}</h1>
//         <div>
//             <h3>Address</h3>
//             <h4>{props.contactData.location.street}</h4>
//             <h4>{props.contactData.location.city}</h4>
//             <h4>{props.contactData.location.state}</h4>
//             <h4>{props.contactData.location.postcode}</h4>
//         </div>
//         <h3>Email: {props.contactData.email}</h3>
//     </div>
// }