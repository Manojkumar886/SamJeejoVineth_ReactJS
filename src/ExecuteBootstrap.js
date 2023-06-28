import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let BootstrapExecution=()=>
{
    return(
        <>
        <div className="container">
            <p>
                Constructor:
                special type of method.which is used to initialize object.
                three rule:
                1.similar to method having same name as class name.
                2.doesnt have any return type.(void)(int,string)
                3.execute automatically when we are created object.
            </p>    
            <button className="btn btn-outline-primary text-dark col-6"> <i class="bi bi-airplane-fill"></i>Constructor</button>    
        </div>
        </>
    )
}