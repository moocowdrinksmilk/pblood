import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import PositionItem from '../components/PositionItem'
import { Carousel, Progress, Statistic } from 'antd';
import { InstagramOutlined, YoutubeOutlined, LinkedinOutlined, FacebookOutlined } from '@ant-design/icons'
import InstagramEmbed from 'react-instagram-embed';

const Home: NextPage = () => {
    return (
        <div>
            <div className="">
                <div className="h-screen bg-red-400 relative mb-20">
                    <Navbar />

                    <div className="column gap-2 center items-center text-center">
                        <div className="text-6xl">
                            {
                                "Project Blood SG"
                            }
                        </div>

                        <div className="w-full text-base text-center">
                            {
                                "Project Blood SG is a student-led initiative aimed to raise awareness on blood donations in youths. We go beyond to give youths a platform to volunteer and organise blood drives biannually."
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-44" id="AboutUs">
                <div className="row justify-center text-4xl">
                    So, what do we do?
                </div>

                <div className="row justify-center lg:px-44 px-10">
                    <video autoPlay muted controls>
                        <source src="/pblood.mp4" type="video/mp4" />
                    </video>

                </div>
            </div>

            <div className="column items-center gap-10 pb-44" id="OurPeople">
                <div className="row justify-center text-4xl">
                    Who are we?
                </div>

                <div className="column w-full items-center gap-6">
                    <h3 className="text-3xl">
                        Our Directors
                    </h3>
                    <div className="row justify-center gap-10">
                        <PositionItem position={"Director"} name={"Marie Tan"} image={"/people/marie-smu-cs.jpg"} description={""} />
                        <PositionItem position={"Director"} name={"Bo Yi"} image={"/people/boyi-director.jpg"} description={""} />
                    </div>
                </div>

                <div className="column w-full items-center gap-6">
                    <h3 className="text-3xl">
                        Team Leads
                    </h3>
                    <div className="row justify-center flex-wrap gap-10">
                        <PositionItem position={"Tech Lead"} name={"Jensen"} image={"/people/jensen-tech.jpg"} description={""} />
                        <PositionItem position={"Publicity Lead"} name={"Braden"} image={"/people/braden-pubs.jpg"} description={""} />
                        <PositionItem position={"Events Lead"} name={"Mat"} image={"/people/matz-events.jpg"} description={""}/>
                        <PositionItem position={"Phillip Lead"} name={"Phillip"} image={"/people/phillip-creative.jpg"} description={""} />
                    </div>
                </div>
            </div>

            <div className="column gap-10 pb-44 md:px-20 px-10">
                <div className="row justify-center text-4xl">
                    Statistics
                </div>

                <div className="row justify-around items-start flex-wrap gap-10 mt-10 mb-10">
                    <Statistic title="Blood Donation Drives" value={4} valueStyle={{
                        fontSize: '50px'
                    }} />
                    <Statistic title="Attendees" value={486} valueStyle={{
                        fontSize: '50px'
                    }} />
                    <Statistic title="Successful Donors" value={357} valueStyle={{
                        fontSize: '50px'
                    }} />
                    <Statistic title="First Timers" value={141} valueStyle={{
                        fontSize: '50px'
                    }} />
                </div>

                <div className="column justify-center items-center gap-10">
                    <div className="text-2xl text-center">
                        We are proud to say that <span className="text-5xl text-red-500">40%</span> of our donors are donating for their first time!
                    </div>
                    <div className="relative">
                        <Progress showInfo={false} width={300} percent={99.9} success={{ percent: 40 }} type="dashboard" status="active" />
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-center">
                            40% first time doners
                        </div>
                    </div>


                </div>
            </div>

            <div className="pb-44 md:px-20 px-10" id="Events">
                <div className="row justify-center text-4xl pb-10 text-center">
                    Events we have done
                </div>

                <Carousel autoplay>
                    <div>
                        <div className="relative row justify-center items-center h-80 w-full">
                            <Image layout='fill' objectFit='contain' src="/events/dukenus.jpeg" alt="wefwe"/>
                        </div>
                    </div>
                    <div>
                        <div className="relative row justify-center items-center h-80 w-full">
                            <Image layout='fill' objectFit='contain' src="/events/lkcmed.jpeg" alt="wefwe"/>
                        </div>
                    </div>
                    <div>
                        <div className="relative row justify-center items-center h-80 w-full">
                            <Image layout='fill' objectFit='contain' src="/events/yllsom.jpeg" alt="wefwe"/>
                        </div>
                    </div>
                    {/* <div>
                        <div className="relative row justify-center items-center bg-red-100 h-80">
                            <Image layout="fill" src="/events/dukenus.jpeg" alt="wefwe"/>
                        </div>
                    </div>
                    <div>
                        <div className="relative row justify-center items-center bg-red-100 h-80 w-80">
                            <Image layout="fill" src="/events/dukenus.jpeg" alt="wefwe"/>
                        </div>
                    </div> */}

                    {/* <div>
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
                    </div> */}
                </Carousel>
            </div>

            <div className="column gap-8 pb-44" id="ContactUs">
                {/* <div className="column items-center justify-center text-4xl">
                    <div>Contact us!</div>
                    <div className="text-2xl">
                        {
                            "<Contact information here>"
                        }
                    </div>
                </div> */}

                <div className="column gap-4 items-center justify-center">
                    <div className="row justify-center text-4xl">
                        Follow us on our socials
                    </div>

                    <div className="row gap-4 text-2xl items-center">
                        <Link href="/instagram">
                            <InstagramOutlined />
                        </Link>

                        <div>
                            <YoutubeOutlined />
                        </div>

                        <div>
                            <LinkedinOutlined />
                        </div>

                        <div>
                            <FacebookOutlined />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
