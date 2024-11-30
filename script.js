// Fungsi untuk menampilkan formulir pemesanan dengan data gambar dan harga
function tampilkanForm(namaGambar, hargaGambar) {
    // Isi nilai pada input form
    document.getElementById('item').value = namaGambar;
    document.getElementById('harga').value = `Rp ${hargaGambar.toLocaleString()}`;

    // Tampilkan formulir pemesanan
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'block';

    // Scroll ke formulir agar pengguna bisa langsung melihatnya
    formContainer.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk mengirim pesanan
function kirimPesanan(event) {
    event.preventDefault(); // Mencegah refresh halaman

    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const item = document.getElementById('item').value;
    const harga = document.getElementById('harga').value;

    if (!item) {
        alert('Pilih gambar terlebih dahulu!');
        return;
    }

    // Konfirmasi pesanan
    alert(`Pesanan Berhasil!\n\nDetail Pesanan:\nNama: ${nama}\nAlamat: ${alamat}\nItem: ${item}\nHarga: ${harga}`);
    
    // Reset form
    document.getElementById('formPemesanan').reset();
    document.getElementById('formContainer').style.display = 'none'; // Sembunyikan form setelah selesai
}