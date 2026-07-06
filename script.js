const menuToggle = document.querySelector("[data-menu-toggle]");
const navlinks = document.querySelector("[data-navlinks]");

if (menuToggle && navlinks) {
  menuToggle.addEventListener("click", () => {
    navlinks.classList.toggle("open");
  });
}

document.querySelectorAll(".navlinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navlinks?.classList.remove("open");
  });
});

document.querySelectorAll(".flip").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-open");
  });
});

const tabButtons = document.querySelectorAll("[data-tab]");
const tabTitle = document.querySelector("[data-tab-title]");
const tabText = document.querySelector("[data-tab-text]");

const tabData = {
  liberdade: {
    title: "Busca por liberdade",
    text: "A liberdade era o ponto central. A revolta expressava a tentativa de romper com a violência e a exploração do sistema escravista."
  },
  escravidao: {
    title: "Descontentamento com a escravidão",
    text: "A escravidão impunha trabalho forçado, castigos, separação de famílias e perda de autonomia. Esse cenário alimentava a insatisfação e a resistência."
  },
  religiao: {
    title: "Perseguição religiosa",
    text: "Muitos Malês preservavam práticas islâmicas. A repressão religiosa atingia diretamente sua identidade, sua fé e sua organização comunitária."
  },
  vida: {
    title: "Melhores condições de vida",
    text: "Além da liberdade, havia o desejo por dignidade, segurança e fim das injustiças sofridas diariamente pela população africana escravizada e liberta."
  }
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.tab;

    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    if (tabTitle && tabText && tabData[key]) {
      tabTitle.textContent = tabData[key].title;
      tabText.textContent = tabData[key].text;
    }
  });
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

reveals.forEach((item) => observer.observe(item));

const kahootUrl = window.KAHOOT_URL || "";
const qrTarget = document.querySelector("[data-qr]");
const kahootButton = document.querySelector("[data-kahoot-link]");

if (qrTarget && kahootButton && kahootUrl) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=${encodeURIComponent(kahootUrl)}`;
  qrTarget.innerHTML = `<img src="${qrUrl}" alt="QR Code para acessar o Kahoot">`;
  kahootButton.href = kahootUrl;
}

const activePath = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navlinks a").forEach((link) => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === activePath) {
    link.classList.add("active");
  }
});
