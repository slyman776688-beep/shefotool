/**
 * AL YAMAMA TENTS - INTERACTIVE SCRIPT CONTROLLER
 * Includes bilingual control, estimator calculator, galleries, validation, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. PRELOADER CONTROLLER
    // ==========================================
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }, 1000); // 1-second display for premium feel
    });

    // ==========================================
    // 2. BILINGUAL LANGUAGE SWITCHER
    // ==========================================
    const langSwitchBtns = document.querySelectorAll('.lang-switch-btn');
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    // Load saved language or default to Arabic
    let currentLang = localStorage.getItem('site-lang') || 'ar';

    langSwitchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = (currentLang === 'ar') ? 'en' : 'ar';
            setLanguage(currentLang);
        });
    });

    function setLanguage(lang) {
        localStorage.setItem('site-lang', lang);
        if (lang === 'ar') {
            htmlEl.setAttribute('lang', 'ar');
            htmlEl.setAttribute('dir', 'rtl');
            bodyEl.classList.remove('ltr-mode');
            bodyEl.classList.add('rtl-mode');
        } else {
            htmlEl.setAttribute('lang', 'en');
            htmlEl.setAttribute('dir', 'ltr');
            bodyEl.classList.remove('rtl-mode');
            bodyEl.classList.add('ltr-mode');
        }
        // Force estimator update to reflect current language strings
        calculateQuote();
    }

    // ==========================================
    // 2.1 THEME SWITCHER CONTROLLER (DARK MODE)
    // ==========================================
    const themeSwitchBtns = document.querySelectorAll('.theme-switch-btn');
    
    // Load saved theme or default to light mode
    let currentTheme = localStorage.getItem('site-theme') || 'light';
    setTheme(currentTheme);

    themeSwitchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
            setTheme(currentTheme);
        });
    });

    function setTheme(theme) {
        localStorage.setItem('site-theme', theme);
        if (theme === 'dark') {
            bodyEl.classList.add('dark-mode');
        } else {
            bodyEl.classList.remove('dark-mode');
        }
    }

    // ==========================================
    // 3. STICKY HEADER & ACTIVE SCROLL LINKS
    // ==========================================
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('#nav-menu ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Sticky bg toggle
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link highlighting
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });

        // Show/hide Back to Top button
        const backToTopBtn = document.getElementById('back-to-top');
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show-btn');
        } else {
            backToTopBtn.classList.remove('show-btn');
        }
    });

    // ==========================================
    // 4. MOBILE NAVIGATION DRAWER
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle-btn');
    const navMenu = document.getElementById('nav-menu');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ==========================================
    // 5. PORTFOLIO FILTER ENGINE
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Set active class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterVal = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterVal === 'all' || category === filterVal) {
                    item.classList.add('show-item');
                } else {
                    item.classList.remove('show-item');
                }
            });
        });
    });

    // ==========================================
    // 6. LIGHTBOX MODULE (ZOOM)
    // ==========================================
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-image-target');
    const lightboxCaption = document.getElementById('lightbox-caption-target');
    const lightboxClose = document.getElementById('lightbox-close-btn');

    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const zoomBtn = item.querySelector('.zoom-btn');

        const openLightbox = () => {
            const activeLang = htmlEl.getAttribute('lang') || 'ar';
            const dynamicCaptionH = item.querySelector(activeLang === 'ar' ? 'h4[lang="ar"]' : 'h4[lang="en"]') || item.querySelector('h4');
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxCaption.textContent = dynamicCaptionH ? dynamicCaptionH.textContent : '';
        };

        // Open on zoom button click or double tap
        if (zoomBtn) {
            zoomBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openLightbox();
            });
        }
        item.addEventListener('click', openLightbox);
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxClose) {
            lightbox.style.display = 'none';
        }
    });

    // ==========================================
    // 7. TESTIMONIAL SLIDER MODULE
    // ==========================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.slider-dots .dot');
    let activeTestimonialIndex = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        testimonialCards.forEach(c => c.classList.remove('active'));
        testimonialDots.forEach(d => d.classList.remove('active'));

        testimonialCards[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        activeTestimonialIndex = index;
    }

    testimonialDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showTestimonial(index);
            resetTestimonialTimer();
        });
    });

    function startTestimonialTimer() {
        testimonialInterval = setInterval(() => {
            let nextIndex = activeTestimonialIndex + 1;
            if (nextIndex >= testimonialCards.length) {
                nextIndex = 0;
            }
            showTestimonial(nextIndex);
        }, 5000);
    }

    function resetTestimonialTimer() {
        clearInterval(testimonialInterval);
        startTestimonialTimer();
    }

    startTestimonialTimer();

    // ==========================================
    // 8. INTERACTIVE ESTIMATOR CALCULATOR
    // ==========================================
    const rangeSlider = document.getElementById('est-guests');
    const sliderValDisplay = document.getElementById('guest-count-val');
    const stepTabs = document.querySelectorAll('.step-tab');
    const stepContents = document.querySelectorAll('.step-content');
    const nextStepBtns = document.querySelectorAll('.next-step-btn');
    const prevStepBtns = document.querySelectorAll('.prev-step-btn');

    // Guest range slider live text
    rangeSlider.addEventListener('input', (e) => {
        sliderValDisplay.textContent = e.target.value;
        calculateQuote();
    });

    // Step Nav Tabs Click
    stepTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const stepNum = parseInt(tab.getAttribute('data-step'));
            // Only allow navigating forward if recalculated
            navigateToStep(stepNum);
        });
    });

    // Next/Prev Buttons
    nextStepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStep = parseInt(btn.getAttribute('data-next'));
            navigateToStep(nextStep);
        });
    });

    prevStepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const prevStep = parseInt(btn.getAttribute('data-prev'));
            navigateToStep(prevStep);
        });
    });

    // Handle Tent Radio Cards styling
    const tentOptions = document.querySelectorAll('.tent-option');
    tentOptions.forEach(opt => {
        opt.querySelector('input').addEventListener('change', () => {
            tentOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            calculateQuote();
        });
    });

    // Bind checkboxes triggers
    const checkBoxes = document.querySelectorAll('.addon-checkbox-label input');
    checkBoxes.forEach(chk => {
        chk.addEventListener('change', calculateQuote);
    });

    function navigateToStep(stepNum) {
        stepTabs.forEach(t => t.classList.remove('active'));
        stepContents.forEach(c => c.classList.remove('active'));

        // Highlight tabs up to active step
        stepTabs.forEach(t => {
            if (parseInt(t.getAttribute('data-step')) <= stepNum) {
                t.classList.add('active');
            }
        });

        document.getElementById(`step-content-${stepNum}`).classList.add('active');
        
        if (stepNum === 3) {
            calculateQuote();
        }
    }

    function calculateQuote() {
        const lang = localStorage.getItem('site-lang') || 'ar';
        
        const guestsInput = document.getElementById('est-guests');
        const eventTypeEl = document.getElementById('est-event-type');
        const seatingTypeEl = document.getElementById('est-seating-type');
        
        // Safeguard to prevent TDZ errors if elements are accessed before fully initialized
        if (!guestsInput || !eventTypeEl || !seatingTypeEl) return;
        
        const eventType = eventTypeEl.value;
        const seatingType = seatingTypeEl.value;
        const guestCount = parseInt(guestsInput.value);
        
        const tentRadio = document.querySelector('input[name="est-tent-type"]:checked');
        const tentType = tentRadio ? tentRadio.value : 'pvc';

        // 1. Calculate space requirement
        // Different layouts require different margins of space per guest
        let sqMeterPerGuest = 1.0;
        if (eventType === 'wedding') {
            sqMeterPerGuest = (seatingType === 'banquet') ? 1.2 : 0.8;
        } else if (eventType === 'expo') {
            sqMeterPerGuest = 1.5;
        } else if (eventType === 'gathering') {
            sqMeterPerGuest = 0.9;
        } else if (eventType === 'corporate') {
            sqMeterPerGuest = 1.1;
        }

        const rawAreaNeeded = guestCount * sqMeterPerGuest;

        // Recommend standard dimensions
        let suggestedSizeText = '';
        let areaVal = 0;

        if (rawAreaNeeded <= 50) {
            suggestedSizeText = lang === 'ar' ? '5م × 10م' : '5m x 10m';
            areaVal = 50;
        } else if (rawAreaNeeded <= 100) {
            suggestedSizeText = lang === 'ar' ? '8م × 12م' : '8m x 12m';
            areaVal = 96;
        } else if (rawAreaNeeded <= 200) {
            suggestedSizeText = lang === 'ar' ? '10م × 20م' : '10m x 20m';
            areaVal = 200;
        } else if (rawAreaNeeded <= 300) {
            suggestedSizeText = lang === 'ar' ? '15م × 20م' : '15m x 20m';
            areaVal = 300;
        } else if (rawAreaNeeded <= 450) {
            suggestedSizeText = lang === 'ar' ? '15م × 30م' : '15m x 30m';
            areaVal = 450;
        } else if (rawAreaNeeded <= 800) {
            suggestedSizeText = lang === 'ar' ? '20م × 40م' : '20m x 40m';
            areaVal = 800;
        } else {
            suggestedSizeText = lang === 'ar' ? '25م × 50م+' : '25m x 50m+';
            areaVal = 1250;
        }

        // Update displays
        document.getElementById('est-suggested-size').textContent = suggestedSizeText;
        document.getElementById('est-suggested-area').textContent = areaVal;
        document.getElementById('est-suggested-area-en').textContent = areaVal;

        // 2. Compile itemized inclusions
        const inclusionsList = document.getElementById('est-inclusions-list');
        inclusionsList.innerHTML = '';

        const inclusions = [];
        
        // Add basic tent type
        if (tentType === 'pvc') {
            inclusions.push(lang === 'ar' ? `هيكل خيمة أوروبية عازلة PVC بمقاس ${suggestedSizeText}` : `Waterproof PVC Marquee Structure (${suggestedSizeText})`);
        } else if (tentType === 'glass') {
            inclusions.push(lang === 'ar' ? `خيمة هيكلية بجدران زجاجية فاخرة بمقاس ${suggestedSizeText}` : `Luxury Glass wall structural pavilion (${suggestedSizeText})`);
        } else {
            inclusions.push(lang === 'ar' ? `بيت شعر تراثي تقليدي بمقاس ${suggestedSizeText}` : `Traditional Sadu Hair Tent Majlis (${suggestedSizeText})`);
        }

        // Add checked options
        if (document.getElementById('add-ac').checked) {
            // Rule of thumb: 1 Ton cooling per 12-15 sq meters for events in KSA
            const tonsNeeded = Math.ceil(areaVal / 12);
            inclusions.push(lang === 'ar' ? `تكييف هواء فريون مخصص بقوة إجمالية تعادل ${tonsNeeded} طن تبريد` : `Dedicated Air Conditioning system, total capacity: ${tonsNeeded} Tons`);
        }
        if (document.getElementById('add-stage').checked) {
            inclusions.push(lang === 'ar' ? "تجهيز مسرح خشبي داخلي مكسو، شاشات LED ونظام صوتي متكامل" : "Rigged interior stage, high-definition LED screens & PA Sound");
        }
        if (document.getElementById('add-furniture').checked) {
            inclusions.push(lang === 'ar' ? `فرش كامل بأرقى السجاد والأثاث المناسب لعدد ${guestCount} شخص` : `Luxury carpets, tablecloth drapes, banquet seating for ${guestCount} guests`);
        }
        if (document.getElementById('add-gen').checked) {
            inclusions.push(lang === 'ar' ? "مولد كهرباء احتياطي صامت مع شبكة الكابلات ولوحات توزيع السلامة" : "Silent standby power generator unit with cables & DB boards");
        }
        if (document.getElementById('add-coffee').checked) {
            inclusions.push(lang === 'ar' ? "طاقم ضيافة شعبية للقهوة والشاي والتمر (مرشدي ضيافة)" : "Arabian hot beverage waiters (gahwa, tea, and premium dates)");
        }
        if (document.getElementById('add-crowd').checked) {
            inclusions.push(lang === 'ar' ? "حواجز توجيه الحشود وبوابات أمنية مع طاقم تنظيم الدخول" : "Entrance control safety barriers and crowd management crew");
        }

        // Add to DOM list
        inclusions.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            inclusionsList.appendChild(li);
        });

        // 3. Format WhatsApp message
        const wsBtn = document.getElementById('est-whatsapp-send-btn');
        let wsText = '';

        if (lang === 'ar') {
            wsText = `مرحباً خيام اليمامة، أود الاستفسار عن عرض تسعيرة للخيام والتجهيزات للفعالية التالية:
- نوع المناسبة: ${getEventTypeNameAr(eventType)}
- طريقة الجلوس: ${getSeatingNameAr(seatingType)}
- عدد الضيوف المتوقع: ${guestCount} شخص
- الخيمة المطلوبة: ${getTentNameAr(tentType)} بمقاس ${suggestedSizeText}
- المستلزمات الإضافية المحددة:
`;
            inclusions.slice(1).forEach((inc, idx) => {
                wsText += `   ${idx + 1}. ${inc}\n`;
            });
            wsText += `\nأرجو تحديد التكلفة التقريبية وجدولة زيارة ميدانية للمعاينة.`;
        } else {
            wsText = `Hello Al Yamama Tents, I would like to request an estimate configuration:
- Event Category: ${getEventTypeNameEn(eventType)}
- Seating Option: ${getSeatingNameEn(seatingType)}
- Guests Target: ${guestCount} people
- Tent Selected: ${getTentNameEn(tentType)} (${suggestedSizeText})
- Extra add-ons selected:
`;
            inclusions.slice(1).forEach((inc, idx) => {
                wsText += `   ${idx + 1}. ${inc}\n`;
            });
            wsText += `\nPlease provide availability, pricing details and calendar for site inspection.`;
        }

        const encodedMsg = encodeURIComponent(wsText);
        wsBtn.onclick = () => {
            window.open(`https://api.whatsapp.com/send?phone=966557308666&text=${encodedMsg}`, '_blank');
        };
    }

    // Lookup functions for WhatsApp formatting
    function getEventTypeNameAr(val) {
        const mapping = { wedding: 'حفل زفاف', expo: 'معرض تجاري', gathering: 'اجتماع عائلي', corporate: 'حفل شركات' };
        return mapping[val] || val;
    }
    function getEventTypeNameEn(val) {
        const mapping = { wedding: 'Wedding Reception', expo: 'Trade Expo', gathering: 'Family Gathering', corporate: 'Corporate Event' };
        return mapping[val] || val;
    }
    function getSeatingNameAr(val) {
        const mapping = { banquet: 'طاولات عشاء دائرية', theater: 'صفوف مسرح متتالية', traditional: 'جلسات شعبية أرضية' };
        return mapping[val] || val;
    }
    function getSeatingNameEn(val) {
        const mapping = { banquet: 'Banquet Dining Tables', theater: 'Theater seating columns', traditional: 'Floor Cushions Majlis' };
        return mapping[val] || val;
    }
    function getTentNameAr(val) {
        const mapping = { pvc: 'خيمة أوروبية PVC', glass: 'خيمة زجاجية فاخرة', traditional: 'بيت شعر / خيمة تراثية' };
        return mapping[val] || val;
    }
    function getTentNameEn(val) {
        const mapping = { pvc: 'European PVC Tent', glass: 'Premium Glass Wall Marquee', traditional: 'Heritage Majlis Tent' };
        return mapping[val] || val;
    }

    // ==========================================
    // 9. CONTACT FORM INTERCEPTION & TOAST
    // ==========================================
    const contactForm = document.getElementById('main-contact-form');
    const toast = document.getElementById('success-toast');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect parameters
            const nameVal = document.getElementById('contact-name').value;
            const phoneVal = document.getElementById('contact-phone').value;
            const emailVal = document.getElementById('contact-email').value;
            const msgVal = document.getElementById('contact-msg').value;

            // Form Validation checks
            if (!nameVal || !phoneVal || !msgVal) return;

            // Show simulated submitting action
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';

            setTimeout(() => {
                // Success actions
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                
                // Show success toast popup
                toast.style.display = 'block';
                
                // Reset form inputs
                contactForm.reset();

                // Auto hide toast after 5 seconds
                setTimeout(() => {
                    toast.style.animation = 'fadeOut 0.4s ease forwards';
                    setTimeout(() => {
                        toast.style.display = 'none';
                        toast.style.animation = 'slideInToast 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
                    }, 400);
                }, 5000);
            }, 1200); // 1.2-second network latency simulation
        });
    }

    // ==========================================
    // 10. SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = document.querySelectorAll('.animate-on-scroll');

    const checkReveal = () => {
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const triggerOffset = window.innerHeight * 0.85; // triggers when 85% visible
            if (elTop < triggerOffset) {
                el.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', checkReveal);
    // Initial check
    checkReveal();

    // Initialize active language (after all components have loaded to prevent TDZ errors)
    setLanguage(currentLang);
});
