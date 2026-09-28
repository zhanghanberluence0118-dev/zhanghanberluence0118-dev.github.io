/* ─────────────────────────────────────────────
   张涵个人主页 · 交互脚本
───────────────────────────────────────────── */

/* ── 双语文案 ── */
const i18n = {
  zh: {
    brandName: "张涵",
    navAbout: "简介", navJourney: "经历", navAchievements: "成果",
    navPractice: "实践", navWriting: "写作", navContact: "联系",
    coverEyebrow: "CCNU · 计算政治学实验班",
    coverNameAlt: "张 涵",
    coverSub: "政治与国际关系学院 · 2025级本科生",
    coverAffil: "Central China Normal University · Wuhan",
    scrollHint: "向下滚动",
    coverCredit: "桂子山 · 华中师范大学（意象图）",
    aboutTitle: "关于我",
    portraitCap: "湖北仙桃 · 现居武汉",
    aboutP1: "你好，我是张涵，华中师范大学政治与国际关系学院计算政治学实验班2025级本科生。我来自湖北仙桃，一个充满烟火气与体操记忆的小城。",
    aboutP2: "我性格活泼、热情、开朗，乐于帮助他人；对社会问题怀有强烈的探究欲，热衷学术探讨与思想的碰撞，也始终乐于学习一切新鲜事物。",
    aboutP3: "Curious about society · Eager for ideas · Always learning.",
    factAge: "年龄", factGender: "性别", factGenderV: "男",
    factFrom: "籍贯", factFromV: "湖北仙桃",
    factMajor: "专业", factMajorV: "计算政治学",
    strTitle: "个人优势",
    strLead: "在计算与人文的交汇处，做能落地的思考者。",
    str1T: "学科交叉的计算思维",
    str1D: "以计算方法重新理解政治现象，兼具社会科学的问题意识与数据科学的分析工具。",
    str2T: "落地的创新创业力",
    str2D: "从构想到落地，作为第二负责人带队拿下省赛特等奖，兼具创意、统筹与执行力。",
    str3T: "统筹组织的领导力",
    str3D: "从班委到团委组织部，擅长凝聚团队、协调资源，把事情有序推动到底。",
    str4T: "求知若渴的学习力",
    str4D: "对社会问题充满好奇，乐于拥抱新事物，在探讨与碰撞中持续更新自己。",
    journeyTitle: "成长履历",
    jl1T: "政治学类2504班 · 班级组织委员",
    jl1D: "统筹班级活动的策划与组织，服务同学、凝聚集体。",
    jl2T: "学院团委组织部 · 部委",
    jl2D: "参与团学组织建设与日常团务工作。",
    jl3T: "学院团委组织部 · 副部长",
    jl3D: "协助部门管理，牵头组织工作与团队协作。",
    achTitle: "科创成果",
    aw1T: "湖北省“挑战杯”大学生创新创业大赛",
    aw1B: "特等奖", aw1R: "第二负责人",
    aw2T: "中国国际大学生创新创业大赛",
    aw2B: "校赛金奖",
    pracTitle: "社会实践",
    pr1T: "武汉市消防支队",
    pr1D: "行政工作见习，了解公共行政与城市应急治理的一线运行。",
    pr2T: "大学生“三下乡”活动",
    pr2D: "深入基层、服务乡村，在田野中观察真实的中国社会。",
    writeTitle: "学术写作",
    writeSub: "学术著作尚在酝酿，思想的种子正在悄悄发芽。",
    contactTitle: "与我联系",
    cSchool: "院校", cSchoolV: "华中师范大学 政治与国际关系学院",
    cAddress: "地址", cAddressV: "华中师范大学学生宿舍3号楼210室",
    cPhone: "电话", cEmail: "邮箱",
    contactNote: "欢迎与我交流学术、探讨社会、分享新鲜想法。",
    footerMotto: "求实创新 · 立德树人",
    footerName: "张涵 Han Zhang"
  },
  en: {
    brandName: "Han",
    navAbout: "About", navJourney: "Journey", navAchievements: "Awards",
    navPractice: "Practice", navWriting: "Writing", navContact: "Contact",
    coverEyebrow: "CCNU · Experimental Class in Computational Politics",
    coverNameAlt: "张 涵",
    coverSub: "School of Politics and International Studies · Class of 2025",
    coverAffil: "Central China Normal University · Wuhan",
    scrollHint: "Scroll",
    coverCredit: "Guizi Mountain · CCNU (conceptual image)",
    aboutTitle: "About Me",
    portraitCap: "From Xiantao, Hubei · Based in Wuhan",
    aboutP1: "Hello, I am Han Zhang, an undergraduate student (Class of 2025) in the Experimental Class of Computational Politics at the School of Politics and International Studies, Central China Normal University. I come from Xiantao, Hubei, a small town known for its lively spirit and gymnastics.",
    aboutP2: "I am energetic, warm and outgoing, and always happy to help others. Driven by a strong curiosity about social issues, I love academic discussion and the clash of ideas, and I am always eager to learn something new.",
    aboutP3: "Curious about society · Eager for ideas · Always learning.",
    factAge: "Age", factGender: "Gender", factGenderV: "Male",
    factFrom: "Hometown", factFromV: "Xiantao, Hubei",
    factMajor: "Major", factMajorV: "Computational Politics",
    strTitle: "Strengths",
    strLead: "A doer at the intersection of computation and the humanities.",
    str1T: "Interdisciplinary Computational Thinking",
    str1D: "Re-reading political phenomena with computational methods, combining a social scientist's questions with a data scientist's tools.",
    str2T: "From Idea to Impact",
    str2D: "Taking ideas all the way to execution, leading a team to a provincial grand prize as second lead — creativity, coordination and delivery.",
    str3T: "Leadership & Coordination",
    str3D: "From class committee to the Youth League, skilled at uniting teams and aligning resources to see things through.",
    str4T: "An Insatiable Drive to Learn",
    str4D: "Deeply curious about social issues, quick to embrace the new, and constantly renewed through discussion and exchange.",
    journeyTitle: "My Journey",
    jl1T: "Class 2504, Political Science · Organization Committee Member",
    jl1D: "Planning and organizing class activities, serving classmates and bringing people together.",
    jl2T: "Organization Dept., College Youth League · Member",
    jl2D: "Involved in student organization building and routine league affairs.",
    jl3T: "Organization Dept., College Youth League · Deputy Head",
    jl3D: "Supporting department management and leading organizational work and teamwork.",
    achTitle: "Awards & Innovation",
    aw1T: "Hubei “Challenge Cup” Innovation & Entrepreneurship Competition",
    aw1B: "Grand Prize", aw1R: "Second Lead",
    aw2T: "China International College Students' Innovation Competition",
    aw2B: "Campus Gold Award",
    pracTitle: "Social Practice",
    pr1T: "Wuhan Fire Rescue Detachment",
    pr1D: "Administrative internship, learning the frontline of public administration and urban emergency governance.",
    pr2T: "“Three Going to the Countryside” Program",
    pr2D: "Serving rural communities and observing Chinese society in the field.",
    writeTitle: "Writing",
    writeSub: "Academic works are taking shape — the seeds of thought are quietly sprouting.",
    contactTitle: "Get in Touch",
    cSchool: "School", cSchoolV: "School of Politics & Int'l Studies, CCNU",
    cAddress: "Address", cAddressV: "Room 210, Dorm Bldg. 3, CCNU",
    cPhone: "Phone", cEmail: "Email",
    contactNote: "Feel free to talk about academia, society, or any fresh idea.",
    footerMotto: "Seek Truth & Innovate · Cultivate Virtue & Nurture People",
    footerName: "Han Zhang"
  }
};

/* ── 文案渲染 ── */
function renderText(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll(".js-lang-toggle").forEach((btn) => {
    btn.textContent = lang === "zh" ? "EN" : "中文";
  });
}

/* ── 深浅色主题 ── */
function applyTheme(theme) {
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  const icon = theme === "dark" ? "☀" : "☾";
  document.querySelectorAll(".theme-icon").forEach((el) => (el.textContent = icon));
}

/* ── 导航：滚动变色 ── */
function initNavScroll() {
  const nav = document.getElementById("topnav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ── 导航：当前区块高亮 ── */
function initNavSpy() {
  const links = Array.from(document.querySelectorAll(".nav-links a"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ── 滚动渐入 ── */
function initFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

/* ── 封面视差（轻微） ── */
function initParallax() {
  const img = document.querySelector(".cover-img");
  if (!img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, window.innerHeight);
          img.style.transform = `translateY(${y * 0.18}px) scale(1.12)`;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/* ── 灵感句：光标闪烁 ── */
function initInspirationCursor() {
  const line = document.getElementById("inspiration-line");
  if (line) line.innerHTML = 'Inspiration is brewing<span class="cursor">…</span>';
}

/* ── 启动 ── */
(function bootstrap() {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  const savedLang = localStorage.getItem("lang") || "zh";
  renderText(savedLang);

  initInspirationCursor();
  initNavScroll();
  initNavSpy();
  initFadeIn();
  initParallax();

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll(".js-theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  });

  document.querySelectorAll(".js-lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isZh = document.documentElement.lang === "zh-CN";
      const next = isZh ? "en" : "zh";
      localStorage.setItem("lang", next);
      renderText(next);
      initInspirationCursor();
    });
  });
})();
