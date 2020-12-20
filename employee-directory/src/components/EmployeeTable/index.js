import React from "react";
import TableHeading from "../TableHeadings";
import EmployeeData from "../EmployeeData";
import SearchForm from "../SearchForm";

class EmployeeTable extends React.Component {
    render() {
        return (
            <div>
                <SearchForm />
                <TableHeading />
                <EmployeeData />
            </div>

        )
    }
}
export default EmployeeTable;