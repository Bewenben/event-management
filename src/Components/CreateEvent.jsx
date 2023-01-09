import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

export default function CreateEvent() {

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/eventmanagement/createevent.php', inputs).then(function(response){
            console.log(response.status);
        });
        // console.log(inputs);
    }

    return (
        <section className='pb-8'>
            <p className='px-16 font-bold text-4xl'>Create Event</p>
            <form onSubmit={handleSubmit} className='grid grid-cols-3 gap-10 px-16'>
                <div className="form__group field">
                    <input required="" placeholder="Event Name" className="form__field" type="Name" onChange={handleChange} name="EventName"></input>
                    <label className="form__label" htmlFor="Event Name">Event Name</label>
                </div>
                <div className="form__group field">
                    <input required="" placeholder="Event Description" className="form__field" type="Text" onChange={handleChange} name="EventDescription"></input>
                    <label className="form__label" htmlFor="Name">Event Description</label>
                </div>
                <div className='flex justify-center items-end'>
                <button className="buttonsign text-center">
                            CREATE AN EVENT
                        </button>
                </div>
            </form>
        </section>
    );
}