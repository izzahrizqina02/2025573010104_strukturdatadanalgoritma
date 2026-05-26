class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function buatList(arr) {

    let head = null;
    let tail = null;

    for (let data of arr) {

        const newNode = new Node(data);

        if (!head) {

            head = newNode;
            tail = newNode;
        }

        else {

            tail.next = newNode;
            tail = newNode;
        }
    }

    return head;
}


function printList(head) {

    let current = head;

    let result = "";

    while (current) {

        result += current.data + " -> ";

        current = current.next;
    }

    result += "null";

    console.log(result);
}


function palindromLL(head) {

    let arr = [];

    let current = head;

    while (current) {

        arr.push(current.data);

        current = current.next;
    }

    let reversed = [...arr].reverse();

    return JSON.stringify(arr) === JSON.stringify(reversed);
}


function hapusNDariAkhir(head, n) {

    let dummy = new Node(0);

    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Gerakkan fast
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Gerakkan bersamaan
    while (fast) {

        fast = fast.next;

        slow = slow.next;
    }

    // Hapus node
    slow.next = slow.next.next;

    return dummy.next;
}


function tengahLinkedList(head) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {

        slow = slow.next;

        fast = fast.next.next;
    }

    return slow;
}


console.log("=== palindromLL ===");

// List 1
let list1 = buatList([1, 2, 3, 2, 1]);

console.log("List 1:");
printList(list1);

console.log("palindrome?", palindromLL(list1));

// List 2
let list2 = buatList([1, 2, 2, 1]);

console.log("List 2:");
printList(list2);

console.log("palindrome?", palindromLL(list2));

// List 3
let list3 = buatList([1, 2, 3, 4, 5]);

console.log("List 3:");
printList(list3);

console.log("palindrome?", palindromLL(list3));

// List 4
let list4 = buatList([1]);

console.log("List 4:");
printList(list4);

console.log("palindrome?", palindromLL(list4));

console.log("\n=== hapusDariAkhir ===");

// Sebelum 1
let hapus1 = buatList([1, 2, 3, 4, 5]);

console.log("sebelum 1:");
printList(hapus1);

hapus1 = hapusNDariAkhir(hapus1, 2);

console.log("sesudah 1:");
printList(hapus1);


// Sebelum 2
let hapus2 = buatList([1, 2, 3, 4, 5]);

console.log("sebelum 2:");
printList(hapus2);

hapus2 = hapusNDariAkhir(hapus2, 1);

console.log("sesudah 2:");
printList(hapus2);


// Sebelum 3
let hapus3 = buatList([1, 2, 3]);

console.log("sebelum 3:");
printList(hapus3);

hapus3 = hapusNDariAkhir(hapus3, 3);

console.log("sesudah 3:");
printList(hapus3);


// Sebelum 4
let hapus4 = buatList([50]);

console.log("sebelum 4:");
printList(hapus4);

hapus4 = hapusNDariAkhir(hapus4, 1);

console.log("sesudah 4:");
printList(hapus4);

console.log("\n=== tengahLinkedList ===");

// List Tengah 1
let tengah1 = buatList([1, 2, 3, 4, 5]);

console.log("List 1:");
printList(tengah1);

console.log("tengah:", tengahLinkedList(tengah1).data);


// List Tengah 2
let tengah2 = buatList([1, 2, 3, 4]);

console.log("List 2:");
printList(tengah2);

console.log("tengah:", tengahLinkedList(tengah2).data);


// List Tengah 3
let tengah3 = buatList([1]);

console.log("List 3:");
printList(tengah3);

console.log("tengah:", tengahLinkedList(tengah3).data);


// List Tengah 4
let tengah4 = buatList([33]);

console.log("List 4:");
printList(tengah4);

console.log("tengah:", tengahLinkedList(tengah4).data);