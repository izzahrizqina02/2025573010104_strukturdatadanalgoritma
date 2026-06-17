function subArrayJumlahK(arr, k) {
    const map = new Map();
    map.set(0, 1);

    let prefix = 0;
    let count = 0;

    for (const num of arr) {
        prefix += num;

        if (map.has(prefix - k)) {
            count += map.get(prefix - k);
        }

        map.set(prefix, (map.get(prefix) || 0) + 1);
    }

    return count;
}

function karakterPertamaUnik(s) {
    const freq = new Map();

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

function topKFrequent(arr, k) {
    const freq = new Map();

    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(item => item[0]);
}

console.log("=== Subarray Jumlah K ===");
console.log(subArrayJumlahK([1, 1, 1], 2));

console.log("\n=== Karakter Pertama Unik ===");
console.log(karakterPertamaUnik("leetcode"));

console.log("\n=== Top K Frequent ===");
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

console.log("\n=== Big O ===");
console.log("subArrayJumlahK : O(n)");
console.log("karakterPertamaUnik : O(n)");
console.log("topKFrequent : O(n + m log m)");
console.log("Solusi naif : O(n²)");