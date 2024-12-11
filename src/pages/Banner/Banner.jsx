import React from 'react';
import { motion } from "motion/react"
import bannerImg1 from '../../assets/banner-img/img-1.jpg'
import bannerImg2 from '../../assets/banner-img/img-2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        animate={{
                            y: [50, 100, 50],
                            transition: { repeat: Infinity, duration: 10 }
                        }}
                        src={bannerImg1}
                        className="max-w-sm rounded-t-3xl rounded-r-3xl border-s-4 border-b-4  border-pink-500 shadow-2xl" />
                    <motion.img
                        animate={{
                            x: [100, 150, 100],
                            transition: { repeat: Infinity, duration: 10 }
                        }}
                        src={bannerImg2}
                        className="max-w-sm rounded-t-3xl rounded-r-3xl border-s-4 border-b-4  border-pink-500 shadow-2xl" />
                </div>
                <div className="flex-1">
                    <motion.h1 animate={{ x: 100, transition: { repeat: Infinity, duration: 2 } }} className="text-5xl text-pink-500 font-bold">Job Latest News!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;