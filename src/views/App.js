import Header from '../routers/Header';
import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import '../styles/TrangChu.scss';
import Footer from '../routers/Footer';
// import './App.scss';
function App() {
  return (
    <div className="App">
      <div className='app-header pt-5'>
        <Header />
      </div>
      <div className='app-content ' >
        <Outlet />
      </div>
      <div className='app-footer '>
        <Footer />
      </div>
    </div>
  );
}

export default App;
