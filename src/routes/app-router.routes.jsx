import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import PATHS_COLLECTIONS from './paths.routes'

import SuspenseHOC from '../components/SuspenseHOC'
import BasicLayout from '../layout'
import { concatSymbols } from '../utils/symbol.util'

const Home = lazy(() => import('../views/Home'))
// const Login = lazy(() => import('@views/Login'))
// const Error404 = lazy(() => import('@views/Error404'))
// const Error500 = lazy(() => import('@views/Error500'))
// const Tables = lazy(() => import('@views/Tables'))
// const Charts = lazy(() => import('@views/Charts'))

const {
    PRIVATE_PATHS: {
        DASHBOARD_BASE_PATH,
        USER_PATHS: { BASE_PATH, RESET_PASSWORD, USER_CONFIG },
        EXAMPLE_PATHS: { CHARTS, TABLES },
    },
    PUBLIC_PATHS: {
        BASE,
        USER_PATHS: { LOGIN, FORGOT_PASSWORD, REGISTER },
        CLIENT_ERRORS_PATHS: { NOT_FOUND, INTERNAL_SERVER_ERROR },
    },
} = PATHS_COLLECTIONS

export const PRIVATE_DASHBOARD = concatSymbols([BASE, DASHBOARD_BASE_PATH])
export const PRIVATE_USER = concatSymbols([PRIVATE_DASHBOARD, BASE_PATH])
export const PRIVATE_SETTINGS = concatSymbols([PRIVATE_DASHBOARD, USER_CONFIG])
export const PRIVATE_RESET_PASSWORD = concatSymbols([
    PRIVATE_DASHBOARD,
    RESET_PASSWORD,
])
export const PRIVATE_TABLES = concatSymbols([PRIVATE_DASHBOARD, TABLES])
export const PRIVATE_CHARTS = concatSymbols([PRIVATE_DASHBOARD, CHARTS])

export const PUBLIC_LOGIN = concatSymbols([BASE, LOGIN])
export const PUBLIC_REGISTER = concatSymbols([BASE, REGISTER])
export const PUBLIC_FORGOT_PASSWORD = concatSymbols([BASE, FORGOT_PASSWORD])

export const PAGE_NOT_FOUND = concatSymbols([BASE, NOT_FOUND])
export const SERVER_ERROR = concatSymbols([BASE, INTERNAL_SERVER_ERROR])

const appRoutes = [
    {
        path: '/',
        element: <Navigate to={PRIVATE_DASHBOARD} replace />,
    },
    {
        path: PRIVATE_DASHBOARD,
        element: <BasicLayout />,
        children: [
            { index: true, element: <Home /> }
        ],
    },
]

export default appRoutes

