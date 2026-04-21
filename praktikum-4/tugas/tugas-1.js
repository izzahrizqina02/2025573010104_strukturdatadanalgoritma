// Parent Class
class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        console.log(`ID: ${this.id}`);
        console.log(`Nama: ${this.nama}`);
        console.log(`Harga: ${this.harga}`);
        console.log(`Stok: ${this.stok}`);
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah tidak valid!");
            return;
        }
        if (jumlah > this.stok) {
            console.log("Stok tidak cukup!");
            return;
        }
        this.stok -= jumlah;
        console.log(`Berhasil menjual ${jumlah} ${this.nama}`);
    }
}

// Child Class ProdukDigital
class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        super.info();
        console.log(`Ukuran File: ${this.ukuranFile} MB`);
        console.log(`Format File: ${this.formatFile}`);
    }

    download() {
        console.log(`Mengunduh ${this.nama} (${this.formatFile})...`);
    }

    // override jual (tidak mengurangi stok)
    jual(jumlah) {
        console.log(`Produk digital "${this.nama}" berhasil dibeli sebanyak ${jumlah}`);
    }
}

// Child Class ProdukFisik
class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        super.info();
        console.log(`Berat: ${this.beratGram} gram`);
        console.log(`Dimensi: ${this.dimensi}`);
    }

    hitungOngkir(tarifPerKg) {
        let beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}

// Instance ProdukDigital
const digital1 = new ProdukDigital(1, "Ebook Belajar JavaScript Dasar", 50000, 999, 5, "PDF");
const digital2 = new ProdukDigital(2, "Video Course Web Development", 100000, 999, 20, "MP4");

// Instance ProdukFisik
const fisik1 = new ProdukFisik(3, "Laptop LENOVO LOQ", 8000000, 5, 1500, "35x25x2 cm");
const fisik2 = new ProdukFisik(4, "Headset Gaming RGB", 300000, 0, 350, "20x15x10 cm");
// Array daftarProduk
const daftarProduk = [digital1, digital2, fisik1, fisik2];

// (a) Menampilkan semua info produk
console.log("=== Semua Produk ===");
daftarProduk.forEach(produk => {
    produk.info();
    console.log("-------------------");
});

// (b) Produk yang tersedia
console.log("=== Produk Tersedia ===");
const produkTersedia = daftarProduk.filter(p => p.tersedia());
produkTersedia.forEach(p => console.log(p.nama));

// (c) Array nama produk saja
console.log("=== Nama Produk ===");
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);