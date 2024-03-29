import "./App.css";
import InfoNav from "./components/InfoNav";
import Interests from "./components/Interests";
import Login from "./components/Login";
import MiniNav from "./components/MiniNav";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import VerifyOtp from "./components/VerifyOtp";

function App() {
  return (
    <>
      <MiniNav />
      <Navbar />
      <InfoNav />
      {/* <Login />
      <SignUp /> */}
      {/* <Interests /> */}
      <VerifyOtp />
    </>
  );
}

export default App;
