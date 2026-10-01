// Ganti dengan alamat email kamu
const EMAIL_TUJUAN = "emailkamu@example.com";

// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#menu");

navToggle.addEventListener("click", () => {
  const terbuka = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(terbuka));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Filter proyek
const tombolFilter = document.querySelectorAll(".filter");
const proyek = document.querySelectorAll(".project");

tombolFilter.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const kategori = tombol.dataset.filter;

    tombolFilter.forEach((t) => t.classList.remove("is-active"));
    tombol.classList.add("is-active");

    proyek.forEach((kartu) => {
      kartu.hidden = kategori !== "semua" && kartu.dataset.category !== kategori;
    });
  });
});

// Formulir kontak: membuka aplikasi email dengan pesan terisi
const form = document.querySelector("#contact-form");
const pesanError = document.querySelector("#form-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = form.nama.value.trim();
  const pesan = form.pesan.value.trim();

  if (!nama || !pesan) {
    pesanError.textContent = "Isi nama dan pesan dulu sebelum mengirim.";
    return;
  }

  pesanError.textContent = "";
  const subjek = encodeURIComponent("Pesan dari " + nama);
  const isi = encodeURIComponent(pesan);
  window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subjek}&body=${isi}`;
});

// Tahun di footer
document.querySelector("#year").textContent = new Date().getFullYear();