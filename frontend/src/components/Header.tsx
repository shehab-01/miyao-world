"use client"
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* ── Fixed Header ────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 flex items-center justify-center px-6"
        style={{ height: '80px' }}
      >
        {/* Logo — centred */}
        <div className="flex items-baseline gap-0">
          <span style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-0.02em', color: '#111' }}>
            MIAO
          </span>
          <span style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-0.02em', color: '#1A6BFF' }}>
            WORLD
          </span>
        </div>
      </header>

      {/* ── Left Nav — fixed, aligns with top of hero image ─────────── */}
      <nav
        className="flex flex-col items-start"
        style={{ position: 'fixed', top: '120px', left: '24px', gap: '8px', zIndex: 40 }}
      >
        {['ABOUT', 'LOOKBOOK', 'SHOP', 'COMMUNITY'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-black hover:text-[#1A6BFF] transition-colors"
            style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.08em' }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* ── Right Nav — fixed, mirrors left nav ─────────────────────── */}
      <nav
        className="flex flex-col items-end"
        style={{ position: 'fixed', top: '120px', right: '24px', gap: '8px', zIndex: 40 }}
      >
        {['LOGIN', 'JOIN', 'CART', 'MYPAGE'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-black hover:text-[#1A6BFF] transition-colors"
            style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.08em' }}
          >
            {item}
          </a>
        ))}
        <button className="text-black hover:text-[#1A6BFF] transition-colors mt-0.5">
          <Search size={16} strokeWidth={2.5} />
        </button>
      </nav>
    </>
  );
}
