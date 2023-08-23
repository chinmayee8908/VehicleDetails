import React from 'react'
import { useLocation } from 'react-router';
import img1 from "../Asset/001.jpg"
import "../DashBoard/DashBoard.css"
const DetailPage = () => {
  const location = useLocation();
  const item = location.state.item;
  const tableData = location.state.tableData;
  console.log("passed--",item)
  console.log(tableData)
  return (
  <>
  <div className='Details-Container'>
   <img src={img1} alt="noimage"/>
   
    <p>Brand : {item.BrandName}</p>
    <p>Model : {item.BrandModel}</p>
   
  </div>
  <div>
      {tableData.filter((data) => data.BrandName === item.BrandName && data.BrandModel !== item.BrandModel).map((data,index) => {
        return(
          <div key={index}>
            <p>{data.BrandModel}</p>
            </div>
        )
      })}
  </div>
   
  </>
  
  )
}

export default DetailPage