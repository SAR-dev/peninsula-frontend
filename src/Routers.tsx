import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateOutlet } from './components/PrivateOutlet';
import Home from './pages/Home';

export default function Routers() {
  const [theme, setTheme] = useState<"ios" | "material">('ios');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
