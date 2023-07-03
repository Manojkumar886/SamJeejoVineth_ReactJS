import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export let Operator=()=>
{
    const[wish,setWish]=useState("nothing");
    const[output,setOutput]=useState("");
    const[changes,setChanges]=useState({color:'red',backgroundColor:'balck'})
    const getinganavalues=(temp)=>
    {
        setWish(temp.target.value)
    }

    const ternaryopertor=()=>
    {
       (wish=='spring') ?
        setChanges({color:'green',backgroundColor:'black'}):

        (wish=='summer')?
        setChanges({color:'yellow',backgroundColor:'black'}):

        (wish=='winter')?
        setChanges({color:'blue',backgroundColor:'black'}):

        setChanges({color:'pink',backgroundColor:'black'})

        setOutput(wish);
    }


    return(
        <>
        <input placeholder="enter your favoriate season" className="form-control" onChange={getinganavalues} />
        <button className="btn btn-outline-dark fw-bold" onClick={ternaryopertor}>Check your Favoriate Season</button>
        <p style={changes}>
            {output}
        </p>
        </>
    );
}