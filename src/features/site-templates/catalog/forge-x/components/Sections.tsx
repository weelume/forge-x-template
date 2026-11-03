'use client';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { TemplateLocale } from '../../../types';
import { disciplines, faq, tiers } from '../content/site';
import { Reveal } from './Motion';
import { asset, href } from './Shell';
export function SectionHeading({ eyebrow, title, body }: {
    eyebrow: string;
    title: string;
    body?: string;
}) { return <Reveal className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body && <p>{body}</p>}</Reveal>; }
export function HeroScene({ children }: {
    children: ReactNode;
}) { const { scrollY } = useScroll(), y = useTransform(scrollY, [0, 900], [0, 180]), reduced = useReducedMotion(); return <section className="forge-hero" id="header"><motion.img className="hero-background" src={asset('pbVa4QhA9rbqdpjb6YpCrLrTCc.png')} alt="" style={{ y: reduced ? 0 : y }}/><div className="hero-shade"/>{children}<div className="pulse-line" aria-hidden="true"><svg viewBox="0 0 1440 110" preserveAspectRatio="none"><motion.path d="M0 55 H210 L238 15 L264 96 L292 37 L318 72 L332 55 H1440" fill="none" stroke="currentColor" strokeWidth="2" initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: 'linear' }}/><circle className="pulse-dot" cx="395" cy="55" r="4"/></svg></div></section>; }
export function DisciplineCards({ locale }: {
    locale: TemplateLocale;
}) { const [active, setActive] = useState(0), reduced = useReducedMotion(); return <div className="disciplines" aria-label={locale === 'zh' ? '选择训练项目' : 'Choose a discipline'}>{disciplines.map((item, i) => <motion.article key={item.image} className={'discipline ' + (active === i ? 'active' : '')} layout transition={{ duration: reduced ? 0 : .55, ease: [.22, 1, .36, 1] }} onMouseEnter={() => setActive(i)}><img src={asset(item.image)} alt={item.name[locale]}/><button aria-expanded={active === i} aria-controls={'discipline-' + i} onFocus={() => setActive(i)} onClick={() => setActive(i)}><span className="discipline-number">0{i + 1}</span><span>{item.name[locale]}</span></button><div id={'discipline-' + i} className="discipline-copy" hidden={active !== i}><p>{item.description[locale]}</p></div></motion.article>)}</div>; }
export function Membership({ locale, basePath }: {
    locale: TemplateLocale;
    basePath: string;
}) { return <section className="section container" id="membership"><SectionHeading eyebrow={locale === 'zh' ? '选择您的投入方式' : 'COMMIT TO A TIER'} title={locale === 'zh' ? '会员计划' : 'MEMBERSHIP.'} body={locale === 'zh' ? '清晰的训练内容，按月展示的会员费用。取消条款的原站冲突见下方 FAQ，当前仅供演示。' : "No contracts hidden in fine print. The reference’s cancellation terms conflict; see the FAQ below. Demonstration only."}/><div className="tier-grid">{tiers.map((tier, i) => <Reveal key={tier.id} delay={i * .1} className={'tier glass ' + (i === 1 ? 'featured' : '')}><p className="eyebrow">0{i + 1} / {i === 1 ? (locale === 'zh' ? '推荐方案' : 'RECOMMENDED') : (locale === 'zh' ? '训练计划' : 'TRAINING PROTOCOL')}</p><h3>{tier.label[locale]}</h3><p className="price">${tier.price}<span>/{locale === 'zh' ? '月' : 'month'}</span></p><ul>{tier.benefits.map(b => <li key={b.en}>{b[locale]}</li>)}</ul><Link className={'button ' + (i !== 1 ? 'outline' : '')} href={href(basePath, locale, 'subscribe') + '?tier=' + tier.id}>{locale === 'zh' ? '申请此计划' : 'Apply for this tier'}</Link></Reveal>)}</div></section>; }
export function FAQ({ locale }: {
    locale: TemplateLocale;
}) { const [open, setOpen] = useState<number | null>(0), reduced = useReducedMotion(); return <div className="faq">{faq.map(([q, a], i) => <div className="faq-row" key={q.en}><h3><button aria-expanded={open === i} aria-controls={'faq-' + i} onClick={() => setOpen(open === i ? null : i)}>{q[locale]}<span aria-hidden="true">{open === i ? '−' : '+'}</span></button></h3><motion.div id={'faq-' + i} className="faq-answer" animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} initial={false} transition={{ duration: reduced ? 0 : .32 }} inert={open !== i}><p>{a[locale]}</p></motion.div></div>)}</div>; }
