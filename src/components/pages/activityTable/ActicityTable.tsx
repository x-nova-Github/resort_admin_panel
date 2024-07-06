import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Dialog } from '@material-tailwind/react';

import Layout from '../../layout/Layout';
import { api } from '../../../utils/api';
import { Button } from '@material-tailwind/react';
import AddActivityForm from '../../addActivityForm/AddActivityForm';

const ActivityTable = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(!open);
  const [colDefs, setColDefs] = useState<any>([
    { field: "name" },
    { field: "description" },
    { field: "duration" },
    { field: "price" }
  ]);
  const [rowData, setRowData] = useState([]);

  const fetchActivityDetails = async () => {
    try {

      const response = await api.activity.getAllActivity()
      console.log("response====>", response);
      setRowData(response)
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  // 

  useEffect(() => {


    fetchActivityDetails();
  }, []);






  return (
    <Layout>

      <div className=' p-10' data-dialog-backdrop="dialog" data-dialog-backdrop-close="true">
        <h2 className='text-2xl text-green-600'>Bookings Details</h2>

        <Button data-ripple-light="true" onClick={handleOpen} data-dialog-target="dialog">Add Activity</Button>
        <Dialog open={open} handler={handleOpen}>

          <AddActivityForm handleclose={handleClose} />
        </Dialog>



        <div
          className="ag-theme-quartz mt-3 " // applying the grid theme
          style={{ height: 300, width: 700, overflowX: "auto" }} // the grid will fill the size of the parent container
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

export default ActivityTable;
