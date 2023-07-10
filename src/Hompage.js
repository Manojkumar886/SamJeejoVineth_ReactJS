 import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { list } from './TemporaryValues';
import { RegistrationForm } from './EmployeeRegistrationForm';
import { ReadingaEmployeedetail } from './ReadinganPage';


export const Homepage1=()=>
{
    const [temparray,setTemparray]=useState([]);
    const [createview,setCreateview]=useState(false);
    const [readview,setReadview]=useState(false);
    const [pos,setPos]=useState(0);

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
            {
                (createview)?
                <>
                <RegistrationForm/>
                <button className='btn btn-outline-secondary'
                onClick={
                    ()=>
                    {
                        setCreateview(false)
                    }
                }
                >
                    back
                </button>
                </>
                :
                (readview)?
                <>
                <ReadingaEmployeedetail ind={pos} />
                <button className=' btn btn-outline-secondary col-5 mt-5'
                onClick={
                    ()=>
                    {
                        setReadview(false)
                    }
                }
                >
                    back
                </button>
                </>
                :
                <>
                <button className='btn btn-outline-success'
                onClick={
                    ()=>
                    {
                        setCreateview(true)
                    }
                }
                >
                    Register new Employee Details
                </button>
                <div className='table-responsive-md mt-5'>
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
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            temparray.map((ele,index)=>
                            (
                                <tr>
                                    <td>{ele.empid}</td>
                                    <td>{ele.empname}</td>
                                    <td>{ele.empusername}</td>
                                    <td>{ele.emppassword}</td>
                                    <td>{ele.empdesignation}</td>
                                    <td>{ele.empexp}</td>
                                    <td>{ele.empsalary}</td>
                                    <td>
                                        <button className='btn btn-outline-warning'
                                        onClick={
                                            ()=>
                                            {
                                                setReadview(true)
                                                setPos(index)
                                            }
                                        }
                                        >
                                            Read
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
                </>
            }
        </div>
        </>
    );
}