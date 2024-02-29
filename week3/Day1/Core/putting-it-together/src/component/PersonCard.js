import {useState} from "react";

const PersonCard = (props) => {
    const{ lastName, firstName, age, hairColor } = props
    const[birthday, setBirthday] = useState(age);
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {birthday}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={()=>setBirthday (birthday + 1)}> Birthday Button For {firstName} {lastName}</button>
        </div>
    )
}
export default PersonCard;
