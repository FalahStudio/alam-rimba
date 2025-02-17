import { Card, CardBody, Image, CardFooter } from "@heroui/react";
import { motion } from "framer-motion";
import BackgroundSectionSixOne from "../assets/images/section_six_background.jpeg";

export default function SectionSix() {
    return (
        <section className="py-[100px] px-6 overflow-x-auto">
            <div className="max-w-[554px] w-full flex flex-col gap-5 text-center mx-auto mb-20">
                <motion.h2
                    className="text-display-lg-medium text-neutral-900"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Explore the Heart of Nature
                </motion.h2>
                <motion.p
                    className="text-body-md-medium text-neutral-600"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Dive into our blog to discover travel tips, hidden gems, and inspiring stories from Rimba Alam.
                </motion.p>
            </div>

            <div className="grid grid-cols-8 gap-10 overflow-x-auto scrollbar-hide">
                {[
                    {
                        src: BackgroundSectionSixOne,
                        title: "Why Secluded Beaches Should Be Your Next Travel Destination",
                        desc: "In this blog, we’ll take you on a journey through the lush and unexplored rainforests of Southeast Asia. These untouched locations are perfect for adventurers seeking tranquility, rare wildlife, and an authentic connection with nature. Join us as we reveal the best-hidden gems you can only discover with Rimba Alam.",
                        delay: 0.3,
                    },
                    {
                        src: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00",
                        title: "Why Secluded Beaches Should Be Your Next Travel Destination",
                        desc: "Ever wondered what it feels like to walk along a beach with no one around? In this blog, we share the magic of secluded beaches—where serenity, pristine waters, and quiet solitude await. Learn about the secret beaches Rimba Alam takes you to and why these hidden paradises are perfect for your next escape.",
                        delay: 0.5,
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="col-span-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: item.delay }}
                        viewport={{ once: true }}
                    >
                        <Card shadow="none" radius="none">
                            <CardBody className="overflow-visible p-0 mb-5">
                                <Image
                                    alt="Title"
                                    className="w-full object-cover h-[480px] object-center"
                                    radius="lg"
                                    shadow="sm"
                                    src={item.src}
                                    width="100%"
                                />
                            </CardBody>
                            <CardFooter className="flex flex-col items-start gap-2 p-0">
                                <h5 className="text-display-sm-medium text-neutral-900">{item.title}</h5>
                                <p className="text-body-lg-medium text-neutral-600 line-clamp-2">
                                    {item.desc}
                                </p>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
