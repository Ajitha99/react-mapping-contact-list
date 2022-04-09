
function DetailContact(props){
    return(
        <div className="moreInfo">
            <div>age: {props.data.gender}</div>
            <div>Street: {props.data.location.street}</div>
            <div>email: {props.data.email}</div>
            <div>DOB: {props.data.dob.date}</div>
            <div>age: {props.data.dob.age}</div>
        </div>
        )
}

export default DetailContact;


