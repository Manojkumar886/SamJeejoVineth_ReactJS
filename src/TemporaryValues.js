let MyemployeeDetails=[
    {
        "empid":1,
        "empname":"Manoj",
        "empusername":"Maddy434",
        "emppassword":"Manojkumar12345567",
        "empdesignation":"JAVA FULL STACK DEVELOPER",
        "empexp":2,
        "empsalary":360000
    },
    {
        "empid":2,
        "empname":"Jeejo",
        "empusername":"JeejoChennai",
        "emppassword":"chennai600018",
        "empdesignation":"Trainer",
        "empexp":10,
        "empsalary":6000000
    },
    {
        "empid":3,
        "empname":"Shiyam",
        "empusername":"samsona",
        "emppassword":"samsalem23",
        "empdesignation":"JAVA FULL STACK DEVELOPER",
        "empexp":1,
        "empsalary":240000
    }
]

export const create=(obj)=>
{
    MyemployeeDetails.push(obj)
}

export const list=()=>
{
    return MyemployeeDetails;
}