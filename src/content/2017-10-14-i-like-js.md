---
title: I really like JS
date: 2017-10-14
path: /i-really-like-js
---

As a software engineer I encounter new languages, frameworks, and methods very often.  The challenge I find is deciphering what to use and when to use it.  One language that will never change in my toolbox is Javascript, especially the future of Javascript.

Lately I have been going through the codebase at work and looking for places where I can make improvements to our codebase.  One of the nice add-ons that I have been using lately is destructuring to replace [Lodash] (https://lodash.com/) Get.  Lodash does have some great methods that perform better than Javascript natively, but destructuring is one that I do find value in.

Here are some simple ways we can destructure objects:

```javascript

const { twitter, instagram } = obj;
// twitter = 'https://twitter.com/joshenglish'; instagram = 'https://instagram.com/jmenglis'

// You can also reassign variable names for the props that you destructure
const { twitter: t, instagram: i } = obj;
// t = 'https://twitter.com/joshenglish'; i = 'https://instagram.com/jmenglis'
```

Defaults are also available for you to use as well.

```javascript
const obj = { twitter: 'https://twitter.com/joshenglish' instagram: 'https://instagram.com/jmenglis' };

const { twitter = 'N/A', instagram = 'N/A', website = 'https://joshenglish.com' } = obj;
// twitter = 'https://twitter.com/joshenglish'; instagram = 'https://instagram.com/jmenglis'; website = 'https://joshenglish.com'
```

Arrays also have the ability to be destructured as well.

```javascript
const arr = [1, 2];

const [a, b] = arr;
// a = 1; b = 2
```

The above code represents just a few examples of destructuring that we can do in ES6.  There is a more comprehensive list here at [ExploringJS](http://exploringjs.com/es6/ch_destructuring.html#ch_destructuring) that I recommend taking a look at.
