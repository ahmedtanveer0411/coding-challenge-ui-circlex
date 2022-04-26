import React from 'react'
import { Routes, Route } from "react-router-dom";

import ClaimForm from './components/ClaimForm';
import Review from './components/Review';
import Success from './components/Success';

function App() {
    return (
        <Routes>
            <Route path="/" element={<ClaimForm />} />
            <Route path="review" element={<Review />} />
            <Route path="success" element={<Success />} />
        </Routes>
    )
}

export default App