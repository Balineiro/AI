import { iaData, officialCategories } from "./aiData.js";

const allCategories = officialCategories;

/* ============================
   CATALOGUE — numéros de fiche
============================ */

const catalogNumbers = new Map();
iaData.forEach((ia, i) => {
  catalogNumbers.set(ia.name, String(i + 1).padStart(3, "0"));
});

/* ============================
   FAVORIS
============================ */

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let favoritesMode = false;

/* ============================
   NOTES PERSONNELLES
============================ */

let personalNotes = JSON.parse(localStorage.getItem("personalNotes")) || {};

/* ============================
   ÉLÉMENTS DOM
============================ */

const container = document.getElementById("ia-list");
const searchBar = document.getElementById("searchBar");

const filterButton = document.getElementById("filterButton");
const favoritesButton = document.getElementById("favoritesButton");

const filterMenu = document.getElementById("filterMenu");
const activeFilters = document.getElementById("activeFilters");

document.getElementById("freeOnly").addEventListener("change", () => {
  applyFilters();
});

/* ============================
   MODALE
============================ */

const modal = document.getElementById("iaModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalYear = document.getElementById("modalYear");
const modalOwner = document.getElementById("modalOwner");
const modalTags = document.getElementById("modalTags");
const modalLink = document.getElementById("modalLink");
const modalPricing = document.getElementById("modalPricing");
const modalCode = document.getElementById("modalCode");
const personalNote = document.getElementById("personalNote");
const closeBtn = document.querySelector(".close");

let currentIA = null;

const BOOKMARK_PATH =
  "M5 3h14a2 2 0 0 1 2 2v16l-9-4-9 4V5a2 2 0 0 1 2-2z";

/* ============================
   RENDER IA
============================ */

function renderIA(list = iaData) {
  container.innerHTML = "";

  list.forEach((ia) => {
    const card = document.createElement("div");
    card.className = "ia-card";

    const categoriesHTML = ia.categories
      .map((cat) => `<span class="ia-tag">${cat}</span>`)
      .join("");

    card.innerHTML = `
      <svg class="bookmark-icon" data-name="${ia.name}" viewBox="0 0 24 24">
        <path d="${BOOKMARK_PATH}"/>
      </svg>
      <span class="catalog-number">N&deg;${catalogNumbers.get(ia.name)}</span>

      <div class="ia-title">${ia.name}</div>
      <div class="ia-meta-line">${ia.year} &middot; ${ia.owner}</div>
      <div class="ia-tags">${categoriesHTML}</div>
    `;

    card.addEventListener("click", () => openModal(ia));

    const bookmark = card.querySelector(".bookmark-icon");

    if (favorites.includes(ia.name)) {
      bookmark.classList.add("active");
    }

    bookmark.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(ia.name);
      bookmark.classList.toggle("active");
    });

    container.appendChild(card);
  });
}

/* ============================
   FAVORIS
============================ */

function toggleFavorite(name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter((f) => f !== name);
  } else {
    favorites.push(name);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderIA();
}

/* ============================
   MODALE
============================ */

function openModal(ia) {
  currentIA = ia.name;

  modalCode.textContent = `Fiche N°${catalogNumbers.get(ia.name)}`;

  // Titre + ruban
  modalTitle.innerHTML = `
    <span class="modal-title-text">${ia.name}</span>
    <svg class="bookmark-icon modal-bookmark" viewBox="0 0 24 24">
      <path d="${BOOKMARK_PATH}"/>
    </svg>
  `;

  modalDescription.textContent = ia.longDescription;
  modalYear.textContent = ia.year;
  modalOwner.textContent = ia.owner;

  modalTags.innerHTML = ia.categories
    .map((cat) => `<span class="ia-tag">${cat}</span>`)
    .join("");

  modalLink.href = ia.link;
  modalLink.textContent = ia.link;

  // Sélection du ruban
  const modalBookmark = modalTitle.querySelector(".modal-bookmark");

  if (favorites.includes(ia.name)) {
    modalBookmark.classList.add("active");
  } else {
    modalBookmark.classList.remove("active");
  }

  modalBookmark.onclick = (e) => {
    e.stopPropagation();
    toggleFavorite(ia.name);
    modalBookmark.classList.toggle("active");
  };

  // Note personnelle
  personalNote.value = personalNotes[ia.name] || "";

  modal.style.display = "block";

  // Tarification
  modalPricing.innerHTML = "";

  if (ia.pricing) {
    const tags = [];

    if (ia.pricing.free) {
      tags.push(`<span class="pricing-tag pricing-free">Gratuit</span>`);
    }
    if (ia.pricing.plans && ia.pricing.plans.length > 0) {
      tags.push(
        `<span class="pricing-tag pricing-paid">Offres payantes</span>`
      );
    }

    const plansHTML = (ia.pricing.plans || [])
      .map(
        (plan) =>
          `<div class="pricing-plan">${plan.name} — ${plan.price} € / ${plan.period}</div>`
      )
      .join("");

    modalPricing.innerHTML = `
    ${tags.join(" ")}
    ${plansHTML}
  `;
  }
}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* Sauvegarde de la note personnelle au fil de la frappe */
personalNote.addEventListener("input", () => {
  if (!currentIA) return;
  personalNotes[currentIA] = personalNote.value;
  localStorage.setItem("personalNotes", JSON.stringify(personalNotes));
});

/* ============================
   RECHERCHE
============================ */

function filterIA() {
  applyFilters();
}

searchBar.addEventListener("input", filterIA);

/* ============================
   FILTRES CATÉGORIES
============================ */

let activeCategories = [];

function renderFilterMenu() {
  filterMenu.innerHTML = "";

  allCategories.forEach((cat) => {
    const item = document.createElement("div");
    item.className = "filter-item";
    item.textContent = cat;

    if (activeCategories.includes(cat)) {
      item.style.opacity = "0.4";
    }

    item.addEventListener("click", () => toggleCategory(cat));
    filterMenu.appendChild(item);
  });
}

function toggleCategory(cat) {
  if (activeCategories.includes(cat)) {
    activeCategories = activeCategories.filter((c) => c !== cat);
  } else {
    activeCategories.push(cat);
  }

  renderActiveFilters();
  applyFilters();
  renderFilterMenu();
}

function renderActiveFilters() {
  activeFilters.innerHTML = "";

  activeCategories.forEach((cat) => {
    const tag = document.createElement("div");
    tag.className = "active-filter";
    tag.innerHTML = `${cat} <span class="remove-filter">✕</span>`;

    tag.querySelector(".remove-filter").addEventListener("click", () => {
      toggleCategory(cat);
    });

    activeFilters.appendChild(tag);
  });
}

function applyFilters(baseList = iaData) {
  let filtered = baseList;

  // Recherche
  const query = searchBar.value.toLowerCase().trim();
  if (query.length > 0) {
    filtered = filtered.filter((ia) => ia.name.toLowerCase().includes(query));
  }

  // Catégories
  if (activeCategories.length > 0) {
    filtered = filtered.filter((ia) =>
      activeCategories.every((cat) => ia.categories.includes(cat))
    );
  }

  // Gratuit seulement
  const freeOnly = document.getElementById("freeOnly").checked;
  if (freeOnly) {
    filtered = filtered.filter((ia) => ia.pricing?.free);
  }

  // Favoris
  if (favoritesMode) {
    filtered = filtered.filter((ia) => favorites.includes(ia.name));
  }

  renderIA(filtered);
}

/* ============================
   BOUTONS
============================ */

filterButton.addEventListener("click", () => {
  filterMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!filterButton.contains(e.target) && !filterMenu.contains(e.target)) {
    filterMenu.classList.remove("open");
  }
});

favoritesButton.addEventListener("click", () => {
  favoritesMode = !favoritesMode;
  favoritesButton.classList.toggle("active", favoritesMode);
  applyFilters();
});

/* ============================
   INIT
============================ */

renderFilterMenu();
renderIA();