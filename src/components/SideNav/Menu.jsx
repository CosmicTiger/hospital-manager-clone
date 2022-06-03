import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu as AntdMenu, Tag } from 'antd'
import {
    PRIVATE_CHARTS,
    PRIVATE_DASHBOARD,
    PRIVATE_TABLES,
} from '../../routes/app-router.routes'

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TableOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'

const { SubMenu, Item } = AntdMenu

const Menu = () => {
    const location = useLocation()
    const [activeKey, setActiveKey] = useState(location.pathname)

    useEffect(() => {
        setActiveKey(location.pathname)
    }, [location.pathname])

    return (
        <AntdMenu
            className="SideMenu"
            defaultSelectedKeys={[activeKey]}
            mode="inline"
            theme="dark"
            activeKey={activeKey}
            selectedKeys={[activeKey]}
        >
            <Item key={PRIVATE_DASHBOARD} icon={<DesktopOutlined />}>
                <Link to={PRIVATE_DASHBOARD}>Home</Link>
            </Item>

            <Item key={PRIVATE_CHARTS} icon={<PieChartOutlined />}>
                <Link to={PRIVATE_CHARTS}>Charts</Link>
            </Item>

            <Item key={PRIVATE_TABLES} icon={<TableOutlined />}>
                <Link to={PRIVATE_TABLES}>Tables</Link>
            </Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Item key="4">Tom</Item>
                <Item key="5">Bill</Item>
                <Item key="6">Alex</Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Item key="7">Team 1</Item>
                <Item key="8">Team 2</Item>
                <SubMenu key="sub3" title="Sub menu">
                    <Item key="9">Team 1</Item>
                    <Item key="10">Team 2</Item>
                </SubMenu>
            </SubMenu>

            <Item key="11" icon={<FileOutlined />}>
                <div
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    Files
                </div>
                <Tag color="#f50">¡Nuevo!</Tag>
            </Item>
        </AntdMenu>
    )
}

export default Menu
