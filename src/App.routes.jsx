import { useRoutes } from 'react-router-dom'

import routesCollections from './routes'

const AppRouter = () => {
    console.log(routesCollections)
    const element = useRoutes(routesCollections.appRoutes)

    return element
}

export default AppRouter
