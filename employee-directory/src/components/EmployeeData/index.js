import React from "react";


function EmployeeData(props) {
    console.log(props)



    return (
        <div className="table-responsive">
            <table className="table">

                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location (City)</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>

                <tbody>
                    {props.results.map(result => (
                        <tr key={result.id}>
                            <td>
                                <img src={result.picture.medium} alt={`${result.name.first} ${result.name.last} pic`}>
                                </img>
                            </td>
                            <td>{`${result.name.first} ${result.name.last}`} </td>
                            <td>{result.location.city}</td>
                            <td>{result.email}</td>
                            <td>{result.dob.age}</td>

                        </tr>

                    ))}
                </tbody>

            </table>
        </div >
    )
}


export default EmployeeData;