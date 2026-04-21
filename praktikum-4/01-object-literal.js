const mahasiswa = {
    nama    : 'Budi Santoso',
    umur    : 20,
    jurusan : 'Teknik Informatika',
    ipk     : 3.75,
    aktif   : true, 
};

console.log('=== Akses Property ===');
console.log('Nama :',mahasiswa.nama);
console.log('Jurusan', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK    :', mahasiswa [keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa.umur  = 21;

console.log('\n Setelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
    nama        : 'Dr. Ahmad Fauzi',
    mataKuliah  : 'Stuktur Data',
    pengalaman  : 10,   //tahun
    
    perkenalan(){

        return `Halo saya ${this.nama}, mengajar ${this.mataKuliah}.`;

    },

    statusSenior(){
        if (this.pengalaman >= 10){
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n --- Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen [key] !== 'function') {
        console.log(` ${key}: ${dosen[key]}`);

    }
}

  //Object.keys(), Object.values(), Object.entries()
 console.log('Keys  :', Object.keys(mahasiswa));
 console.log('Values:', Object.values(mahasiswa));
 

 //latihan
 const koleksiBuku = [
    {
        judul: 'Dilan 1990',
        pengarang: 'Pidi Baiq',
        tahunTerbit: 2014,
        harga: 85000,
        tersedia :true,
        info(){
            return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) 
            - Rp${this.harga} - ${this.tersedia ? "tersedia" : "Tidak Tersedia"}`;
        },
        diskon(persen) {
            return this.harga *(1 - persen / 100);
        }


},
{
    judul: 'hujan',
    pengarang: 'Tere Liye',
    tahunTerbit: '2016',
    harga : 110000,
    tersedia: false,
    info(){
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) 
        - Rp${this.harga} - ${this.tersedia ? "Tersedia " : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
},
{
    judul: 'Bulan',
    pengarang: 'Tere Liye',
    tahunTerbit: '2015', 
    harga: 97000,
    tersedia: true,
    info(){
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) 
        - Rp${this.harga} - ${this.tersedia ? "Tersedia " : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
}];
koleksiBuku.forEach(buku => {
    console.log(buku.info());
});

console.log('Buku tersedia (filter):')
const bukuTersedia = koleksiBuku.filter(buku => buku.tersedia === true);
console.log('Total buku tersedia: ' + bukuTersedia.length + ' judul\n');
bukuTersedia.forEach(buku => {
    console.log(buku.info());
});