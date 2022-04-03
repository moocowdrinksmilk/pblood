import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center px-44 h-28">
                <div className="flex items-center gap-4">
                    <div className="relative w-14 h-20 flex">
                        <Image src="/bb/1.-BB-Default-(Left).png" layout="fill" objectFit="cover" />
                    </div>

                    {/* <div className="text-2xl">
                        Project Blood
                    </div> */}
                </div>

                <div className="flex flex-row gap-8 text-xl">
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

                <div className="bg-red-400 cursor-pointer hover:bg-red-500 text-lg px-4 py-2 rounded-md text-white">
                    Telegram Bot
                </div>
            </div>
    )
}

export default Navbar