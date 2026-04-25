function jumlahArray(arr) {
    let total = 0;
    for (const x of arr) total += x;
    return total;
}

function duplikasiArray(arr) {
    const baru = [];
    for (const x of arr) baru.push(x * 2);
    return baru;
}

function faktorialRekursif(n) {
    if (n <= 1) return 1;
    return n *faktorialRekursif(n -1);
}

function faktorialLiteratif(n) {
    let hasil = 1;
    for (let i =2; i <= n; i++) hasil *= i;
    return hasil;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Jumlah array :',jumlahArray(arr));
console.log('Duplikasi array:', duplikasiArray(arr));
console.log('Faktorial 10 rekursif :', faktorialRekursif (10));
console.log('Faktorial 10 iteratif :', faktorialLiteratif(10));

function hitungUnik(arr) {
    const seen = new Set();
    for (const x of arr) seen.add(x);
    return seen.size;
}

const dataAcak = [1,2,3,2,1,4,5,6,4,7];
console.log('Elemen unik:', hitungUnik(dataAcak));

//latihan 3
function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr [j] === target) {
                return [arr[i], arr [j]];
            }
        }
    }
    return null;
}

function cariPasanganCepat(arr, target) {

    const seen = new Set();

    for (let num of arr) {
        const pasangan =  target - num;

        if (seen.has(pasangan)) {
            return [pasangan, num];
        }
        seen.add(num);
    }

    return null;
}

const arr1 = [2, 7, 11, 15];
const target = 9;

console.log('=== Test Kecil ===');
console.log('Lambat:', cariPasanganLambat(arr1, target));
console.log('Cepat:', cariPasanganCepat(arr1, target));

function generateArray(n) {
    const hasil = [];
    for (let i = 0; i < n; i++) {
        hasil.push(Math.floor(Math.random() * 50000));

    }
    return hasil;
}

function ukurWaktu(label, fn, arr, target) {
    const mulai = Date.now();
    fn(arr, target);
    const selesai = Date.now();
    console.log(`${label}: ${selesai - mulai} ms`)
}
const arrBesar = generateArray(50000);
const targetBesar = -1; 

console.log('\n=== Test Besar (50.000 data) ===');
ukurWaktu('Lambat', cariPasanganLambat, arrBesar, targetBesar);
ukurWaktu('Cepat', cariPasanganCepat, arrBesar, targetBesar);
