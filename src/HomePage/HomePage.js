import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import carimg1 from "../Asset/carimg1.jpg"
import carimg2 from "../Asset/carimg2.jpg"
import carimg3 from "../Asset/carimg3.jpg"
import Form from 'react-bootstrap/Form';
import { AiOutlineClose } from 'react-icons/ai';
import "./Homepage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';
import DetailsTable from './DetailsTable';
import { Button } from 'bootstrap';
const HomePage = () => {
  const [tableData, setTableData] = useState([]);
  const [BrandName, setBrandName] = useState('');
  const [BrandModel, setBrandModel] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('');
  const [Text, setText] = useState()
  const [radio, setRadio] = useState()

  const navigate = useNavigate();

  const Dropdown1 = ['MarutiSuzuki', 'Mahindra', 'Ford', 'Renault'];
  const Dropdown2 = {
    'MarutiSuzuki': ['Ertiga', 'Swift', 'Baleno'],
    'Mahindra': ['XUV', 'Thar', 'Bolero', 'Scorpio'],
    'Ford': ['mustang', 'Ranger', 'Escort'],
    'Renault': ['Kwid', 'Kiger', 'Triber']

  };
  const handleDropdown1Change = (event) => {
    const selectedValue = event.target.value;
    setBrandName(selectedValue);
    setBrandModel('');
  };
  const handleDropdown2Change = (event) => {
    const selectedValue = event.target.value;
    setBrandModel(selectedValue);
  };
  const handleButtonClick = () => {
    setFormVisible(true);
  };
  const closeForm = () => {

    setFormVisible(false);
  };
  const currentYear = new Date().getFullYear();
  const yearsList = Array.from({ length: 10 }, (_, index) => currentYear - index);

  const handleYearChange = (event) => {
    console.log(event.target.value)
    setSelectedYear(parseInt(event.target.value));
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    if (value.length <= 250) {
      setText(value);

    }
  };
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setRadio(selectedValue);
  };

  const handleAddDetails = () => {
    saveDetails();
    setBrandModel('');
    setBrandName('');
    setSelectedYear('')
    setRadio('');
    setText('');
  }
  const newData = { BrandName, BrandModel, selectedYear, Text, radio };
  const saveDetails = () => {
    const existingDetails = JSON.parse(localStorage.getItem('Details')) || [];
    existingDetails.push(newData);

    localStorage.setItem('Details', JSON.stringify(existingDetails));
    setTableData(existingDetails.reverse());
  };
  useEffect(() => {
    const storedDetailsData = JSON.parse(localStorage.getItem('Details')) || [];
    setTableData(storedDetailsData.reverse());
  }, []);

  const handleDeleteRow = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData.reverse());
    localStorage.setItem('Details', JSON.stringify(newData));
  };
const handleDashboard = () => {
  console.log(tableData)
  navigate("/dashboard" , {state : tableData})
}
  return (
    <>
      <Navbar style={{ backgroundColor: 'whitesmoke', height: "40px" }}  >
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold", color: 'purple', fontSize: "30px" }}>Car Trade</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <button style={{
              width: "150px",
              height: "30px", backgroundColor: "whitesmoke", borderRadius: "2px"
            }} onClick={handleDashboard}>
              DASHBOARD
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" style={{ backgroundColor: 'lightgrey' }}>
        <Container>
          <Navbar.Brand href="#vehcledetail" onClick={handleButtonClick}>Add Vehicle Details</Navbar.Brand>
          <Nav className="me-auto">
            <label>Brand Name:</label>
            <select id="dropdown1" value={BrandName} onChange={handleDropdown1Change}>
              <option value="">Select an option</option>
              {Dropdown1.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label>Brand Model:</label>
            {BrandName && (
              <select id="dropdown2" value={BrandModel} onChange={handleDropdown2Change}>
                {Dropdown2[BrandName].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}

            <label >Select a year:</label>
            <select onChange={handleYearChange}>
              {yearsList.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

          </Nav>

        </Container>
      </Navbar>
      <Carousel style={{ position: 'absolute', width: "100%" }} >
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: 600 }}
            src={carimg1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: 600 }}
            src={carimg2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: 600 }}
            src={carimg3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* form container */}
      {isFormVisible && (
        <div className='Form-Container'>
          <Form >
            <span onClick={closeForm}><AiOutlineClose /></span>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleTextChange} value={Text}
                maxLength={250} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Engine Capacity</Form.Label>
              <Form.Control type="number" placeholder="Enter Fuel Capacity" />
            </Form.Group>
            <label>Fuel Type:</label>
            <label>
              Electricity
              <input
                type="radio"
                value="Electricity"
                checked={radio === 'Electricity'}
                onChange={handleOptionChange}
              />
            </label>
            <label>
              Petrol:
              <input
                type="radio"
                value="Petrol"
                checked={radio === 'Petrol'}
                onChange={handleOptionChange}
              />
            </label>
            <label>
              Diesel
              <input
                type="radio"
                value="diesel"
                checked={radio === 'diesel'}
                onChange={handleOptionChange}
              />
            </label>
            <div>
              <input type='checkbox' />All the aove details are true ...
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: "10px" }} onClick={handleAddDetails}><button>Add Details</button></div>
          </Form>

        </div>
      )}
      <div style={{ marginTop: "630px", display: 'flex', justifyContent: 'center' }}
      ><DetailsTable handleDeleteRow={handleDeleteRow} tableData={tableData} /></div>


    </>
  )
}

export default HomePage