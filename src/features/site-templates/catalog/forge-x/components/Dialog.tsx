'use client';
import { useEffect, useRef, type ReactNode } from 'react';
export function Dialog({ close, label, children }: {
    close: () => void;
    label: string;
    children: ReactNode;
}) {
    const ref = useRef<HTMLDialogElement>(null);
    useEffect(() => { const dialog = ref.current, overflow = document.body.style.overflow; dialog?.showModal(); document.body.style.overflow = 'hidden'; return () => { dialog?.close(); document.body.style.overflow = overflow; }; }, []);
    return <dialog ref={ref} className="forgex-dialog" aria-label={label} onCancel={close} onClick={e => {
            if (e.target === e.currentTarget)
                close();
        }}><button className="dialog-close" onClick={close} aria-label={label}>×</button>{children}</dialog>;
}
