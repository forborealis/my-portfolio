import React, { useEffect, useState } from 'react';
import resumeFile from '../assets/files/HannahBusto_Resume.pdf';

const navigationLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        if (!isResumeOpen) return undefined;

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setIsResumeOpen(false);
        };

        document.addEventListener('keydown', closeOnEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', closeOnEscape);
            document.body.style.overflow = '';
        };
    }, [isResumeOpen]);

    const openResume = () => {
        setIsMenuOpen(false);
        setIsResumeOpen(true);
    };

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full border-b border-soft-border bg-canvas/95 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-4 sm:px-6 sm:py-5">
                <div className="flex items-center justify-center">
                    <div className="hidden items-center gap-6 md:flex lg:gap-8">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-primary-500"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="absolute right-4 flex items-center gap-3 sm:right-6">
                        <button
                            type="button"
                            onClick={openResume}
                            className="rounded-full bg-pink px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-pink-hover focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                            Resume
                        </button>

                        <button
                            className="p-2 text-ink md:hidden"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="mt-4 space-y-1 border-t border-soft-border pt-3 md:hidden">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 transition-colors hover:text-primary-500"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            </header>

            {isResumeOpen && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-6"
                    role="presentation"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) setIsResumeOpen(false);
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="resume-modal-title"
                        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-milky-white p-6 shadow-2xl sm:p-9"
                    >
                        <button
                            type="button"
                            aria-label="Close resume details"
                            onClick={() => setIsResumeOpen(false)}
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-canvas text-xl text-ink shadow-sm transition-colors hover:bg-pink focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            &times;
                        </button>

                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-500">
                            Resume
                        </p>
                        <h2 id="resume-modal-title" className="mb-7 text-3xl font-medium text-ink sm:text-4xl">
                            Hannah Aurora O. Busto
                        </h2>

                        <div className="space-y-5 text-sm sm:text-base">
                            <div>
                                <h3 className="mb-1 font-semibold text-ink">Course</h3>
                                <p className="text-muted">Bachelor of Science in Information Technology</p>
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-ink">Course duration</h3>
                                <p className="text-muted">2022 - 2026</p>
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-ink">School</h3>
                                <p className="text-muted">Technological University of the Philippines - Taguig</p>
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-ink">Internship experience</h3>
                                <p className="text-muted">
                                    Information Technology Intern at Vega Energy Services Corp. (February 2026 - May 2026).
                                    Built an LLM-powered energy audit reporting pipeline and a full-stack proposal and quotation builder.
                                </p>
                            </div>
                        </div>

                        <a
                            href={resumeFile}
                            download="HannahBusto_Resume.pdf"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-pink-hover focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                            Download resume
                            <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
