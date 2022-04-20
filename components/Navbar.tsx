import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { MenuOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'


const Navbar = () => {
    const [drawer, setDrawer] = useState(false)
    const closeDrawer = () => {
        setDrawer(false)
    }
    return (
        <>
            <Drawer visible={drawer} onClose={closeDrawer} placement={"top"} closable={false}>
                <div className="flex flex-col gap-8 text-xl">
                    <div onClick={closeDrawer}>
                        <Link href="#AboutUs">
                            <a>
                                About us
                            </a>
                        </Link>
                    </div>
                    <div onClick={closeDrawer}>
                        <Link href="#OurPeople">
                            <a>
                                Our people
                        </a>
                        </Link>
                    </div>

                    <div onClick={closeDrawer}>
                        <Link href="#Events">
                            <a>
                                Events
                        </a>
                        </Link>
                    </div>

                    <div onClick={closeDrawer}>
                        <Link href="#ContactUs">
                            <a>
                                Contact us
                        </a>
                        </Link>
                    </div>
                </div>

            </Drawer>
            <div className="flex flex-row justify-between items-center lg:px-44 px-10 h-28">
                <div className="flex items-center gap-4">
                    <div className="row gap-1 items-center">
                        <div className="relative w-14 h-20 flex">
                            <Image src="/bb/1.-BB-Default-(Left).png" layout="fill" objectFit="cover" />
                        </div>

                        <div className="text-2xl">
                            Project Blood
                        </div>
                    </div>

                    {/* <div className="text-2xl">
                        Project Blood
                    </div> */}
                </div>

                <div className="flex-row gap-8 text-xl md:flex hidden">
                    <Link href="#AboutUs">
                        <a>
                            About us
                        </a>
                    </Link>

                    <Link href="#OurPeople">
                        <a>
                            Our people
                        </a>
                    </Link>

                    <Link href="#Events">
                        <a>
                            Events
                        </a>
                    </Link>

                    <Link href="#ContactUs">
                        <a>
                            Contact us
                        </a>
                    </Link>
                </div>

                <a className="bg-red-500 cursor-pointer hover:bg-red-600 text-lg px-4 py-2 rounded-md text-white md:block hidden" target="_blank" href="https://t.me/projectbloodsgbot" rel="noopener noreferrer">
                    Telegram Bot
                </a>

                <div className="md:hidden" onClick={() => {
                    setDrawer(true)
                }}>
                    <MenuOutlined style={{
                        fontSize: '2rem'
                    }} />
                </div>
            </div>
        </>
    )
}

export default Navbar