import  './MycssFile.css'
export let StudentDetails=()=>
{
    const anothercss={backgroundColor:'red'}
    return(
        <>
        <table style={anothercss}>
            <thead id="Headers">
                <tr>
                    <th>S.no</th>
                    <th>StudentName</th>
                    <th>StudentDepartment</th>
                    <th>StudentAddress</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Manojkumar</td>
                    <td>BCA</td>
                    <td>Salem</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Shiyam</td>
                    <td>BCA</td>
                    <td>Namakkal</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Vineth</td>
                    <td>BE</td>
                    <td>Namakkal</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}