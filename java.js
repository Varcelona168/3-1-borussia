
let myArray = ['olma', 'banan', 'nok', 'apelsin'];


console.log('Massiv uzunligi:', myArray.length);
alert('Massiv uzunligi: ' + myArray.length);


let confirmDelete = confirm('Massivdan bitta elementni o‘chirishni xohlaysizmi?');


if (confirmDelete) {
  myArray.pop(); 
  alert('Bitta element o‘chirildi. Yangi uzunlik: ' + myArray.length);
  console.log('Yangi massiv uzunligi:', myArray.length);
} else {
  alert('Hech narsa o‘chirilmagan. Massiv o‘zgarmadi.');
  console.log('Massiv o‘zgarmadi. Uzunlik:', myArray.length);
}
