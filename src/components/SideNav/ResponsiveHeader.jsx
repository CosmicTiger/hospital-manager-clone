import { useMemo } from 'react'
// import { ReactComponent as BreveLogo } from 'assets/images/brevetech/logo.svg'
import classNames from 'classnames'

import { MenuOutlined } from '@ant-design/icons'

const ResponsiveHeader = props => {
    const { handleOpen } = props

    return (
        <div
            className={classNames(
                'responsive-header'
            )}
        >
            <div>
                Hospital Manager
            </div>
            <MenuOutlined
                className="text-lg text-white cursor-pointer"
                onClick={handleOpen}
            />
        </div>
    )
}

export default ResponsiveHeader
