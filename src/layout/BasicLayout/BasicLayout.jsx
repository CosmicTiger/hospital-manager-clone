import { Suspense, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import classNames from 'classnames'

// import { Breadcrumb } from '@components/Breadcrumb'
import SideNav from '../../components/SideNav'
import Spinner from '../../components/Spinner'
// import { useWindowSize } from '@utils'

const { Header, Footer, Content } = Layout

const BasicLayout = () => {

    const isDesktop = true

    return (
        <Layout className={classNames('admin-layout', { 'flex-col': !isDesktop })}>
            <Layout
                className={classNames('admin-layout__main', { 'w-full': !isDesktop })}
            >
                <Header className="admin-layout__header">
                </Header>
                <Content style={{ overflow: 'auto' }}>
                    {/* <Breadcrumb /> */}
                    <Suspense
                        fallback={
                            <div className="flex justify-center items-center h-full">
                                <Spinner snake size="large" />
                            </div>
                        }
                    >
                        <Outlet />
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout
