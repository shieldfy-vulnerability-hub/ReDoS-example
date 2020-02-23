# ReDoS-example

## there is 6 vulnerabilities

1. ReDoS in `index.vuln.js` line `30`

```js
const regex1 = RegExp('(x+x+)+y','g');
const str1 = req.body.msg;

let matchedStrings = regex1.exec(str1);
res.end(matchedStrings)

```

2. ReDoS in `index.vuln.js` line `39`

```js
const regex1 = RegExp(req.body.word,'g');
const str1 = 'table football, foosball';

let matchedStrings = regex1.exec(str1);
res.end(matchedStrings)

```

3. ReDoS in `index.vuln.js` line `48`

```js
const regex1 = RegExp('(x+x+)+y','g');
const str1 = 'table football, foosball';

let matchedStrings = regex1.exec(str1);
res.end(matchedStrings)

```

4. ReDoS in `index.vuln.ts` line `29`

```js
const regex1 = RegExp('(x+x+)+y','g');
const str1 = req.body.msg;

let matchedStrings = regex1.exec(str1);
res.end(matchedStrings)

```

5. ReDoS in `index.vuln.ts` line `38`

```js
const regex1 = RegExp(req.body.word,'g');
const str1 = 'table football, foosball';

let matchedStrings = regex1.exec(str1);
res.end(matchedStrings)

```

6. ReDoS in `index.vuln.ts` line `47`

```js
const regex1 = RegExp('(x+x+)+y','g');
const str1 = 'table football, foosball';

let matchedStrings = regex1.exec(str1);
res.end(matchedStrings)

```
