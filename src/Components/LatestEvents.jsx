import Card from "./Card";
import Testimg from "../Images/people-festival.jpg"
import { useState, useEffect } from "react";
import axios from "axios";

export default function LatestEvents() {

    const [Events, setEvents] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost:80/eventmanagement/latestevents.php').then(function (response) {
            console.log(response.data);
            setEvents(response.data);
        });
    }

    return (
        <section>
            <h1 className="text-center font-bold text-8xl">Latest Events</h1>
            <article className="flex items-center justify-around py-12">
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