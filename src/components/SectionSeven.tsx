import { Button, Image } from "@heroui/react";
import { ArrowRight } from "iconsax-react";
import { motion } from "framer-motion";
import SectionSevenBackground from "../assets/images/section_seven_image.jpeg";

export default function SectionSeven() {
    return (
        <section className="py-[84px] px-6">
            <div className="relative h-[720px] overflow-hidden">
                <motion.div
                    className="absolute w-full h-full flex justify-center items-center z-10 flex-col md:px-56 text-center gap-2"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h1
                        className="text-display-lg-medium text-neutral-50"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Ready for Your Next Adventure?
                    </motion.h1>
                    <motion.p
                        className="text-body-xl-medium text-neutral-50"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Take the leap into a journey unlike any other. Whether you're craving a hike through ancient rainforests, a peaceful retreat on a secluded beach, or a mountain escape to recharge your soul—Rimba Alam has something for every adventurer.
                    </motion.p>

                    {/* Animasi button */}
                    <motion.div
                        className="mt-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            className="text-body-md-medium py-3 bg-white"
                            type="button"
                            radius="full"
                            endContent={<ArrowRight size="16" color="#1F2937" />}
                        >
                            Book Your Adventure Now
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Animasi background image */}
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    <Image
                        src={SectionSevenBackground}
                        alt="image"
                        removeWrapper
                        className="w-full h-full object-center object-cover z-0 brightness-[40%]"
                    />
                </motion.div>
            </div>
        </section>
    );
}
