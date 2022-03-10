import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import PositionItem from '../components/PositionItem'
import { Carousel } from 'antd';

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

            <div className="pb-44" id="AboutUs">
                <div className="row justify-center text-4xl">
                    So, what do we do?
                </div>

                <div className="row justify-center">
                    <div className="flex h-36 w-80 bg-red-300 row justify-center items-center">
                        Have some introductory video here
                    </div>
                </div>
            </div>

            <div className="pb-20" id="OurPeople">
                <div className="row justify-center text-4xl">
                    Who are we?
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    <PositionItem />

                    <PositionItem />

                    <PositionItem />

                    <PositionItem />
                </div>
            </div>

            <div className="py-44 px-20" id="Events">
                <div className="row justify-center text-4xl">
                    Events we have done
                </div>

                <Carousel autoplay>
                    <div>
                        <div className="row justify-center items-center h-80 bg-red-100">
                            <div className="text-4xl">
                                {
                                    "Insert images of past events here"
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="row justify-center items-center h-80 bg-red-100">
                            <div className="text-4xl">
                                {
                                    "Insert images of past events here"
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="row justify-center items-center h-80 bg-red-100">
                            <div className="text-4xl">
                                {
                                    "Insert images of past events here"
                                }
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className="column gap-8 pb-44" id="ContactUs">
                <div className="column items-center justify-center text-4xl">
                    <div>Contact us!</div>
                    <div className="text-2xl">
                        {
                            "<Contact information here>"
                        }
                    </div>
                </div>

                <div className="column gap-4 items-center justify-center">
                    <div className="row justify-center text-4xl">
                        Follow us on our socials
                    </div>

                    <div className="row gap-4 text-2xl">
                        <div>
                            {
                                "<Insert socials icons here>"
                            }
                        </div>

                        <div>
                            {
                                "<Insert socials icons here>"
                            }
                        </div>

                        <div>
                            {
                                "<Insert socials icons here>"
                            }
                        </div>

                        <div>
                            {
                                "<Insert socials icons here>"
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
