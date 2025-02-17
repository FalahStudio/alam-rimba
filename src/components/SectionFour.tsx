import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import SectionFourImageOne from "../assets/images/section_four_image_one.jpeg";
import SectionFourImageTwo from "../assets/images/section_four_image_two.jpeg";
import SectionFourImageThree from "../assets/images/section_four_image_three.jpeg";
import SectionFourImageFour from "../assets/images/section_four_image_four.jpeg";

export default function SectionFour() {
    return (
        <section className="py-[100px] px-6">
            <div className="grid grid-cols-2 gap-20 pb-10">
                <motion.h1
                    className="text-display-lg-medium w-2/3 text-neutral-900"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Explore the Untamed Beauty of Nature
                </motion.h1>
                <motion.p
                    className="text-body-lg-medium text-neutral-600"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Step into a world of breathtaking landscapes and untouched wonders. At Rimba Alam, we take you to the most spectacular natural destinations, whether you crave the serenity of tropical beaches, the challenge of towering mountains, or the tranquility of lush forests. Choose your adventure and let nature embrace you!
                </motion.p>
            </div>

            <div className="grid grid-cols-8 gap-10">
                {[
                    {
                        colSpan: "col-span-5",
                        src: SectionFourImageOne,
                        label: "Amazon Rainforest, Brazil",
                        delay: 0.3,
                        direction: -30,
                    },
                    {
                        colSpan: "col-span-3",
                        src: SectionFourImageTwo,
                        label: "Himalayas, Nepal",
                        delay: 0.5,
                        direction: 30,
                    },
                    {
                        colSpan: "col-span-4",
                        src: SectionFourImageThree,
                        label: "Patagonia, Chile",
                        delay: 0.7,
                        direction: -30,
                    },
                    {
                        colSpan: "col-span-4",
                        src: SectionFourImageFour,
                        label: "The Philippines' Secret Beaches",
                        delay: 0.9,
                        direction: 30,
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`${item.colSpan} h-full max-h-[480px] bg-neutral-400 rounded-xl overflow-hidden relative`}
                        initial={{ opacity: 0, x: item.direction, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: item.delay }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute bottom-5 left-5 z-10">
                            <p className="text-neutral-50">{item.label}</p>
                        </div>
                        <Image
                            src={item.src}
                            removeWrapper
                            alt="Image"
                            className="w-full h-full object-top object-cover z-0 brightness-[80%] hover:brightness-100 transition-all duration-500"
                            radius="none"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
