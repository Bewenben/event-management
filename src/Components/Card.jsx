import React from 'react';

export default function Card(props) {
    return (
        <div className="cardevent">
            <div className="card2event flex flex-col justify-between">
                <img src={props.img} className="rounded-t-[20px]" alt="EventImage" />
                <p className="font-bold text-4xl pl-3">{props.title}</p>
                <p className="pl-3">{props.desc.split(" ").slice(0, 25).join(" ") + " -...."}</p>
                <p className="font-bold pl-3 pb-3">Event Date: <span className='font-normal'>{props.date}</span></p>
            </div>
        </div>
    );
}