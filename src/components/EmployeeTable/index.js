import React, { Component } from "react";
import EmployeeData from "../EmployeeData";
import SearchForm from "../SearchForm";
import API from "../../utils/API";

class EmployeeTable extends Component {
    state = {
        results: [],
        // We don't want to alter the original list, so keep another one called filteredResults
        filteredResults: [],
        search: {
            name: "",
            age: ""
        },
        order: 'descending'
    }

    headings = [
        { name: "image", text: "Image" },
        { name: "name", text: "Name" },
        { name: "location", text: "Location (City)" },
        { name: "email", text: "Email" },
        { name: "dob", text: "Age" }
    ]

    componentDidMount() {
        // When the page loads for the first time, load the users. We will only ever call this function once.
        this.findUsers()
    }

    // Keep a copy of the original in the filteredResults
    findUsers = () => API.search().then(res => this.setState({ results: res.data.results, filteredResults: res.data.results }))

    // Return the full name of the user
    getFullName = (result) => result.name.first + result.name.last;

    handleSort = (sortType) => {
        let sortedResults = this.state.filteredResults;
        let sortOrder = this.state.order === 'descending' ? 'ascending' : 'descending';

        // Sort the table
        switch (sortType) {
            case 'name':
                sortedResults = sortOrder === 'descending' ? sortedResults.sort((a, b) => this.getFullName(a).localeCompare(this.getFullName(b))) : sortedResults.sort((a, b) => this.getFullName(b).localeCompare(this.getFullName(a)))
                break;
            case 'dob':
                sortedResults = sortOrder === 'descending' ? sortedResults.sort((a, b) => a.dob.age - b.dob.age) : sortedResults.sort((a, b) => b.dob.age - a.dob.age)
                break;
            case 'email':
                sortedResults = sortOrder === 'descending' ? sortedResults.sort((a, b) => a.email.localeCompare(b.email)) : sortedResults.sort((a, b) => b.email.localeCompare(a.email));
                break;
            case 'location':
                sortedResults = sortOrder === 'descending' ? sortedResults.sort((a, b) => a.location.city.localeCompare(b.location.city)) : sortedResults.sort((a, b) => b.location.city.localeCompare(a.location.city));
                break;
            default:
                break;
        }

        this.setState(prevState => {
            return {
                ...prevState,
                order: sortOrder,
                filteredResults: sortedResults
            }
        })
    }

    // Handles the filtering based on the type. Updates the state 'filteredResults' and updates the UI
    handleFilterUsers = (type, value) => {
        // Depending on which form they clicked search, do different filter
        switch (type) {
            // Search by name: Look for full name if it includes the users search value AND if there is an actual search value. If there's none, use the original list
            case 'name':
                this.setState(prevState => {
                    return {
                        ...prevState,
                        filteredResults: value ? prevState.results.filter(result => this.getFullName(result).toLowerCase().includes(value.toLowerCase())) : prevState.results
                    }
                });
                break;
            // Search by age: Check if the user age is equal to the user search value (needs to be a number so a conversion is necessary) 
            case 'age':
                this.setState(prevState => {
                    return {
                        ...prevState,
                        filteredResults: value ? prevState.results.filter(result => result.dob.age === parseInt(value)) : prevState.results
                    }
                });
                break;
            default:
                break;
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState((prevState) => {
            return {
                ...prevState,
                search: {
                    [name]: value
                }
            }
        });

        // Send through the form name ('name' or 'age') and the value user searched
        this.handleFilterUsers(name, value);
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const { name } = event.target;

        // Here we grab the value from the state search instead
        this.handleFilterUsers(name, this.state.search[name]);
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
                    results={this.state.filteredResults}
                    headings={this.headings}
                    handleSort={this.handleSort}
                />
            </div>

        )
    }
}
export default EmployeeTable;