import React, { useState } from 'react';
import { Dialog, TextField, Button, Snackbar, Grid } from '@mui/material';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from "react-icons/io";

const MyFormModal = ({isOpen, setIsOpen}) => {
  const [formData, setFormData] = useState({
    id: '',
    date: '',
    customer: '',
    amount: '',
    description: '',
    price: '',
    total: '',
    paid: '',
    debt: '',
    addtax: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log(formData);
    // For demonstration purposes, let's assume a successful submission
    clearInputs()
    setSubmitted(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSubmitted(false);
  };

  const displaySuccessMessage = () => {
    if(!submitted) return ;
    return (
      <>
      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          <div className="flex items-center">
            <FaRegCheckCircle className="text-green-500 mr-2" />
            <span className="block sm:inline">Form submitted successfully!</span>
          </div>
        }
      />
      </>
    );
  };

  const renderFormInputs = () => {
    return Object.keys(formData).map((key) => (
        <Grid item xs={12} sm={6} key={key}>
        <TextField
          label={key}
          value={formData[key]}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          variant="outlined"
          fullWidth
        />
      </Grid>
    ));
  };

  const clearInputs = () => {
    setFormData({
      id: '',
      date: '',
      customer: '',
      amount: '',
      description: '',
      price: '',
      total: '',
      paid: '',
      debt: '',
      addtax: '',
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setIsOpen(true);
          setSubmitted(false); // Reset submitted status on modal open
        }}
      >
        Open Modal
      </Button>
      <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      fullWidth
      maxWidth="md" // Adjust as needed
      PaperProps={{ style: { width: '90%', maxHeight: '90vh', overflowY: 'auto' } }}
    >
        <button
          onClick={() => setIsOpen(false)}
          className="mt-3 mx-3 text-xl  flex justify-center items-center self-end"
          style={{ borderRadius: '50%', width: '40px', height: '40px', minWidth: 'auto' }}
        >
        <IoIosCloseCircleOutline className='text-rose-800' />
        </button>
      {displaySuccessMessage()}
      <form onSubmit={handleSubmit} className="p-4">
        <Grid container spacing={2} className='pb-8'>
          {renderFormInputs()}
        </Grid>
        <Button type="submit" variant="contained" color="success" className="mt-3">
          Submit
        </Button>
      </form>
    </Dialog>
    </div>
  );
};

export default MyFormModal;
