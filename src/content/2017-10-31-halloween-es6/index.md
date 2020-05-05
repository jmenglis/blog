---
title: Halloween ES6+
date: 2017-10-31
path: /halloween-es6
---

It's the scary night of halloween and I want to drop a little ES6+ fright fun.

Continuing where we left on in the last post we are going to walk through destructuring objects that get passed into functions.

```javascript
// Here we are going to reassign keys passed into function as an argument.

function getData({dataObject: data, timeObject: time}) {
  console.log(data.name, time.currentDate);
}

getData({dataObject: { name: 'Josh', geek: true }, timeObject: { currentDate: '10/31/2017' }});

// Josh 10/31/2017
```

As you can see you are able to do some pretty cool destructuring in ES6+.  Don't be afraid and try to implement these cool aspects of Javascript in your code base.
