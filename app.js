// Paw Print Click Effect (Now bigger via CSS)
document.addEventListener('click', function(e) {
    const paw = document.createElement('i');
    paw.className = 'ph-fill ph-paw-print paw-click';
    paw.style.left = e.pageX + 'px';
    paw.style.top = e.pageY + 'px';
    document.body.appendChild(paw);
    setTimeout(() => { paw.remove(); }, 800);
});

const translations = {
    en: {
        "nav-home": "Home", "nav-services": "Services", "nav-team": "Our Team", "nav-work": "Our Work", "nav-contact": "Contact", "nav-tech": "Tech & Tests",
        "hero-badge": "Professional Veterinary Care",
        "hero-title": "Advanced Healthcare for Your Best Friend",
        "hero-desc": "State-of-the-art veterinary medicine, expert surgeries, and a premium retail pharmacy—all under one roof in Sulaymaniyah.",
        "hero-btn": "Book an Appointment",
        "trusted-title": "Trusted by Hundreds", "trusted-desc": "Pet parents in Sulaymaniyah",
        "ribbon-1": "Expert Vets", "ribbon-2": "In-House Lab", "ribbon-3": "Premium Pharmacy",
        "about-tag": "Welcome to Asia Vet", "about-title": "A New Standard in Veterinary Excellence",
        "about-desc": "We believe your pets deserve the same level of medical care as any family member. Equipped with modern technology and a passionate team.",
        "about-btn": "Learn More About Us",
        
        /* Services */
        "serv-page-tag": "What We Do", "serv-page-title": "Comprehensive Pet Healthcare", "serv-page-desc": "From routine wellness checks and premium nutrition to advanced surgical procedures.",
        "srv1-title": "Pharmacy & Retail Supplies", "srv1-desc": "Our fully stocked on-site retail center ensures you never have to go out of your way for your pet's essentials.",
        "srv2-title": "Advanced Diagnostics", "srv2-desc": "Our hospital features a state-of-the-art internal laboratory that delivers accurate, rapid test results.",
        "srv3-title": "Expert Surgical Care", "srv3-desc": "Our surgical suite is equipped for maximum safety. From routine spays to complex soft tissue procedures.",
        "srv4-title": "Professional Grooming", "srv4-desc": "Keep your pet looking and feeling their best with haircuts, nail trimming, and deep cleaning showers.",
        
        /* Team */
        "team-page-tag": "The Experts", "team-page-title": "Meet Our Dedicated Team", "team-page-desc": "Our passionate veterinarians and support staff treat every patient as if they were their own.",
        "team-doc-heading": "Our Veterinarians", "team-staff-heading": "Grooming & Care Staff",
        "doc1-role": "Lead Veterinarian & Surgeon", "doc1-desc": "Specializing in advanced soft-tissue surgery and critical care.",
        "doc2-role": "Veterinary Specialist", "doc2-desc": "Passionate about preventative medicine and diagnostics.",
        "doc3-role": "Veterinarian", "doc3-desc": "Dedicated to comprehensive pet health and wellness.",
        "doc4-role": "Veterinary Doctor", "doc4-desc": "Providing compassionate and expert care.",
        "doc5-role": "Veterinary Surgeon", "doc5-desc": "Expert in routine and complex procedures.",
        "groom1-role": "Professional Pet Groomer", "groom1-desc": "Specializes in gentle, stress-free grooming and bathing.",
        "groom2-role": "Pet Care Specialist", "groom2-desc": "Ensuring your pets look and feel their absolute best.",

        /* Work Page */
        "work-page-tag": "Gallery & News", "work-page-title": "Our Success Stories", "work-page-desc": "See the difference expert care makes with real results, before-and-afters, and clinic news.",
        "work1-title": "Dental Cleaning Success", "work1-desc": "A routine ultrasonic dental scaling brought this patient's smile back and prevented future gum disease.",
        "work2-title": "Post-Surgery Recovery", "work2-desc": "Watch this brave patient walking comfortably just days after a complex orthopedic procedure.",

        /* Tech */
        "tech-page-tag": "Our Equipment", "tech-page-title": "Advanced Veterinary Technology", "tech-page-desc": "We invest in state-of-the-art medical equipment.",
        "tech1-title": "Digital X-Ray", "tech1-desc": "High-resolution digital radiography with minimal radiation.",
        "tech2-title": "Diagnostic Ultrasound", "tech2-desc": "Non-invasive, real-time imaging used for safe abdominal evaluations.",
        "tech3-title": "In-House Lab", "tech3-desc": "Complete blood counts processed in minutes.",
        "tech4-title": "Ultrasonic Dental Unit", "tech4-desc": "Advanced dental scaling and polishing equipment.",
        
        /* Contact & Footer */
        "contact-page-tag": "Get in Touch", "contact-page-title": "We Are Here For You", "contact-page-desc": "Reaching us is easy for any concerns or appointments.",
        "contact-info-title": "Contact Information", "contact-hours-title": "Operating Hours",
        "hours-week": "Saturday - Thursday: 9:00 AM - 10:00 PM", "hours-weekend": "Friday: 1:00 PM - 5:00 PM",
        "hours-call-note": "Call us anytime during opening hours",
        "contact-map-title": "Find Us in Sulaymaniyah", "footer-desc": "Elevating veterinary standards in Sulaymaniyah.",
        "footer-quick-links": "Quick Links", "footer-contact": "Contact & Location",
        "footer-loc": "Sulaymaniyah, Iraq", "footer-home": "Home", "footer-services": "Services", "footer-team": "Our Team", "footer-tech": "Tech & Tests"
    },
    ku: {
        "nav-home": "سەرەکی", "nav-services": "خزمەتگوزارییەکان", "nav-team": "تیمی ئێمە", "nav-work": "کارەکانمان", "nav-contact": "پەیوەندی", "nav-tech": "تەکنەلۆژیا",
        "hero-badge": "چاودێری ڤێتێرنەری پیشەگەرانە",
        "hero-title": "چاودێری تەندروستی پێشکەوتوو بۆ ئاژەڵەکەت",
        "hero-desc": "پزیشکی ڤێتێرنەری سەردەمیانە، نەشتەرگەری پسپۆڕ، و دەرمانخانەی پێداویستی نایاب—هەمووی لە یەک شوێندا لە سلێمانی.",
        "hero-btn": "کاتی سەردان دیاری بکە",
        "trusted-title": "جێی متمانەی سەدان", "trusted-desc": "خاوەن ئاژەڵ لە سلێمانی",
        "ribbon-1": "ڤێتێرنەری پسپۆڕ", "ribbon-2": "تاقیگەی ناوخۆیی", "ribbon-3": "دەرمانخانەی نایاب",
        "about-tag": "بەخێربێن بۆ نەخۆشخانەی ئاسیا", "about-title": "ستانداردێکی نوێ لە خزمەتگوزاری ڤێتێرنەری",
        "about-desc": "بە تەکنەلۆژیای مۆدێرن و تیمێکی دڵسۆز، هەموو شتێک چارەسەر دەکەین.",
        "about-btn": "زیاتر لەسەر ئێمە بزانە",
        "serv-page-tag": "ئەوەی ئێمە دەیکەین", "serv-page-title": "چاودێری تەندروستی گشتگیر بۆ ئاژەڵان", "serv-page-desc": "ئێمە بە تەواوی ئامادەین بۆ مامەڵەکردن لەگەڵ هەموو پێداویستییەکانی ئاژەڵەکەت.",
        "srv1-title": "دەرمانخانە و پێداویستی", "srv1-desc": "کەلوپەلی ڕۆژانە دەفرۆشین بەبێ ئەوەی پێویست بکات بچیتە دەرەوە.",
        "srv2-title": "پشکنین و دەستنیشانکردن", "srv2-desc": "نەخۆشخانەکەمان تاقیگەیەکی ناوخۆیی پێشکەوتووی هەیە بۆ ئەنجامی خێرا.",
        "srv3-title": "چاودێری نەشتەرگەری", "srv3-desc": "ژووری نەشتەرگەریمان بۆ زۆرترین سەلامەتی ئامادە کراوە.",
        "srv4-title": "تووک بڕین و خۆشۆردن", "srv4-desc": "خزمەتگوزارییەکانمان بریتین لە توک بڕین و خۆشۆردنی قووڵ.",
        
        "team-page-tag": "پسپۆڕەکان", "team-page-title": "چاوپێکەوتن لەگەڵ تیمە دڵسۆزەکەمان", "team-page-desc": "پزیشکەکانمان وەک هی خۆیان مامەڵە لەگەڵ نەخۆشێک دەکەن.",
        "team-doc-heading": "پزیشکە ڤێتێرنەرییەکانمان", "team-staff-heading": "تیمی توک بڕین و شۆردن",
        "doc1-role": "پزیشکی سەرەکی و نەشتەرگەر", "doc1-desc": "پسپۆڕ لە نەشتەرگەری پێشکەوتوو و چاودێری ورد.",
        "doc2-role": "پسپۆڕی ڤێتێرنەری", "doc2-desc": "خولیای پزیشکی خۆپارێزی و دەستنیشانکردن.",
        "doc3-role": "پزیشکی ڤێتێرنەری", "doc3-desc": "تەرخانکراوە بۆ تەندروستی گشتگیری ئاژەڵان.",
        "doc4-role": "پزیشکی ڤێتێرنەری", "doc4-desc": "دابینکردنی چاودێری سۆزداری و شارەزا.",
        "doc5-role": "پزیشکی نەشتەرگەری", "doc5-desc": "پسپۆڕ لە نەشتەرگەرییە ئاڵۆزەکان.",
        "groom1-role": "تووک بڕینی پیشەگەر", "groom1-desc": "پسپۆڕە لە توک بڕین و شۆردنی ئاژەڵان.",
        "groom2-role": "شارەزای چاودێری ئاژەڵان", "groom2-desc": "دڵنیابوون لەوەی ئاژەڵەکانتان بە جوانترین شێوە دەردەکەون.",

        "work-page-tag": "وێنە و هەواڵەکان", "work-page-title": "چیرۆکە سەرکەوتووەکانمان", "work-page-desc": "جیاوازی چاودێری شارەزایانە ببینە لەگەڵ ئەنجامی ڕاستەقینە و وێنەی پێش و پاش.",
        "work1-title": "سەرکەوتنی پاککردنەوەی ددان", "work1-desc": "پاککردنەوەیەکی ڕۆتینی ددان زەردەخەنەی ئەم نەخۆشەی گەڕاندەوە.",
        "work2-title": "چاکبوونەوەی دوای نەشتەرگەری", "work2-desc": "سەیری ئەم نەخۆشە ئازایە بکە کە بە ئاسوودەیی دەڕوات دوای نەشتەرگەری.",

        "tech-page-tag": "ئامێرەکانمان", "tech-page-title": "تەکنەلۆژیای پێشکەوتوو", "tech-page-desc": "ئێمە وەبەرهێنان لە ئامێری پزیشکی سەردەمیانە دەکەین.",
        "tech1-title": "تیشکی ئێکس-رەی", "tech1-desc": "وێنەگرتنی دیجیتاڵی بە ڕوونی بەرز.",
        "tech2-title": "سۆناری دەستنیشانکردن", "tech2-desc": "وێنەگرتنی ڕاستەقینە بۆ پشکنینی سک و دڵ.",
        "tech3-title": "تاقیگەی خوێن", "tech3-desc": "پشکنینی تەواوی خوێن لە چەند خولەکێکدا.",
        "tech4-title": "ئامێری ددان", "tech4-desc": "ئامێری پێشکەوتووی پاککردنەوەی ددان.",
        
        "contact-page-tag": "پەیوەندیمان پێوە بکە", "contact-page-title": "ئێمە لێرەین بۆ تۆ", "contact-page-desc": "گەیشتن بە ئێمە ئاسانە.",
        "contact-info-title": "زانیاری پەیوەندی", "contact-hours-title": "کاتی کارکردن",
        "hours-week": "شەممە - پێنجشەممە: ٩:٠٠ بەیانی - ١٠:٠٠ شەو", "hours-weekend": "هەینی: ١:٠٠ پاشنیوەڕۆ - ٥:٠٠ ئێوارە",
        "hours-call-note": "لە کاتی کارکردندا پەیوەندیمان پێوە بکە",
        "contact-map-title": "لە سلێمانی بماندۆزەرەوە", "footer-desc": "بەرزکردنەوەی ستانداردەکانی ڤێتێرنەری لە سلێمانی.",
        "footer-quick-links": "بەستەرە خێراکان", "footer-contact": "پەیوەندی و ناونیشان",
        "footer-loc": "سلێمانی، کوردستان", "footer-home": "سەرەکی", "footer-services": "خزمەتگوزارییەکان", "footer-team": "تیمەکەمان بناسە", "footer-tech": "تەکنەلۆژیا"
    },
    ar: {
        "nav-home": "الرئيسية", "nav-services": "الخدمات", "nav-team": "فريقنا", "nav-work": "أعمالنا", "nav-contact": "اتصل بنا", "nav-tech": "التكنولوجيا",
        "hero-badge": "رعاية بيطرية احترافية", "hero-title": "رعاية صحية متقدمة لأفضل صديق لك", "hero-desc": "أحدث طرق الطب البيطري، جراحات متخصصة، وصيدلية متميزة.",
        "hero-btn": "احجز موعداً",
        "trusted-title": "موثوق به", "trusted-desc": "أصحاب الحيوانات الأليفة في السليمانية",
        "ribbon-1": "أطباء خبراء", "ribbon-2": "مختبر داخلي", "ribbon-3": "صيدلية متميزة",
        "about-tag": "مرحباً بكم", "about-title": "معيار جديد في التميز البيطري", "about-desc": "نحن نؤمن بأن حيواناتك الأليفة تستحق نفس المستوى من الرعاية الطبية.",
        "about-btn": "تعرف علينا",
        
        "serv-page-tag": "ماذا نفعل", "serv-page-title": "رعاية صحية شاملة", "serv-page-desc": "نحن مجهزون بالكامل للتعامل مع جميع احتياجات حيوانك الأليف.",
        "srv1-title": "صيدلية ومستلزمات", "srv1-desc": "مركز البيع بالتجزئة الخاص بنا المجهز بالكامل.",
        "srv2-title": "التشخيص والاختبارات", "srv2-desc": "مستشفانا يتميز بمختبر داخلي حديث يقدم نتائج دقيقة.",
        "srv3-title": "رعاية جراحية متخصصة", "srv3-desc": "جناح الجراحة لدينا مجهز لتحقيق أقصى درجات الأمان.",
        "srv4-title": "حلاقة واستحمام", "srv4-desc": "تشمل خدماتنا اللطيفة قص الشعر والاستحمام العميق.",
        
        "team-page-tag": "الخبراء", "team-page-title": "تعرف على فريقنا المتفاني", "team-page-desc": "يعامل الأطباء البيطريون موظفو الدعم لدينا كل مريض كعائلتهم.",
        "team-doc-heading": "أطباؤنا البيطريون", "team-staff-heading": "فريق الحلاقة والرعاية",
        "doc1-role": "طبيب بيطري رئيسي", "doc1-desc": "متخصص في جراحة الأنسجة الرخوة المتقدمة.",
        "doc2-role": "أخصائي بيطري", "doc2-desc": "شغوف بالطب الوقائي والتشخيص.",
        "doc3-role": "طبيب بيطري", "doc3-desc": "مكرس لصحة وعافية الحيوانات الأليفة.",
        "doc4-role": "طبيب بيطري", "doc4-desc": "تقديم رعاية عطوفة وخبيرة.",
        "doc5-role": "جراح بيطري", "doc5-desc": "خبير في الإجراءات الروتينية والمعقدة.",
        "groom1-role": "حلاق محترف", "groom1-desc": "يتخصص في الحلاقة والاستحمام اللطيف.",
        "groom2-role": "أخصائي رعاية", "groom2-desc": "ضمان أن تبدو حيواناتك الأليفة في أفضل حالاتها.",

        "work-page-tag": "المعرض والأخبار", "work-page-title": "قصص نجاحنا", "work-page-desc": "شاهد الفرق الذي تحدثه الرعاية الخبيرة مع نتائج حقيقية وصور قبل وبعد.",
        "work1-title": "نجاح تنظيف الأسنان", "work1-desc": "أعاد تنظيف الأسنان الروتيني بالموجات فوق الصوتية ابتسامة هذا المريض.",
        "work2-title": "التعافي بعد الجراحة", "work2-desc": "شاهد هذا المريض الشجاع يمشي بشكل مريح بعد أيام فقط من الجراحة.",

        "tech-page-tag": "معداتنا", "tech-page-title": "تكنولوجيا بيطرية متقدمة", "tech-page-desc": "نحن نستثمر في أحدث المعدات الطبية.",
        "tech1-title": "الأشعة السينية", "tech1-desc": "تصوير شعاعي رقمي عالي الدقة.",
        "tech2-title": "الموجات فوق الصوتية", "tech2-desc": "تصوير غير جراحي في الوقت الفعلي.",
        "tech3-title": "مختبر الدم", "tech3-desc": "تعداد الدم الكامل يعالج في دقائق.",
        "tech4-title": "وحدة الأسنان", "tech4-desc": "معدات متقدمة لتنظيف وتلميع الأسنان.",
        
        "contact-page-tag": "تواصل معنا", "contact-page-title": "نحن هنا من أجلك", "contact-page-desc": "الوصول إلينا سهل في أي وقت.",
        "contact-info-title": "معلومات الاتصال", "contact-hours-title": "ساعات العمل",
        "hours-week": "السبت - الخميس: 9:00 صباحاً - 10:00 مساءً", "hours-weekend": "الجمعة: 1:00 ظهراً - 5:00 مساءً",
        "hours-call-note": "اتصل بنا في أي وقت خلال ساعات العمل",
        "contact-map-title": "تجدنا في السليمانية", "footer-desc": "الارتقاء بالمعايير البيطرية في السليمانية.",
        "footer-quick-links": "روابط سريعة", "footer-contact": "الاتصال والموقع",
        "footer-loc": "سلێمانی، کوردستان", "footer-home": "الرئيسية", "footer-services": "خدماتنا", "footer-team": "تعرف على الفريق", "footer-tech": "التكنولوجيا"
    }
};

const langToggles = [document.getElementById('lang-toggle'), document.getElementById('lang-toggle-mobile')];
const savedLang = localStorage.getItem('siteLang') || 'en';

applyLanguage(savedLang);

langToggles.forEach(toggle => {
    if (toggle) {
        toggle.value = savedLang;
        toggle.addEventListener('change', (e) => {
            localStorage.setItem('siteLang', e.target.value);
            langToggles.forEach(t => { if(t) t.value = e.target.value; });
            applyLanguage(e.target.value);
        });
    }
});

function applyLanguage(lang) {
    if (!translations[lang]) return;
    for (const key in translations[lang]) {
        const el = document.getElementById(key);
        if (el) el.textContent = translations[lang][key];
    }
}

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();