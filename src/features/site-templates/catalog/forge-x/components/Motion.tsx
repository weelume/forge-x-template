'use client';
import { useEffect, useRef, type ReactNode } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
export function Reveal({ children, className = '', delay = 0, scale = false }: {
    children: ReactNode;
    className?: string;
    delay?: number;
    scale?: boolean;
}) { const reduced = useReducedMotion(); return <motion.div data-forgex-reveal className={className} initial={reduced ? false : { opacity: 0, y: scale ? 0 : 32, scale: scale ? .94 : 1 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>; }
export function Counter({ value, suffix = '' }: {
    value: number;
    suffix?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null), seen = useInView(ref, { once: true }), number = useMotionValue(0), display = useTransform(number, n => Math.round(n).toLocaleString()), reduced = useReducedMotion();
    useEffect(() => {
        if (!seen)
            return;
        const controls = animate(number, value, { duration: reduced ? 0 : 1.6, ease: 'easeOut' });
        return () => controls.stop();
    }, [seen, number, value, reduced]);
    return <span ref={ref}><motion.span>{display}</motion.span>{suffix}</span>;
}
