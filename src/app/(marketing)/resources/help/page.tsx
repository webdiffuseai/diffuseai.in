import { AnimationContainer } from "@/components";
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React from 'react';

const faqItems = [
    {
        question: "What is Teenvisor?",
        answer: "Teenvisor is a social network designed for teenagers to explore their passions, connect with peers, and receive guidance for their careers and personal growth."
    },
    {
        question: "Who can join Teenvisor?",
        answer: "Teenvisor is exclusively for teenagers. Anyone within this age group can join and become part of the community."
    },
    {
        question: "What features does Teenvisor offer?",
        answer: "Teenvisor provides: Career and skill development resources, Peer-to-peer and mentor connections, Collaborative spaces for projects and passion pursuits and many more.."
    },
    {
        question: "Is Teenvisor free to use?",
        answer: "Yes, Teenvisor offers free access to core features. A premium version is available for those who want access to exclusive features and resources."
    },
    {
        question: "How is Teenvisor different from other social platforms?",
        answer: "Teenvisor focuses on empowering teens by offering tools for personal and professional growth, mentorship opportunities, and a safe, collaborative environment."
    },
    {
        question: "How can I connect with mentors on Teenvisor?",
        answer: "Teenvisor allows you to connect with mentors by exploring available profiles and requesting guidance based on your career interests or goals."
    },
    {
        question: "How does Teenvisor ensure safety and privacy?",
        answer: "Teenvisor follows strict guidelines to create a safe and secure environment for teens. User data is protected, and activities on the platform are monitored for safety."
    },
    {
        question: "Can parents or teachers participate in Teenvisor?",
        answer: "Teenvisor is specifically for teens, but parents and teachers can support their teens by encouraging them to use the platform's tools and resources."
    },
    {
        question: "What types of events or competitions are available?",
        answer: "Teenvisor hosts events like hackathons, career-building challenges, and skill-development workshops to help teens grow and excel."
    },
    {
        question: "How can I get started with Teenvisor?",
        answer: "Simply sign up, create a profile, and start exploring interests. Connect with peers and mentors, and begin your journey to personal and professional growth."
    },
    {
        question: "Can I collaborate with peers on Teenvisor?",
        answer: "Yes, Teenvisor encourages collaboration. You can join or create groups, work on shared projects, and brainstorm ideas with like-minded individuals."
    },
    {
        question: "How can I provide feedback or suggest improvements?",
        answer: "You can use the feedback feature on the platform or contact Teenvisor's support team through the official email to share your suggestions."
    }
];


const HelpPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 md:px-6">
            <AnimationContainer delay={0.1} className="w-full max-w-4xl">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Frequently Asked Questions
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Everything you need to know about Teenvisor
                </p>
            </AnimationContainer>
            <AnimationContainer delay={0.2} className="w-full max-w-4xl pt-20">
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <div className="bg-black rounded-lg">
                                    <Disclosure.Button className="flex w-full justify-between items-center p-6 text-white">
                                        <span className="text-lg font-semibold">{item.question}</span>
                                        <ChevronDownIcon
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 transition-transform duration-200`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="px-6 pb-6 text-gray-300">
                                            {item.answer}
                                        </Disclosure.Panel>
                                    </Transition>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </AnimationContainer>
        </div>
    );
};

export default HelpPage;