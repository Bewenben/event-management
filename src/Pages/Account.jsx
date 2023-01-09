import React from 'react';
import Navbar from '../Components/Navbar';
import AccountHeader from '../Components/AccountHeader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AccountSettings from '../Components/AccountSettings';
import CreateEvent from '../Components/CreateEvent';

export default function Account() {

    const [data,SetData] = useState([]);

    useEffect(() => {
        getEmail();
    }, []);

    function getEmail() {
        axios.get(`http://localhost:80/eventmanagement/userdata.php/${localStorage.getItem("email")}`).then(function (response) {
            console.log(response.data);
            SetData(response.data);
        });
    }

    return (
        <section className='space-y-8'>
            <Navbar />
            <div className='p-16 mt-10 bg-gray-800'>
                <AccountHeader Name={data.Name}/>
            </div>
            <AccountSettings Name={data.Name} Email={data.Email} Address={data.Address}/>
            <CreateEvent />
        </section>
    );
}