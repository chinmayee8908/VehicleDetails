import React from 'react'
import "./DashBoard.css"
import { Image1, Image2, Image3,Image4,Image5,Image6 } from "./Images"
import { useLocation, useNavigate } from 'react-router';
const DashBoard = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const tableData = location.state;
  // console.log(tableData) 
 const handleDetailpage=(item)=>{
  console.log("Dashboard--- ",item)
    navigate("/detailsPage" ,{state:{item , tableData}})
 }  
  return (
    <>
   <div className="image-container">
        {tableData?.map((item, index) => (
          <div key={index} className="image-wrapper" onClick={()=>{handleDetailpage(item)}}>
           {index % 6 === 0 && <Image1 />}
          {index % 6 === 1 && <Image2 />}
          {index % 6 === 2 && <Image3 />}
          {index % 6 === 3 && <Image4 />}
          {index % 6 === 4 && <Image5 />}
          {index % 6 === 5 && <Image6 />}
           <h6 >Brand name:{item.BrandName}</h6>
           <h6>Model name:{item.BrandModel}</h6>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default DashBoard