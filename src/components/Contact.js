import contact from "../styles/contact.css"


function Contact (props) {
   
    return(
        
        
        <div className="divContact">
            <img id ="left" src={props.contactData.picture.large} alt="person"/>
            <div>
                <h1>{props.contactData.name.first} {props.contactData.name.last}</h1>
                <h3>Home: {props.contactData.phone}</h3>
                <h3>Mobile: {props.contactData.cell}</h3>
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