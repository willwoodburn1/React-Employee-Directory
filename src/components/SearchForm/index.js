import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <section className="filter-container">
            <form className="filter-form form group">

                <div className="row">
                    <label className="col-md-12">Name:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.name}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Search Employee by their Name"
                        id="name"
                    />
                    <button onClick={props.handleFormSubmit} name="searchName" className="btn btn-success"> Search </button>
                </div>

                <div className="row">

                    <label className="col-md-12">Age:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.age}
                        name="age"
                        type="text"
                        className="form-control"
                        placeholder="Filter Employees by their Age"
                        id="age"
                    />
                    <button onClick={props.handleFormSubmit} name="searchAge" className="btn btn-success"> Search </button>

                </div>


            </form>
        </section>
    )

}

export default SearchForm;