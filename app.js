// Translations Database
const TRANSLATIONS = {
    EN: {
        nav_features: "Features",
        nav_dashboard: "Live Control",
        nav_support: "24/7 Service",
        nav_activation: "Activation",
        nav_download: "Download",
        nav_telegram: "Telegram Dev",
        
        hero_badge_text: "🛡️ PRO VERSION V4 ACTIVE",
        hero_title_span: "PRO V4 EDITION",
        hero_description: "The ultimate PC gaming optimizer and utility custom-tailored for PUBG Mobile & Gameloop emulator. Secure your network hosts, optimize system resources, manage paks dynamically, and resolve errors automatically with AI diagnostic algorithms.",
        btn_get_tool: "Download Shefo Tool",
        btn_demo: "Test Live Sandbox",
        stat_ping_lbl: "Average Ping Reduction",
        stat_fps_lbl: "Performance Boost",
        stat_users_lbl: "Active Gamers",
        
        gls_card_title: "24/7 Active Services",
        gls_card_desc: "Fully automated instant activations and active servers protecting your PUBG account around the clock.",
        
        // 1:1 replica keys
        title: "SHEFO TOOL PRO V4",
        lbl_device: "🖥 DEVICE:",
        lbl_version: "🎮 VERSION:",
        btn_launch: "  🎮  LAUNCH GAMELOOP",
        btn_select_content: "  📁  SELECT CONTENT",
        btn_paks_manager: "  📦  PAKS MANAGER",
        btn_activate_content: "  ⚡  ACTIVATE CONTENT",
        btn_bypass_content: "  👁️  HIDE CONTENT",
        btn_exchange: "  📱  EXCHANGE APK & OBB",
        btn_firewall: "  🛡️  FIREWALL & HOSTS",
        btn_ram_flush: "  🚀  FORCE RAM FLUSH",
        btn_smart_fix: "  🤖  AI SMART TROUBLESHOOT",
        btn_autostart: "  ⚙️  AUTO-START MANAGER",
        btn_status_check: "  ℹ️  STATUS CHECK",
        btn_clean_all: "  🧼  FULL CLEANUP",
        btn_exit: "  🚪  EXIT",
        
        lbl_system_monitor: "SYSTEM MONITOR",
        lbl_gameloop_status: "GAMELOOP STATUS:",
        lbl_protection_status: "PROTECTION STATUS",
        status_connecting: "CONNECTED",
        status_secured: "🟢 SECURED",
        
        sec_control_badge: "1:1 APPLICATION SIMULATOR",
        sec_control_title: "Interactive Tool Dashboard",
        sec_control_desc: "Experience the exact visual layout of SHEFO TOOL PRO V4. Click on the features to trigger simulated runs or hover/click to read detailed documentation.",
        
        exp_title: "FEATURE DOCUMENTATION",
        exp_default: "Hover or click on any button in the Left Panel to read its detailed instructions and function guidelines.",
        
        // Explainer text dictionary
        tip_btn_launch: "Launch the Android Gameloop Emulator on PC & trigger virtual VM boot.",
        tip_btn_select_content: "Scan and select the Content folder next to the tool to inject custom patches.",
        tip_btn_paks_manager: "Manage backups, transfer files, or pull game paks locally from the emulator.",
        tip_btn_activate_content: "Move the selected Content folder to emulator to inject & activate patches in-game.",
        tip_btn_bypass_content: "Rename the Content folder to hide/bypass active features from anti-cheat scanning.",
        tip_btn_exchange: "Install custom APK, push game OBB files, or manage third-party tools.",
        tip_btn_firewall: "Apply robust outbound firewall rules and block tracking IPs in hosts file.",
        tip_btn_ram_flush: "Flush process working sets to free memory, reset DNS records, and increase FPS.",
        tip_btn_smart_fix: "Runs full AI troubleshoot diagnostic on ADB ports, Gameloop, network stack, and auto-repairs errors.",
        tip_btn_autostart: "Enable tool auto-start on boot via Task Scheduler & setup background daemon monitoring.",
        tip_btn_status_check: "Check connection port status of ADB, Gameloop processes, and license validations.",
        tip_btn_clean_all: "Delete local emulator dump caches, prefetch files, temp folders, and reset Winsock catalog.",
        tip_btn_exit: "Exits the tool and terminates background helper sub-processes.",
        
        sec_support_badge: "ROUND-THE-CLOCK SYSTEM",
        sec_support_title: "24/7 Automated Services",
        sec_support_desc: "We guarantee uninterrupted account security, instant updates, and zero downtime. All license checking and database configurations run continuously.",
        sup_act_title: "Instant Activation Bot",
        sup_act_desc: "Our system is fully integrated with a Telegram activation bot. Register your device motherboard UUID and receive your VIP key immediately, 24 hours a day.",
        sup_ac_title: "Active Server Monitoring",
        sup_ac_desc: "Our servers monitor PUBG anti-cheat updates in real-time. Block rules, firewall bindings, and hosts configurations are automatically patched to keep your gaming session completely secure.",
        sup_support_title: "24/7 Telegram Customer Care",
        sup_support_desc: "Need assistance setting up ADB, Paks backups, or resolving emulator lag? Contact @soliman937 on Telegram anytime for instant expert technical support.",
        
        sec_feats_badge: "FEATURES DESCRIPTION",
        sec_feats_title: "Main Utility Modules",
        sec_feats_desc: "Explore the tool's integrated functions, carefully built to secure game files and clean system logs, protecting you from detection while boosting PC performance.",
        feat_paks_title: "Paks Manager",
        feat_paks_desc: "Manage game custom patches securely. Inject required data into the game directory or back them up effortlessly to prevent file loss.",
        feat_fix_title: "AI Smart Fix",
        feat_fix_desc: "Auto-scans and repairs configuration faults. Solves ADB server issues, resolves engine startup stalls at 98%, and clears cache with one click.",
        feat_hosts_title: "Hosts Security",
        feat_hosts_desc: "Applies robust protection rules. Overwrites your system hosts file with telemetry blocks to secure communication and prevent ban checks.",
        feat_ram_title: "RAM & DNS Flush",
        feat_ram_desc: "Frees up working memory sets and flushes Windows DNS records. Clears cache logs, reducing game latency (ping) and maximizing FPS.",
        feat_bypass_title: "Bypass & Hide",
        feat_bypass_desc: "Renames custom patches dynamically on game startup to avoid detection scanning, then restores them when safely in the game match.",
        feat_clean_title: "System Cleanup",
        feat_clean_desc: "Deletes prefetch directories and temp file dumps built up by the emulator to ensure a fresh environment before every gaming session.",
        
        key_system_badge: "GET ACTIVATED",
        key_system_title: "How to Activate the Tool",
        key_system_desc: "SHEFO TOOL is hardware-locked to prevent piracy. Follow these steps to generate and validate your VIP License Key:",
        step_1_title: "Launch & Get Hardware ID",
        step_1_desc: "Open the tool on your PC. It will automatically detect your motherboard UUID (Hardware Identifier).",
        step_2_title: "Contact Dev on Telegram",
        step_2_desc: "Send your UUID to @soliman937 to register your subscription and generate a custom validation token.",
        step_3_title: "Paste in key.txt",
        step_3_desc: "Place your generated token inside key.txt inside the tool folder. The tool is now unlocked and fully functional!",
        chk_card_title: "VIP License Validator",
        chk_card_desc: "Verify your activation token status online",
        chk_hwid_lbl: "Your Hardware ID (UUID)",
        chk_key_lbl: "VIP License Key (From Dev)",
        btn_chk_validate: "Validate Activation",
        
        dl_title: "Ready to Dominate? Get SHEFO TOOL V4",
        dl_desc: "Download the official bundle of SHEFO TOOL PRO V4 now. Contact developer @soliman937 on Telegram to get your key and join the VIP players club.",
        btn_dl_tool: "Download (ZIP)",
        btn_telegram_chan: "Join Telegram Channel",
        dl_reqs: "Requires: Windows 10/11 x64, Gameloop Emulator, Administrator privileges."
    },
    AR: {
        nav_features: "المميزات",
        nav_dashboard: "لوحة التحكم المباشرة",
        nav_support: "خدمة 24 ساعة",
        nav_activation: "التفعيل",
        nav_download: "تحميل الأداة",
        nav_telegram: "تواصل مع المطور",
        
        hero_badge_text: "🛡️ النسخة الاحترافية V4 نشطة",
        hero_title_span: "إصدار PRO V4 الفاخر",
        hero_description: "أداة تحسين أداء الكمبيوتر ونظام التشغيل المثالية المصممة خصيصاً لمحاكي جيم لوب ولعبة ببجي موبايل. قم بحظر خوادم الحماية، تحرير الرامات، وإصلاح مشاكل الاتصال والتعليق تلقائياً بواسطة الذكاء الاصطناعي.",
        btn_get_tool: "تحميل أداة شيفو",
        btn_demo: "جرب لوحة التحكم التفاعلية",
        stat_ping_lbl: "متوسط تقليل البينج واللاق",
        stat_fps_lbl: "زيادة معدل الإطارات FPS",
        stat_users_lbl: "لاعب نشط يستخدم الأداة",
        
        gls_card_title: "خدمة حماية مستمرة 24 ساعة",
        gls_card_desc: "تفعيل فوري للاشتراك على مدار اليوم وسيرفرات حماية تراقب تحديثات اللعبة لتأمين حسابك دون توقف.",
        
        // 1:1 replica keys
        title: "SHEFO TOOL PRO V4",
        lbl_device: "🖥 الجهاز:",
        lbl_version: "🎮 النسخة:",
        btn_launch: "  🎮  تشغيل المحاكي (جيم لوب)",
        btn_select_content: "  📁  اختيار مجلد المحتوى",
        btn_paks_manager: "  📦  مدير ملفات الباكس",
        btn_activate_content: "  ⚡  تفعيل الباتش والمحتوى",
        btn_bypass_content: "  👁️  إخفاء وتجاوز المحتوى",
        btn_exchange: "  📱  تثبيت APK وإرسال OBB",
        btn_firewall: "  🛡️  الجدار الناري والـ Hosts",
        btn_ram_flush: "  🚀  تنظيف الرام العشوائي",
        btn_smart_fix: "  🤖  مصلح الأخطاء الذكي",
        btn_autostart: "  ⚙️  مدير التشغيل التلقائي",
        btn_status_check: "  ℹ️  فحص حالة الاتصال",
        btn_clean_all: "  🧼  تنظيف النظام بالكامل",
        btn_exit: "  🚪  خروج وإغلاق",
        
        lbl_system_monitor: "مراقب أداء النظام",
        lbl_gameloop_status: "حالة المحاكي جيم لوب:",
        lbl_protection_status: "حالة الحماية الفعالة",
        status_connecting: "متصل بنجاح",
        status_secured: "🟢 محمي ومؤمن",
        
        sec_control_badge: "محاكاة كاملة للأداة 1:1",
        sec_control_title: "لوحة تحكم الأداة التفاعلية",
        sec_control_desc: "اختبر الشكل والمظهر الفعلي لأداة شيفو. انقر على الميزات لتشغيل عمليات المحاكاة أو مرر الماوس فوق الأزرار لقراءة الدليل التوضيحي.",
        
        exp_title: "شرح وتوضيح مميزات الأزرار",
        exp_default: "قم بوضع مؤشر الماوس أو النقر على أي زر في اللوحة اليسرى لقراءة إرشادات ووظيفة الزر التفصيلية.",
        
        // Explainer text dictionary
        tip_btn_launch: "تشغيل محاكي الأندرويد جيم لوب على الكمبيوتر وتدشين إقلاع النظام الوهمي.",
        tip_btn_select_content: "فحص واختيار مجلد Content للحقن والتثبيت للملفات.",
        tip_btn_paks_manager: "فتح مدير ملفات الباكس لإجراء نسخ احتياطي أو نقل ملفات التثبيت للمحاكي.",
        tip_btn_activate_content: "تفعيل ملفات الباكس والمحتوى للعمل داخل اللعبة بعد الدخول لتطبيق الحقن.",
        tip_btn_bypass_content: "تغيير اسم مجلد Content مؤقتاً لتجاوز وحماية اللعب من الحظر وكشف الحماية.",
        tip_btn_exchange: "تثبيت ملفات APK مخصصة أو إرسال ملفات OBB إلى ذاكرة المحاكي بسهولة.",
        tip_btn_firewall: "تطبيق قواعد جدار الحماية وحظر خوادم الحماية في ملف Hosts لمنع كشف الهاك.",
        tip_btn_ram_flush: "تفريغ الذاكرة العشوائية لجميع العمليات لتحسين الأداء وتسريع استجابة اللعبة FPS.",
        tip_btn_smart_fix: "تشغيل فحص الذكاء الاصطناعي لحل مشاكل الاتصال والشبكة والملفات المؤقتة تلقائياً بنقرة واحدة.",
        tip_btn_autostart: "تثبيت الأداة لتعمل مع إقلاع النظام تلقائياً وإدارة مراقبة الباتش بالخلفية.",
        tip_btn_status_check: "فحص تفصيلي لحالة اتصال محاكي أندرويد وتراخيص الأداة الفعالة.",
        tip_btn_clean_all: "تفريغ كاش DNS بالكامل وتنظيف مجلدات النظام المؤقتة ومجلد Prefetch لتسريع الويندوز.",
        tip_btn_exit: "إغلاق الأداة وإنهاء جميع العمليات التابعة لها لحفظ الاستهلاك.",
        
        sec_support_badge: "خدمات الحماية والدعم على مدار الساعة",
        sec_support_title: "دعم فني وأدوات فعالة 24/7",
        sec_support_desc: "نضمن لك تفعيل حسابك وحماية اشتراكك واستقرار الأداة دون انقطاع، مع خوادم حماية مخصصة لتحديثات الأمان التلقائية.",
        sup_act_title: "تفعيل فوري وتلقائي",
        sup_act_desc: "نظامنا مرتبط بالكامل ببوت تفعيل تلقائي على تليجرام. أرسل كود جهازك UUID واحصل على ترخيصك في ثوانٍ معدودة طوال الـ 24 ساعة.",
        sup_ac_title: "تحديثات أمان مستمرة",
        sup_ac_desc: "سيرفراتنا متصلة بشكل دائم لمتابعة تحديثات ملفات ببجي والتأكد من توافق جدار الحماية ومسارات الهوستس لحماية حسابك من البان.",
        sup_support_title: "دعم فني مباشر",
        sup_support_desc: "هل تواجه مشكلة في تهيئة ADB أو ملفات الباكس أو تواجه لاق؟ تواصل مع المطور @soliman937 على تليجرام للحصول على مساعدة فورية.",
        
        sec_feats_badge: "شرح مميزات الأداة",
        sec_feats_title: "الأقسام المدمجة بالأداة",
        sec_feats_desc: "تعرف على الأقسام المدمجة بالأداة المصممة لتأمين حسابك، وتجاوز كشف ملفات الباكس مع تنظيف مستمر للنظام لضمان حماية قصوى واستقرار الأداء.",
        feat_paks_title: "مدير ملفات الباكس",
        feat_paks_desc: "إدارة الباتشات والتعديلات بطريقة آمنة. قم بحقن الملفات المطلوبة في مسار اللعبة أو خذ نسخة احتياطية منها لتجنب فقدان البيانات أو التحميل مجدداً.",
        feat_fix_title: "مصلح الأخطاء بالذكاء الاصطناعي",
        feat_fix_desc: "فحص وإصلاح المشاكل البرمجية تلقائياً. يحل مشاكل اتصال ADB، ومشاكل تعليق إقلاع المحاكي عند 98%، وتنظيف الذاكرة المؤقتة بنقرة واحدة.",
        feat_hosts_title: "حماية الجدار الناري والهوستس",
        feat_hosts_desc: "تطبيق قواعد حماية صارمة لمنع البان. يقوم بكتابة خوادم تتبع اللعبة في ملف Hosts لمنع الاتصال بها وكشف التعديلات.",
        feat_ram_title: "تنظيف الرام والعشوائيات",
        feat_ram_desc: "تحرير الذاكرة العشوائية للعمليات وتفريغ كاش الـ DNS. يقلل من تذبذب البينج ويرفع استقرار معدل الفريمات داخل اللعبة بشكل ملحوظ.",
        feat_bypass_title: "تخطي وإخفاء المحتوى",
        feat_bypass_desc: "تغيير اسم مجلد التعديلات مؤقتاً لتجنب الفحص التلقائي للحماية أثناء الإقلاع، وإرجاعه تلقائياً عند الدخول إلى ساحة المعركة بنقرة واحدة.",
        feat_clean_title: "تنظيف الويندوز الشامل",
        feat_clean_desc: "مسح مجلدات Prefetch والملفات المؤقتة التي يخلفها نظام المحاكي لتسريع أداء نظام التشغيل وتخفيف الضغط عن المعالج.",
        
        key_system_badge: "احصل على ترخيصك",
        key_system_title: "كيفية تفعيل واستخدام الأداة",
        key_system_desc: "أداة شيفو محمية بنظام قفل العتاد لمنع التسريب. اتبع هذه الخطوات البسيطة لتفعيل الأداة وتشغيلها:",
        step_1_title: "افتح الأداة واحصل على الكود",
        step_1_desc: "قم بتشغيل الأداة على جهازك لتتعرف تلقائياً على معرف اللوحة الأم لجهازك (Motherboard UUID).",
        step_2_title: "تواصل مع المطور على تليجرام",
        step_2_desc: "أرسل كود جهازك للمطور @soliman937 لتسجيل اشتراكك والحصول على مفتاح التفعيل VIP المخصص لجهازك.",
        step_3_title: "انسخ المفتاح في ملف key.txt",
        step_3_desc: "قم بلصق المفتاح المستلم داخل ملف key.txt بجانب الأداة. سيتم فك قفل الأداة وتفعيل كافة المميزات فوراً!",
        chk_card_title: "التحقق من حالة مفتاح الاشتراك",
        chk_card_desc: "تحقق من صلاحية مفتاح الاشتراك الخاص بك",
        chk_hwid_lbl: "معرف جهازك الخاص (UUID)",
        chk_key_lbl: "مفتاح الاشتراك VIP الخاص بك",
        btn_chk_validate: "التحقق وتأكيد التفعيل",
        
        dl_title: "جاهز للسيطرة؟ حمل أداة SHEFO TOOL V4 الآن",
        dl_desc: "قم بتحميل حزمة أداة شيفو الرسمية كاملة الآن. تواصل مع المطور @soliman937 على تليجرام للحصول على مفتاح التشغيل والانضمام للاعبين المميزين.",
        btn_dl_tool: "تحميل الأداة (ZIP)",
        btn_telegram_chan: "انضم لقناة التليجرام",
        dl_reqs: "المتطلبات: نظام تشغيل ويندوز 10/11 نواة 64 بت، محاكي جيم لوب، وصلاحيات المسؤول (Admin)."
    }
};

let currentLanguage = 'EN';
let currentTheme = 'Dark';
let bypassActiveState = false;

// DOM Selectors
const langToggler = document.getElementById('lang-toggler');
const langText = document.getElementById('lang-text');

// 1:1 Replica GUI controls
const guiThemeToggle = document.getElementById('gui-theme-toggle');
const guiLangToggle = document.getElementById('gui-lang-toggle');
const guiLicenseTimer = document.getElementById('gui-license-timer');
const guiDeviceSelect = document.getElementById('gui-device-select');
const guiVersionSelect = document.getElementById('gui-version-select');
const guiPkgVal = document.getElementById('gui-pkg-val');
const guiCpuFill = document.getElementById('gui-cpu-fill');
const guiRamFill = document.getElementById('gui-ram-fill');
const guiGpuFill = document.getElementById('gui-gpu-fill');
const guiCpuLbl = document.getElementById('gui-cpu-lbl');
const guiRamLbl = document.getElementById('gui-ram-lbl');
const guiGpuLbl = document.getElementById('gui-gpu-lbl');
const guiGlStatusText = document.getElementById('gui-gl-status-text');
const guiFwCheckVal = document.getElementById('gui-fw-check-val');
const guiHostsCheckVal = document.getElementById('gui-hosts-check-val');
const guiConsoleBody = document.getElementById('gui-console-body');
const guiProgressOverlay = document.getElementById('gui-progress-overlay');
const guiProgressOverlayLbl = document.getElementById('gui-progress-overlay-lbl');
const guiProgressOverlayFill = document.getElementById('gui-progress-overlay-fill');
const guiFeatureExplainer = document.getElementById('gui-feature-explainer');

// Simulator window modal
const emulatorModal = document.getElementById('emulator-modal');
const btnCloseEmulator = document.getElementById('btn-close-emulator');
const emuStateBoot = document.getElementById('emu-state-boot');
const emuStatePubg = document.getElementById('emu-state-pubg');
const emuStateLobby = document.getElementById('emu-state-lobby');
const emuBootFill = document.getElementById('emu-boot-fill');
const emuBootSub = document.getElementById('emu-boot-sub');
const pubgSplashFill = document.getElementById('pubg-splash-fill');
const hudBypassBadge = document.getElementById('hud-bypass-badge');
const btnLobbyStartGame = document.getElementById('btn-lobby-start-game');

// Key Validator items
const btnVerifyKey = document.getElementById('btn-verify-key');
const keyInput = document.getElementById('key-input');
const verifyResultBox = document.getElementById('verify-result-box');

// Setup language switching
function translatePage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang.toLowerCase();
    
    if (lang === 'AR') {
        document.documentElement.dir = 'rtl';
        langText.innerText = 'العربية';
        langToggler.querySelector('span:first-child').innerText = '🇸🇦';
        guiLangToggle.innerText = 'English';
    } else {
        document.documentElement.dir = 'ltr';
        langText.innerText = 'English';
        langToggler.querySelector('span:first-child').innerText = '🇺🇸';
        guiLangToggle.innerText = 'العربية';
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            if (element.children.length > 0) {
                const spanOrText = element.querySelector('span') || element;
                if (spanOrText) spanOrText.innerText = TRANSLATIONS[lang][key];
            } else {
                element.innerText = TRANSLATIONS[lang][key];
            }
        }
    });

    // Translate dynamic elements in GUI
    updateProtectionText();
}

langToggler.addEventListener('click', () => {
    translatePage(currentLanguage === 'EN' ? 'AR' : 'EN');
});

guiLangToggle.addEventListener('click', () => {
    translatePage(currentLanguage === 'EN' ? 'AR' : 'EN');
});

// Update GUI Protection status card content based on language
function updateProtectionText() {
    guiFwCheckVal.innerText = currentLanguage === 'EN' ? '• Firewall: Active' : '• الجدار الناري: فعال';
    guiHostsCheckVal.innerText = currentLanguage === 'EN' ? '• Hosts: Secured' : '• ملف الهوستس: محمي ومؤمن';
    guiGlStatusText.innerText = currentLanguage === 'EN' ? 'CONNECTED' : 'متصل بنجاح';
}

// 1:1 Theme Toggling
guiThemeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'Dark' ? 'Light' : 'Dark';
    if (currentTheme === 'Light') {
        document.body.style.filter = 'brightness(0.95) contrast(1.02)';
        guiThemeToggle.innerText = '🌙 DARK MODE';
        logToConsole('Theme mode changed to: Light', 'cyan');
    } else {
        document.body.style.filter = 'none';
        guiThemeToggle.innerText = '☀️ LIGHT MODE';
        logToConsole('Theme mode changed to: Dark', 'cyan');
    }
});

// Console Log Helper
function logToConsole(message, type = '') {
    const time = new Date().toLocaleTimeString();
    const line = document.createElement('div');
    line.className = `c-line ${type}`;
    line.innerHTML = `[${time}] ${message}`;
    guiConsoleBody.appendChild(line);
    guiConsoleBody.scrollTop = guiConsoleBody.scrollHeight;
}

// Option menu selectors
guiDeviceSelect.addEventListener('change', (e) => {
    logToConsole(`[🖥] Device: ${e.target.value}`, 'green');
});

const VERSION_PACKAGES = {
    Global: 'com.tencent.ig',
    Korean: 'com.pubg.krmobile',
    Vietnam: 'com.vng.pubgmobile'
};

guiVersionSelect.addEventListener('change', (e) => {
    const pkg = VERSION_PACKAGES[e.target.value];
    guiPkgVal.innerText = pkg;
    logToConsole(`[🎮] Version: ${e.target.value}`, 'orange');
});

// Dynamic stat monitor simulator loops
setInterval(() => {
    const cpu = (Math.random() * 8 + 0.5).toFixed(1);
    const ram = (45 + Math.random() * 5).toFixed(1);
    const gpu = Math.floor(Math.random() * 5 + 1);

    guiCpuLbl.innerText = `CPU: ${cpu}%`;
    guiCpuFill.style.width = `${cpu}%`;

    guiRamLbl.innerText = `RAM: ${ram}%`;
    guiRamFill.style.width = `${ram}%`;

    guiGpuLbl.innerText = `GPU: ${gpu}%`;
    guiGpuFill.style.width = `${gpu}%`;
}, 2000);

// Key validator Logic
btnVerifyKey.addEventListener('click', () => {
    const val = keyInput.value.trim();
    verifyResultBox.style.display = 'block';

    if (!val) {
        verifyResultBox.className = 'check-result-box error';
        verifyResultBox.innerText = currentLanguage === 'EN' 
            ? '❌ Error: Activation key cannot be empty!' 
            : '❌ خطأ: لا يمكن ترك حقل مفتاح التفعيل فارغاً!';
        return;
    }

    verifyResultBox.className = 'check-result-box';
    verifyResultBox.innerText = currentLanguage === 'EN' 
        ? 'Connecting to subscription database...' 
        : 'جاري الاتصال بقاعدة بيانات الاشتراكات...';

    setTimeout(() => {
        if (val === '1aeb600846648efc=2060-10-10') {
            verifyResultBox.className = 'check-result-box success';
            verifyResultBox.innerText = currentLanguage === 'EN' 
                ? '🟢 SUCCESS: License verified!\nStatus: VIP Active\nExpiry: 2060-10-10' 
                : '🟢 تم التحقق بنجاح!\nالترخيص: VIP فعال ونشط\nتاريخ الانتهاء: 2060-10-10';
        } else {
            verifyResultBox.className = 'check-result-box error';
            verifyResultBox.innerText = currentLanguage === 'EN' 
                ? '❌ FAILED: Invalid license token key.' 
                : '❌ فشل التفعيل: مفتاح الاشتراك غير صالح.';
        }
    }, 1200);
});

// Dynamic stat count up animation on load
function animateStats() {
    const pingEl = document.getElementById('stat-ping');
    const fpsEl = document.getElementById('stat-fps');
    const usersEl = document.getElementById('stat-users');

    let ping = 120;
    const pingTimer = setInterval(() => {
        ping -= 5;
        if (ping <= 15) { ping = 15; clearInterval(pingTimer); }
        pingEl.innerText = `${ping}ms`;
    }, 45);

    let fps = 0;
    const fpsTimer = setInterval(() => {
        fps += 2;
        if (fps >= 45) { fps = 45; clearInterval(fpsTimer); }
        fpsEl.innerText = `+${fps} FPS`;
    }, 50);

    let users = 9000;
    const usersTimer = setInterval(() => {
        users += 64;
        if (users >= 10240) { users = 10240; clearInterval(usersTimer); }
        usersEl.innerText = `${users.toLocaleString()}+`;
    }, 30);
}

// Animate countdown license time
function runLicenseTimer() {
    let days = 12526, hours = 15, minutes = 8, seconds = 58;
    setInterval(() => {
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        guiLicenseTimer.innerText = `LICENSE: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

window.addEventListener('load', () => {
    animateStats();
    runLicenseTimer();
    translatePage('EN');
});

// Progress Bar helper overlay inside console
function showProgressOverlay(lbl, duration, onComplete) {
    guiProgressOverlay.style.display = 'flex';
    guiProgressOverlayLbl.innerText = lbl;
    guiProgressOverlayFill.style.width = '0%';
    
    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min((progress / duration) * 100, 100);
        guiProgressOverlayFill.style.width = percent + '%';
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            setTimeout(() => {
                guiProgressOverlay.style.display = 'none';
                onComplete();
            }, 300);
        }
    }
    window.requestAnimationFrame(step);
}

// Explainer update text handler
const guiButtons = [
    { id: 'btn-mock-launch', tip: 'tip_btn_launch' },
    { id: 'btn-mock-select', tip: 'tip_btn_select_content' },
    { id: 'btn-mock-paks', tip: 'tip_btn_paks_manager' },
    { id: 'btn-mock-activate', tip: 'tip_btn_activate_content' },
    { id: 'btn-mock-hide', tip: 'tip_btn_bypass_content' },
    { id: 'btn-mock-exchange', tip: 'tip_btn_exchange' },
    { id: 'btn-mock-firewall', tip: 'tip_btn_firewall' },
    { id: 'btn-mock-ram', tip: 'tip_btn_ram_flush' },
    { id: 'btn-mock-smart', tip: 'tip_btn_smart_fix' },
    { id: 'btn-mock-autostart', tip: 'tip_btn_autostart' },
    { id: 'btn-mock-status', tip: 'tip_btn_status_check' },
    { id: 'btn-mock-clean', tip: 'tip_btn_clean_all' },
    { id: 'btn-mock-exit', tip: 'tip_btn_exit' }
];

guiButtons.forEach(btn => {
    const el = document.getElementById(btn.id);
    if (el) {
        // Hover
        el.addEventListener('mouseenter', () => {
            guiFeatureExplainer.innerText = TRANSLATIONS[currentLanguage][btn.tip];
        });
        el.addEventListener('mouseleave', () => {
            guiFeatureExplainer.innerText = TRANSLATIONS[currentLanguage]['exp_default'];
        });
        // Mobile tap
        el.addEventListener('click', () => {
            guiFeatureExplainer.innerText = TRANSLATIONS[currentLanguage][btn.tip];
        });
    }
});

// Interactive 13 buttons clicks handlers

// 1. LAUNCH GAMELOOP simulation
document.getElementById('btn-mock-launch').addEventListener('click', () => {
    logToConsole('Launching Gameloop...', 'orange');
    logToConsole('Searching for AndroidEmulatorEn.exe...', 'orange');
    
    setTimeout(() => {
        logToConsole('[✔] Gameloop binary found in drive C:\\', 'green');
        logToConsole('🚀 VM boot signal sent to emulator core.', 'green');
        
        // Open emulator modal loading sequences
        emulatorModal.style.display = 'flex';
        triggerEmulatorBoot();
    }, 850);
});

// 2. SELECT CONTENT simulation
document.getElementById('btn-mock-select').addEventListener('click', () => {
    logToConsole('Scanning for Content folders adjacent to executable...', 'orange');
    
    showProgressOverlay(
        currentLanguage === 'EN' ? 'Scanning directory structure...' : 'جاري فحص مجلدات الأداة...', 
        1000, 
        () => {
            logToConsole('[✔] Detected Content folders: Content1 (Modified), Content (Original)', 'green');
            logToConsole('Selected Content Folder for patch: "Content1"', 'cyan');
            alert(currentLanguage === 'EN' 
                ? '✅ Scan Complete: Found Content folder.\nTarget locked to: "Content1"' 
                : '✅ اكتمل الفحص: تم العثور على مجلد المحتوى بنجاح.\nالمجلد النشط: "Content1"'
            );
        }
    );
});

// 3. PAKS MANAGER simulation
document.getElementById('btn-mock-paks').addEventListener('click', () => {
    logToConsole('📦 PAKS Manager initialized. Querying emulator structure...', 'blue');
    
    showProgressOverlay(
        currentLanguage === 'EN' ? 'Syncing PAKS metadata...' : 'مزامنة ملفات الباكس بقاعدة البيانات...', 
        1200, 
        () => {
            logToConsole('[✔] Target path locked: UE4Game/ShadowTrackerExtra/Saved/Paks/', 'green');
            logToConsole('[✔] Local file ready: game_patch_4.4.0.21156.pak', 'green');
            alert(currentLanguage === 'EN' 
                ? '📦 PAKS Manager connected successfully!\nReady to push patch.' 
                : '📦 متصل بمدير ملفات الباكس بنجاح!\nالأداة جاهزة لإرسال الباتش.'
            );
        }
    );
});

// 4. ACTIVATE CONTENT simulation
document.getElementById('btn-mock-activate').addEventListener('click', () => {
    const confirmation = confirm(currentLanguage === 'EN' 
        ? 'Activate Content folder patches inside Emulator?' 
        : 'تفعيل ملفات المحتوى والباتش داخل المحاكي؟'
    );
    if (!confirmation) return;

    logToConsole('Moving Content folders in emulator storage...', 'orange');
    showProgressOverlay(
        currentLanguage === 'EN' ? 'Moving files to game directory...' : 'جاري نقل ملفات المحتوى للعبة...', 
        1000, 
        () => {
            bypassActiveState = true;
            hudBypassBadge.innerText = 'Bypass: ACTIVE';
            hudBypassBadge.className = 'bypass-tag active';
            logToConsole('[✔] Content Activated successfully.', 'green');
            alert(currentLanguage === 'EN' ? '✅ Content folder activated.' : '✅ تم تفعيل مجلد المحتوى بنجاح.');
        }
    );
});

// 5. HIDE CONTENT simulation
document.getElementById('btn-mock-hide').addEventListener('click', () => {
    logToConsole('Hiding active patches (bypass checks)...', 'orange');
    
    showProgressOverlay(
        currentLanguage === 'EN' ? 'Renaming Content descriptors...' : 'جاري إخفاء وتخطي كشف المحتوى...', 
        800, 
        () => {
            bypassActiveState = false;
            hudBypassBadge.innerText = 'Bypass: INACTIVE';
            hudBypassBadge.className = 'bypass-tag';
            logToConsole('[✔] Content folder renamed to "Content1". Active features hidden.', 'green');
            alert(currentLanguage === 'EN' ? '✅ active patches hidden.' : '✅ تم إخفاء التعديلات بنجاح.');
        }
    );
});

// 6. EXCHANGE APK & OBB simulation
document.getElementById('btn-mock-exchange').addEventListener('click', () => {
    logToConsole('📱 EXCHANGE APK & OBB tool initialized.', 'green');
    logToConsole('Ready to push Custom OBB to /sdcard/Android/obb/...', 'cyan');
    alert(currentLanguage === 'EN' 
        ? '📱 Exchange module active.\nCustom OBB: main.21120.com.tencent.ig.obb loaded.' 
        : '📱 نظام تثبيت ملفات APK ونقل OBB فعال وجاهز.'
    );
});

// 7. FIREWALL & HOSTS simulation
document.getElementById('btn-mock-firewall').addEventListener('click', () => {
    logToConsole('Applying outbound block rules for anticheat servers...', 'orange');
    
    showProgressOverlay(
        currentLanguage === 'EN' ? 'Overwriting hosts file...' : 'جاري كتابة الهوستس وتطبيق الجدار الناري...', 
        1100, 
        () => {
            guiFwCheckVal.innerText = currentLanguage === 'EN' ? '• Firewall: Active' : '• الجدار الناري: فعال';
            guiFwCheckVal.style.color = '#17B890';
            guiHostsCheckVal.innerText = currentLanguage === 'EN' ? '• Hosts: Secured' : '• ملف الهوستس: محمي ومؤمن';
            guiHostsCheckVal.style.color = '#2ECC71';
            
            logToConsole('[✔] Hosts override: tss.tencent.com blocked on localhost.', 'green');
            logToConsole('[✔] Firewall block rules applied to aow_exe.exe remote ports.', 'green');
            alert(currentLanguage === 'EN' ? '✅ Firewall & Hosts updated!' : '✅ تم تطبيق الجدار الناري وتأمين الهوستس!');
        }
    );
});

// 8. FORCE RAM FLUSH simulation
document.getElementById('btn-mock-ram').addEventListener('click', () => {
    logToConsole('🚀 Triggering SetProcessWorkingSetSize loop...', 'blue');
    
    showProgressOverlay(
        currentLanguage === 'EN' ? 'Cleaning working memory...' : 'جاري تفريغ كاش الذاكرة العشوائية...', 
        900, 
        () => {
            logToConsole('[✔] RAM cache loops cleared. DNS resolver records flushed.', 'green');
            alert(currentLanguage === 'EN' ? '🚀 RAM Memory cleaned successfully!' : '🚀 تم تنظيف الذاكرة العشوائية للكمبيوتر!');
        }
    );
});

// 9. AI SMART TROUBLESHOOT simulation
document.getElementById('btn-mock-smart').addEventListener('click', () => {
    logToConsole('🤖 Running AI smart scan checks...', 'red');
    
    showProgressOverlay(
        currentLanguage === 'EN' ? 'AI Diagnostic Scan running...' : 'جاري تشغيل فحص وإصلاح الذكاء الاصطناعي...', 
        1500, 
        () => {
            guiFwCheckVal.innerText = currentLanguage === 'EN' ? '• Firewall: Active' : '• الجدار الناري: فعال';
            guiFwCheckVal.style.color = '#17B890';
            guiHostsCheckVal.innerText = currentLanguage === 'EN' ? '• Hosts: Secured' : '• ملف الهوستس: محمي ومؤمن';
            guiHostsCheckVal.style.color = '#2ECC71';
            
            logToConsole('✅ AI troubleshoot resolved 3 issues.', 'green');
            logToConsole('AI Troubleshoot status: ALL SYSTEMS OPTIMAL.', 'cyan');
            alert(currentLanguage === 'EN' 
                ? '🤖 AI Troubleshooter finished. All diagnostics optimized.' 
                : '🤖 انتهى مصلح الأخطاء الذكي. تم تسوية جميع مشاكل ADB والـ DNS.'
            );
        }
    );
});

// 10. AUTO-START MANAGER simulation
document.getElementById('btn-mock-autostart').addEventListener('click', () => {
    logToConsole('⚙️ Auto start task registry initiated...', 'blue');
    setTimeout(() => {
        logToConsole('[✔] Scheduled Task "nv_tunner" created under current logon context.', 'green');
        alert(currentLanguage === 'EN' 
            ? '✅ Scheduled Task nv_tunner created successfully!' 
            : '✅ تم ربط الأداة بجدولة مهام الويندوز بنجاح!'
        );
    }, 400);
});

// 11. STATUS CHECK simulation
document.getElementById('btn-mock-status').addEventListener('click', () => {
    logToConsole('=== STATUS CHECK ===', 'blue');
    logToConsole('[✔] ADB Status: Connected on port 5554', 'green');
    logToConsole('[✔] Emulator state: Active', 'green');
    logToConsole('[✔] Protection: Secured (tss.tencent.com blocked)', 'green');
});

// 12. FULL CLEANUP simulation
document.getElementById('btn-mock-clean').addEventListener('click', () => {
    logToConsole('🧼 FULL CLEANUP check triggered...', 'orange');
    
    showProgressOverlay(
        currentLanguage === 'EN' ? 'Purging Temp & Prefetch...' : 'جاري تنظيف كاش النظام وتصفير Winsock...', 
        1300, 
        () => {
            logToConsole('[✔] System prefetch deleted.', 'green');
            logToConsole('[✔] Winsock catalog reset complete. DNS flushed.', 'green');
            alert(currentLanguage === 'EN' ? '🧼 Cleanup complete!' : '🧼 تم تنظيف عشوائيات الويندوز بالكامل!');
        }
    );
});

// 13. EXIT simulation
document.getElementById('btn-mock-exit').addEventListener('click', () => {
    const confirmation = confirm(currentLanguage === 'EN' ? 'Exit Shefo Tool?' : 'خروج وإغلاق الأداة؟');
    if (confirmation) {
        logToConsole('🚪 Terminating sub-processes... Exit logs saved.', 'red');
        setTimeout(() => {
            guiConsoleBody.innerHTML = '<div class="c-line red">>>> APP SHUTDOWN. Restart tool to begin.</div>';
        }, 600);
    }
});

// Closing Emulator Screen modal
btnCloseEmulator.addEventListener('click', () => {
    emulatorModal.style.display = 'none';
    logToConsole('🎮 Emulator closed.', 'red');
});

// Emulator Boot and Game loading animation pipeline
function triggerEmulatorBoot() {
    // Show boot screen state
    emuStateBoot.style.display = 'flex';
    emuStatePubg.style.display = 'none';
    emuStateLobby.style.display = 'none';
    emuBootFill.style.width = '0%';
    emuBootSub.innerText = 'Initializing Virtual Machine...';

    // Step 1: Boot VM (2 seconds)
    setTimeout(() => {
        emuBootSub.innerText = 'Loading Android AOW graphics engine...';
    }, 1000);

    let start = null;
    function animateBoot(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min((progress / 2000) * 100, 100);
        emuBootFill.style.width = percent + '%';
        if (progress < 2000) {
            window.requestAnimationFrame(animateBoot);
        } else {
            // Swap to pubg splash state
            emuStateBoot.style.display = 'none';
            emuStatePubg.style.display = 'flex';
            triggerPubgSplash();
        }
    }
    window.requestAnimationFrame(animateBoot);
}

function triggerPubgSplash() {
    pubgSplashFill.style.width = '0%';
    
    let start = null;
    function animateSplash(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min((progress / 1500) * 100, 100);
        pubgSplashFill.style.width = percent + '%';
        if (progress < 1500) {
            window.requestAnimationFrame(animateSplash);
        } else {
            // Swap to Lobby state
            emuStatePubg.style.display = 'none';
            emuStateLobby.style.display = 'flex';
            
            // Check bypass state from mockup
            if (bypassActiveState) {
                hudBypassBadge.innerText = 'Bypass: ACTIVE';
                hudBypassBadge.className = 'bypass-tag active';
            } else {
                hudBypassBadge.innerText = 'Bypass: INACTIVE';
                hudBypassBadge.className = 'bypass-tag';
            }
        }
    }
    window.requestAnimationFrame(animateSplash);
}

// Start Game lobby simulation
btnLobbyStartGame.addEventListener('click', () => {
    btnLobbyStartGame.disabled = true;
    btnLobbyStartGame.innerText = currentLanguage === 'EN' ? 'MATCHING...' : 'جاري البحث...';
    
    setTimeout(() => {
        btnLobbyStartGame.innerText = currentLanguage === 'EN' ? 'CONNECTING...' : 'تحميل السيرفر...';
    }, 1000);

    setTimeout(() => {
        btnLobbyStartGame.disabled = false;
        btnLobbyStartGame.innerText = currentLanguage === 'EN' ? 'START MATCH' : 'بدء المباراة';
        
        // Show validation result dialog depending on active protection
        if (bypassActiveState) {
            alert(currentLanguage === 'EN'
                ? '🟢 MATCH ONLINE STABLE!\n\nStatus: Secure Sandbox Mode Active\nAnti-Cheat Block: SECURED\nNo ban triggers detected.'
                : '🟢 تم الدخول إلى المباراة بأمان!\n\nالحالة: وضع التخطي الآمن نشط\nالحظر والجدار الناري: مؤمن بنجاح.'
            );
        } else {
            alert(currentLanguage === 'EN'
                ? '⚠️ WARNING: Match Started without Bypass!\n\nStatus: Unsecured Sandbox Mode\nAnti-Cheat triggers detected.\nPlease activate bypass to secure account.'
                : '⚠️ تحذير: تم بدء المباراة دون تفعيل حماية التخطي!\n\nالحالة: اتصال غير محمي\nيرجى تفعيل خيار Bypass لحماية حسابك.'
            );
        }
    }, 2500);
});

// Simple download script
document.getElementById('btn-dl-site').addEventListener('click', (e) => {
    e.preventDefault();
    alert(currentLanguage === 'EN' 
        ? '📦 Starting download bundle: SHEFO_TOOL_PRO_V4.zip\nPlease check your key.txt file once extracted.' 
        : '📦 جاري تحميل ملف الأداة: SHEFO_TOOL_PRO_V4.zip\nيرجى وضع ملف الترخيص key.txt بجانب الأداة بعد فك الضغط.'
    );
});
