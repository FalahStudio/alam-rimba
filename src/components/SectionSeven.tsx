import { Button, Image } from "@heroui/react";
import { ArrowRight } from "iconsax-react";
import { motion } from "framer-motion";
import SectionSevenBackground from "../assets/images/section_seven_image.jpeg";

export default function SectionSeven() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="relative h-[500px] md:h-[600px] lg:h-[720px] overflow-hidden">

                <motion.div
                    className="absolute w-full h-full flex justify-center items-center z-10 flex-col text-center gap-3 px-4 md:px-24 lg:px-56"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h1
                        className="text-2xl md:text-4xl lg:text-display-lg-medium text-neutral-50 font-semibold"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Ready for Your Next Adventure?
                    </motion.h1>
                    <motion.p
                        className="text-sm md:text-lg lg:text-body-xl-medium text-neutral-50 max-w-[90%] md:max-w-[80%]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Take the leap into a journey unlike any other. Whether you're craving a hike through ancient rainforests, a peaceful retreat on a secluded beach, or a mountain escape to recharge your soul—Rimba Alam has something for every adventurer.
                    </motion.p>

                    <motion.div
                        className="mt-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            className="text-sm md:text-body-md-medium py-2 md:py-3 px-6 bg-white"
                            type="button"
                            radius="full"
                            endContent={<ArrowRight size="16" color="#1F2937" />}
                        >
                            Book Your Adventure Now
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="w-full h-full rounded-xl overflow-hidden"
                >
                    <Image
                        src={SectionSevenBackground}
                        alt="image"
                        removeWrapper
                        radius="none"
                        className="w-full h-full object-center object-cover z-0 brightness-[40%]"
                    />
                </motion.div>
            </div>
        </section>
    );
}
