---
title: Regex JavaScript itu lambat
description: Regex JavaScript itu lambat, tapi...
date: 2025-12-28
---

_Regular Expression_ (Ekspresi Regular) atau yang sering disebut _regex_ adalah sebuah pola yang digunakan untuk melakukan pencocokan.
Tapi satu hal yang harus kalian ketahui, bahwa _regex_ di JavaScript itu lumayan lambat pada penggunaan pola **SEDERHANA**.
Jika pola kalian sederhana, maka saya **SARANKAN** untuk **TIDAK** menggunakan _regex_.

Contoh, penggunaan _regex_ ini:

```js
const pola = /^Hai/;
console.log(pola.test("Hai dunia"));
```

Bisa diganti dengan:

```js
console.log("Hai dunia".startsWith("Hai"));
```

Kalian bisa melihat contohnya dari pustaka JavaScript saya [`fast-camelcase-css`](https://github.com/hyperz111/fast-camelcase-css).
Dia **TIDAK** menggunakan _regex_, tapi menggunakan operasi manual dari beberapa metode dari `String.prototype` dan _loop_ `while`.
Dan hasilnya bisa 3-8 kali lebih cepat dari penggunaan _regex_.

Tapi jika pola kalian lumayan kompleks, maka saya sarankan untuk tetap menggunakan _regex_ daripada operasi manual.
Kenapa? Karena operasi manual pada kasus yang kompleks bisa lebih lambat dibandingkan operasi _regex_.
