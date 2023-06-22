import React from 'react';
import './Form.css';

const FormComponent = () => {
    return (
        <div className="form-container">
            <div className="background-image"></div>
            <form>
                <div className="form-row">
                    <div className="form-column">
                        <h4 className="form-heading">Car Brand</h4>
                       
                        <select className="dropdown">
                        <option value="" disabled selected>
                            Select Car Brand
                        </option>
                        </select>
                    </div>
                    <div className="form-column">
                        <h4 className="form-heading">Car Model</h4>
                        
                        <select className="dropdown">
                        <option value="" disabled selected>
                            Select Car Model
                        </option>
                        </select>
                    </div>
                    <div className="form-column">
                        <h4 className="form-heading">Manufacturing Year</h4>
                        <select className="dropdown">
                        <option value="" disabled selected>
                            Manfacturing Year
                        </option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <h4 className="form-heading">Currency Value</h4>
                        <select className="dropdown">
                        <option value="" disabled selected>
                           Currency Value
                        </option>
                        </select>
                    </div>
                    <div className="form-column">
                        <h4 className="form-heading" placeholder='fullname'>Full Name</h4>
                        <select className="dropdown">
                        <option value="" disabled selected>
                            Manfacturing Year
                        </option>
                        </select>
                    </div>
                    <div className="form-column">
                        <h4 className="form-heading">Phone No</h4>
                        <select className="dropdown">
                        <option value="" disabled selected>
                            Phone Number
                        </option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <h4 className="form-heading">Email</h4>
                        <select className="dropdown">
                        <option value="" disabled selected>
                            Email
                        </option>
                        </select>
                    </div>
                    {/* <div className="form-column">
                    <h4 className="form-heading">Row 3</h4>
                    <select className="dropdown">
                        Dropdown options for Row 3
                    </select>
                </div> */}
                    {/* <div className="form-column">
                    <h4 className="form-heading">Row 3</h4>
                    <select className="dropdown">
                        Dropdown options for Row 3
                    </select>
                </div> */}
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
