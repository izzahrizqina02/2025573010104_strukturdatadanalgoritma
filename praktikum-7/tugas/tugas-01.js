class Pasien {
  constructor(id, nama, prioritas) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; 
    this.waktuDaftar = new Date();
  }
}

class AntrianRS {
  constructor() {
    this.antrianDarurat = []; 
    this.antrianBiasa = [];   
  }

  daftar(pasien) {
    if (pasien.prioritas === 'darurat') {
      this.antrianDarurat.push(pasien);
      console.log(`[DAFTAR] Pasien DARURAT: ${pasien.nama} (ID: ${pasien.id}) masuk antrian darurat.`);
    } else {
      this.antrianBiasa.push(pasien);
      console.log(`[DAFTAR] Pasien BIASA: ${pasien.nama} (ID: ${pasien.id}) masuk antrian biasa.`);
    }
  }


  layani() {
    let pasienDilayani = null;

    if (this.antrianDarurat.length > 0) {
      pasienDilayani = this.antrianDarurat.shift();
      console.log(`\n[LAYANI] Melayani pasien DARURAT:`);
    } else if (this.antrianBiasa.length > 0) {
      pasienDilayani = this.antrianBiasa.shift();
      console.log(`\n[LAYANI] Melayani pasien BIASA:`);
    } else {
      console.log('\n[LAYANI] Tidak ada pasien dalam antrian.');
      return;
    }

    console.log(`  ID       : ${pasienDilayani.id}`);
    console.log(`  Nama     : ${pasienDilayani.nama}`);
    console.log(`  Prioritas: ${pasienDilayani.prioritas}`);
    console.log(`  Waktu Daftar: ${pasienDilayani.waktuDaftar.toLocaleTimeString()}`);
  }

  tampilkanAntrian() {
    console.log('\n========== STATUS ANTRIAN ==========');
    console.log(`Antrian Darurat (${this.antrianDarurat.length} pasien):`);
    if (this.antrianDarurat.length === 0) {
      console.log('  (kosong)');
    } else {
      this.antrianDarurat.forEach((p, i) => {
        console.log(`  ${i + 1}. [${p.id}] ${p.nama}`);
      });
    }

    console.log(`Antrian Biasa (${this.antrianBiasa.length} pasien):`);
    if (this.antrianBiasa.length === 0) {
      console.log('  (kosong)');
    } else {
      this.antrianBiasa.forEach((p, i) => {
        console.log(`  ${i + 1}. [${p.id}] ${p.nama}`);
      });
    }
    console.log('=====================================\n');
  }
}


const rs = new AntrianRS();


const dataPasien = [
  new Pasien('P001', 'Ahmad Fauzi',     'biasa'),
  new Pasien('P002', 'Siti Rahmah',     'darurat'),
  new Pasien('P003', 'Budi Santoso',    'biasa'),
  new Pasien('P004', 'Dewi Lestari',    'darurat'),
  new Pasien('P005', 'Rizky Pratama',   'biasa'),
  new Pasien('P006', 'Nurul Hidayah',   'darurat'),
  new Pasien('P007', 'Hendra Wijaya',   'biasa'),
  new Pasien('P008', 'Rina Marlina',    'biasa'),
  new Pasien('P009', 'Fajar Ramadhan',  'darurat'),
  new Pasien('P010', 'Yuli Astuti',     'biasa'),
];

console.log('====== PENDAFTARAN PASIEN ======');
dataPasien.forEach(p => rs.daftar(p));

rs.tampilkanAntrian();

console.log('====== MELAYANI SEMUA PASIEN ======');
for (let i = 0; i < 10; i++) {
  rs.layani();
}

rs.tampilkanAntrian();
