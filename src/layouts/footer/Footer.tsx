import { Link } from "@heroui/react";
import RimbaLogoWhite from "./RimbaLogoWhite";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.div
            className="px-10 pt-20 pb-6 bg-[#121212] grid grid-cols-8 gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.div
                className="col-span-8 flex justify-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <RimbaLogoWhite />
            </motion.div>

            <div className="col-span-8">
                <div className="grid grid-cols-3">
                    {[
                        {
                            title: "Our Location",
                            content: [
                                "Alam Rimba Travel Agency",
                                "Jl. Raya Adventure No. 12, Ubud, Bali, Indonesia",
                            ],
                            align: "start",
                        },
                        {
                            title: "Contact Us",
                            content: [
                                "Phone: +62 812-3456-7890",
                                "Email: contact@rimbaalam.com",
                            ],
                            align: "center",
                        },
                        {
                            title: "Opening Hours:",
                            content: [
                                "Monday - Friday: 9:00 AM - 6:00 PM",
                                "Saturday: 10:00 AM - 4:00 PM",
                            ],
                            align: "end",
                        },
                    ].map((section, index) => (
                        <motion.div
                            key={index}
                            className={`col-span-1 flex flex-col items-${section.align} gap-2`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h6 className="text-display-xs-medium text-neutral-50">
                                {section.title}
                            </h6>
                            {section.content.map((text, i) => (
                                <p key={i} className="text-body-lg-medium text-neutral-300">
                                    {text}
                                </p>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Copyright & Sosial Media */}
            <motion.div
                className="col-span-8 border-t border-neutral-50 pt-8 pb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-8">
                    <div className="col-span-8 md:col-span-4">
                        <p className="text-body-md-medium text-neutral-300">
                            Copyright &copy; 2025 Rimba Alam Travel Agency. All rights reserved.
                        </p>
                    </div>
                    <div className="col-span-8 md:col-span-4 flex gap-8 justify-center md:justify-end text-neutral-50">
                        {["Instagram", "Facebook", "Tiktok"].map((social, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    color="foreground"
                                    href="#"
                                    className="text-neutral-50 text-body-md-medium px-6"
                                >
                                    {social}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
