'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import type { SiteTemplatePageProps } from '../../../types';
import { useTemplateHost } from '../host';
import { brand } from '../config/brand';
import { nav } from '../content/site';
import { Dialog } from './Dialog';
import '../tokens.css';
import '../theme.css';
export const asset = (name: string) => '/templates/forge-x/media/' + name;
export const href = (base: string, locale: 'zh' | 'en', slug = '') => (base + (locale === 'en' ? '/en' : '') + (slug ? '/' + slug : '')) || '/';
export function useBrandName(locale: 'zh' | 'en') { const host = useTemplateHost(); return host.brandName?.[locale] ?? brand.name[locale]; }
export function StoryButton({ locale = 'zh' }: {
    locale?: 'zh' | 'en';
}) { const [open, setOpen] = useState(false); return <><button className="button outline" onClick={() => setOpen(true)}>{locale === 'zh' ? '了解训练故事' : 'Watch the story'}</button>{open && <Dialog close={() => setOpen(false)} label={locale === 'zh' ? '关闭训练故事' : 'Close training story'}><h2>{locale === 'zh' ? '方法，比热情更持久' : 'Discipline meets science'}</h2><img src={asset('bi4FpPf0FKCENMrvjXq1VzIhU.png')} alt={locale === 'zh' ? '专业训练环境' : 'Professional training environment'}/><p>{locale === 'zh' ? '每个训练方案都经过设计，每次训练都可衡量。以纪律和科学方法，建立长期、可持续的进步。' : 'Every protocol is engineered. Every session is measured. Discipline and science build measurable, sustainable progress.'}</p><p className="form-note" role="status">{locale === 'zh' ? '原站此入口尚未配置可播放影像，当前展示训练理念。' : 'The reference story entry has no configured playable media. Training philosophy is shown here.'}</p></Dialog>}</>; }
export function Shell({ locale = 'zh', basePath, children }: SiteTemplatePageProps & {
    children: ReactNode;
}) {
    const host = useTemplateHost(), name = useBrandName(locale), pathname = usePathname(), router = useRouter(), [menu, setMenu] = useState(false), relative = pathname.slice(basePath.length).replace(/^\/en(?=\/|$)/, '').replace(/^\//, ''), languagePath = href(basePath, locale === 'zh' ? 'en' : 'zh', relative), home = href(basePath, locale);
    useEffect(() => {
        const previous = document.documentElement.getAttribute('data-template');
        document.documentElement.setAttribute('data-template', 'forge-x');
        return () => {
            if (previous)
                document.documentElement.setAttribute('data-template', previous);
            else
                document.documentElement.removeAttribute('data-template');
        };
    }, []);
    const switchLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); setMenu(false); router.push(languagePath + window.location.search + window.location.hash); };
    return <MotionConfig reducedMotion="user"><div className="forgex" lang={locale === 'zh' ? 'zh-CN' : 'en'}><header className="forge-header"><Link className="brand" href={home + '#header'} aria-label={name}>{host.lightLogoSrc && <img src={host.lightLogoSrc} alt=""/>}<span>{name}<b>.</b></span></Link><nav className="desktop-nav" aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>{nav.map(([id, zh, en]) => <Link key={id} href={home + '#' + id}>{locale === 'zh' ? zh : en}</Link>)}</nav><div className="header-actions"><Link className="language" href={languagePath} onClick={switchLanguage} aria-label={locale === 'zh' ? '切换到英文' : 'Switch to Chinese'}>{locale === 'zh' ? 'EN' : '中文'}</Link><Link className="button small outline" href={href(basePath, locale, 'contact')}>{locale === 'zh' ? '立即申请' : 'Apply now'}</Link><button className="menu-toggle" onClick={() => setMenu(true)} aria-expanded={menu} aria-label={locale === 'zh' ? '打开菜单' : 'Open menu'}><span /><span /></button></div></header>{menu && <Dialog close={() => setMenu(false)} label={locale === 'zh' ? '关闭菜单' : 'Close menu'}><nav className="mobile-menu">{nav.map(([id, zh, en]) => <Link key={id} href={home + '#' + id} onClick={() => setMenu(false)}>{locale === 'zh' ? zh : en}</Link>)}<Link href={href(basePath, locale, 'contact')} onClick={() => setMenu(false)}>{locale === 'zh' ? '联系教练' : 'Contact a coach'}</Link><Link href={href(basePath, locale, 'subscribe')} onClick={() => setMenu(false)}>{locale === 'zh' ? '申请训练计划' : 'Apply for a program'}</Link><Link href={languagePath} onClick={switchLanguage}>{locale === 'zh' ? 'English' : '中文'}</Link></nav></Dialog>}<main>{children}</main><footer className="forge-footer container"><Link className="brand" href={home + '#header'}>{name}<b>.</b></Link><nav aria-label={locale === 'zh' ? '页脚导航' : 'Footer navigation'}>{nav.map(([id, zh, en]) => <Link key={id} href={home + '#' + id}>{locale === 'zh' ? zh : en}</Link>)}</nav><div className="footer-bottom"><span>© {brand.year} {name} · {locale === 'zh' ? '在锤炼中，成就自己' : 'Forged in fire'}</span>{host.marketplaceHref && <Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div></footer>{host.marketplaceHref && <Link className="marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}><img src={host.lightLogoSrc} alt=""/><span>{name}</span></Link>}</div></MotionConfig>;
}
