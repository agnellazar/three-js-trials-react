import './App.css';
import { HomePageComponent } from './class-components/HomePage.component';
import { CustomizeComponent } from './class-components/Customize.component';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComponent/>}/>
        <Route path="/customize" element={<CustomizeComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
