// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    <Navbar home='Home' about='About Us' contact='Contact Us'/>
    <div className="container col-8">
    <TextForm />
    </div>
    </>
  );
} 

export default App;
