import Card from "../Components/Card";
import Testimg from "../Images/people-festival.jpg"
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

export default function Events() {

    const [Events, setEvents] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost:80/eventmanagement/events.php').then(function (response) {
            console.log(response.data);
            setEvents(response.data);
        });
    }

    return (
        <section>
            <Navbar />
            <h1 className="text-center font-bold text-8xl mt-24">Events</h1>
            <article className="grid grid-cols-3 px-8 py-12">
                {Events.map((element) => {
                    return (
                        <Card
                            title={element.Event_Name}
                            desc={element.Event_Desc}
                            date={element.Event_Date}
                            img={Testimg}
                        />
                    );
                })}
            </article>
        </section>
    );
}