'use client';
import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { Shell, href } from '../components/Shell';
export default function NotFoundPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><section className="section container not-found"><p className="eyebrow">404</p><h1>{locale === 'zh' ? '页面未找到' : 'Page not found'}</h1><p>{locale === 'zh' ? '请返回首页，继续探索训练计划。' : 'Return home to explore the training programs.'}</p><Link className="button" href={href(basePath, locale)}>{locale === 'zh' ? '返回首页' : 'Back to home'}</Link></section></Shell>; }
