import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Events from "./Pages/Events.jsx";

export default function App() {
    return (
        <>
           <Layout>
               <Routes>
                   <Route path="/" element={<Dashboard/>}/>
                   <Route path="/Events" element={<Events />}/>
               </Routes>
           </Layout>
        </>
    )
}
