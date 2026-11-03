'use client';
import { usePathname } from 'next/navigation';
import NotFoundPage from '../features/site-templates/catalog/forge-x/pages/NotFoundPage';
export default function NotFound() { const pathname = usePathname(); return <NotFoundPage basePath="" locale={pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh'}/>; }
