const semuaTombol = document.querySelectorAll(".btn-tambah");
const cartCount = document.getElementById("cart-count"); // Mengambil elemen angka di navbar

let jumlahBarang = 0; // Menyimpan total barang di keranjang

semuaTombol.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    tombol.textContent = "Ditambahkan";

    // 1. Tambah jumlah barang di keranjang
    jumlahBarang = jumlahBarang + 1;
    cartCount.textContent = jumlahBarang; // Update angka di navbar

    // 2. Kembalikan teks tombol setelah 1.5 detik
    setTimeout(() => {
      tombol.textContent = "+ Tambah";
    }, 1500);
  });
});

// Fitur Form Kontak - Pesan Berhasil Dikirim
const formKontak = document.getElementById("form-kontak");

formKontak.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah halaman refresh setelah submit

  // Mengambil input dari user
  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const pesan = document.getElementById("pesan").value;

  // Menampilkan pesan sukses (pake notifikasi CSS buatan sendiri)
  tampilkanNotifikasi(nama);

  // Mengosongkan form kembali setelah dikirim
  formKontak.reset();
});

// Fungsi untuk membuat dan menampilkan Notifikasi Toast indah
function tampilkanNotifikasi(nama) {
  // 1. Buat element HTML untuk toast
  const toast = document.createElement("div");
  toast.className = "toast-notif";
  toast.innerHTML = `
    <span class="toast-icon">✅</span>
    <div>
      <strong>Halo ${nama}!</strong><br>
      Pesan Anda berhasil dikirim ke Toko Sayur Bu Ani.
    </div>
  `;

  // 2. Masukkan ke dalam body halaman
  document.body.appendChild(toast);

  // 3. Efek animasi muncul (delay kecil supaya transisi CSS bekerja)
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // 4. Hilangkan dan hapus toast setelah 4 detik
  setTimeout(() => {
    toast.classList.remove("show");

    // Tunggu sampai transisi keluar selesai baru dihapus dari HTML
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}