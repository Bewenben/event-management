import React from 'react';
import Profileimg from "../Images/user.png"
import Settings from "../Images/setting.png"

export default function AccountHeader(props) {

    return (
        <section className='flex justify-between h-24'>
            <div className='flex'>
                <img src={Profileimg} alt="Profile" />
                <span className='flex justify-center items-center ml-4 font-bold text-4xl'>{props.Name}</span>
            </div>
            <div className='flex'>
                <img src={Settings} alt="Settings" />
                <span className='flex justify-center items-center ml-4 font-bold text-4xl'>Settings</span>
            </div>
        </section>
    );
}