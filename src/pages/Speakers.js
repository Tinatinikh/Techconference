import Pages from "./Pages"
import { useRef } from "react"
import DivElement from "./DivElement"
const users = [
    {"id":7,
    "email":"michael.lawson@reqres.in",
    "first_name":"Michael",
    "last_name":"Lawson",
    "avatar":"https://reqres.in/img/faces/7-image.jpg"},
    
    {"id":8,
    "email":"lindsay.ferguson@reqres.in",
    "first_name":"Lindsay",
    "last_name":"Ferguson",
    "avatar":"https://reqres.in/img/faces/8-image.jpg"},
    
    {"id":9,
    "email":"tobias.funke@reqres.in",
    "first_name":"Tobias",
    "last_name":"Funke",
    "avatar":"https://reqres.in/img/faces/9-image.jpg"},
    
    {"id":10,
    "email":"byron.fields@reqres.in",
    "first_name":"Byron",
    "last_name":"Fields",
    "avatar":"https://reqres.in/img/faces/10-image.jpg"}, 
]
export function Speakers () {
   
    const divRef = useRef()
     return (
    <Pages>

 <div className="speaktext">
 <h1>
    SPEAKERS 2023
 </h1>

 <h3>
    The Summit offers a range of sessions that provide educators the opportynity to interact and learn from each other
 </h3>
 </div>
 <div className="speakersdiv">
 {
        users.map(element =>(
            <DivElement 
                key={element.id} 
                className="userDiv"
                ref= {divRef}>
                <img src={element.avatar}></img>
                {element.first_name + " " + element.last_name }
            </DivElement>
        ))
}  
 </div>

    </Pages> 
    )
}