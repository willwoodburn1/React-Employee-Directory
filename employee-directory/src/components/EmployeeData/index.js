import React from "react";


function EmployeeData(props) {



    return (
        <div className="table-responsive">
            <table className="table">

                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td>EMPLOYEE IMAGE </td>
                        <td>EMPLOYEE NAME </td>
                        <td>EMPLOYEE DOB</td>
                        <td>EMPLOYEE EMAIL</td>
                        <td>EMPLOYEE AGE</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default EmployeeData;