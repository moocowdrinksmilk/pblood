import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center px-72 h-28">
                <div className="relative w-20 h-28">
                    <Image src="/bb/1.-BB-Default-(Left).png" layout="fill" objectFit="cover" />
                </div>

                <div className="flex flex-row gap-8 text-xl">
                    <Link href="">
                        <a>
                            About us
                        </a>
                    </Link>

                    <Link href="">
                        <a>
                            Our people
                        </a>
                    </Link>

                    <Link href="">
                        <a>
                            Events
                        </a>
                    </Link>

                    <Link href="">
                        <a>
                            Contact us
                        </a>
                    </Link>
                </div>

                <div className="bg-red-200 text-lg px-4 py-2 rounded-md">
                    Find out more about us!
                </div>
            </div>
    )
}

export default Navbar