import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Login, Signup, NotFound } from '../components';


const Routing = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routing