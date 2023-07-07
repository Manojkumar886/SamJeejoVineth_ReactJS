 import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { list } from './TemporaryValues';


export const Homepage1=()=>
{
    const [temparray,setTemparray]=useState([]);

    const setavalue=()=>
    {
        setTemparray(list)
    }

    useEffect(()=>
    {
        setavalue()
    })

    return(
        <>
        <div className='container row justify-content-center'>
            <div className='table-responsive-md'>
                <table className='col-lg-8 col-md-10 col-sm-12 table table-striped p-3'>
                    <thead>
                        <tr>
                            <td>Employee ID</td>
                            <td>Employee NAME</td>
                            <td>Employee USERNAME</td>
                            <td>Employee PASSWORD</td>
                            <td>Employee DESIGNATION</td>
                            <td>Employee EXPERIENCE</td>
                            <td>Employee SALARY</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            temparray.map((ele)=>
                            (
                                <tr>
                                    <td>{ele.empid}</td>
                                    <td>{ele.empname}</td>
                                    <td>{ele.empusername}</td>
                                    <td>{ele.emppassword}</td>
                                    <td>{ele.empdesignation}</td>
                                    <td>{ele.empexp}</td>
                                    <td>{ele.empsalary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}