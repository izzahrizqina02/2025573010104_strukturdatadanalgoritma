function hitungKompleksitas (n, fn) {
    const mulai = Date.now();
    fn(n);
    const selesai = Date.now();
    console.log (`{waktu}: ${selesai - mulai} ms`);
}
function fungsiA(n) {
    return n * 2;
}

function fungsiB(n) {
    for (let i = 0; i < n; i++)
        for (let j = 0 ; j < n; j++)
            console.log(i, j);
}

function fungsiC(n) {
    for (let i = 1; i < n; i *= 2 )
        console.log(i);

}

function fungsiD(arr) {
    arr.forEach(x =>
        arr.forEach(y =>
            arr.forEach(z => console.log(x, y, z))

            )
        );
    
}

const n = 1000;
console.log('Fungsi A (0(1))');
hitungKompleksitas(n, fungsiA);

console.log('Fungsi B (O(n ** 2))');
hitungKompleksitas(n, fungsiB);

console.log('Fungsi C (O(log n))');
hitungKompleksitas(n, fungsiC);

console.log('Fungsi D (O(n ** 3))');
hitungKompleksitas(n, fungsiD, 'array');