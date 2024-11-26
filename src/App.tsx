import './App.css'
import Accordion from "./components/accordian/Accordion.tsx";
// import RandomColorGenerator from "./components/random-color-generator/RandomColorGenerator.tsx";
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {

    // const router = createBrowserRouter([]);

    return (
        <>
            <Navbar/>
            <Accordion/>
            {/*<RandomColorGenerator/>*/}
        </>
    )
}

export default App
