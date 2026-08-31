---
title: JavaScript Regex is Slow
description: JavaScript Regex is Slow, but...
date: 2025-12-28
---

Regular Expression or oftenly **regex** is a pattern that used for matching.
But one thing you should know, regex in JavaScript is kinda slow on **SIMPLE** pattern usage.
If your pattern is simple, i **RECOMMEND** to **DON'T** use regex.

For example, this regex usage:

```js
const pola = /^Hi/;
console.log(pola.test("Hi world"));
```

Can be replaced with:

```js
console.log("Hi world".startsWith("Hi"));
```

You can check an example from my JavaScript library [`fast-camelcase-css`](https://github.com/hyperz111/fast-camelcase-css).
It **isn't** using regex, but using manual operation from some methods on `String.prototype` and `while` loop.
And the result can be 3-8 times faster than regex usage.

But if your pattern is kinda complex, i recommend to still use regex than manual operation.
Why? Because manual operation on complex case can be slower than regex operation.
