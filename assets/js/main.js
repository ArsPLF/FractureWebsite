/**
 * FRACTURE #37687 — SITE INTERFACE
 * Pure vanilla JavaScript. No build step, no dependencies.
 */

(function () {
  "use strict";

  const DATA = window.TEAM_CONTENT;
  if (!DATA) return;

  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));

  const NAV_ITEMS = [
    { id: "about", label: "About Us", href: "about.html", index: "01" },
    { id: "robot", label: "Our Robot", href: "robot.html", index: "02" },
    { id: "outreach", label: "Outreach", href: "outreach.html", index: "03" },
    { id: "achievements", label: "Achievements", href: "achievements.html", index: "04" },
    { id: "contact", label: "Contact Us", href: "contact.html", index: "05" }
  ];

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function setText(selector, text) {
    $$(selector).forEach((el) => {
      el.textContent = text;
    });
  }

  function currentYear() {
    return new Date().getFullYear();
  }

  /* --------------------------------------------------------------------------
     THEME / DARK MODE
     -------------------------------------------------------------------------- */

  const THEME_KEY = "fracture-theme";
  const htmlRoot = document.documentElement;

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setTheme(theme) {
    if (theme === "light") {
      htmlRoot.classList.add("theme-light");
    } else {
      htmlRoot.classList.remove("theme-light");
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // Storage unavailable; theme still applied for this session.
    }
  }

  function initTheme() {
    const saved = getSavedTheme();
    const prefersDark = !window.matchMedia ||
      !window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    setTheme(theme);
  }

  function buildThemeToggle() {
    const headerRight = $(".header-right");
    if (!headerRight) return;
    const isLight = htmlRoot.classList.contains("theme-light");
    const label = isLight ? "Switch to dark mode" : "Switch to light mode";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "theme-toggle";
    toggle.setAttribute("aria-label", label);
    toggle.innerHTML =
      '<span class="theme-toggle__icon" aria-hidden="true">' +
      (isLight ? "&#9788;" : "&#9790;") +
      "</span>" +
      '<span class="theme-toggle__label mono">' +
      (isLight ? "LIGHT" : "DARK") +
      "</span>";
    toggle.addEventListener("click", () => {
      const nowLight = htmlRoot.classList.toggle("theme-light");
      toggle.querySelector(".theme-toggle__icon").textContent = nowLight
        ? "&#9788;"
        : "&#9790;";
      toggle.querySelector(".theme-toggle__label").textContent = nowLight
        ? "LIGHT"
        : "DARK";
      toggle.setAttribute("aria-label", nowLight
        ? "Switch to dark mode"
        : "Switch to light mode");
      setTheme(nowLight ? "light" : "dark");
    });
    headerRight.insertBefore(toggle, headerRight.firstChild);
  }

  /* --------------------------------------------------------------------------
     IMAGE HANDLING & TECHNICAL PLACEHOLDERS
     -------------------------------------------------------------------------- */

  function blueprintMarkup(title, path, code) {
    return (
      '<div class="blueprint" role="img" aria-label="' +
      escapeHtml(title || "Image placeholder") +
      '">' +
      '<span class="blueprint__corner blueprint__corner--tl"></span>' +
      '<span class="blueprint__corner blueprint__corner--tr"></span>' +
      '<span class="blueprint__corner blueprint__corner--bl"></span>' +
      '<span class="blueprint__corner blueprint__corner--br"></span>' +
      '<span class="blueprint__code">' +
      escapeHtml(code || "VISUAL SLOT // 37687") +
      "</span>" +
      '<span class="blueprint__glyph" aria-hidden="true">//</span>' +
      '<strong class="blueprint__title">' +
      escapeHtml(title || "Image") +
      "</strong>" +
      '<span class="blueprint__path">' +
      escapeHtml(path || "assets/images/...") +
      "</span>" +
      "</div>"
    );
  }

  function mediaInnerMarkup(image, pathHint, alt, eager) {
    if (!image) return blueprintMarkup(alt, pathHint);
    return (
      '<img src="' +
      escapeHtml(image) +
      '" alt="' +
      escapeHtml(alt || "") +
      '" ' +
      (eager ? 'fetchpriority="high"' : 'loading="lazy"') +
      ' decoding="async" data-fallback-title="' +
      escapeHtml(alt || "Image") +
      '" data-fallback-path="' +
      escapeHtml(pathHint || image) +
      '" />'
    );
  }

  function bindImageFallbacks(root) {
    $$("img[data-fallback-title]", root || document).forEach((img) => {
      if (img.dataset.fallbackBound === "true") return;
      img.dataset.fallbackBound = "true";
      img.addEventListener("error", () => {
        const parent = img.parentElement;
        if (!parent) return;
        parent.innerHTML = blueprintMarkup(
          img.getAttribute("data-fallback-title"),
          img.getAttribute("data-fallback-path")
        );
      });
    });
  }

  function setMedia(container, options) {
    if (!container) return;
    container.innerHTML = mediaInnerMarkup(
      options.image,
      options.path,
      options.alt,
      options.eager
    );
    bindImageFallbacks(container);
  }

  /* --------------------------------------------------------------------------
     HEADER / FOOTER
     -------------------------------------------------------------------------- */

  function buildHeader() {
    const header = $("#site-header");
    if (!header) return;

    const page = document.body.getAttribute("data-page") || "home";

    const desktopLinks = NAV_ITEMS.map((item) => {
      const current = item.id === page ? ' aria-current="page"' : "";
      return (
        '<a class="nav-link" href="' +
        item.href +
        '"' +
        current +
        "><span class=\"nav-index\">" +
        item.index +
        "</span>" +
        escapeHtml(item.label) +
        "</a>"
      );
    }).join("");

    const mobileLinks = NAV_ITEMS.map((item) => {
      const current = item.id === page ? ' aria-current="page"' : "";
      return (
        '<a class="drawer-link" href="' +
        item.href +
        '"' +
        current +
        "><span class=\"drawer-index\">" +
        item.index +
        "</span><span class=\"drawer-label\">" +
        escapeHtml(item.label) +
        '</span><span class="drawer-arrow" aria-hidden="true">&#8599;</span></a>'
      );
    }).join("");

    header.innerHTML =
      '<div class="container header-inner">' +
      '<a class="brand" href="index.html" aria-label="' +
      escapeHtml(DATA.identity.teamName) +
      ' home">' +
      '<img class="brand-mark" src="' +
      escapeHtml(DATA.identity.logoPath) +
      '" width="38" height="38" alt="" />' +
      '<span class="brand-type"><span class="brand-name">' +
      escapeHtml(DATA.identity.teamName).toUpperCase() +
      '</span><span class="brand-sub">FTC // ' +
      escapeHtml(DATA.identity.teamNumber) +
      "</span></span></a>" +
      '<nav class="primary-nav" aria-label="Primary navigation">' +
      desktopLinks +
      "</nav>" +
      '<div class="header-right">' +
      '<div class="header-status"><span class="status-dot" aria-hidden="true"></span><span>SEASON <span class="mono">' +
      escapeHtml(DATA.identity.season) +
      "</span></span></div>" +
      '<a class="btn btn--ghost btn--sm header-cta" href="contact.html">CONTACT<span class="btn-arrow" aria-hidden="true">&#8599;</span></a>' +
      '<button type="button" class="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-drawer" aria-label="Open navigation menu">' +
      '<span class="toggle-lines" aria-hidden="true"><span></span><span></span><span></span></span>' +
      "</button>" +
      "</div>" +
      "</div>" +
      '<div id="mobile-drawer" class="mobile-drawer" aria-hidden="true">' +
      '<div class="drawer-head"><span class="mono">NAVIGATION // 05 CHANNELS</span>' +
      '<button type="button" class="drawer-close" aria-label="Close navigation menu">&#10005;</button></div>' +
      mobileLinks +
      '<a class="drawer-link drawer-link--contact" href="contact.html"><span class="drawer-index">06</span><span class="drawer-label">CONTACT</span><span class="drawer-arrow" aria-hidden="true">&#8599;</span></a>' +
      '<div class="drawer-foot"><span class="status-dot" aria-hidden="true"></span> FTC TEAM ' +
      escapeHtml(DATA.identity.teamNumber) +
      " // " +
      escapeHtml(DATA.identity.location).toUpperCase() +
      "</div>" +
      "</div>";

    const toggle = $(".mobile-menu-toggle", header);
    const drawer = $("#mobile-drawer", header);
    if (drawer) document.body.appendChild(drawer);
    const closeBtn = drawer ? $(".drawer-close", drawer) : null;

    function setDrawer(open) {
      if (!drawer || !toggle) return;
      drawer.classList.toggle("is-open", open);
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      document.body.classList.toggle("nav-open", open);
      if (open) {
        const first = drawer.querySelector(".drawer-link");
        if (first) first.focus({ preventScroll: true });
      }
    }

    if (toggle && drawer) {
      toggle.addEventListener("click", () => {
        setDrawer(!drawer.classList.contains("is-open"));
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        setDrawer(false);
        if (toggle) toggle.focus();
      });
    }
    $$(".drawer-link", drawer || header).forEach((link) => {
      link.addEventListener("click", () => setDrawer(false));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer && drawer.classList.contains("is-open")) {
        setDrawer(false);
        if (toggle) toggle.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1100 && drawer && drawer.classList.contains("is-open")) {
        setDrawer(false);
      }
    });
  }

  function socialMarkup(social) {
    if (social.url) {
      return (
        '<a class="footer-social" href="' +
        escapeHtml(social.url) +
        '" target="_blank" rel="noopener noreferrer"><span>' +
        escapeHtml(social.label) +
        '</span><span class="social-meta">' +
        escapeHtml(social.handle) +
        "</span></a>"
      );
    }
    return (
      '<span class="footer-social footer-social--pending"><span>' +
      escapeHtml(social.label) +
      '</span><span class="social-meta">PENDING</span></span>'
    );
  }

  function buildFooter() {
    const footer = $("#site-footer");
    if (!footer) return;

    const socials = DATA.identity.socials.map(socialMarkup).join("");

    footer.innerHTML =
      '<div class="container">' +
      '<div class="footer-grid">' +
      '<div class="footer-brand">' +
      '<a class="brand brand--footer" href="index.html">' +
      '<img class="brand-mark" src="' +
      escapeHtml(DATA.identity.logoPath) +
      '" width="44" height="44" alt="" />' +
      '<span class="brand-type"><span class="brand-name">FRACTURE</span><span class="brand-sub">FTC // ' +
      escapeHtml(DATA.identity.teamNumber) +
      "</span></span></a>" +
      '<p class="footer-tagline">' +
      escapeHtml(DATA.identity.tagline) +
      "</p>" +
      '<div class="footer-status"><span class="status-dot" aria-hidden="true"></span>SEASON ' +
      escapeHtml(DATA.identity.season) +
      " // IN BUILD</div>" +
      "</div>" +
      '<div class="footer-col"><div class="footer-heading">EXPLORE</div><nav class="footer-links" aria-label="Footer navigation">' +
      NAV_ITEMS.map(
        (item) =>
          '<a href="' + item.href + '">' + escapeHtml(item.label) + "</a>"
      ).join("") +
      '<a href="contact.html">CONTACT</a></nav></div>' +
      '<div class="footer-col"><div class="footer-heading">CONNECT</div><div class="footer-links">' +
      (DATA.identity.contactEmail
        ? '<a href="mailto:' +
          escapeHtml(DATA.identity.contactEmail) +
          '" class="footer-email">' +
          escapeHtml(DATA.identity.contactEmail) +
          "</a>"
        : '<span class="footer-email footer-email--pending">INBOX PENDING</span>') +
      socials +
      "</div></div>" +
      '<div class="footer-col"><div class="footer-heading">IDENTITY</div><dl class="footer-data">' +
      "<div><dt>TEAM</dt><dd>FRACTURE</dd></div>" +
      "<div><dt>NUMBER</dt><dd>" +
      escapeHtml(DATA.identity.teamNumber) +
      "</dd></div>" +
      "<div><dt>PROGRAM</dt><dd>FTC</dd></div>" +
      "<div><dt>BASE</dt><dd>" +
      escapeHtml(DATA.identity.location).toUpperCase() +
      "</dd></div>" +
      "</dl></div>" +
      "</div>" +
      '<div class="footer-mega" aria-hidden="true">FRACTURE</div>' +
      '<div class="footer-bottom">' +
      "<span>&copy; " +
      currentYear() +
      " FRACTURE FTC #" +
      escapeHtml(DATA.identity.teamNumber) +
      ". ALL SYSTEMS IN BUILD.</span>" +
      "<span>ROUND ROCK, TX // 30.5083&deg; N, 97.6789&deg; W</span>" +
      '<button type="button" class="back-to-top">BACK TO TOP <span aria-hidden="true">&#8593;</span></button>' +
      "</div>" +
      "</div>";

    const backToTop = $(".back-to-top", footer);
    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* --------------------------------------------------------------------------
     UI CHROME
     -------------------------------------------------------------------------- */

  function initScrollUI() {
    const header = $("#site-header");
    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    let ticking = false;

    function update() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = height > 0 ? Math.min(scrollTop / height, 1) : 0;
      progress.style.transform = "scaleX(" + ratio + ")";
      if (header) header.classList.toggle("is-scrolled", scrollTop > 24);
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  function initReveal() {
    const elements = $$(".reveal");
    if (!elements.length) return;

    const reducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.remove("is-hidden"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.94) {
        el.classList.add("is-hidden");
        observer.observe(el);
      }
    });
  }

  function initPointerGlow() {
    if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
    $$("[data-glow]").forEach((surface) => {
      surface.addEventListener("pointermove", (event) => {
        const rect = surface.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        surface.style.setProperty("--mx", x + "%");
        surface.style.setProperty("--my", y + "%");
      });
    });
  }

  function hydrateTicker() {
    const track = $("#home-ticker");
    if (!track) return;
    const items = DATA.ticker
      .map((item) => '<span class="ticker__item">' + escapeHtml(item) + "</span>")
      .join("");
    track.innerHTML =
      '<div class="ticker__group">' +
      items +
      '</div><div class="ticker__group" aria-hidden="true">' +
      items +
      "</div>";
  }

  /* --------------------------------------------------------------------------
     SHARED RENDERERS
     -------------------------------------------------------------------------- */

  function statMarkup(stat) {
    return (
      '<div class="stat">' +
      '<span class="stat__value">' +
      escapeHtml(stat.value) +
      "</span>" +
      '<span class="stat__label">' +
      escapeHtml(stat.label) +
      "</span>" +
      (stat.note ? '<span class="stat__note">' + escapeHtml(stat.note) + "</span>" : "") +
      "</div>"
    );
  }

  function memberCardMarkup(person, delay) {
    return (
      '<article class="member-card reveal" style="--d:' +
      (delay || 0) +
      '">' +
      '<div class="member-card__top"><span class="mono">R / ' +
      escapeHtml(person.number) +
      '</span><span class="member-badge">FOUNDING</span></div>' +
      '<div class="member-card__monogram" aria-hidden="true">' +
      escapeHtml(person.initials) +
      "</div>" +
      '<div class="member-card__body">' +
      '<h3 class="member-name">' +
      escapeHtml(person.name) +
      "</h3>" +
      '<div class="member-card__fields">' +
      '<div class="member-field member-field--role">' +
      '<span class="member-field__label">ROLE</span>' +
      '<span class="member-role">' +
      escapeHtml(person.role || "To be announced") +
      "</span></div>" +
      '<div class="member-field">' +
      '<span class="member-field__label">DESCRIPTION</span>' +
      '<span class="member-focus">' +
      escapeHtml(person.focus || "Description to be announced") +
      "</span></div>" +
      "</div>" +
      '<span class="member-arrow" aria-hidden="true">&#8599;</span>' +
      "</div>" +
      "</article>"
    );
  }

  function recognitionRowMarkup(entry, type, index) {
    const primary = type === "awards" ? entry.title : entry.rank;
    return (
      '<li class="recognition-row">' +
      '<span class="recognition-row__index mono">' +
      String(index + 1).padStart(2, "0") +
      "</span>" +
      '<div class="recognition-row__main"><h4>' +
      escapeHtml(primary || "To be announced") +
      "</h4>" +
      (entry.detail
        ? '<p class="recognition-row__detail">' + escapeHtml(entry.detail) + "</p>"
        : "") +
      "</div>" +
      '<div class="recognition-row__meta mono"><span>' +
      escapeHtml(entry.event || "Event to be announced") +
      "</span><span>" +
      escapeHtml(entry.season || DATA.identity.season) +
      "</span></div>" +
      "</li>"
    );
  }

  function recognitionPanelMarkup(type, entries) {
    const isAwards = type === "awards";
    return (
      '<article class="recognition-panel">' +
      '<div class="recognition-panel__head"><span class="mono">' +
      (isAwards ? "A / AWARDS" : "B / RANKINGS") +
      '</span><span class="mono">' +
      String(entries.length).padStart(2, "0") +
      " LOGGED</span></div>" +
      (entries.length
        ? '<ul class="recognition-list">' +
          entries
            .map((entry, index) => recognitionRowMarkup(entry, type, index))
            .join("") +
          "</ul>"
        : '<div class="recognition-empty">' +
          '<span class="recognition-empty__mark mono" aria-hidden="true">' +
          (isAwards ? "A—00" : "R—00") +
          "</span>" +
          '<p class="recognition-empty__title">' +
          (isAwards ? "No awards recorded yet." : "No rankings recorded yet.") +
          "</p>" +
          '<span class="recognition-empty__status mono">AWAITING VERIFIED RESULT</span>' +
          "</div>") +
      "</article>"
    );
  }

  /* --------------------------------------------------------------------------
     HOME — LANDING PAGE
     -------------------------------------------------------------------------- */

  function navCardMarkup(id, label, href, index) {
    return (
      '<a class="nav-card" href="' +
      escapeHtml(href) +
      '">' +
      '<span class="nav-card__index mono">' +
      escapeHtml(index) +
      "</span>" +
      '<h3 class="nav-card__title display">' +
      escapeHtml(label) +
      "</h3>" +
      '<span class="nav-card__arrow" aria-hidden="true">&#8599;</span>' +
      "</a>"
    );
  }

  function hydrateHome() {
    const navCards = [
      { id: "about", label: "About Us", href: "about.html", index: "01" },
      { id: "robot", label: "Our Robot", href: "robot.html", index: "02" },
      { id: "outreach", label: "Outreach", href: "outreach.html", index: "03" },
      { id: "achievements", label: "Achievements", href: "achievements.html", index: "04" },
      { id: "contact", label: "Contact Us", href: "contact.html", index: "05" }
    ];

    const homeMain = $("#main");
    if (!homeMain) return;

    homeMain.innerHTML =
      '<section class="page-hero home-cover" data-glow>' +
      '<div class="container home-cover__inner">' +
      '<div class="home-logo">' +
      '<img class="home-logo__mark" src="' +
      escapeHtml(DATA.identity.logoPath) +
      '" alt="" width="160" height="160" loading="eager" />' +
      "</div>" +
      '<h1 class="home-title display">FRACTURE</h1>' +
      '<span class="home-number display mono">37687</span>' +
      '<span class="home-sub mono">FTC TEAM // ROUND ROCK, TEXAS</span>' +
      "</div>" +
      '</section>' +
      '<section class="section section--light home-nav-section">' +
      '<div class="container">' +
      '<div class="nav-grid">' +
      navCards.map(navCardMarkup).join("") +
      "</div>" +
      "</div>" +
      '</section>' +
      '<section class="section section--dark home-note-section">' +
      '<div class="container">' +
      '<p class="home-note mono" style="text-align:center;">' +
      "Five builders. One machine. No shortcuts — just the next iteration." +
      "</p>" +
      "</div>" +
      "</section>";
  }

  /* --------------------------------------------------------------------------
     ABOUT / TEAM
     -------------------------------------------------------------------------- */

  function hydrateAbout() {
    setText("[data-about='intro']", DATA.about.intro);
    setText("[data-about='statement']", DATA.about.statement);
    setText("[data-about='memberNote']", DATA.about.memberNote);
    setText("[data-about='joinNote']", DATA.about.joinNote);
    setText("[data-about='recognitionIntro']", DATA.about.recognition.intro);

    setMedia($("#about-group-media"), {
      image: DATA.about.groupImage,
      path: "assets/images/team/workshop-collab.jpg",
      alt: DATA.about.groupImageAlt
    });

    const values = $("#about-values-grid");
    if (values) {
      values.innerHTML = DATA.about.values
        .map(
          (value, index) =>
            '<article class="value-card reveal" style="--d:' +
            index * 80 +
            '"><span class="value-card__index">' +
            escapeHtml(value.index) +
            "</span><h3>" +
            escapeHtml(value.title) +
            "</h3><p>" +
            escapeHtml(value.body) +
            "</p></article>"
        )
        .join("");
    }

    const roadmap = $("#about-roadmap");
    if (roadmap) {
      roadmap.innerHTML =
        '<div class="phase-track">' +
        DATA.about.roadmap
          .map(
            (phase) =>
              '<article class="phase' +
              (phase.status === "ACTIVE" ? " phase--active" : "") +
              '"><span class="phase__node" aria-hidden="true"></span><span class="phase__num mono">PHASE / ' +
              escapeHtml(phase.phase) +
              "</span><h3>" +
              escapeHtml(phase.title) +
              "</h3><p>" +
              escapeHtml(phase.detail) +
              '</p><span class="phase__status">' +
              escapeHtml(phase.status) +
              "</span></article>"
          )
          .join("") +
        "</div>";
    }

    const roster = $("#about-roster-grid");
    if (roster) {
      roster.innerHTML = DATA.about.members
        .map((person, index) => memberCardMarkup(person, index * 60))
        .join("");
    }

    const recognition = $("#about-recognition");
    if (recognition) {
      const awards = DATA.about.recognition.awards || [];
      const rankings = DATA.about.recognition.rankings || [];
      const hasEntries = awards.length + rankings.length > 0;
      recognition.innerHTML =
        '<div class="recognition-grid">' +
        recognitionPanelMarkup("awards", awards) +
        recognitionPanelMarkup("rankings", rankings) +
        "</div>" +
        '<div class="recognition-foot"><p class="recognition-note">' +
        escapeHtml(
          hasEntries
            ? DATA.about.recognition.archiveNote
            : DATA.about.recognition.emptyNote
        ) +
        '</p><a class="recognition-link" href="achievements.html">FULL RESULTS ARCHIVE <span aria-hidden="true">&#8599;</span></a></div>';
    }
  }

  /* --------------------------------------------------------------------------
     ROBOT
     -------------------------------------------------------------------------- */

  function subsystemVisualMarkup(sub) {
    if (sub.image) {
      return (
        '<div class="media media--4x3">' +
        mediaInnerMarkup(sub.image, sub.placeholderPath, sub.name + " detail") +
        "</div>"
      );
    }
    return (
      '<div class="schematic" role="img" aria-label="' +
      escapeHtml(sub.name) +
      ' technical visual placeholder">' +
      '<span class="schematic__corner schematic__corner--tl"></span>' +
      '<span class="schematic__corner schematic__corner--tr"></span>' +
      '<span class="schematic__corner schematic__corner--bl"></span>' +
      '<span class="schematic__corner schematic__corner--br"></span>' +
      '<span class="schematic__code">SUB / ' +
      escapeHtml(sub.index) +
      " // VISUAL SLOT</span>" +
      '<span class="schematic__glyph" aria-hidden="true">' +
      escapeHtml(sub.index) +
      "</span>" +
      '<span class="schematic__title">' +
      escapeHtml(sub.name) +
      "</span>" +
      '<span class="schematic__path">' +
      escapeHtml(sub.placeholderPath) +
      "</span>" +
      "</div>"
    );
  }

  function hydrateRobot() {
    setText("[data-robot='overview']", DATA.robot.overview);
    setText("[data-robot='cadSoftware']", DATA.robot.cadDetails.software);
    setText("[data-robot='cadRevision']", DATA.robot.cadDetails.revision);
    setText("[data-robot='cadSummary']", DATA.robot.cadDetails.summary);

    setMedia($("#robot-hero-media"), {
      image: DATA.robot.heroImage,
      path: "assets/images/robot/hero-chassis.jpg",
      alt: DATA.robot.heroImageAlt,
      eager: true
    });

    const quickSpecs = $("#robot-quick-specs");
    if (quickSpecs) {
      quickSpecs.innerHTML = DATA.robot.quickSpecs
        .map(
          (spec) =>
            '<div class="stat stat--compact"><span class="stat__value">' +
            escapeHtml(spec.value) +
            '</span><span class="stat__label">' +
            escapeHtml(spec.label) +
            '</span><span class="stat__note">' +
            escapeHtml(spec.note) +
            "</span></div>"
        )
        .join("");
    }

    const tableBody = $("#robot-spec-table-body");
    if (tableBody) {
      tableBody.innerHTML = DATA.robot.specTable
        .map(
          (row) =>
            '<tr><th scope="row">' +
            escapeHtml(row.parameter) +
            '</th><td class="mono-cell">' +
            escapeHtml(row.spec) +
            '</td><td class="table-note">' +
            escapeHtml(row.notes) +
            "</td></tr>"
        )
        .join("");
    }

    const accordion = $("#robot-subsystems");
    if (accordion) {
      accordion.innerHTML = DATA.robot.subsystems
        .map((sub, index) => {
          const open = index === 0;
          const panelId = "subsystem-panel-" + index;
          return (
            '<div class="accordion-item">' +
            '<button type="button" class="accordion-trigger" aria-expanded="' +
            (open ? "true" : "false") +
            '" aria-controls="' +
            panelId +
            '"><span class="accordion-index">' +
            escapeHtml(sub.index) +
            '</span><span class="accordion-title"><span class="accordion-name">' +
            escapeHtml(sub.name) +
            '</span><span class="accordion-summary">' +
            escapeHtml(sub.summary) +
            '</span></span><span class="tag accordion-tag">' +
            escapeHtml(sub.status) +
            '</span><span class="accordion-icon" aria-hidden="true">+</span></button>' +
            '<div class="accordion-panel" id="' +
            panelId +
            '"' +
            (open ? "" : " hidden") +
            "><div class=\"accordion-copy\"><p class=\"accordion-lead\">" +
            escapeHtml(sub.summary) +
            "</p><p>" +
            escapeHtml(sub.description) +
            '</p><dl class="detail-list">' +
            sub.metrics
              .map(
                (metric) =>
                  "<div><dt>" +
                  escapeHtml(metric.label) +
                  "</dt><dd>" +
                  escapeHtml(metric.value) +
                  "</dd></div>"
              )
              .join("") +
            "</dl></div>" +
            subsystemVisualMarkup(sub) +
            "</div></div>"
          );
        })
        .join("");

      accordion.addEventListener("click", (event) => {
        const trigger = event.target.closest(".accordion-trigger");
        if (!trigger) return;
        const panelId = trigger.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", expanded ? "false" : "true");
        if (panel) panel.hidden = expanded;
      });

      const expandAll = $("#robot-expand-all");
      if (expandAll) {
        expandAll.addEventListener("click", () => {
          const triggers = $$(".accordion-trigger", accordion);
          const anyClosed = triggers.some(
            (trigger) => trigger.getAttribute("aria-expanded") !== "true"
          );
          triggers.forEach((trigger) => {
            const panel = document.getElementById(
              trigger.getAttribute("aria-controls")
            );
            trigger.setAttribute("aria-expanded", anyClosed ? "true" : "false");
            if (panel) panel.hidden = !anyClosed;
          });
          expandAll.textContent = anyClosed ? "COLLAPSE ALL" : "EXPAND ALL";
        });
      }
    }

    setMedia($("#robot-cad-media"), {
      image: DATA.robot.cadImage,
      path: "assets/images/robot/cad-assembly.jpg",
      alt: DATA.robot.cadImageAlt
    });

    const deliverables = $("#robot-cad-deliverables");
    if (deliverables) {
      deliverables.innerHTML = DATA.robot.cadDetails.deliverables
        .map((item) => "<li>" + escapeHtml(item) + "</li>")
        .join("");
    }
  }

  /* --------------------------------------------------------------------------
     OUTREACH
     -------------------------------------------------------------------------- */

  function outreachVisualMarkup(program, index) {
    if (program.image) {
      return (
        '<div class="media media--16x9">' +
        mediaInnerMarkup(program.image, program.placeholderPath, program.title) +
        "</div>"
      );
    }
    return (
      '<div class="program-visual" aria-hidden="true">' +
      '<span class="program-visual__code">OUT / ' +
      String(index + 1).padStart(2, "0") +
      "</span>" +
      '<span class="program-visual__glyph">' +
      String(index + 1).padStart(2, "0") +
      "</span>" +
      '<span class="program-visual__ring"></span>' +
      "</div>"
    );
  }

  function hydrateOutreach() {
    setText("[data-outreach='intro']", DATA.outreach.intro);
    setText("[data-outreach='ctaTitle']", DATA.outreach.ctaTitle);
    setText("[data-outreach='ctaCopy']", DATA.outreach.ctaCopy);
    setText("[data-outreach='ctaLabel']", DATA.outreach.ctaLabel);

    setMedia($("#outreach-hero-media"), {
      image: DATA.outreach.heroImage,
      path: "assets/images/outreach/stem-demo.jpg",
      alt: DATA.outreach.heroImageAlt,
      eager: true
    });

    const stats = $("#outreach-stats");
    if (stats) stats.innerHTML = DATA.outreach.impactStats.map(statMarkup).join("");

    const filterBar = $("#outreach-filters");
    const gallery = $("#outreach-gallery");
    const lightbox = $("#outreach-lightbox");

    if (filterBar && gallery) {
      const categories = ["ALL"].concat(
        Array.from(new Set(DATA.outreach.programs.map((program) => program.category.toUpperCase())))
      );
      let active = "ALL";

      function renderGallery() {
        const visible = DATA.outreach.programs
          .map((program, index) => ({ program, index }))
          .filter(({ program }) => active === "ALL" || program.category.toUpperCase() === active);

        gallery.innerHTML = visible
          .map(
            ({ program, index }) =>
              '<button type="button" class="program-card reveal" style="--d:' +
              (index * 60) +
              '" data-program-index="' +
              index +
              '">' +
              outreachVisualMarkup(program, index) +
              '<span class="program-card__body"><span class="program-card__top"><span class="tag">' +
              escapeHtml(program.status) +
              '</span><span class="mono program-card__cat">' +
              escapeHtml(program.category.toUpperCase()) +
              '</span></span><span class="program-card__title">' +
              escapeHtml(program.title) +
              '</span><span class="program-card__meta">' +
              escapeHtml(program.date) +
              " // " +
              escapeHtml(program.location.toUpperCase()) +
              '</span><span class="program-card__copy">' +
              escapeHtml(program.summary) +
              '</span><span class="program-card__open">OPEN FILE <span aria-hidden="true">&#8599;</span></span></span></button>'
          )
          .join("");
        initReveal();
      }

      filterBar.innerHTML = categories
        .map(
          (category) =>
            '<button type="button" class="filter-btn" data-filter="' +
            escapeHtml(category) +
            '" aria-pressed="' +
            (category === active ? "true" : "false") +
            '">' +
            escapeHtml(category) +
            "</button>"
        )
        .join("");

      filterBar.addEventListener("click", (event) => {
        const button = event.target.closest(".filter-btn");
        if (!button) return;
        active = button.getAttribute("data-filter");
        $$(".filter-btn", filterBar).forEach((btn) => {
          btn.setAttribute(
            "aria-pressed",
            btn.getAttribute("data-filter") === active ? "true" : "false"
          );
        });
        renderGallery();
      });

      if (lightbox) {
        const closeButton = $(".lightbox-close", lightbox);
        const title = $("#lightbox-title");
        const meta = $("#lightbox-meta");
        const desc = $("#lightbox-desc");
        const media = $("#lightbox-media");
        let lastFocus = null;

        function openLightbox(index) {
          const program = DATA.outreach.programs[index];
          if (!program) return;
          lastFocus = document.activeElement;
          if (title) title.textContent = program.title;
          if (meta)
            meta.textContent =
              program.status +
              " // " +
              program.category.toUpperCase() +
              " // " +
              program.location.toUpperCase();
          if (desc) desc.textContent = program.summary;
          if (media) {
            media.innerHTML = program.image
              ? '<div class="media media--16x9">' +
                mediaInnerMarkup(program.image, program.placeholderPath, program.title) +
                "</div>"
              : '<div class="schematic schematic--lightbox">' +
                '<span class="schematic__code">OUTREACH FILE // ' +
                String(index + 1).padStart(2, "0") +
                '</span><span class="schematic__glyph">' +
                String(index + 1).padStart(2, "0") +
                '</span><span class="schematic__title">' +
                escapeHtml(program.category.toUpperCase()) +
                '</span><span class="schematic__path">Status: ' +
                escapeHtml(program.status) +
                "</span></div>";
            bindImageFallbacks(media);
          }
          lightbox.hidden = false;
          document.body.classList.add("no-scroll");
          if (closeButton) closeButton.focus();
        }

        function closeLightbox() {
          lightbox.hidden = true;
          document.body.classList.remove("no-scroll");
          if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
        }

        gallery.addEventListener("click", (event) => {
          const card = event.target.closest("[data-program-index]");
          if (!card) return;
          openLightbox(Number(card.getAttribute("data-program-index")));
        });

        if (closeButton) closeButton.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", (event) => {
          if (event.target === lightbox) closeLightbox();
        });
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
        });
      }

      renderGallery();
    }
  }

  /* --------------------------------------------------------------------------
     ACHIEVEMENTS
     -------------------------------------------------------------------------- */

  function hydrateAchievements() {
    setText("[data-achievements='intro']", DATA.achievements.intro);

    const stats = $("#achievements-stats");
    if (stats) {
      stats.innerHTML = DATA.achievements.summaryStats.map(statMarkup).join("");
    }

    const seasons = $("#achievements-seasons");
    if (seasons) {
      seasons.innerHTML = DATA.achievements.seasons
        .map((season) => {
          if (!season.events || !season.events.length) {
            return (
              '<div class="empty-state reveal">' +
              '<span class="empty-state__ghost" aria-hidden="true">000</span>' +
              '<div class="empty-state__head"><span class="tag">ARCHIVE EMPTY</span><span class="mono">' +
              escapeHtml(season.season) +
              " // " +
              escapeHtml(season.robotName) +
              '</span></div><h3 class="empty-state__title">NO MATCH DATA LOGGED</h3><p class="empty-state__copy">' +
              escapeHtml(DATA.achievements.archiveNote) +
              '</p><div class="empty-state__grid">' +
              '<div><span>SEASON</span><strong>' +
              escapeHtml(season.season) +
              "</strong></div>" +
              '<div><span>PLATFORM</span><strong>' +
              escapeHtml(season.robotName) +
              "</strong></div>" +
              '<div><span>STATUS</span><strong>' +
              escapeHtml(season.status) +
              "</strong></div>" +
              '<div><span>FIRST EVENT</span><strong>TO BE ANNOUNCED</strong></div>' +
              "</div></div>"
            );
          }

          const rows = season.events
            .map(
              (event) =>
                '<div class="result-row"><span class="result-date mono">' +
                escapeHtml(event.date) +
                '</span><div class="result-main"><h3>' +
                escapeHtml(event.event) +
                '</h3><p>' +
                escapeHtml(event.notes || "") +
                '</p><span class="result-award">' +
                escapeHtml(event.award || "NO AWARD LOGGED") +
                '</span></div><div class="result-numbers"><span>RANK <strong>' +
                escapeHtml(event.ranking) +
                "</strong></span><span>RECORD <strong>" +
                escapeHtml(event.record) +
                "</strong></span></div></div>"
            )
            .join("");

          return (
            '<div class="season-block"><div class="season-head"><div><span class="eyebrow">' +
            escapeHtml(season.season) +
            '</span><h3>' +
            escapeHtml(season.robotName) +
            '</h3></div><span class="tag">' +
            escapeHtml(season.status) +
            '</span></div><div class="result-list">' +
            rows +
            "</div></div>"
          );
        })
        .join("");
    }

    const objectives = $("#achievements-objectives");
    if (objectives) {
      objectives.innerHTML = DATA.achievements.objectives
        .map(
          (objective, index) =>
            '<article class="objective-card reveal" style="--d:' +
            index * 80 +
            '"><span class="objective-card__index">' +
            escapeHtml(objective.index) +
            "</span><h3>" +
            escapeHtml(objective.title) +
            "</h3><p>" +
            escapeHtml(objective.body) +
            '</p><span class="objective-card__mark">TARGET</span></article>'
        )
        .join("");
    }
  }

  /* --------------------------------------------------------------------------
     CONTACT
     -------------------------------------------------------------------------- */

  function hydrateContact() {
    setText("[data-contact='intro']", DATA.contact.intro);
    setText("[data-contact='formNote']", DATA.contact.formNote);
    setText("[data-contact='schedule']", DATA.identity.meetingSchedule);
    setText("[data-contact='address']", DATA.identity.workshopAddress);

    const channels = $("#contact-channels-grid");
    if (channels) {
      channels.innerHTML = DATA.contact.channels
        .map(
          (channel, index) =>
            '<article class="channel-card reveal" style="--d:' +
            index * 70 +
            '"><div class="channel-card__top"><span class="mono">CHANNEL / ' +
            String(index + 1).padStart(2, "0") +
            '</span><span class="status-dot" aria-hidden="true"></span></div><h3>' +
            escapeHtml(channel.title) +
            "</h3><p>" +
            escapeHtml(channel.description) +
            '</p><a class="channel-email" href="mailto:' +
            escapeHtml(channel.email) +
            '">' +
            escapeHtml(channel.email) +
            '</a><div class="channel-actions"><a class="btn btn--ghost btn--sm" href="mailto:' +
            escapeHtml(channel.email) +
            '">COMPOSE<span class="btn-arrow" aria-hidden="true">&#8599;</span></a><button type="button" class="btn btn--ghost btn--sm copy-email" data-copy="' +
            escapeHtml(channel.email) +
            '">COPY</button></div></article>'
        )
        .join("");

      channels.addEventListener("click", (event) => {
        const button = event.target.closest("[data-copy]");
        if (!button) return;
        const address = button.getAttribute("data-copy");
        const done = () => {
          button.textContent = "COPIED";
          window.setTimeout(() => {
            button.textContent = "COPY";
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(address).then(done).catch(done);
        } else {
          done();
        }
      });
    }

    const form = $("#contact-form");
    const feedback = $("#contact-form-feedback");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = $("#sender-name", form).value.trim();
        const email = $("#sender-email", form).value.trim();
        const topic = $("#inquiry-topic", form).value;
        const message = $("#sender-message", form).value.trim();

        if (!name || !message) {
          if (feedback) {
            feedback.hidden = false;
            feedback.textContent =
              "Add your name and a message before opening the email draft.";
          }
          return;
        }

        let target = DATA.identity.contactEmail;
        if (topic === "Sponsorship") target = DATA.identity.sponsorshipEmail;
        if (topic === "Recruitment") target = DATA.identity.recruitmentEmail;

        if (!target) {
          if (feedback) {
            feedback.hidden = false;
            feedback.textContent =
              "The team inbox is being configured. Please check back shortly.";
          }
          return;
        }

        const subject = encodeURIComponent(
          "[" + topic + "] Inquiry from " + name + " // Fracture 37687"
        );
        const body = encodeURIComponent(
          "Name: " +
            name +
            (email ? "\nEmail: " + email : "") +
            "\nTopic: " +
            topic +
            "\n\n" +
            message +
            "\n\n— Sent from the Fracture #37687 website"
        );

        if (feedback) {
          feedback.hidden = false;
          feedback.textContent =
            "Opening a pre-addressed draft to " + target + " in your email client.";
        }
        window.location.href = "mailto:" + target + "?subject=" + subject + "&body=" + body;
      });
    }

    const socials = $("#contact-socials");
    if (socials) {
      socials.innerHTML = DATA.identity.socials
        .map((social) => {
          if (social.url) {
            return (
              '<a class="social-row" href="' +
              escapeHtml(social.url) +
              '" target="_blank" rel="noopener noreferrer"><span>' +
              escapeHtml(social.label) +
              '</span><span class="social-handle">' +
              escapeHtml(social.handle) +
              '</span><span class="social-mark" aria-hidden="true">&#8599;</span></a>'
            );
          }
          return (
            '<span class="social-row social-row--pending"><span>' +
            escapeHtml(social.label) +
            '</span><span class="social-handle">' +
            escapeHtml(social.handle) +
            '</span><span class="social-mark">PENDING</span></span>'
          );
        })
        .join("");
    }
  }

  /* --------------------------------------------------------------------------
     INITIALISE
     -------------------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    buildHeader();
    buildThemeToggle();
    buildFooter();
    hydrateTicker();
    initScrollUI();

    const page = document.body.getAttribute("data-page");
    if (page === "home") hydrateHome();
    if (page === "about") hydrateAbout();
    if (page === "robot") hydrateRobot();
    if (page === "outreach") hydrateOutreach();
    if (page === "achievements") hydrateAchievements();
    if (page === "contact") hydrateContact();

    bindImageFallbacks(document);
    initPointerGlow();
    initReveal();
  });
})();
