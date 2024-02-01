import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/online/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './routers/routerOnline/Home';
import TrangChu from './routers/routerOnline/TrangChu';
import SanPham from './routers/routerOnline/SanPham';
import DetailSanPham from './routers/routerOnline/DetailSanPham';
import LienHe from './routers/routerOnline/LienHe';
import AppOffline from './views/offline/AppOffline';
import BanHang from './routers/routerOffline/BanHang';
import DonHang from './routers/routerOffline/DonHang';
import SanPhamOffline from './routers/routerOffline/SanPhamOffline';
import GiamGia from './routers/routerOffline/GiamGia';
import KhachHang from './routers/routerOffline/KhachHang';
import NhanVien from './routers/routerOffline/NhanVien';
import KichCo from './routers/routerOffline/KichCo';
import MauSac from './routers/routerOffline/MauSac';
import ChatLieu from './routers/routerOffline/ChatLieu';
import ThuongHieu from './routers/routerOffline/ThuongHieu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='SC-Online' element={<App />}  >
          <Route index element={<Home />} />
          <Route path='/SC-Online/TrangChu' element={<TrangChu />} />
          <Route path='/SC-Online/SanPham' element={<SanPham />} />
          <Route path='/SC-Online/DetailSanPham' element={<DetailSanPham />} />
          <Route path='/SC-Online/LienHe' element={<LienHe />} />
          <Route path='/SC-Online/Login' element={<Home />} />
        </Route>
        <Route path='SC-Offline' element={<AppOffline />}  >
          <Route path='/SC-Offline/ban-hang' element={<BanHang />} />
          <Route path='/SC-Offline/don-hang' element={<DonHang />} />
          <Route path='/SC-Offline/san-pham' element={<SanPhamOffline />} />
          <Route path='/SC-Offline/giam-gia' element={<GiamGia />} />
          <Route path='/SC-Offline/khach-hang' element={<KhachHang />} />
          <Route path='/SC-Offline/kich-co' element={<KichCo />} />
          <Route path='/SC-Offline/mau-sac' element={<MauSac />} />
          <Route path='/SC-Offline/chat-lieu' element={<ChatLieu />} />
          <Route path='/SC-Offline/thuong-hieu' element={<ThuongHieu />} />
          <Route path='/SC-Offline/nhan-vien' element={<NhanVien />} />


        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
