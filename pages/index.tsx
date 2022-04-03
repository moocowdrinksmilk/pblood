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
            <div className="">
                <div className="h-5/6screen bg-red-300 relative">
                    <Navbar />

                    <div className="column gap-2 center items-center">
                        <div className="text-6xl">
                            {
                                "Project Blood SG"
                            }
                        </div>

                        <div className="w-full text-base text-center text-white">
                            {
                                "Project Blood SG is a student-led initiative aimed to raise awareness on blood donations in youths. We go beyond to give youths a platform to volunteer and organise blood drives biannually."
                            }
                        </div>
                    </div>
                </div>

                <div className="column items-center pt-6">
                    <h1 className="text-3xl">
                        Our Sponsors
                    </h1>

                    <div className="flex lg:justify-center overflow-y-auto gap-6 mt-4 w-screen">
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

            <div className="column items-center gap-10 pb-20" id="OurPeople">
                <div className="row justify-center text-4xl">
                    Who are we?
                </div>

                <div className="column w-full items-center gap-6">
                    <h3 className="text-3xl">
                        Our Directors
                    </h3>
                    <div className="row justify-center gap-10">
                        <PositionItem position={"Director"} name={"Marie Tan"} />
                        <PositionItem position={"Director"} name={"Bo Yi"} />
                    </div>
                </div>

                <div className="column w-full items-center gap-6">
                    <h3 className="text-3xl">
                        Team Leads
                    </h3>
                    <div className="row justify-center flex-wrap gap-10">
                        <PositionItem position={"Tech Lead"} name={"Jensen"} />
                        <PositionItem position={"Tech Lead"} name={"Jensen"} />
                        <PositionItem position={"Tech Lead"} name={"Jensen"} />
                        <PositionItem position={"Tech Lead"} name={"Jensen"} />
                        <PositionItem position={"Tech Lead"} name={"Jensen"} />
                        <PositionItem position={"Tech Lead"} name={"Jensen"} />
                    </div>
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
