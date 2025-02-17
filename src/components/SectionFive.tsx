import { Button } from "@heroui/react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Avatar1 from "../assets/images/avatar/avatar_1.jpeg";
import Avatar2 from "../assets/images/avatar/avatar_2.jpeg";
import Avatar3 from "../assets/images/avatar/avatar_3.jpeg";

const reviews = [
    {
        id: 1,
        name: "Sarah Margantara",
        role: "Bali Traveler",
        avatar: Avatar1,
        text: "Rimba Alam provided an experience like no other! I felt completely immersed in nature, away from the usual tourist spots. The journey was meticulously planned, allowing me to discover hidden waterfalls, lush rainforests, and untouched beaches. The serenity of the mountains and the mesmerizing sound of the waterfalls created a truly magical experience. It was a soul-refreshing trip, filled with adventure, discovery, and moments of pure peace.",
    },
    {
        id: 2,
        name: "John Doe",
        role: "Adventure Seeker",
        avatar: Avatar2,
        text: "The best trip ever! From the moment we arrived, we were surrounded by breathtaking landscapes and warm hospitality. Every hike, every waterfall, and every sunrise brought a new level of excitement. The guides were incredibly knowledgeable, sharing fascinating stories about the local culture and wildlife. Whether it was trekking through dense forests, swimming in crystal-clear rivers, or simply enjoying the tranquility of nature, this adventure was beyond anything I had imagined.",
    },
    {
        id: 3,
        name: "Emily Clark",
        role: "Travel Blogger",
        avatar: Avatar3,
        text: "A perfect escape into nature! I was in awe of the untouched beauty surrounding me. Every morning started with the sound of birds singing, and every evening ended with a stunning sunset over the horizon. The air was fresh, the scenery was mesmerizing, and the overall atmosphere was incredibly peaceful. This trip was more than just a vacation—it was a chance to reconnect with nature and appreciate its wonders on a deeper level. Highly recommend for those seeking a meaningful retreat!",
    },
];

export default function SectionFive() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextReview();
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    const nextReview = () => {
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-10 px-6 md:px-12 lg:px-48 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 items-center">
            <div className="flex flex-col items-center md:items-start col-span-1">
                <motion.div
                    key={reviews[current].id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-5"
                >
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img
                            src={reviews[current].avatar}
                            alt="avatar"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col text-center md:text-left gap-2">
                        <p className="text-lg font-semibold text-neutral-900">{reviews[current].name}</p>
                        <p className="text-base text-neutral-600">{reviews[current].role}</p>
                    </div>
                </motion.div>

                <div className="mt-6 flex gap-4">
                    <Button
                        className="bg-white border border-neutral-300 h-10 w-10"
                        radius="md"
                        isIconOnly
                        onClick={prevReview}
                    >
                        <ArrowLeft2 size={24} color="black" />
                    </Button>
                    <Button
                        className="bg-white border border-neutral-300 h-10 w-10"
                        radius="md"
                        isIconOnly
                        onClick={nextReview}
                    >
                        <ArrowRight2 size={24} color="black" />
                    </Button>
                </div>
            </div>

            <div className="col-span-1 md:col-span-3 text-center md:text-left">
                <motion.p
                    key={reviews[current].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-neutral-800 text-lg"
                >
                    {reviews[current].text}
                </motion.p>
            </div>
        </section>
    );
}
