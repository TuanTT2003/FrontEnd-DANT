import BannerDangNhap from '../../assets/images/Banner-Login.png';
import Login from '../../components/Login';

const Home = () => {
    return (
        <div className="nem py-4" >
            <div className="container border rounded border border-white bg-white " style={{ backgroundImage: `url(${BannerDangNhap}`, height: 534, width: 1240 }}>
                <Login />
            </div>
        </div>
    )
}
export default Home;