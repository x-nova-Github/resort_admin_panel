import  { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import axios from 'axios';

const DataTable = () => {
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);
    const [rowData, setRowData] = useState([
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);
    
    // 

    // useEffect(() => {
    //     const fetchUserDetails = async () => {
    //         try {
    //             const response = await axios.get(`https://qr-attendance-be.onrender.com/api/v1/attendence/get-present`,{
    //                 params:{
    //                     attendanceStatus:true
    //                 }
    //             }); // Adjust the URL as necessary
    //             if (response.data.result) {
    //                 setRowData(response.data.result.map((user: { username: any; attendanceStatus: any; userId: any; role:any; }) => ({
    //                     username: user.username,
    //                     attendanceStatus: user.attendanceStatus ? 'Yes' : 'No',
    //                     userId: user.userId,
    //                     role: roleMap[Number(user.role)] || 'Unknown'
    //                 })));
    //             }
    //         } catch (error) {
    //             console.error('Error fetching user details:', error);
    //         }
    //     };

    //     fetchUserDetails();
    // }, []);






    return (
        <>

        <h2 style={{marginTop:"5rem",color:"whitesmoke"}}>Bookings Details</h2>
        
           <div
            className="ag-theme-quartz" // applying the grid theme
            style={{ height:"100vh",width:"100vw",  overflowX:"auto" }} // the grid will fill the size of the parent container
        >   

            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
        </>
     
    );
};

export default DataTable;
