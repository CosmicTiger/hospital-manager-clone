// import React from 'react'
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Inicio</Link>
//                 </li>
//                 <li>
//                     <Link to="/account">Account</Link>
//                 </li>
//                 <li>
//                     <Link to="/diseases">Enfermedades</Link>
//                 </li>
//                 <li>
//                     <Link to="/cases">Ver casos</Link>
//                 </li>
//                 <li>
//                     <Link to="/hospitals">Ver hospitales</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default NavBar;

import { useMemo, useState } from 'react'
import { Layout, Typography } from 'antd'
import classNames from 'classnames'

import Menu from './Menu'
import ResponsiveHeader from './ResponsiveHeader'

import { PushpinFilled, PushpinOutlined } from '@ant-design/icons'

const { Title } = Typography

const SideNav = () => {
    const isDesktop = true
    const height = 100
    const [isCollapsed, setCollapsed] = useState(false)
    const [isPinned, setIsPinned] = useState(true)
    const [isHovered, setHovered] = useState(false)

    const onCollapse = (_collapsed = false, type) => {
        if (type === 'clickTrigger') {
            if (!isPinned) {
                setIsPinned(_collapsed)
            } else {
                setIsPinned(!_collapsed)
            }
        }
    }

    const onBreakpoint = (broken) => {
        if (!broken && !isPinned) {
            setCollapsed(true)
        } else {
            setCollapsed(broken)
        }
    }

    const onHover = {
        onMouseEnter() {
            if (!isPinned && isDesktop) {
                setCollapsed(false)
                setHovered(true)
            }
        },
        onMouseLeave() {
            if (!isPinned && isDesktop) {
                setCollapsed(true)
                setHovered(false)
            }
        },
    }

    const handleResponsiveOpen = () => {
        setCollapsed(!isCollapsed)
    }

    const pinTrigger = !isPinned ? (
        <PushpinOutlined className="text-xl" />
    ) : (
        <PushpinFilled className="text-xl" />
    )

    const menuWrapperStyle = {
        maxHeight: isDesktop ? `${height - 70 - 48}px` : '100vh',
        overflow: 'overlay',
    }

    // NOTE: Breakpoint "lg" is equal to 992px
    return (
        <>
            <div
                className={classNames(
                    'sidenav__backshadow',
                    !isPinned && isDesktop ? 'block' : 'hidden'
                )}
            />
            <button
                className={classNames('sidenav__bg', {
                    'sidenav__bg-visible':
                        (!isPinned && isHovered && !isCollapsed && isDesktop) ||
                        (!isCollapsed && !isDesktop),
                })}
                onClick={!isDesktop ? handleResponsiveOpen : undefined}
            />
            <ResponsiveHeader handleOpen={handleResponsiveOpen} />
            <Layout.Sider
                breakpoint="lg"
                className={classNames('sidenav', {
                    sidenav_responsive: !isDesktop,
                    'absolute h-full': !isPinned && isDesktop,
                })}
                collapsedWidth={isDesktop ? '80' : '0'}
                zeroWidthTriggerStyle={{ display: 'none' }}
                collapsed={isCollapsed}
                collapsible={isDesktop}
                onBreakpoint={onBreakpoint}
                onCollapse={onCollapse}
                onMouseEnter={onHover.onMouseEnter}
                onMouseLeave={onHover.onMouseLeave}
                trigger={pinTrigger}
                width={264}
            >
                <div className={classNames('sidenav__logo', { hidden: !isDesktop })}>
                    <div>
                    </div>
                    <Title
                        level={1}
                        className={classNames('sidenav__title', {
                            'sidenav__title-collapsed': !isPinned,
                        })}
                    >
                        Brevetech
                    </Title>
                </div>
                {/* minus 70px for the header height and minu 48px for the bottom pin button height */}
                <div style={menuWrapperStyle}>
                    <Menu />
                </div>
            </Layout.Sider>
        </>
    )
}

export default SideNav

