import { Routes,Route } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { MainSection } from "./components/sidebar/mainSection/MainSection";

import "./App.css"

function App() {
  return (
    <>
   <div className="Layout">
    <MainSection/>
    <Home/>
{/* <h1>LongShort-AI</h1> */}
{/* <Routes>
  <Route path='/' element={<MainSection/>} />
         
</Routes> */}


   </div>
   </>
  );
}

export default App;
