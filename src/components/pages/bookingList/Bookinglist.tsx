import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import Layout from '../../layout/Layout';
import { api } from '../../../utils/api';




const BookingList = () => {
  const [setSelectedBooking] = useState<any>(null);
  
  const [colDefs] = useState<any>([
    { field: "user_name", headerName: "User Name" },
    { field: "user_phone", headerName: "Phone Number" },
    { field: "user_mail", headerName: "Email" },
    { field: "checkInDate", headerName: "Check-In Date" },
    { field: "totalPrice", headerName: "Total Price" },
    { field: "checkOutDate", headerName: "Check-Out Date" },
    { field: "guestCount", headerName: "Guest Count" },
    { field: "status", headerName: "Status" },
    { field: "roomObjectId.name", headerName: "Room Name" },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: (params: any) => {
        console.log("params-====>", params.data);


        return (
          <button
            onClick={() => handleDetailsClick(params.data)}
            className="text-blue-500 hover:underline "
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>

          </button>
        )

      }
    },
  ]);
  const handleDetailsClick = (data: any) => {
    console.log("data is here===>", data);

    setSelectedBooking(data);
    
  };
  
  const [rowData, setRowData] = useState<any>([]);

  const fetchBookingDetails = async () => {
    try {

      const response = await api.bookings.getBookingList()
      console.log("bookingslistresponse====>", response);
      setRowData(response)


    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };


  

  useEffect(() => {


    fetchBookingDetails();
  }, []);






  return (
    <Layout>
      <div className='p-10'>



        <h2 className='text-2xl text-green-600'>Bookings Details</h2>
        <div
          className="ag-theme-quartz mt-3  " // applying the grid theme
          style={{ height: 300, width: "100%", overflowX: "auto" }} // the grid will fill the size of the parent container
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
