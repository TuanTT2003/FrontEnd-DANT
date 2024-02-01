import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import LogoSC from '../../assets/images/LogoSC.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


import {
    TableOutlined,
    UserOutlined,
    TagsOutlined,
    ShoppingOutlined,
    PoweroffOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, path, children) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//         path,
//     };
// }
// const items = [
//     getItem('Bán Hàng', '1', <ShoppingCartOutlined />, '/tuan'),
//     getItem('Đơn Hàng', '2', <ShoppingOutlined />, '/adf'),
//     getItem('Sản Phẩm', 'sub1', <TableOutlined />, '/adfafd', [
//         getItem('Sản phẩm ', '3'),
//         getItem('Kích cỡ ', '4'),
//         getItem('Màu sắc ', '5'),
//         getItem('Chất liệu', '6'),
//         getItem('Thương hiệu', '7'),

//     ]),
//     getItem('Giảm giá', '8', <TagsOutlined />),
//     getItem('Khách hàng', '9', <UserOutlined />),
//     getItem('Nhân viên', '10', <UserOutlined />),
//     getItem('Đăng xuất', '11', <PoweroffOutlined />),
// ];
const AppOffline = () => {
    const navgate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',

            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <div
                    style={{
                        background: colorBgContainer,
                    }}>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                </div>
                <Menu theme='light' defaultSelectedKeys={['1']} mode="inline"
                    onClick={({ key }) => {
                        navgate(key);
                    }}
                    items={[
                        { label: "Bán hàng", key: 'ban-hang', icon: <ShoppingCartOutlined /> },
                        { label: "Đơn hàng", key: 'don-hang', icon: <ShoppingOutlined /> },
                        {
                            label: "Sản phẩm", key: 'san-pham', icon: <TableOutlined />, children: [
                                { label: "Sản phẩm", key: 'san-pham' },
                                { label: "Kích cỡ ", key: 'kich-co' },
                                { label: "Màu sắc", key: 'mau-sac' },
                                { label: "Chất liệu", key: 'chat-lieu' },
                                { label: "Thương hiệu", key: 'thuong-hieu' },
                            ]
                        },
                        { label: "Giảm giá", key: 'giam-gia', icon: <TagsOutlined /> },
                        { label: "Khách hàng", key: 'khach-hang', icon: <UserOutlined /> },
                        { label: "Nhân viên", key: 'nhan-vien', icon: <UserOutlined /> },
                        { label: "Đăng xuất", key: 'dang-xuat', icon: <PoweroffOutlined /> }


                    ]}
                >

                </Menu>
            </Sider>
            <Layout>
                <Header

                    style={{
                        padding: 0,
                        background: colorBgContainer,


                    }}
                >
                    <Image src={LogoSC}
                        style={{
                            width: '130px',
                        }} />
                    <span className='name-shop fs-3 fw-bold' >&nbsp;SC Shop</span>
                </Header>


                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />

                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AppOffline;