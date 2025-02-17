import { motion } from "framer-motion";
import { Button, AvatarGroup, Avatar, Image } from "@heroui/react";
import { ArrowRight, Star1 } from "iconsax-react";
import backgroud from "../assets/images/background.png";
import Avatar1 from "../assets/images/avatar/avatar_1.jpeg";
import Avatar2 from "../assets/images/avatar/avatar_2.jpeg";
import Avatar3 from "../assets/images/avatar/avatar_3.jpeg";
import Avatar4 from "../assets/images/avatar/avatar_4.jpeg";
import Avatar5 from "../assets/images/avatar/avatar_5.jpeg";

export default function Jumbotron() {
    return (
        <section className="h-full min-h-[842px] lg:h-screen bg-neutral-200 w-full rounded-xl overflow-hidden mb-4">
            <div className="relative w-full h-full">
                <div className="absolute px-6 py-8 w-full h-full z-10 flex flex-col justify-between">
                    <div className="grid grid-cols-1 md:grid-cols-8">
                        <div className="md:col-span-4 text-center md:text-left">
                            <motion.div
                                className="pt-4 grid grid-cols-1 gap-2"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                <h1 className="text-display-sm-medium lg:text-display-md-medium xl:text-display-2xl-medium text-neutral-50">
                                    Discover the World's Hidden Natural Wonders
                                </h1>
                                <p className="text-body-sm-medium lg:text-display-xs-medium xl:text-display-xs-medium text-neutral-50">
                                    Unleash your adventurous spirit with personalized nature trips.
                                </p>
                                <motion.div
                                    className="mt-4 flex justify-center md:justify-start"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5, delay: 0.8 }}
                                >
                                    <Button
                                        className="text-body-md-medium py-3 bg-white"
                                        type="button"
                                        radius="full"
                                        endContent={<ArrowRight size="16" color="#1F2937" />}
                                    >
                                        Start Your Journey
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-8 gap-5"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    >
                        <div className="md:col-span-5 text-neutral-50 text-center md:text-left">
                            <p>
                                Experience more than just a trip—embrace an adventure that brings you closer to nature.
                                At Rimba Alam, we take you on a journey to hidden gems untouched by mass tourism, from
                                lush rainforests and majestic mountain peaks to pristine, secluded beaches.
                            </p>
                        </div>
                        <div className="md:col-span-3 flex justify-center md:justify-end">
                            <motion.div
                                className="grid grid-cols-1 gap-3"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 1.2 }}
                            >
                                <div className="flex justify-center items-center gap-2.5 text-body-sm-bold text-neutral-50">
                                    <Star1 size="16" color="#F9FAFB" variant="Bold" />
                                    <span>4.94</span>
                                    <span className="opacity-65">/</span>
                                    <span className="opacity-65">5.00</span>
                                </div>
                                <div className="w-full h-1 bg-[#F9FAFB] opacity-40 rounded-full"></div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5, delay: 1.4 }}
                                >
                                    <AvatarGroup isBordered color="default" size="sm" className="cursor-pointer">
                                        <Avatar src={Avatar1} />
                                        <Avatar src={Avatar2} />
                                        <Avatar src={Avatar3} />
                                        <Avatar src={Avatar4} />
                                        <Avatar src={Avatar5} />
                                    </AvatarGroup>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="h-full min-h-[842px] lg:h-screen w-full"
                >
                    <Image
                        src={backgroud}
                        removeWrapper
                        alt="Image"
                        className="w-full h-full object-center object-cover z-0 brightness-[50%]"
                        radius="none"
                    />
                </motion.div>
            </div>
        </section>
    );
}
