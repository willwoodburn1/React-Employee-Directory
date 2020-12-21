import React, { Component } from "react";
import EmployeeData from "../EmployeeData";
import SearchForm from "../SearchForm";
import API from "../../utils/API"

class EmployeeTable extends Component {

    state = {
        results: [],
        age: "",
        name: ""

    }

    componentDidMount() {
        this.findUsers()
    }

    findUsers = (searchType, searchValue) => {
        API.search()
            .then(res => {
                let filteredResults = res.data.results;

                if (searchType === "searchName") {
                    filteredResults = filteredResults.filter((result) => result["name"].name === searchValue)

                } else if (searchType ==="searchAge") {
                    filteredResults = filteredResults.filter((result) => result["dob"].age === searchValue);
                } 

                this.setState({ results: filteredResults })
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        const { name } = event.target;
        event.preventDefault();

        if (name === "searchName") {
            this.findUsers(name, this.state.name)
        } else if (name === "searchAge") {
            this.findUsers(name, this.state.age);
        } else {
            this.findUsers();
        }
    }

    render() {
        return (
            <div>
                <SearchForm
                    name={this.state.name}
                    age={this.state.age}
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