import './App.css'
import Accordion from "./components/accordian/Accordion.tsx";
// import RandomColorGenerator from "./components/random-color-generator/RandomColorGenerator.tsx";
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import RandomColorGenerator from "./components/random-color-generator/RandomColorGenerator.tsx";

function App() {

    // const router = createBrowserRouter([]);

    return (
        <>
            <Navbar/>
            <div key='container'>
                <Routes>
                    <Route path='/accordion' element={<Accordion/>}/>
                    <Route path='/rcg' element={<RandomColorGenerator/>}/>
                </Routes>
            </div>
            {/*<RandomColorGenerator/>*/}
        </>
    )
}

export default App
