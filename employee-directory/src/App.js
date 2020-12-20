import React from "react";
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import EmployeeTable from "./components/EmployeeTable";


function App() {
  return (
    <>
      <Wrapper>
        <Title> Employee Directory </Title>

        <EmployeeTable />

        <Footer />

      </Wrapper>
    </>
  );
}

export default App;
