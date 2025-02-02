fungction tambahkekeranjang(namaProduk){
    alert(namaProduk + " telah ditambahkan ke keranjang");
}


<script>
        // Variabel untuk menyimpan jumlah item di keranjang
        let cartCount = 0;

        // Fungsi untuk menambahkan item ke keranjang
        function TambahkeKeranjang(item) {
            cartCount++;
            document.getElementById("cart-count").innerText = "Jumlah item di keranjang: " + cartCount;
            alert(item + " telah ditambahkan ke keranjang!");
        }

        // Fungsi untuk menampilkan isi keranjang
        function viewCart() {
            if (cartCount > 0) {
                alert("Anda memiliki " + cartCount + " item di keranjang.");
            } else {
                alert("Keranjang Anda kosong.");
            }
        }

        // Menambahkan event listener untuk tombol "Lihat Keranjang"
        document.getElementById("view-cart").addEventListener('click', viewCart);
    </script>