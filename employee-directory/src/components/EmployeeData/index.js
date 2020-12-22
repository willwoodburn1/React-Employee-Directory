import React from "react";

export default function EmployeeData({ results, headings, handleSort }) {
    return (
        <div className="table-responsive">
            <table className="table">

                <thead className="thead-dark">
                    <tr>
                        {headings.map(({ name, text }) => (
                            <th style={{ cursor: 'pointer' }} key={name} scope="col" onClick={
                                () => {
                                    handleSort(name.toLowerCase())
                                }
                            }>{text}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {results.map(result => (
                        <tr key={result.login.uuid}>
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
};