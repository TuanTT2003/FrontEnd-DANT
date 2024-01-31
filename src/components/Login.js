import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DangNhap from './DangNhap';
import DangKy from './DangKy';
const Login = () => {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Đăng Nhập', value: '1' },
        { name: 'Đăng ký', value: '2' },
    ];
    return (
        <div className="d-flex justify-content-center">

            <div className="bg-light my-5 rounded  " style={{ width: 840, height: 439 }}>
                <>
                    <ButtonGroup className='border border-0 ' style={{ width: 840, height: 70 }} >
                        {radios.map((radio, idx) => (
                            <ToggleButton className='fs-4 fw-bold pt-3'
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-dark' : 'outline-dark'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </>
                
            </div>
        </div>
    )
}
export default Login;