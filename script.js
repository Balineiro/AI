import { iaData, officialCategories } from "./iaData.js";

const allCategories = officialCategories;

/* ============================
   FAVORIS
============================ */

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let favoritesMode = false;

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
const modalFavorite = document.getElementById("modalFavorite");
const closeBtn = document.querySelector(".close");

let currentIA = null;

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
      <svg class="heart-icon" data-name="${ia.name}" viewBox="0 0 24 24">
        <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"/>
      </svg>
    
      <div class="ia-title">${ia.name}</div>
      <div class="ia-tags">${categoriesHTML}</div>
      <small>Date: ${ia.year} | Owner: ${ia.owner}</small>
    `;

    card.addEventListener("click", () => openModal(ia));

    const heart = card.querySelector(".heart-icon");

    if (favorites.includes(ia.name)) {
      heart.classList.add("active");
    }

    heart.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(ia.name);
      heart.classList.toggle("active");
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

  // Titre + cœur
  modalTitle.innerHTML = `
    <span class="modal-title-text">${ia.name}</span>
    <svg class="heart-icon modal-heart" viewBox="0 0 24 24">
      <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"/>
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

  // Sélection du cœur
  const modalHeart = modalTitle.querySelector(".modal-heart");

  // État initial
  if (favorites.includes(ia.name)) {
    modalHeart.classList.add("active");
  } else {
    modalHeart.classList.remove("active");
  }

  // Toggle fiable
  modalHeart.onclick = (e) => {
    e.stopPropagation();
    toggleFavorite(ia.name);
    modalHeart.classList.toggle("active");
  };

  modal.style.display = "block";

  modalPricing.innerHTML = "";

  if (ia.pricing) {
    const tags = [];

    if (ia.pricing.free) {
      tags.push(`<span class="pricing-tag pricing-free">Free</span>`);
    }
    if (ia.pricing.plans && ia.pricing.plans.length > 0) {
      tags.push(
        `<span class="pricing-tag pricing-paid">Plans disponibles</span>`
      );
    }

    const plansHTML = ia.pricing.plans
      .map(
        (plan) =>
          `<div class="pricing-plan">${plan.name} – ${plan.price} €/ ${plan.period}</div>`
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

/* ============================
   RECHERCHE
============================ */

function filterIA() {
  const query = searchBar.value.toLowerCase();
  const filtered = iaData.filter((ia) => ia.name.toLowerCase().includes(query));
  applyFilters(filtered);
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

  // Free only
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
