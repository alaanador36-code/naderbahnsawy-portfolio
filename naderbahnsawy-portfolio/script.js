/* NADER ELBAHNSAWY — vanilla interactions */
(() => {
  "use strict";

  const translations = {
    en: {
      navHome:"Home",navAbout:"About",navProjects:"Projects",navServices:"Services",navPricing:"Pricing",navContact:"Contact",
      heroEyebrow:"WEB DEVELOPER & DIGITAL CREATOR",heroTitle:'I build digital experiences <span class="accent">that stand out.</span>',heroDescription:"I create modern, responsive websites with a focus on visual identity, usability, and performance.",startProject:'Start a Project <span>↗</span>',exploreWork:'Explore My Work <span>↓</span>',heroMeta:"Independent developer · Egypt",heroPrice:"Projects from EGP 700",portraitCaption:"Developer. Creator. Builder.",tagModern:"Modern by design",tagResponsive:"Responsive experiences",scroll:"SCROLL TO EXPLORE",
      aboutEyebrow:"A LITTLE ABOUT ME",aboutTitle:'Thoughtful design.<br><span class="muted">Purposeful development.</span>',aboutLead:"I’m Nader — a web developer focused on turning ideas into clear, memorable online experiences.",aboutText:"From personal portfolios to artist and business websites, I care about the details that make a site feel polished: responsive layouts, intuitive navigation, consistent visual identity, and a smooth experience on every screen.",
      projectsEyebrow:"SELECTED WORK",projectsTitle:'Projects in progress<span class="accent">.</span>',projectsNote:"A look at what I’m building.<br>More details coming as each project develops.",generalCategory:"CONCEPT / IN PREPARATION",statusPreparing:"In preparation",generalDescription:"A project currently being prepared. More details will be shared when it is ready.",notPublished:"Not published yet · Preview unavailable",musicCategory:"MUSIC / ARTIST WEBSITE",statusDevelopment:"In development",musicDescription:"A dedicated digital space for my music, artist identity, and creative work.",notPublished2:"In development · No live demo available",
      servicesEyebrow:"WHAT I CAN HELP WITH",servicesTitle:'From idea to <span class="accent">online.</span>',service1Title:"Portfolio Websites",service1Text:"A personal space to present your work, skills, and story.",service2Title:"Business Websites",service2Text:"A clear online presence for your business, service, or brand.",service3Title:"Artist Websites",service3Text:"A dedicated home for your music, identity, and creative projects.",service4Title:"Responsive Design",service4Text:"Layouts designed to work smoothly across phones, tablets, and desktops.",service5Title:"Frontend UI",service5Text:"Carefully structured interfaces with accessible interactions.",service6Title:"Website Updates",service6Text:"Improvements to existing pages, layouts, and user experience.",
      pricingEyebrow:"INVEST IN YOUR IDEA",pricingTitle:'Good work.<br><span class="muted">Clear starting prices.</span>',pricingText:"Every project is different. The final quote depends on scope, number of pages, design requirements, and functionality.",pricingCta:"Request a tailored quote",startingFrom:"STARTING RANGE",priceNote:"Starting range · Final price depends on your requirements.",priceFeature1:"Scope discussed before work begins",priceFeature2:"Responsive design considered",priceFeature3:"A quote tailored to your project",getQuote:'Get a Quote <span>↗</span>',
      contactEyebrow:"HAVE AN IDEA?",contactTitle:'Let’s build something<br><span class="accent">meaningful.</span>',contactText:"Tell me what you have in mind. We can discuss the requirements and find a suitable next step.",contactWhatsApp:"MESSAGE ME ON",contactEmail:"EMAIL ME AT",contactFollow:"CONNECT ON",formTitle:"Tell me about your project",formNote:"This form prepares a message for you to review in WhatsApp.",labelName:"Your name",labelEmail:"Email address",placeholderName:"How should I call you?",placeholderEmail:"you@example.com",labelType:"Project type",optionChoose:"Choose a project type",optionPortfolio:"Portfolio website",optionBusiness:"Business website",optionArtist:"Artist website",optionOther:"Other",labelBudget:"Budget range",optionBudget:"Choose a budget",optionDiscuss:"To be discussed",labelDetails:"Project details",placeholderDetails:"What would you like your website to do?",formSubmit:'Prepare WhatsApp Message <span>↗</span>',formDisclaimer:"Your message is not sent automatically. WhatsApp will open so you can review and send it yourself.",footerText:"Built with care. Designed to stand out.",formInvalid:"Please complete all required fields with a valid email address.",formSuccess:"Your message is ready. Review it in WhatsApp before sending.",popupBlocked:"Your browser blocked the WhatsApp window. Use the WhatsApp contact link above, or allow pop-ups and try again.",emailLabel:"Email"
    },
    ar: {
      navHome:"الرئيسية",navAbout:"عني",navProjects:"المشاريع",navServices:"الخدمات",navPricing:"الأسعار",navContact:"تواصل معي",
      heroEyebrow:"مطور ويب وصانع تجارب رقمية",heroTitle:'ببني تجارب رقمية <span class="accent">تفرق عن غيرها.</span>',heroDescription:"بصمم مواقع عصرية ومتجاوبة، باهتم فيها بالهوية البصرية وسهولة الاستخدام والأداء.",startProject:'ابدأ مشروعك <span>↗</span>',exploreWork:'شوف أعمالي <span>↓</span>',heroMeta:"مطور مستقل · مصر",heroPrice:"المشاريع من 700 جنيه",portraitCaption:"مطور. مبدع. منفّذ.",tagModern:"تصميم عصري",tagResponsive:"تجربة مناسبة لكل الشاشات",scroll:"انزل واكتشف الموقع",
      aboutEyebrow:"نبذة عني",aboutTitle:'تصميم باهتمام.<br><span class="muted">وتنفيذ له هدف.</span>',aboutLead:"أنا نادر، مطور ويب مهتم بتحويل الأفكار لتجارب إلكترونية واضحة ومميزة.",aboutText:"من مواقع البورتفوليو الشخصية لمواقع الفنانين والشركات، باهتم بالتفاصيل اللي بتخلي الموقع متكامل: تصميم متجاوب، تنقل سهل، هوية بصرية متناسقة وتجربة مريحة على كل الشاشات.",
      projectsEyebrow:"نماذج من مشاريعي",projectsTitle:'مشاريع تحت التجهيز<span class="accent">.</span>',projectsNote:"دي نظرة على المشاريع اللي بشتغل عليها.<br>هضيف التفاصيل مع تطور كل مشروع.",generalCategory:"فكرة / قيد التجهيز",statusPreparing:"قيد التجهيز",generalDescription:"مشروع لسه بجهزه، وهشارك تفاصيل أكتر عنه لما يبقى جاهز.",notPublished:"لم يُنشر بعد · المعاينة غير متاحة",musicCategory:"موسيقى / موقع فنان",statusDevelopment:"قيد التطوير",musicDescription:"مساحة رقمية خاصة بموسيقاي وهويتي الفنية وأعمالي الإبداعية.",notPublished2:"قيد التطوير · مفيش نسخة مباشرة متاحة",
      servicesEyebrow:"أقدر أساعدك في إيه؟",servicesTitle:'من فكرة إلى <span class="accent">موقع أونلاين.</span>',service1Title:"مواقع بورتفوليو",service1Text:"موقع شخصي يعرض شغلك ومهاراتك وقصتك.",service2Title:"مواقع للشركات",service2Text:"حضور إلكتروني واضح لشركتك أو خدمتك أو علامتك التجارية.",service3Title:"مواقع للفنانين",service3Text:"مساحة خاصة بموسيقاك وهويتك وأعمالك الإبداعية.",service4Title:"تصميم متجاوب",service4Text:"تصميم يشتغل بسلاسة على الموبايل والتابلت والكمبيوتر.",service5Title:"واجهات المواقع",service5Text:"واجهات منظمة وتفاعلات سهلة الاستخدام.",service6Title:"تطوير المواقع الحالية",service6Text:"تحسين الصفحات والتصميم وتجربة المستخدم.",
      pricingEyebrow:"استثمر في فكرتك",pricingTitle:'شغل متقن.<br><span class="muted">وبداية سعر واضحة.</span>',pricingText:"كل مشروع مختلف عن التاني. السعر النهائي بيتحدد حسب حجم المشروع وعدد الصفحات والتصميم والوظائف المطلوبة.",pricingCta:"اطلب عرض سعر مناسب",startingFrom:"الأسعار المبدئية",priceNote:"سعر مبدئي · السعر النهائي حسب متطلباتك.",priceFeature1:"نتفق على تفاصيل المشروع قبل التنفيذ",priceFeature2:"مراعاة التصميم المتجاوب",priceFeature3:"عرض سعر مناسب لمشروعك",getQuote:'اطلب عرض سعر <span>↗</span>',
      contactEyebrow:"عندك فكرة؟",contactTitle:'خلينا نبني حاجة<br><span class="accent">ليها معنى.</span>',contactText:"احكيلي فكرتك، ونقدر نتناقش في التفاصيل ونحدد الخطوة المناسبة.",contactWhatsApp:"كلمني على",contactEmail:"راسلني على",contactFollow:"تابعني على",formTitle:"احكيلي عن مشروعك",formNote:"النموذج ده بيجهز رسالة تراجعها بنفسك على واتساب.",labelName:"اسمك",labelEmail:"البريد الإلكتروني",placeholderName:"تحب أناديك بإيه؟",placeholderEmail:"you@example.com",labelType:"نوع المشروع",optionChoose:"اختار نوع المشروع",optionPortfolio:"موقع بورتفوليو",optionBusiness:"موقع شركة أو بيزنس",optionArtist:"موقع فنان",optionOther:"نوع تاني",labelBudget:"الميزانية",optionBudget:"اختار الميزانية",optionDiscuss:"نتناقش فيها",labelDetails:"تفاصيل المشروع",placeholderDetails:"عايز الموقع يعمل إيه؟",formSubmit:'جهّز رسالة واتساب <span>↗</span>',formDisclaimer:"الرسالة مش بتتبعت تلقائيًا. واتساب هيفتح عشان تراجعها وتبعتها بنفسك.",footerText:"تنفيذ باهتمام. وتصميم يسيب أثر.",formInvalid:"من فضلك كمّل البيانات المطلوبة واكتب بريد إلكتروني صحيح.",formSuccess:"رسالتك جاهزة. راجعها على واتساب قبل الإرسال.",popupBlocked:"المتصفح منع فتح واتساب. استخدم رابط واتساب الموجود فوق أو اسمح بالنوافذ المنبثقة وجرب تاني.",emailLabel:"البريد الإلكتروني"
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const languageToggle = $("#languageToggle");
  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");
  const form = $("#contactForm");
  const formStatus = $("#formStatus");
  const toast = $("#toast");
  let currentLanguage = "en";
  let toastTimer;

  function applyLanguage(lang) {
    currentLanguage = lang === "ar" ? "ar" : "en";
    const dictionary = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.body.dir = document.documentElement.dir;

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }
    });
    $$("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.placeholder = dictionary[key];
      }
    });

    languageToggle.innerHTML = currentLanguage === "en" ? 'عربي <span>↗</span>' : 'English <span>↗</span>';
    languageToggle.setAttribute("aria-label", currentLanguage === "en" ? "Switch to Arabic" : "Switch to English");
    menuToggle.setAttribute("aria-label", currentLanguage === "en" ? "Open navigation menu" : "افتح قائمة التنقل");
    if (formStatus.textContent) formStatus.textContent = "";
    try { localStorage.setItem("nader-portfolio-language", currentLanguage); } catch (_) {}
  }

  try {
    const savedLanguage = localStorage.getItem("nader-portfolio-language");
    if (savedLanguage === "ar" || savedLanguage === "en") currentLanguage = savedLanguage;
  } catch (_) {}
  applyLanguage(currentLanguage);

  languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "ar" : "en"));

  function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", currentLanguage === "en" ? "Open navigation menu" : "افتح قائمة التنقل");
  }
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? (currentLanguage === "en" ? "Close navigation menu" : "اقفل قائمة التنقل") : (currentLanguage === "en" ? "Open navigation menu" : "افتح قائمة التنقل"));
  });
  $$("#navLinks a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  document.addEventListener("click", (event) => {
    if (navLinks.classList.contains("open") && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4200);
  }

  function defaultMessage(kind) {
    const opening = "صلي على النبي ﷺ";
    if (currentLanguage === "ar") {
      const lines = {
        start: "السلام عليكم يا نادر، أنا عايز ويبسايت بمشروعي، وعايز أعرف تفاصيل التنفيذ والسعر والمدة المتوقعة.",
        quote: "السلام عليكم يا نادر، عايز أطلب عرض سعر لموقع ويب وأعرف التكلفة حسب التفاصيل المطلوبة.",
        hire: "السلام عليكم يا نادر، مهتم بالتعاون معاك في تنفيذ مشروع ويب."
      };
      return opening + "\n" + (lines[kind] || lines.start) + "\nاسم المشروع:\nنوع الموقع:\nالتفاصيل المطلوبة:\nالميزانية المتوقعة:\nشكراً ليك.";
    }
    const lines = {
      start: "Hello Nader, I’m interested in building a website for my project and would like to discuss the process, price, and estimated timeline.",
      quote: "Hello Nader, I’d like to request a quote for a website based on my project requirements.",
      hire: "Hello Nader, I’m interested in working with you on a web project."
    };
    return opening + "\n" + (lines[kind] || lines.start) + "\nProject name:\nWebsite type:\nRequired details:\nEstimated budget:\nThank you.";
  }

  function openWhatsApp(message) {
    const url = "https://wa.me/201150163445?text=" + encodeURIComponent(message);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      showToast(translations[currentLanguage].popupBlocked);
      const fallback = document.createElement("a");
      fallback.href = url;
      fallback.target = "_blank";
      fallback.rel = "noopener noreferrer";
      fallback.textContent = currentLanguage === "en" ? "Open WhatsApp message" : "افتح رسالة واتساب";
      fallback.className = "button button-primary";
      fallback.style.marginTop = "10px";
      fallback.style.display = "inline-flex";
      fallback.id = "whatsappFallback";
      const oldFallback = $("#whatsappFallback");
      if (oldFallback) oldFallback.remove();
      formStatus.appendChild(document.createTextNode(" "));
      formStatus.appendChild(fallback);
    }
  }

  $$(".whatsapp-cta").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openWhatsApp(defaultMessage(link.dataset.message || "start"));
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.className = "form-status";
    formStatus.textContent = "";
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const type = String(data.get("type") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const details = String(data.get("details") || "").trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailValid || !type || !budget || !details) {
      formStatus.textContent = translations[currentLanguage].formInvalid;
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const opening = "صلي على النبي ﷺ";
    let message;
    if (currentLanguage === "ar") {
      message = `${opening}\nالسلام عليكم يا نادر، أنا ${name} وعايز أستفسر عن تنفيذ موقع.\nالبريد الإلكتروني: ${email}\nنوع الموقع: ${type}\nالتفاصيل المطلوبة: ${details}\nالميزانية المتوقعة: ${budget}\nشكراً ليك.`;
    } else {
      message = `${opening}\nHello Nader, my name is ${name} and I’d like to discuss a website project.\nEmail: ${email}\nWebsite type: ${type}\nProject details: ${details}\nEstimated budget: ${budget}\nThank you.`;
    }

    formStatus.className = "form-status success";
    formStatus.textContent = translations[currentLanguage].formSuccess;
    openWhatsApp(message);
  });

  $("#year").textContent = new Date().getFullYear();

  const intro = $("#intro");
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (intro && reducedMotion) intro.remove();
  else if (intro) window.setTimeout(() => { if (intro.isConnected) intro.remove(); }, 2200);

  const revealElements = $$(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
})(); 
