import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Dashboard,Register,Landing,Error,Blog,Event,Past,Company,CP,Login } from "./pages";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (
  <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/" element={<Landing/>}/>
    <Route path="/*" element={<Error/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/events" element={<Event/>}/>
    <Route path="/past-events" element={<Past/>}/>
    <Route path="/companies" element={<Company/>}/>
    <Route path="/company-page" element={<CP/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>

  );
}

export default App;