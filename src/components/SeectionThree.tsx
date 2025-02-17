"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Hook untuk animasi count-up (berjalan saat elemen terlihat)
const useCountUp = (target: number, duration = 2, startCount: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCount) return;

        let start = 0;
        const increment = target / (duration * 60);
        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(start));
            }
        }, 1000 / 60);

        return () => clearInterval(interval);
    }, [target, duration, startCount]);

    return count;
};

export default function SectionThree() {
    return (
        <section className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem number={8} suffix="+" label="Years of Experience" />
            <StatItem number={50} suffix="+" label="Hidden Destinations" />
            <StatItem number={10000} suffix="+" label="Happy Travelers" />
            <StatItem number={100} suffix="%" label="Eco-Friendly Tours" />
        </section>
    );
}

function StatItem({ number, suffix, label }: { number: number; suffix: string; label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const animatedNumber = useCountUp(number, 2, isInView);

    return (
        <div ref={ref} className="lg:border-r lg:last:border-none border-neutral-300 px-4 text-center">
            <div className="flex flex-col gap-3 items-center">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-neutral-900"
                >
                    {animatedNumber}
                    {suffix}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-lg text-neutral-600"
                >
                    {label}
                </motion.p>
            </div>
        </div>
    );
}