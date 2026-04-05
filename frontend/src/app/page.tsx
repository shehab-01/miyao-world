"use client"
import { Search, X } from 'lucide-react';
// import { ProductCard } from './components/ProductCard';
// import { ReviewCard } from './components/ReviewCard';

import { ProductCard } from '@/components/ProductCard';
import { ReviewCard } from '@/components/ReviewCard';

import { useState } from 'react';
import Image from 'next/image';
const peekingPets = '/static/peekingPets.png';

export default function App() {
  const [showMembershipPopup, setShowMembershipPopup] = useState(true);

  return (
    <div className="min-h-screen bg-white relative" style={{ minWidth: '1440px' }}>

      {/* ── Fixed Header ────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 flex items-center justify-center px-6"
        style={{ height: '80px' }}
      >
        {/* Logo — centred */}
        <div className="flex items-baseline gap-0">
          <span style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-0.02em', color: '#111' }}>
            PET
          </span>
          <span style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-0.02em', color: '#1A6BFF' }}>
            LAB
          </span>
          <sup
            style={{
              fontSize: '14px',
              fontWeight: 900,
              color: '#1A6BFF',
              lineHeight: 1,
              verticalAlign: 'super',
              marginLeft: '1px',
            }}
          >
            +
          </sup>
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
        {['JOIN', 'CART', 'MYPAGE'].map((item) => (
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

      {/* ── Floating Product (right side) ───────────────────────────── */}
      <div className="fixed right-8 top-1/3 z-40">
        <Image
          src="https://images.unsplash.com/photo-1769594977857-cb3e2ce77c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3klMjBwcm9kdWN0fGVufDF8fHx8MTc3NTM4MTgzNHww&ixlib=rb-4.1.0&q=80&w=400"
          alt="Featured Product"
          width={96}
          height={96}
          className="w-24 h-auto drop-shadow-xl rounded-lg"
        />
      </div>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      {/*
        Top padding = header (80px) + gap from header to headline (100px) = 180px
      */}
      <main style={{ paddingTop: '110px', paddingBottom: '80px' }}>

        {/* ── Hero Headline ─────────────────────────────────────────── */}
        <section className="text-center" style={{ marginBottom: '24px' }}>
          <h1
            className="uppercase mx-auto"
            style={{
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            HELLO, IM READY TO PLAY
          </h1>
        </section>

        {/* ── Hero Image ────────────────────────────────────────────── */}
        <section className="flex justify-center" style={{ marginBottom: '40px' }}>
          <Image
            src="https://images.unsplash.com/photo-1767363592636-6ec7ecd3c06b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBwYXclMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NTM4MTgzNHww&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Dog Paw"
            width={600}
            height={460}
            style={{ objectFit: 'cover', display: 'block' }}
          />
        </section>

        {/* ── New Season Subheading ─────────────────────────────────── */}
        <section className="text-center" style={{ marginBottom: '64px' }}>
          <h2
            className="uppercase"
            style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '12px' }}
          >
            NEW SEASON, HAPPY PET
          </h2>
          <div style={{ lineHeight: 1.6 }}>
            <p style={{ fontSize: '18px' }}>Make every day brighter for your pet</p>
            <p style={{ fontSize: '18px' }}>Curated essentials for happy and comfortable living</p>
            <p style={{ fontSize: '18px' }}>Little things that make a big difference</p>
          </div>
        </section>

        {/* ── Product Grid 1 ────────────────────────────────────────── */}
        <section style={{ marginBottom: '80px', paddingLeft: '48px', paddingRight: '48px' }}>
          <div
            style={{
              maxWidth: '1344px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            <ProductCard
              image="https://images.unsplash.com/photo-1769594977857-cb3e2ce77c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3klMjBwcm9kdWN0fGVufDF8fHx8MTc3NTM4MTgzNHww&ixlib=rb-4.1.0&q=80&w=600"
              title="최신 스마트디자인"
              description="상품모아영양관리 관을 클리너(이 여가) 노동"
              originalPrice="₩79,000원"
              salePrice="59,000원"
              discount="19%"
              colors={['#000000', '#D4B896']}
              badge="BEST"
              newBadge="NEW 10个"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1749703050879-ee1c2eb5d5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBiZWQlMjBwcm9kdWN0fGVufDF8fHx8MTc3NTM4MTgzNHww&ixlib=rb-4.1.0&q=80&w=600"
              title="프리미엄 반려견 침대"
              description="편안한 수면을 위한 고급 소재 반려견 침대"
              originalPrice="₩89,000원"
              salePrice="69,000원"
              discount="22%"
              colors={['#4A7BA7', '#D4B896']}
              badge="BEST"
              newBadge="NEW 10个"
              countdown="1월15일 05:22:28 종료"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1605092116196-404f5b8caa15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzUzODE4MzR8MA&ixlib=rb-4.1.0&q=80&w=600"
              title="반려동물 액세서리 세트"
              description="귀엽고 실용적인 반려동물 액세서리 모음"
              originalPrice="₩45,000원"
              salePrice="35,000원"
              discount="22%"
              colors={['#000000', '#D4B896']}
              badge="BEST"
              newBadge="NEW 10个"
              countdown="1월15일 05:22:28 종료"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1643694846087-454d55c69a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB0b3klMjBwcm9kdWN0fGVufDF8fHx8MTc3NTM4MTgzNXww&ixlib=rb-4.1.0&q=80&w=600"
              title="고양이 장난감 세트"
              description="고양이의 호기심을 자극하는 인터랙티브 장난감"
              originalPrice="₩32,000원"
              salePrice="24,900원"
              discount="22%"
              colors={['#6B4423', '#D4B896']}
              badge="BEST"
              newBadge="NEW 10个"
            />
          </div>
        </section>

        {/* ── Product Grid 2 ────────────────────────────────────────── */}
        <section style={{ marginBottom: '80px', paddingLeft: '48px', paddingRight: '48px' }}>
          <div
            style={{
              maxWidth: '1344px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            <ProductCard
              image="https://images.unsplash.com/photo-1577447278822-37801be21738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBjb2xsYXIlMjBsZWFzaHxlbnwxfHx8fDE3NzUzODE4MzV8MA&ixlib=rb-4.1.0&q=80&w=600"
              title="리드줄 & 칼라 세트"
              description="내구성 높은 소재의 산책 필수 아이템"
              originalPrice="₩38,000원"
              salePrice="28,000원"
              discount="26%"
              colors={['#000000', '#D4B896']}
              badge="BEST"
              newBadge="NEW 10个"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1767023023369-96a7c923be0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBib3dsJTIwZm9vZHxlbnwxfHx8fDE3NzUzMDU0NjV8MA&ixlib=rb-4.1.0&q=80&w=600"
              title="도자기 식기 세트"
              description="먹기 편한 디자인의 반려동물 전용 식기"
              originalPrice="₩42,000원"
              salePrice="32,000원"
              discount="24%"
              colors={['#6B4423', '#D4B896']}
              badge="BEST"
              newBadge="NEW 10个"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBibGFua2V0fGVufDF8fHx8MTc3NTM4MTgzOXww&ixlib=rb-4.1.0&q=80&w=600"
              title="포근한 반려동물 담요"
              description="부드러운 소재로 만든 겨울 필수 담요"
              originalPrice="₩55,000원"
              salePrice="42,000원"
              discount="24%"
              colors={['#000000', '#D4B896']}
              badge="BEST"
              newBadge="NEW 10个"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1769594977857-cb3e2ce77c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3klMjBwcm9kdWN0fGVufDF8fHx8MTc3NTM4MTgzNHww&ixlib=rb-4.1.0&q=80&w=600"
              title="인터랙티브 스마트 장난감"
              description="반려동물 혼자서도 즐길 수 있는 자동 장난감"
              originalPrice="₩68,000원"
              salePrice="52,000원"
              discount="24%"
              colors={['#D4A574', '#D4B896']}
              badge="BEST"
              newBadge="NEW 10个"
            />
          </div>
        </section>

        {/* ── Customer Favorites — Peeking Pets ─────────────────────── */}
        <section style={{ marginBottom: '80px' }}>
          {/* Peeking pets strip */}
          <div
            className="relative overflow-hidden"
            style={{
              paddingTop: '64px',
              paddingBottom: '0',
              marginBottom: '0',
            }}
          >
            <div className="flex justify-center items-end">
              <Image
                src={peekingPets}
                alt="Peeking Pets"
                width={900}
                height={400}
                style={{ width: '100%', maxWidth: '900px', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Section title */}
          <div className="text-center" style={{ paddingTop: '40px', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '56px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              CUSTOMER FAVORITES BEST PIC . TOP RATED . 
            </h2>
          </div>

          {/* Real Review subheader */}
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h3
              style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '0.05em', marginBottom: '10px' }}
            >
              REAL REVIEW
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6 }}>실제 구매 고객의 관물을 담은 리뷰</p>
            <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
              경험에서 나온 이야기를 직접의 진짜 패턴을 확인하세요.
            </p>
          </div>

          {/* Review Cards — horizontal scroll */}
          <div style={{ paddingLeft: '48px', paddingRight: '48px', overflowX: 'auto' }}>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                maxWidth: '1344px',
                margin: '0 auto',
              }}
            >
              {[
                {
                  image: 'https://images.unsplash.com/photo-1618397360709-9dd900837411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB3aXRoJTIwdG95fGVufDF8fHx8MTc3NTM4MTgzOHww&ixlib=rb-4.1.0&q=80&w=400',
                  text: '부들부들 좋아하세요. 여러 상품에서 선택하셔서 좋았어요.',
                  author: '강아지맘 김지영',
                  authorImg: 'https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUzMjk3NDZ8MA&ixlib=rb-4.1.0&q=80&w=200',
                },
                {
                  image: 'https://images.unsplash.com/photo-1697399834687-d0ba490ed457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aXRoJTIwdG95fGVufDF8fHx8MTc3NTM4MTgzOHww&ixlib=rb-4.1.0&q=80&w=400',
                  text: '언제나가 좀 마음에라. 지금좀 조직검요로 귀요은 게 있어요.',
                  author: '고양이집사 박서연',
                  authorImg: 'https://images.unsplash.com/photo-1719305406153-b0d36aa305ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJieSUyMGNhdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTMzODMxMnww&ixlib=rb-4.1.0&q=80&w=200',
                },
                {
                  image: 'https://images.unsplash.com/photo-1725544109150-8c6cd4a4824d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHB1cHB5fGVufDF8fHx8MTc3NTM4MTgzN3ww&ixlib=rb-4.1.0&q=80&w=400',
                  text: '고양이가 관리에 새롭 사람를 잘 휴먼을 파악이 과악이요.',
                  author: '퍼피러버 이민준',
                  authorImg: 'https://images.unsplash.com/photo-1631048905843-88f82fba8fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFnbGUlMjBkb2d8ZW58MXx8fHwxNzc1MzcwNDQ4fDA&ixlib=rb-4.1.0&q=80&w=200',
                },
                {
                  image: 'https://images.unsplash.com/photo-1691351942745-0e2858a09bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXR0ZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3NTM4MTgzN3ww&ixlib=rb-4.1.0&q=80&w=400',
                  text: '가무한 관이 성립되. 내 재특다음은 귀으모이다 지우네요나.',
                  author: '냥이친구 최수아',
                  authorImg: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjYXR8ZW58MXx8fHwxNzc1MzgxODM5fDA&ixlib=rb-4.1.0&q=80&w=200',
                },
                {
                  image: 'https://images.unsplash.com/photo-1600157799604-e0887fbe0938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBsYXlpbmclMjB0b3l8ZW58MXx8fHwxNzc1Mjc1MjEzfDA&ixlib=rb-4.1.0&q=80&w=400',
                  text: '에에으는 좋는 사용용요. 리모수도 다. 관토는 관음이다요.',
                  author: '댕댕이아빠 정우진',
                  authorImg: 'https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUzMjk3NDZ8MA&ixlib=rb-4.1.0&q=80&w=200',
                },
              ].map((review, i) => (
                <ReviewCard
                  key={i}
                  image={review.image}
                  text={review.text}
                  author={review.author}
                  authorImage={review.authorImg}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────── */}
        <footer style={{ backgroundColor: '#fff', color: '#222', borderTop: '1px solid #e5e5e5', padding: '60px 48px 40px', position: 'relative' }}>
          <div style={{ maxWidth: '1344px', margin: '0 auto' }}>

            {/* Top row: GUIDE | CUSTOMER CENTER | SNS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>

              {/* GUIDE */}
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', marginBottom: '14px' }}>GUIDE</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['ABOUT', '이용약관', '이용안내', '개인정보처리방침'].map((item) => (
                    <li key={item} style={{ marginBottom: '8px' }}>
                      <a href="#" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CUSTOMER CENTER */}
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', marginBottom: '14px' }}>CUSTOMER CENTER</h4>
                <p style={{ fontSize: '13px', color: '#222', marginBottom: '4px' }}>070-0000-0000</p>
                <p style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>am 09:00 ~ pm18:00</p>
                <p style={{ fontSize: '12px', color: '#1A6BFF', marginBottom: '4px' }}>lunch: pm 12:00 ~ pm 13:00</p>
                <p style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>sat, sun, holiday off</p>
                <p style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>국민 | 000000-00-000000</p>
                <p style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>신한 | 000000-00-000000</p>
                <p style={{ fontSize: '12px', color: '#555' }}>예금주 | 홍길동</p>
              </div>

              {/* SNS */}
              <div style={{ textAlign: 'right' }}>
                <h4 style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', marginBottom: '14px' }}>SNS</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Kakao', 'Facebook', 'Youtube', 'Instagram'].map((item) => (
                    <li key={item} style={{ marginBottom: '8px' }}>
                      <a href="#" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            {/* <div style={{ borderTop: '1px solid #e5e5e5', marginBottom: '40px' }} /> */}

            {/* COMPANY — centered */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h4 style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', marginBottom: '14px' }}>COMPANY</h4>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>대표자 | 맞명</p>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>개인정보보호책임자 |</p>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>주소 |</p>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>대표전화</p>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>사업자등록번호 | S51-01-02124</p>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>통신판매업 신고번호 |</p>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>Copyright © 소툼플 마툼 All rights reserved.</p>
              <p style={{ fontSize: '11px', color: '#aaa' }}>Design by 랄랄</p>
            </div>
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'absolute',
              right: '48px',
              bottom: '48px',
              width: '36px',
              height: '36px',
              border: '1px solid #ccc',
              background: '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              color: '#555',
            }}
          >
            ∧
          </button>
        </footer>
      </main>

      {/* ── Membership Event Popup ───────────────────────────────────── */}
      {showMembershipPopup && (
        <div
          className="fixed bottom-6 left-6 z-50 bg-black text-white rounded-xl overflow-hidden"
          style={{ width: '260px' }}
        >
          {/* Top image */}
          

          {/* Content */}
          
        </div>
      )}
    </div>
  );
}