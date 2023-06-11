import AddUser from "./component/AddUser";
import Dashboard from "./component/Dashboard";
import Pending from "./component/Pending";
import Profile from "./component/Profile";
import Sidebar from "./component/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Task from "./component/Task";
import { useState } from "react";
import AddProfile from "./component/AddProfile";
function App() {
  let [users, setUsers] = useState([
    {
      name: "krishna",
      email: "krissurya1@gmail.com",
      mobile: "9578675765",
      dob: "1998-06-26",
    },
    {
      name: "udesh",
      email: "udesh1@gmail.com",
      mobile: "9659654968",
      dob: "1998-10-16",
    },
    {
      name: "deepan",
      email: "deepan@gmail.com",
      mobile: "9587642315",
      dob: "1998-04-24",
    },
    {
      name: "karthik",
      email: "karthik@gmail.com",
      mobile: "8668151140",
      dob: "1998-06-17",
    },
  ])

  let [user, setUser] = useState([
    {
      name: "krishna",
      uname: "krishna",
      city: "madurai",
      state: "tamilnadu",
      zip: "625014"
    }
  ])

  return <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers} />} />
          <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/profile" element={<Profile user={user} setUsers={setUser} />}/>
          <Route path='/addprofile' element={<AddProfile user={user} setUsers={setUser}/>} />
          <Route path="/edit-profile/:id" element={<AddProfile user={user} setUsers={setUser} />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<Navigate to='/dashboard' />} />

        </Routes>
      </div >
    </BrowserRouter>
  </>
}

export default App;

