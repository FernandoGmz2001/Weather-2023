import "./App.css";
import Navbar from "@/components/layout/Navbar";
// import NavbarAction from "@/components/layout/Navbar/components/NavbarAction";
import { NavbarAction, NavbarTitle, NavbarAvatar } from "./components/layout/Navbar/components/index";


function App() {
  return (
    <div className="main__container">
      <Navbar>
          <NavbarAction/>
          <NavbarTitle/>
          <NavbarAvatar/>
      </Navbar>
      <h1>Esta es la aplicacion principal</h1>  
    </div>
  );
}

export default App;
