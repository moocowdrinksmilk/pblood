import {Modal} from 'antd'
import { useState } from 'react'

const PositionItem = () => {

    const [modal, setModal] = useState(false)
    return (
        <>
            <Modal visible={modal} footer={null} onCancel={() => {setModal(false)}}>
                <div>
                    {
                        "Insert Image here"
                    }
                </div>

                <div>
                    {
                        "Insert longer description here"
                    }
                </div>
            </Modal>
            <div className="text-base cursor-pointer" onClick={() => setModal(true)}>
                <div>
                    {
                        "<Insert Image here>"
                    }
                </div>

                <div>
                    {
                        "Insert position here"
                    }
                </div>
            </div>
        </>
    )
}

export default PositionItem