import React from 'react';
import './App.scss';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Book from './pages/book';
import Dashboard from './pages/dashboard';
import NotFound from './pages/nopage';
import {BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  let isAuth = true; //localStorage.getItem('access_token');

  if(!isAuth) {
    return <Navigate to='/'/>
  }
  return <Outlet/>
}

export default function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Public Route */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          {/* Protected Route */}
          <Route element={<RequireAuth/>}>
            <Route path='/book' element={<Book/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
          
          {/* Not Found Page */}
          <Route path='*' element={<NotFound/>}/>

        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}
