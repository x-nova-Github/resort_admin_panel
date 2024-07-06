import  { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import Layout from '../../layout/Layout';
import { api } from '../../../utils/api';


const BookingList = () => {
  const [colDefs, setColDefs] = useState<any>([
    { field: "user_name", headerName: "User Name" },
    { field: "user_phone", headerName: "Phone Number" },
    { field: "user_mail", headerName: "Email" },
    { field: "checkInDate", headerName: "Check-In Date" },
    { field: "totalPrice", headerName: "Total Price" },
    { field: "checkOutDate", headerName: "Check-Out Date" },
    { field: "guestCount", headerName: "Guest Count" },
    { field: "status", headerName: "Status" },
    { field: "roomObjectId.name", headerName: "Room Name" },
]);
    const [rowData, setRowData] = useState<any>([]);

            const fetchBookingDetails = async () => {
            try {

              const response=await api.bookings.getBookingList()
              console.log("bookingslistresponse====>",response);
              setRowData(response)
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
    
    // 

    useEffect(() => {


      fetchBookingDetails();
    }, []);






    return (
        <Layout>
<div className='p-10'>


         
<h2 className='text-2xl text-green-600'>Bookings Details</h2>
           <div 
            className="ag-theme-quartz mt-3  " // applying the grid theme
            style={{ height:300,width:"100%", overflowX:"auto" }} // the grid will fill the size of the parent container
        >   
        

            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
        </div>
      

     
        </Layout>
     
    );
};

export default BookingList;
