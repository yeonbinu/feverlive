// 피버라이브 웹사이트 데이터 및 로직

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Data Injection
    
    // 제공 서비스 영역 데이터
    const services = [
        {
            id: 's1',
            title: 'Live Broadcasting',
            description: '전문적인 라이브 커머스 방송 기획부터 현장 송출, 사후 관리까지 통합 운영 솔루션을 제공합니다.',
            iconPath: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>`
        },
        {
            id: 's2',
            title: 'Influencer Matching',
            description: '고객 브랜드 가치 및 셀링 포인트에 최적화된 쇼호스트 및 인플루언서를 매칭합니다.',
            iconPath: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
            id: 's3',
            title: 'Digital Marketing',
            description: '라이브 방송 전, 중, 후 다각도 데이터를 기반으로 맞춤형 퍼포먼스 마케팅을 집행합니다.',
            iconPath: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`
        }
    ];

    // 플랫폼 특장점 데이터
    const platformFeatures = [
        '초저지연(Ultra-low latency) 고화질 라이브 스트리밍 환경 구축',
        '판매 전환율, 시청자 유입 이탈 분석 등 실시간 데이터 대시보드',
        '게이미피케이션, 드롭스 등 시청자 참여를 유도하는 인터랙티브 모듈',
        '고객 행동 기반 CRM 연동 및 리타겟팅 마케팅 솔루션'
    ];

    // 협력 파트너사 데이터 (더미 데이터 생성)
    const partners = [
        'Brand Alpha', 'Mega Corp', 'NextGen Retail', 'Sparkle Beauty', 
        'Apex Tech', 'Glow', 'Luna Fashion', 'Hyper Market'
    ];

    // --- Render Services ---
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        services.forEach((service, index) => {
            const card = document.createElement('div');
            card.className = `service-card glass-panel fade-in-up delay-${index + 1}`;
            card.innerHTML = `
                <div class="service-icon">
                    ${service.iconPath}
                </div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // --- Render Platform Features ---
    const featureList = document.getElementById('featureList');
    if (featureList) {
        platformFeatures.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="check-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>${feature}</span>
            `;
            featureList.appendChild(li);
        });
    }

    // --- Render Partners Marquee ---
    const marqueeTrack = document.getElementById('marqueeTrack');
    if (marqueeTrack) {
        // 무한 스크롤을 위해 배열 반복 (2번 반복)
        const extendedPartners = [...partners, ...partners];
        extendedPartners.forEach(partner => {
            const item = document.createElement('div');
            item.className = 'marquee-item';
            item.textContent = partner;
            marqueeTrack.appendChild(item);
        });
    }

    // 2. UI Interactions

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav-list');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            header.classList.toggle('menu-active');
            nav.classList.toggle('active');
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('.nav-link[href^="#"], .hero-actions a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close menu if open
                if (header.classList.contains('menu-active')) {
                    header.classList.remove('menu-active');
                    nav.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Blur Effect on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Contact Form Submission Default Prevention
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btnSubmit = contactForm.querySelector('.btn-submit');
            const originalText = btnSubmit.innerHTML;
            
            // 단순 성공 피드백 연출
            btnSubmit.innerHTML = '<span>전송 완료!</span>';
            btnSubmit.style.backgroundColor = 'var(--success-color, #10b981)';
            
            setTimeout(() => {
                btnSubmit.innerHTML = originalText;
                btnSubmit.style.backgroundColor = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // 4. Scroll Animation Observer
    const animatedElements = document.querySelectorAll('.fade-in-up, .reveal-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 한번 나타나면 계속 유지 (옵셔널)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(el => observer.observe(el));
    
    // 강제 첫 섹션 출현
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal-text').forEach(el => el.classList.add('visible'));
    }, 100);
});
