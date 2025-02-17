import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ImageSectionTwo from '../assets/images/image_section_two.jpeg';

export default function SectionTwo() {
    const ref = useRef(null);
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    controls.start("visible");
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [controls]);

    const imageDataLeft = [
        { height: "360px", delay: 0, x: -200, y: -200 },
        { height: "300px", delay: 0.2, x: -200, y: 200 },
    ];

    const imageDataRight = [
        { height: "240px", delay: 0.4, x: 200, y: -200 },
        { height: "360px", delay: 0.6, x: 200, y: 200 },
    ];

    return (
        <section ref={ref} className="py-[100px] px-6 lg:px-[91px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="col-span-1">
                <div className="grid grid-cols-2 gap-2 items-center">

                    <div className="col-span-1 flex flex-col gap-2">
                        {imageDataLeft.map((item, index) => (
                            <motion.div
                                key={index}
                                className="w-full bg-cover bg-center object-cover rounded-xl"
                                style={{
                                    height: item.height,
                                    backgroundImage: `url(${ImageSectionTwo})`,
                                }}
                                initial={{ opacity: 0, x: item.x, y: item.y, scale: 0.6 }}
                                animate={isVisible ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                                transition={{ type: "spring", stiffness: 50, damping: 12, delay: item.delay }}
                            ></motion.div>
                        ))}
                    </div>

                    <div className="col-span-1 flex flex-col gap-2">
                        {imageDataRight.map((item, index) => (
                            <motion.div
                                key={index}
                                className="w-full bg-cover bg-center object-cover rounded-xl"
                                style={{
                                    height: item.height,
                                    backgroundImage: `url(${ImageSectionTwo})`,
                                }}
                                initial={{ opacity: 0, x: item.x, y: item.y, scale: 0.6 }}
                                animate={isVisible ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                                transition={{ type: "spring", stiffness: 50, damping: 12, delay: item.delay }}
                            ></motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                className="col-span-1 flex flex-col gap-5"
                initial={{ opacity: 0, x: 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h1 className="text-display-lg-medium text-neutral-900 text-center lg:text-left">
                    Embrace Nature, Discover the Unseen
                </h1>
                <p className="text-body-lg-medium text-neutral-600 text-center lg:text-left">
                    At Rimba Alam, we believe that the best adventures are found off the beaten path. Our mission is to
                    take you beyond the usual tourist destinations and into the heart of nature’s wonders. Whether it’s
                    trekking through lush rainforests, conquering majestic mountain peaks, or relaxing on untouched
                    beaches, we create journeys that bring you closer to the raw beauty of the earth.
                </p>
            </motion.div>
        </section>
    );
}
