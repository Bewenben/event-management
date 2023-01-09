import React from 'react';

export default function AccountSettings(props){
    return (
        <div>
            <p className='px-16 pb-8 font-bold text-4xl'>Account Settings</p>
            <div className='grid grid-cols-3 gap-10 px-16 '>
                <label htmlFor="Name">Name</label>
                <label htmlFor="Email">Email</label>
                <label htmlFor="Address">Address</label>
            </div>
            <div className='grid grid-cols-3 gap-10 px-16'>
                <div className="form__group field">
                    <input required="" placeholder="Name" className="form__field" type="Name"></input>
                    <label className="form__label" htmlFor="Name">{props.Name}</label>
                </div>
                <div className="form__group field">
                    <input required="" placeholder="Email" className="form__field" type="Email"></input>
                    <label className="form__label" htmlFor="Email">{props.Email}</label>
                </div>
                <div className="form__group field">
                    <input required="" placeholder="Address" className="form__field" type="Address"></input>
                    <label className="form__label" htmlFor="Address">{props.Address}</label>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-10 px-16 pt-10'>
                <label htmlFor="Name">Phone</label>
                <label htmlFor="Password">Password</label>
            </div>
            <div className='grid grid-cols-3 gap-10 px-16 pb-8'>
                <div className="form__group field">
                    <input required="" placeholder="Phone" className="form__field" type="phone"></input>
                    <label className="form__label" htmlFor="Phone">Phone</label>
                </div>
                <div className="form__group field">
                    <input required="" placeholder="Password" className="form__field" type="password"></input>
                    <label className="form__label" htmlFor="Password">Change Password</label>
                </div>
            </div>
        </div>
    );
}