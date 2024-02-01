import Header from '../../routers/routerOnline/Header';
import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import '../../styles/TrangChu.scss';
import Footer from '../../routers/routerOnline/Footer';
import { Helmet } from "react-helmet";

// import './App.scss';
function App() {
  return (

    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SneakerCentral</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
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
    </>

  );
}

export default App;
