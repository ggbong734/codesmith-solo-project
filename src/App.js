import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from './components/Home';
import { LoginForm } from './components/LoginForm';
import { RegistrationPage } from './components/RegistrationPage';


export const App = () => {
    const [username, setUsername] = useState('');
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm setUsername={setUsername} />}></Route>
                <Route path="/home" element={<Home username={username} />}></Route>
                <Route path="/register" element={<RegistrationPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
