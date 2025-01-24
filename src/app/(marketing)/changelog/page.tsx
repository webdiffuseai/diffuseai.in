'use client';

import AnimationContainer from "@/components/global/animation-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from 'react'

const ChangeLogPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div 
            className="flex flex-col items-center justify-center py-20 max-w-6xl mx-auto px-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <AnimationContainer delay={0.1}>
                <motion.h1 
                    className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Us
                </motion.h1>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={cardVariants}>
                        <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            <CardHeader>
                                <CardTitle className="text-xl md:text-2xl font-semibold">Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-base md:text-lg text-muted-foreground">
                                    To create a supportive digital ecosystem where teenagers can discover their passions, 
                                    develop their talents, and achieve their dreams through collaboration and guidance.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={cardVariants}>
                        <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            <CardHeader>
                                <CardTitle className="text-xl md:text-2xl font-semibold">Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-base md:text-lg text-muted-foreground">
                                    To become the world's leading teen-focused platform that inspires a generation 
                                    to shape their future and make meaningful contributions to society.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div 
                    className="mt-12"
                    variants={cardVariants}
                >
                    <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-lg text-muted-foreground">
                                Teenvisor is a social networking platform designed exclusively for teenagers 
                                to explore, connect, and grow in their careers, fellowships, and passions. 
                                Created by teens for teens, the platform fosters a peer-to-peer community 
                                that empowers its members through collaboration, mentorship, and innovation.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimationContainer>
        </motion.div>
    )
};

export default ChangeLogPage
