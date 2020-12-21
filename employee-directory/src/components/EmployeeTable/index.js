import React, { Component } from "react";
import EmployeeData from "../EmployeeData";
import SearchForm from "../SearchForm";
import API from "../../utils/API"

class EmployeeTable extends Component {

    state = {
        results: [],
        search: ""
    }

    componentDidMount() {
        this.findUsers()
    }

    findUsers = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.results }))
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.findUsers(this.state.search);
    }

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <EmployeeData
                    results={this.state.results}
                />
            </div>

        )
    }
}
export default EmployeeTable;