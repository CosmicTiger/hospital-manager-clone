import { Suspense } from 'react'

import Spinner from '../Spinner'

const SuspenseHOC = props => {
    const { view } = props
    return (
        <Suspense
            fallback={
                <div className="flex justify-center items-center h-full">
                    <Spinner snake size="large" />
                </div>
            }
        >
            {view}
        </Suspense>
    )
}

export default SuspenseHOC
