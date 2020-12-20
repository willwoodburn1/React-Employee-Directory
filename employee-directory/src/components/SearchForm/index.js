import React from "react";
import "./style.css";

function SearchForm() {
    return (
        <section className="filter-container">
            <form className="filter-form form group">

                <div className="row">
                    <label className="col-md-12" htmlFor="name">Name:</label>
                    <input
                        // value=""
                        // onChange=""
                        name="name"
                        // list="breeds"
                        type="text"
                        className="form-control"
                        placeholder="Search Employee by their Name"
                        id="name"
                    />
                    <button className="btn btn-success"> Search </button>
                </div>

                <div className="row">

                    <label className="col-md-12" htmlFor="age">Age:</label>
                    <input
                        // value=""
                        // onChange=""
                        name="age"
                        // list="breeds"
                        type="text"
                        className="form-control"
                        placeholder="Filter Employees by their Age"
                        id="age"
                    />
                    <button className="btn btn-success"> Search </button>

                </div>


            </form>
        </section>
    )

}

export default SearchForm;