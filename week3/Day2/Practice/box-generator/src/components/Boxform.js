    import React , {useState} from 'react'

    const  Boxform = (props) => {
    const [color,setColor] = useState("")
    const {addcolor} = props
    const createColor = (e) => {
        e.preventDefault();
        console.log("clicked")


    const newColor = {
        color: color,
    }
    console.log (newColor)
    addcolor (newColor)
    setColor("")
    };

    return (
        <fieldset>
            <form className="row g 3" onSubmit={createColor} style={{margin: "20px"}}>
                <div className="col-auto" style={{ display: "flex", alignItems: "center" , marginRight: "10px"}}>
                    <label className="sr-only"> Color</label>
                    <input className="form control" style={{marginLeft: "20px", borderRadius: "5px", width: "400px" , height:"100" }} value={color} onChange={(e) => {setColor(e.target.value)}}/>
                </div>
                <button className="col-auto  btn btn-outline-secondary" style={{borderRadius: "5px" ,width:"50px", height:"50px" }} type='submit'> Add</button>
        </form>
        </fieldset>
    )
    }
    export default Boxform;