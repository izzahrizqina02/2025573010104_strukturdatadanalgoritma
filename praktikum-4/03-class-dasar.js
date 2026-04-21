class Mahasiswa {

    constructor(nama, nim, jurusan) {
        this.nama    = nama;
        this.nim     = nim;
        this.jurusan = jurusan;
        this.nilai   = [];
    }

    tambahNilai(nilai) {
        this.nilai.push(nilai);
    }

    hitungRataRata() {
        if (this.nilai.length === 0) return 0;
        const total = this.nilai.reduce((sum, n) => sum + n, 0);
        return (total / this.nilai.length).toFixed(2);
    }

    getInfo(){
        return `[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: ${this.hitungRataRata()}`;
    }
}

const mhs1 = new Mahasiswa('Budi Santoso', '2021001', 'Informatika');
const mhs2 = new Mahasiswa('Siti Rahayu', '2021002', 'Sistem Informasi');
const mhs3 = new Mahasiswa ('Ahmad Fauzi', '2021003', 'Informatika');

mhs1.tambahNilai(85); mhs1.tambahNilai(90); mhs1.tambahNilai(78);
mhs2.tambahNilai(92); mhs2.tambahNilai(88); mhs2.tambahNilai(95);
mhs3.tambahNilai(70); mhs3.tambahNilai(75);

console.log('=== Data Mahasiswa ===');
console.log(mhs1.getInfo());
console.log(mhs2.getInfo);
console.log(mhs3.getInfo());

class Kalkulator {
    static tambah(a, b) { return a + b; }
    static kurang(a, b) { return a - b; }
    static kali(a, b)   { return a * b; }
    static bagi(a, b) {
        if (b === 0) return 'Error : bagi nol';
        return a/b;
    }
}

console.log('\n=== Static Method ===');
console.log('10 + 5 =', Kalkulator.tambah(10, 5));
console.log('10 * 5 =', Kalkulator.kali(10, 5));
console.log('10 / =', Kalkulator.bagi(10, 0));

class Lingkaran {
    constructor(jariJari) {
        this._jariJari = jariJari;
    }


    get jariJari() {return this._jariJari;}
    get luas() {return (Math.PI * this._jari ** 2).toFixed(2); }
    get keliling() {return (2 * Math.PI * this._jariJari).toFixed(2); }

    set jariJari(nilai) {
        if (nilai <= 0) throw new Error('Jari-jari harus positif!');
        this._jariJari = nilai;
    }
}

console.log('\n=== Getter & Setter ===');
const l = new Lingkaran (7);
console.log('Jari-jari:', l.jariJari);
console.log('Luas :', l.Luas);
console.log('Keliling :', l.keliling);
l.jariJari = 10;
console.log('Setelah di ubah - Luas:', l.luas);

//latihan 3
class BankAccount {
    constructor(namaPemilik, saldoAwal = 0) {
        this.namaPemilik = namaPemilik;
        this.saldo = saldoAwal;
    }

    setor(jumlah) {
        if (jumlah <= 0) {
            console.log('Error: jumlah setor harus lebih dari 0');
            return;
        }
        this.saldo += jumlah;
        console.log(`${this.namaPemilik} setor Rp${jumlah}`);
    }

    tarik(jumlah) {
        if (jumlah <= 0) {
            console.log('Error: jumlah tarik harus lebih dari 0');
            return;
        }
        if (jumlah > this.saldo) {
            console.log('Saldo tidak mencukupi');
            return;
        }
        this.saldo -= jumlah;
        console.log(`${this.namaPemilik} tarik Rp${jumlah}`);
    }

    cekSaldo() {
        return `Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`;
    }

    static transfer(akun1, akun2, jumlah) {
        if (jumlah <= 0) {
            console.log('Error: jumlah transfer tidak valid');
            return;
        }
        if (jumlah > akun1.saldo) {
            console.log('Transfer gagal: saldo tidak mencukupi');
            return;
        }

        akun1.saldo -= jumlah;
        akun2.saldo += jumlah;

        console.log(`Transfer Rp${jumlah} dari ${akun1.namaPemilik} ke ${akun2.namaPemilik}`);
    }
}


// ================= TEST =================
const akunAndi = new BankAccount('Andi', 100000);
const akunBudi = new BankAccount('Budi', 50000);

console.log('=== CEK SALDO AWAL ===');
console.log(akunAndi.cekSaldo());
console.log(akunBudi.cekSaldo());

console.log('\n=== TEST SETOR ===');
akunAndi.setor(50000);
akunAndi.setor(0);        // error
akunAndi.setor(-1000);    // error

console.log('\n=== TEST TARIK ===');
akunAndi.tarik(30000);
akunAndi.tarik(0);        // error
akunAndi.tarik(-5000);    // error
akunAndi.tarik(200000);   // saldo tidak cukup

console.log('\n=== TEST TRANSFER ===');
BankAccount.transfer(akunAndi, akunBudi, 50000);
BankAccount.transfer(akunAndi, akunBudi, 500000); // gagal
BankAccount.transfer(akunAndi, akunBudi, -1000);  // error

console.log('\n=== SALDO AKHIR ===');
console.log(akunAndi.cekSaldo());
console.log(akunBudi.cekSaldo());