import {useState} from  "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export let Firsthookexecution=()=>
{
    // // keyword [getvariablename,setvriablename]=useState("initialized");

    // const[user,setUser]=useState("");

    // const printavalue=()=>
    // {
    //     alert("your instagram user name is "+user);
    // }

    // const setavalue=(temp)=>
    // {
    //     setUser(temp.target.value)
    // }

    // return(
    //     <>
    //         <input className="form-control" placeholder="enter your username" name={user} onChange={setavalue} />
    //         <p>{user}</p>
    //         <button className="btn btn-outline-success" onClick={printavalue}>Get a Value</button>
    //     </>
    // );

    const[studentdetails,setStudentdetails]=useState({
        studentname:"Manoj",
        studentDept:"BCA",
        studentcity:"Namakkal",
        studentcgpa:89.9
    });

    return(
        <>
        <h1> Student Details</h1>
        <ol>
            <li>my name is :{studentdetails.studentname}</li>
            <li> my native place name is :{studentdetails.studentcity}</li>
            <li> my departmrnt name :{studentdetails.studentDept}</li>
            <li>{studentdetails.studentcgpa}</li>
        </ol>
        </>
    )
}