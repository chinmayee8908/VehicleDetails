import React from 'react'
import "../HomePage/DetailsTable.css"
const DetailsTable = ({tableData,handleDeleteRow}) => {
  return (
    <table>
    <thead>
      <tr>
        <th>BrandName</th>
        <th>BrandModel</th>
        <th>year</th>
        <th>Description</th>
        <th>FuelType</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      { tableData && (tableData.map((item, index) => (
        <tr key={index}>
          <td>{item.BrandName}</td>
          <td>{item.BrandModel}</td>
          <td>{item.selectedYear}</td>
          <td>{item.Text}</td>
          <td>{item.radio}</td>
          <td><button onClick={handleDeleteRow}>Delet</button></td>
        </tr>
      )))}
    </tbody>
  </table>
  )
}

export default DetailsTable




// import React from 'react'

// const DetailsTable = () => {
//   const storedData = localStorage.getItem('myDataArray');
//   const initialData = storedData ? JSON.parse(storedData) : [];
//   return (
  
//      <div style={{display:'flex',justifyContent:'center'}}>
//     <table>
//       <thead> DetailsTable:-
//         <tr>
//         <th>BrandName</th>
//         <th>BrandModel</th>
//         <th>Year</th>
//         <th>Description</th>
//           <th>FuelCapacity</th>
//           <th>fuel Type</th>
//    <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
// {initialData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.BrandName}</td>
//               <td>{item.BrandModel}</td>
//               <td>{item.previousYears}</td>
//               <td>{item.Text}</td>
//               <td>{item.radio}</td>
//             </tr>
//           ))}
//       </tbody>
//     </table>
//     </div>
//   )
// }

// export default DetailsTable