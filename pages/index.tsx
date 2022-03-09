import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
    return (
        <div>
            <div className="h-screen">
                <div className="h-4/6 bg-red-300 relative">
                    <Navbar />

                    <div className="column gap-2 center items-center">
                        <div className="text-6xl">
                            {
                                "<Insert Text here>"
                            }
                        </div>

                        <div className="text-base">
                            {
                                "<Insert Text here>"
                            }
                        </div>
                    </div>
                </div>

                <div className="h-2/6 column items-center pt-6">
                    <h1 className="text-3xl">
                        Our Sponsors
                    </h1>

                    <div className="flex flex-wrap gap-6 mt-4">
                        <div className="text-base">
                            {
                                "<Insert Sponsor Image here>"
                            }
                        </div>

                        <div className="text-base">
                            {
                                "<Insert Sponsor Image here>"
                            }
                        </div>

                        <div className="text-base">
                            {
                                "<Insert Sponsor Image here>"
                            }
                        </div>

                        <div className="text-base">
                            {
                                "<Insert Sponsor Image here>"
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
