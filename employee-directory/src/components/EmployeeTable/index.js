import React, { Component } from "react";
import TableHeading from "../TableHeadings";
import EmployeeData from "../EmployeeData";
import SearchForm from "../SearchForm";
// import API from "../utils/API";

class EmployeeTable extends Component {

    // state = {
    //     users: []
    // }

    // componentDidMount() {
    //     this.findUsers()
    // }

    // findUsers = query => {
    //     API.search(query)
    //         .then(res => this.setState({ users: res.data }))
    // }

    // componentWillMount() {
    //     fetch("https://randomuser.me/api/?results=50")
    //         .then(response => {
    //             this.setState({
    //                 users: response.results
    //             })
    //         })
    // }

    // handleInputChange = event => {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // searchEmployees = query => {
    //     API.search(query)
    //         .then(res => this.setState({ results: res.data.data }));
    // }



    render() {
        return (
            <div>
                <SearchForm />
                <TableHeading />
                <EmployeeData
                // image={this.state.users.picture.medium}
                // name={this.state.users.name}
                // dob={this.state.users.dob.date}
                // email={this.state.users.email}
                // age= {this.state.users.dob.age}
                />
            </div>

        )
    }
}
export default EmployeeTable;