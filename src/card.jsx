import { useState,useEffect } from "react" 


function Card(props){
    
    const [image,setImage] = useState(null)

    useEffect(() => {
        fetch(`${props.url}`)
        .then(response => response.json())
        .then(res => {
            setImage(res.sprites.front_default)
        })
    },[props.url])
return (
    <>
    <div className="frame" onClick={props.event} >
 <img 
 id={props.name}
       
        src={image}  />
      
    </div>
    </>
)
}


export default Card