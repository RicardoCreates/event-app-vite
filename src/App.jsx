import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";

export default function App() {
    return (
        <>
           <Layout>
               <Routes>
                   <Route path="/" element={<Dashboard/>}/>
               </Routes>
           </Layout>
        </>
    )
}
