import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import Music from './routes/Music';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/music" element={<Music />} />
        <Route path="/hello" element={<h1>hello</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
