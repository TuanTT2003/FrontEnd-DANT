import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrangChu from './routers/TrangChu';
import SanPham from './routers/SanPham';
import DetailSanPham from './routers/DetailSanPham';
import Home from './routers/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import LienHe from './routers/LienHe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='TrangChu' element={<TrangChu />} />
          <Route path='SanPham' element={<SanPham />} />
          <Route path='DetailSanPham' element={<DetailSanPham />} />
          <Route path='LienHe' element={<LienHe />} />
          <Route path='Login' element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
