import "./App.css";
import Header from "./Components/Header";
import Address from "./Components/Address";
import EditProfile from "./Components/EditProfile";
//import Profile from "./Components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./Components/UserList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/address' element={<Address />} />
          <Route path='/edit' element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
