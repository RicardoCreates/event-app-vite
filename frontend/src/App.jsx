import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Events from "./Pages/Events.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events')
            .then(res => {
                setEvents(res.data.data);
            })
            .catch(err => {
                console.error('Es gab ein Problem mit der Anfrage!', err);
            });
    }, []);

    return (
        <>
           <Layout>
               <Routes>
                   <Route path="/" element={<Dashboard events={events}/>}/>
                   <Route path="/Events" element={<Events />}/>
               </Routes>
           </Layout>
        </>
    )
}
