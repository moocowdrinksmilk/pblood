import {Modal} from 'antd'
import { useState } from 'react'
import Image from 'next/image'

interface props {
    image: string
    description: string
    position: string
    name: string
}

const PositionItem = (props: props) => {

    const [modal, setModal] = useState(false)
    return (
        <>
            {/* <Modal visible={modal} footer={null} onCancel={() => {setModal(false)}}>
                <div>
                    {
                        "Insert Image here"
                    }
                </div>

                <div>
                    {
                        "Currently serving the National Service"
                    }
                </div>
            </Modal> */}
            <div className="text-base cursor-pointer column items-center relative" onClick={() => setModal(true)}>
                <div className="">
                    <Image className="rounded-full" objectFit={"cover"} width={180} height={180} src={props.image} alt="wefwe"/>
                </div>

                <div>
                    {
                        props.name
                    }
                </div>

                <div className="text-gray-500">
                    {
                        props.position
                    }
                </div>
                <div className="text-gray-500">
                    {
                        props.description
                    }
                </div>
            </div>
        </>
    )
}

export default PositionItem