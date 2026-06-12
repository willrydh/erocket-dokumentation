const archiveItems = [
  {
    id: "BT-2014-2019",
    category: "bt",
    title: "BT:s tidigare positiva/legitima ram om William",
    date: "2014-2019",
    type: "Artikelkarta",
    shows: "BT beskrev William som digital initiativtagare, branschperson och vd för en digital specialistbyrå innan 2022 års omsvängning.",
    matters: "Visar före-och-efter: samma kompetens och miljö som tidigare var legitim ramas senare om till misstänkliggörande.",
    counters: "Att William från början skulle ha varit en okänd eller oseriös aktör.",
    status: "Indexerad. Korta utdrag och metadata, inte full artikeltext.",
    link: "#artikelkarta"
  },
  {
    id: "BT-2022-11-19",
    category: "bt",
    title: "19 november 2022: brytpunkten i BT:s publicering",
    date: "2022-11-19",
    type: "BT-publicering",
    shows: "Artikeln etablerade ramen om mardröm, klorna och grundlurade kunder.",
    matters: "Det är den centrala publiceringen där William personligen kopplas till lurandepåståendet.",
    counters: "Att skadan bara skulle avse ett bolag eller en neutral granskning.",
    status: "Metadata och korta kärnutdrag indexerade. Full artikel återpubliceras inte öppet.",
    link: ""
  },
  {
    id: "BT-2022-12",
    category: "bt",
    title: "December 2022: ramen förstärks och sprids",
    date: "2022-12-04 till 2022-12-14",
    type: "BT-publiceringar",
    shows: "Uppföljningar om jagade kunder, hot om stämning, Moderaterna, Adwisemedia och bluffsida.",
    matters: "Visar att 19 november-publiceringen inte stod ensam utan blev en återanvänd berättelse.",
    counters: "Att det bara var en isolerad rubrik eller ett enstaka olyckligt citat.",
    status: "Metadata och korta kärnutdrag indexerade.",
    link: ""
  },
  {
    id: "BT-2024",
    category: "bt",
    title: "2024: den negativa identiteten återanvänds i konkursrapportering",
    date: "2024-04-23 till 2024-05-02",
    type: "BT-publiceringar",
    shows: "Konkursartiklarna använder ramen 'granskade företagaren' och knyter konkurserna till tidigare granskning.",
    matters: "Visar fortsatt skada och fortsatt spridning av den etablerade negativa identiteten.",
    counters: "Att artikelserien saknade efterverkningar.",
    status: "Metadata och korta kärnutdrag indexerade.",
    link: ""
  },
  {
    id: "I-001",
    category: "intervju",
    title: "Oklippt BT-intervju 16 november 2022",
    date: "2022-11-16",
    type: "Originalljud",
    shows: "William förklarar prestationsmodellen, den externa säljkedjan, kundåtgärderna och risken att BT skulle missförstå allt.",
    matters: "Detta visar vad redaktionen faktiskt fick veta före publiceringen.",
    counters: "Att BT saknade tillgång till motbilden innan artikeln publicerades.",
    status: "Transkriberad med tidskoder. Ljudspelare kräver publiceringskontroll.",
    link: "artiklar.html#intervju"
  },
  {
    id: "I-002",
    category: "intervju",
    title: "Tidskodat utdragsprotokoll",
    date: "2026-06",
    type: "Utdragsprotokoll",
    shows: "Sammanfattar nyckelpartier i intervjun med tidskoder för snabb kontroll.",
    matters: "Gör två timmars originalljud granskningsbart utan att läsaren behöver börja från noll.",
    counters: "Att citat och förklaringar skulle vara efterhandskonstruktioner.",
    status: "Publik PDF kan publiceras efter slutlig integritetskontroll.",
    link: "bevis/tidskodat-utdragsprotokoll-intervju-2022-11-16.md"
  },
  {
    id: "A-001",
    category: "avtal",
    title: "BankID-avtal: Salong Aladyn",
    date: "2022",
    type: "Kundavtal",
    shows: "Avtalet skickades och signerades senare, inte under ett manipulerat telefonsamtal enligt den bild BT gav.",
    matters: "Visar att kunden hade ett skriftligt avtal med villkor och BankID-signering.",
    counters: "Att kunderna bara bands muntligt eller utan tydligt avtalsflöde.",
    status: "Original finns. Utdrag visar topp-10-villkor, 12 månader och signeringsflöde. Kräver maskad publik kopia.",
    link: ""
  },
  {
    id: "A-002",
    category: "avtal",
    title: "BankID-avtal: Mimos Candles",
    date: "2022",
    type: "Kundavtal",
    shows: "Visar eRocket-avtalets struktur och villkor.",
    matters: "Stödjer att det fanns tydliga avtal, inte bara lösa säljlöften.",
    counters: "Att tjänsten såldes utan begriplig avtalsgrund.",
    status: "Original finns. Kräver maskad publik kopia.",
    link: ""
  },
  {
    id: "A-003",
    category: "avtal",
    title: "BankID-avtal: Bond By Beauty",
    date: "2022",
    type: "Kundavtal",
    shows: "Visar att avtal skickades ut av den anställda/säljaren själv och signerades av kund.",
    matters: "Relevant för ansvarskedjan och jäv-/källkritikspåret.",
    counters: "Att William personligen skulle ha dolt avtalsvillkor för kunderna.",
    status: "Original finns. Kräver maskad publik kopia.",
    link: ""
  },
  {
    id: "F-001",
    category: "faktura",
    title: "Prestationsbaserade fakturor, exempel 1-5",
    date: "2022",
    type: "Fakturaexempel",
    shows: "Fakturorna specificerar sökfras, prestationsdatum, pris per dag och eRocket-sida.",
    matters: "Bevisar att fakturering skedde utifrån mätbar prestation, inte för ett tomt löfte.",
    counters: "Att kunder fakturerades utan leverans eller utan prestationsgrund.",
    status: "Original finns. Kräver maskade publika kopior.",
    link: ""
  },
  {
    id: "F-002",
    category: "faktura",
    title: "Fortnox: prestationsbaserad fakturering",
    date: "2022",
    type: "Fortnox-underlag",
    shows: "Visar hur fakturering kunde se ut när prestation uppstod.",
    matters: "Binder samman ranking/prestation med ekonomiskt flöde.",
    counters: "Att fakturor var frikopplade från vad tjänsten faktiskt gjorde.",
    status: "Original finns. Kräver maskad publik kopia.",
    link: ""
  },
  {
    id: "F-003",
    category: "faktura",
    title: "Betalda provisionsfakturor 61, 63, 70 och 71",
    date: "2022-02 till 2022-04",
    type: "Extern säljkedja",
    shows: "Extern säljaktör fakturerade Nordic Digitalization för eRocket-affärer.",
    matters: "Visar att försäljningsledet var externt och ekonomiskt verkligt.",
    counters: "Att kundproblemen rättvisande kunde beskrivas som Williams personliga försäljning.",
    status: "Original finns. Kräver maskade publika kopior.",
    link: ""
  },
  {
    id: "SP-003",
    category: "spridning",
    title: "Namngiven extern säljkedja: Empire of Sales i Borås AB och Nenad Krstic",
    date: "2022-2026",
    type: "Extern säljaktör",
    shows: "Betalda provisionsfakturor visar att Empire of Sales fakturerade Nordic Digitalization för eRocket-affärer. Offentliga bolagsuppgifter anger Nenad Krstic som styrelseledamot/verklig huvudman i Empire of Sales i Borås AB.",
    matters: "Flyttar granskningen till den dokumenterade kundkontakt- och försäljningskedjan i stället för att låta William ensam bära bilden av kundmissnöjet.",
    counters: "Att BT kunde personifiera kundmissnöjet mot William utan att ge den externa säljaktören motsvarande granskning.",
    status: "Provisionsfakturor finns i original och ska maskas. Offentliga bolagskällor kan länkas öppet.",
    link: "https://www.bolagsfakta.se/5592438641-Empire_of_Sales_i_Boras_AB",
    external: true
  },
  {
    id: "SP-004",
    category: "spridning",
    title: "Senare digital verksamhet: Effektiv Media Group",
    date: "2024-2026",
    type: "Offentligt granskningsspår",
    shows: "Offentliga LinkedIn-uppgifter kopplar Nenad Krstic till Effektiv Media Group, som beskriver verksamhet inom digital marknadsföring.",
    matters: "Relevansen är inte att påstå brott, utan att visa att samma person/sfär bör granskas när liknande digitala sälj- och marknadsföringstjänster fortsätter på marknaden.",
    counters: "Att den externa säljaktörens roll var oviktig eller avslutad som granskningsspår.",
    status: "Offentlig källa. Kundklagomål ska bara återges som dokumenterade omdömen, inte som fastslagna brott.",
    link: "https://se.linkedin.com/company/effektiv-media-group",
    external: true
  },
  {
    id: "P-001",
    category: "produkt",
    title: "eRocket-dashboard: kampanjer, sökord och Google-förändring",
    date: "2022",
    type: "Produktdata",
    shows: "128 prestationsbaserade kampanjer, 1 410 sökord och stora registrerade Google-förändringar.",
    matters: "Visar faktisk produkt, mätning och leverans.",
    counters: "Att eRocket var en bluff eller tom idé.",
    status: "Publik bild finns.",
    link: "assets/erocket-dashboard.png"
  },
  {
    id: "P-002",
    category: "produkt",
    title: "Antal ökade placeringar på Google, februari-november 2022",
    date: "2022-02 till 2022-11",
    type: "Rankingunderlag",
    shows: "Samlad ökning av Google-placeringar för kundkampanjer.",
    matters: "Stödjer att tjänsten presterade i sökresultat.",
    counters: "Att tjänsten saknade verklig effekt.",
    status: "Originalbild finns. Publik kopia ska kontrolleras.",
    link: ""
  },
  {
    id: "P-003",
    category: "produkt",
    title: "Produktmaterial: eRocket-sammanfattning och informationsblad",
    date: "2021-2022",
    type: "Produktbeskrivning",
    shows: "Hur tjänsten presenterades och vilka delar den bestod av.",
    matters: "Ger läsaren bransch- och produktkontext.",
    counters: "Att eRocket saknade begripligt tjänsteinnehåll.",
    status: "Original finns. Publicerbar version bör sammanställas.",
    link: ""
  },
  {
    id: "S-001",
    category: "skada",
    title: "Förkonkursvärdering av eRocket",
    date: "2024-01-18",
    type: "Värdering",
    shows: "Värdeintervall om 39,6-48,4 miljoner kronor före konkurserna.",
    matters: "Visar att det som förstördes var en värderad kommersiell tillgång, inte en bluff.",
    counters: "Att skadan bara avsåg en obetydlig idé.",
    status: "Original finns. Publik version kan publiceras efter kontroll av uppdrags- och personuppgifter.",
    link: ""
  },
  {
    id: "S-002",
    category: "skada",
    title: "Inkomstfall 2021-2024",
    date: "2021-2024",
    type: "Skadeunderlag",
    shows: "Tjänsteinkomsten faller kraftigt efter publiceringarna.",
    matters: "Stödjer personlig ekonomisk skada.",
    counters: "Att publiceringen saknade konkret efterföljande skada.",
    status: "Summerade belopp kan visas. Underlag bör inte publiceras rått.",
    link: ""
  },
  {
    id: "S-003",
    category: "skada",
    title: "Konkursunderlag 2024",
    date: "2024-04",
    type: "Skadeunderlag",
    shows: "Nordic Digitalization, AWM och William Rydh Holding försätts i konkurs.",
    matters: "Visar sammanbrottet efter artikelseriens förtroendeskada.",
    counters: "Att skadan bara var abstrakt eller reputationsmässig.",
    status: "Offentliga delar kan sammanfattas. Kompletta handlingar kräver kontroll.",
    link: ""
  },
  {
    id: "SP-001",
    category: "spridning",
    title: "Reco: enstjärnigt omdöme med BT-länkar",
    date: "2023-06-28",
    type: "Spridningsbevis",
    shows: "BT-artiklarna användes för att sänka bolagets Reco-betyg utan beskriven kundupplevelse.",
    matters: "Visar fortsatt spridning och konkret användning av BT:s berättelse mot bolaget.",
    counters: "Att publiceringen stannade hos BT:s läsare.",
    status: "Publik bild finns.",
    link: "assets/reco-eric-oscar-t.png"
  },
  {
    id: "SP-002",
    category: "spridning",
    title: "Eric Thulin/Gota Media-koppling",
    date: "2023-06-28",
    type: "Jäv-/intressespår",
    shows: "Samma dag framgår Eric Thulins roll som redaktionell utvecklingschef på Gota Media.",
    matters: "Relevant för hur BT-artiklarna spreds och användes i en kommersiellt närliggande miljö.",
    counters: "Att spridningen var helt frikopplad från Gota Media-sfären.",
    status: "Publik bild finns.",
    link: "assets/eric-thulin-gota-media.png"
  },
  {
    id: "K-001",
    category: "intervju",
    title: "Rättelse- och invändningsmejl till BT",
    date: "2022-11-19 till 2022-11-20",
    type: "Korrespondens",
    shows: "William invände omedelbart mot felaktigheterna och beskrev skadan.",
    matters: "Visar att redaktionen och ansvarig utgivare informerades efter publicering.",
    counters: "Att felen inte påtalades eller att skadan inte var förutsebar.",
    status: "Original finns. Publicerbar version ska maskas.",
    link: ""
  },
  {
    id: "BT-CLAIMS",
    category: "bt",
    title: "Artikel-för-artikel: BT:s påståenden och motbevis",
    date: "2014-2024",
    type: "Påstående- och motbevismatris",
    shows: "Kopplar centrala BT-formuleringar till motbevis i intervju, avtal, fakturor, dashboard och skadedokumentation.",
    matters: "Gör det lätt för läsaren att kontrollera varje del av BT:s berättelse utan att behöva läsa hela bevisarkivet först.",
    counters: "Att bevisningen skulle vara osammanhängande eller bara allmän kritik.",
    status: "Publik sida finns.",
    link: "artiklar.html"
  },
  {
    id: "J-001",
    category: "skada",
    title: "Polisanmälan och komplettering K613147-26",
    date: "2026-06",
    type: "Processhandling",
    shows: "Samlad juridisk position om grovt förtal, personskada, bevisning och kompletteringar.",
    matters: "Binder ihop bevislinjerna i ett formellt ärende.",
    counters: "Att invändningarna bara är opinionsmässiga.",
    status: "PDF finns. Publik version bör granskas för personuppgifter.",
    link: ""
  },
  {
    id: "J-002",
    category: "skada",
    title: "Bevismatris K613147-26",
    date: "2026-06",
    type: "Bevismatris",
    shows: "Kopplar BT-påståenden till motbevis, bevisvärde och juridisk relevans.",
    matters: "Gör bevismassan navigerbar för polis, advokat och läsare.",
    counters: "Att materialet skulle vara rörigt eller osammanhängande.",
    status: "PDF finns. Publik version bör granskas.",
    link: ""
  }
];

const categoryLabels = {
  bt: "BT-publiceringar",
  intervju: "Intervju",
  avtal: "Avtal",
  faktura: "Fakturor",
  produkt: "Produktdata",
  skada: "Skada",
  spridning: "Spridning"
};

const grid = document.querySelector("#archiveGrid");
const count = document.querySelector("#archiveCount");
const search = document.querySelector("#archiveSearch");
const fullArchiveItems = window.fullArchiveItems || [];
const fullArchiveGrid = document.querySelector("#fullArchiveGrid");
const fullArchiveCount = document.querySelector("#fullArchiveCount");
const fullArchiveStat = document.querySelector("#fullArchiveStat");
const fullArchiveSearch = document.querySelector("#fullArchiveSearch");
const fullArchiveFilter = document.querySelector("#fullArchiveFilter");
let activeFilter = "all";

function normalize(value) {
  return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function archiveHref(path) {
  return encodeURI(path).replaceAll("#", "%23");
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function renderArchive() {
  const query = normalize(search.value || "");
  const filtered = archiveItems.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.category === activeFilter;
    const haystack = normalize(Object.values(item).join(" "));
    return matchesFilter && (!query || haystack.includes(query));
  });

  count.textContent = archiveItems.length;
  grid.innerHTML = filtered.map((item) => `
    <article class="archive-card" id="${escapeHTML(item.id.toLowerCase())}">
      <div class="archive-card-top">
        <span class="archive-id">${escapeHTML(item.id)}</span>
        <span class="archive-category">${escapeHTML(categoryLabels[item.category] || item.category)}</span>
      </div>
      <h2>${escapeHTML(item.title)}</h2>
      <p class="archive-meta">${escapeHTML(item.date)} · ${escapeHTML(item.type)}</p>
      <dl>
        <dt>Vad handlingen visar</dt>
        <dd>${escapeHTML(item.shows)}</dd>
        <dt>Varför den spelar roll</dt>
        <dd>${escapeHTML(item.matters)}</dd>
        <dt>Bemöter</dt>
        <dd>${escapeHTML(item.counters)}</dd>
        <dt>Publik status</dt>
        <dd>${escapeHTML(item.status)}</dd>
      </dl>
      ${item.link ? `<a class="archive-link" href="${escapeHTML(item.link)}" target="${item.external || !item.link.startsWith('#') ? '_blank' : '_self'}" rel="noreferrer">${item.external ? 'Öppna extern källa' : 'Öppna underlag'}</a>` : `<span class="archive-pending">Maskad publik kopia ska kopplas</span>`}
    </article>
  `).join("") || `<p class="archive-empty">Inga bevisposter matchar filtret.</p>`;
}

function populateFullArchiveFilters() {
  if (!fullArchiveFilter) return;
  const categories = [...new Set(fullArchiveItems.map((item) => item.category))].sort((a, b) => a.localeCompare(b, "sv"));
  fullArchiveFilter.insertAdjacentHTML("beforeend", categories.map((category) => (
    `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`
  )).join(""));
}

function renderFullArchive() {
  if (!fullArchiveGrid) return;

  const query = normalize(fullArchiveSearch?.value || "");
  const selectedCategory = fullArchiveFilter?.value || "all";
  const filtered = fullArchiveItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const haystack = normalize([
      item.id,
      item.category,
      item.folder,
      item.title,
      item.fileName,
      item.path,
      item.type,
      item.sha256,
      item.shows,
      item.status
    ].join(" "));
    return matchesCategory && (!query || haystack.includes(query));
  });

  if (fullArchiveStat) fullArchiveStat.textContent = fullArchiveItems.length;
  if (fullArchiveCount) fullArchiveCount.textContent = filtered.length;

  fullArchiveGrid.innerHTML = filtered.map((item) => {
    const href = archiveHref(item.path);
    return `
      <article class="file-card" id="${escapeHTML(item.id.toLowerCase())}">
        <div class="file-card-top">
          <span class="archive-id">${escapeHTML(item.id)}</span>
          <span class="file-type">${escapeHTML(item.type)}</span>
        </div>
        <h3>${escapeHTML(item.title)}</h3>
        <p class="file-category">${escapeHTML(item.category)} · ${escapeHTML(formatBytes(item.size))}</p>
        <p>${escapeHTML(item.shows)}</p>
        <dl>
          <dt>Filnamn</dt>
          <dd>${escapeHTML(item.fileName)}</dd>
          <dt>Status</dt>
          <dd>${escapeHTML(item.status)}</dd>
          <dt>SHA-256</dt>
          <dd class="hash">${escapeHTML(item.sha256.slice(0, 18))}...</dd>
        </dl>
        <a class="archive-link" href="${escapeHTML(href)}" target="_blank" rel="noreferrer">Öppna filen</a>
      </article>
    `;
  }).join("") || `<p class="archive-empty">Inga filer matchar sökningen.</p>`;
}

document.querySelectorAll(".archive-filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".archive-filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderArchive();
  });
});

search.addEventListener("input", renderArchive);
fullArchiveSearch?.addEventListener("input", renderFullArchive);
fullArchiveFilter?.addEventListener("change", renderFullArchive);

const menuButton = document.querySelector("#menuButton");
const siteNav = document.querySelector("#siteNav");
menuButton.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

renderArchive();
populateFullArchiveFilters();
renderFullArchive();

if (location.hash) {
  requestAnimationFrame(() => {
    document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
