const evidence = [
  {
    status: "documented",
    label: "Motsägande dokument",
    title: "Rubrikcitatets innebörd motsägs av originalljudet",
    claim: "Originalljudet visar att uttrycket avsåg risken att Borås Tidning skulle missförstå verksamheten, inte kunderna.",
    source: "Oklippt intervju 16 november 2022, 01:10:32–01:10:46.",
    conclusion: "Rubriken gav läsaren en annan innebörd än den som framgår av det fullständiga uttalandet."
  },
  {
    status: "disputed",
    label: "Publicerad uppgift",
    title: "Lurandepåståendet knöts direkt till William",
    claim: "Namn, bild, vd-roll och det förvanskade citatet band det kategoriska lurandepåståendet direkt till William.",
    source: "Den fullständiga publiceringens rubrik, bild, bildtext och brödtext.",
    conclusion: "Läsaren gavs en personifierad bild som inte återger den dokumenterade ansvarskedjan."
  },
  {
    status: "documented",
    label: "Motsägande dokument",
    title: "BankID-avtalen visar vad kunden köpte",
    claim: "Individuella avtal knöt fakturering till topp-10-prestation på Google.",
    source: "Avtal med bland andra Salong Aladyn och Mimos Candles.",
    conclusion: "Kunderna beställde en beskriven prestationsbaserad tjänst och signerade villkoren med BankID."
  },
  {
    status: "documented",
    label: "Motsägande dokument",
    title: "Fakturorna skapades utifrån faktisk prestation",
    claim: "Fem fakturaexempel specificerar sökfras, prestationsdatum, pris per dag och eRocket-sida.",
    source: "Prestationsbaserad faktura, exempel 1–5.",
    conclusion: "Faktureringen följde den modell William förklarade för reportrarna."
  },
  {
    status: "corroborated",
    label: "Ansvarskedjan",
    title: "En extern aktör skötte den tidiga försäljningen",
    claim: "Betalda provisionsfakturor dokumenterar en verklig och ekonomiskt central extern säljkedja.",
    source: "Betalda provisionsfakturor 61, 63, 70 och 71 samt samtida samarbetsutkast.",
    conclusion: "Försäljningsproblemen kan inte rättvisande beskrivas utan den externa aktörens dokumenterade roll."
  },
  {
    status: "corroborated",
    label: "Leveransbevis",
    title: "eRocket var en verklig produkt som levererade",
    claim: "Kundportal, kampanjer, sökord och rankingdata visar faktisk produktion och mätbara resultat.",
    source: "Bevarad dashboard, produktmaterial och Google-data.",
    conclusion: "Påståendet om en bluff är oförenligt med den dokumenterade produkten och dess registrerade prestationer."
  },
  {
    status: "disputed",
    label: "Publicerad uppgift",
    title: "Redaktionen informerades om risken för en felaktig bild",
    claim: "William sade före publicering att ett missförstånd skulle kunna skada både hans namn och verksamheten.",
    source: "Oklippt intervju, 00:48:02–00:48:54 och 01:56:57–01:57:13.",
    conclusion: "Publiceringen skedde efter att redaktionen hade fått både motuppgifter och en uttrycklig skadevarning."
  },
  {
    status: "corroborated",
    label: "Ansvarstagande",
    title: "William agerade när försäljningsproblem upptäcktes",
    claim: "William redovisade intern kontroll, kundkontakt, avslutat samarbete och personalåtgärder för reportrarna.",
    source: "Flera tidskodade intervjuavsnitt och e-postkorrespondens.",
    conclusion: "Agerandet stödjer inte påståendet att William medvetet drev ett upplägg för att lura kunder."
  },
  {
    status: "corroborated",
    label: "Verklig verksamhet",
    title: "Fungerande kommersiell verksamhet före publicering",
    claim: "Rapporter visar faktisk omsättning, personal och positivt beräknat resultat.",
    source: "Resultat- och balansrapporter utskrivna 31 oktober 2022.",
    conclusion: "Underlagen visar en fungerande verksamhet med anställda, intäkter och kundfordringar."
  },
  {
    status: "open",
    label: "Skadan",
    title: "eRocket hade ett dokumenterat mångmiljonvärde",
    claim: "En daterad rapport anger ett värdeintervall om 39,6–48,4 miljoner kronor före konkurserna.",
    source: "Värderingsrapport daterad 18 januari 2024.",
    conclusion: "Det som förstördes var en värderad kommersiell tillgång, inte en bluff."
  },
  {
    status: "disputed",
    label: "Publicerad uppgift",
    title: "Lurande slogs fast utan att helheten redovisades",
    claim: "Rubriken presenterade lurande som ett redaktionellt konstaterande trots den omfattande motbevisningen.",
    source: "Rubriken, artikelns helhetsintryck och materialet redaktionen hade före publicering.",
    conclusion: "Läsare utan egen kännedom fick en bild som motsägs av den samlade dokumentationen."
  },
  {
    status: "open",
    label: "Skadan",
    title: "Efter publiceringarna förändrades Williams yrkesliv",
    claim: "Inkomstfall, förlorade uppdrag, fortsatt spridning och konkurser dokumenterar efterförloppet.",
    source: "Inkomstuppgifter, konkursunderlag, rättelsemejl och dokumenterade spridningshändelser.",
    conclusion: "Artikelseriens bild följde William till kunder, uppdrag och framtida möjligheter."
  }
];

const statusClass = {
  documented: "documented",
  corroborated: "corroborated",
  disputed: "disputed",
  open: "open"
};

function renderEvidence(filter = "all") {
  const grid = document.querySelector("#evidenceGrid");
  grid.innerHTML = evidence.map((item) => `
    <article class="evidence-card ${filter !== "all" && filter !== item.status ? "hidden" : ""}" data-status="${item.status}">
      <span class="status ${statusClass[item.status]}">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.claim}</p>
      <dl>
        <dt>Källa</dt>
        <dd>${item.source}</dd>
        <dt>Slutsats</dt>
        <dd>${item.conclusion}</dd>
      </dl>
    </article>
  `).join("");
}

renderEvidence();

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderEvidence(button.dataset.filter);
  });
});

document.querySelectorAll(".evidence-jump").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: "smooth" });
  });
});

const menuButton = document.querySelector("#menuButton");
const siteNav = document.querySelector("#siteNav");
menuButton.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const progress = document.querySelector("#readingProgress");
window.addEventListener("scroll", () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
}, { passive: true });
