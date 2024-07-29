
import React, { useState } from 'react';



import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/Report.css'
import TextField from '@mui/material/TextField';




const Report = () => {
  const [individualStartDate, setIndividualStartDate] = useState(null);
  const [individualEndDate, setIndividualEndDate] = useState(null);

  const [bulkStartDate, setBulkStartDate] = useState(null);
  const [bulkEndDate, setBulkEndDate] = useState(null);
  







 

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];



  return (
    <div className='body-shift'>
     
       
        
       
       <h1>Booking Page</h1>
 
       <div className="report-section">
         <h2>Hall Booking</h2>
         <div className="form-group">
           <label>Name</label>
           <TextField fullWidth variant="outlined" size="small"/>
         </div>
         <div className="form-group">
           <label>Phone No</label>
           <TextField fullWidth variant="outlined" size="small"/>
         </div>
         <div className="form-group">
           <label>Address</label>
           <TextField fullWidth variant="outlined" />
         </div>
         <div className="form-group">
           <label>Hall Location</label>
           <Select options={options} />
         </div>
         <div className="form-group">
           <label>Hall Name</label>
           <Select options={options} />
         </div>
         <div className="form-group">
           <label>Event Type</label>
           <Select options={options} />
         </div>
         <div className="form-group">
           <label>Start Date</label>
           <DatePicker selected={individualStartDate} onChange={date => setIndividualStartDate(date)} />
         </div>
         
         <div className="form-group">
           <label>End Date</label>
           <DatePicker selected={individualEndDate} onChange={date => setIndividualEndDate(date)} />
         </div>
         <div className="form-group">
           <label>Price: ₹1,00,000</label>
         </div>
         <button className="report-button">Book Now</button>
       </div>
 
       
       
       </div>
  
  
  );
};

export default Report;
