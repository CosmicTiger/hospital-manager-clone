import { Spin } from 'antd'

import { LoadingOutlined } from '@ant-design/icons'

const Spinner = props => {
    const { size, spinning, tip, snake } = props

    const indicator = snake ? <LoadingOutlined spin /> : undefined

    return (
        <Spin size={size} spinning={spinning} tip={tip} indicator={indicator} />
    )
}

export default Spinner
