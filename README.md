# Context
This repo contains a minimal test case to illustrate an error occurring when whatwg-url is imported into a Typescript unit test. This error occurs with versions 8.2.0 and above.

## The error in question:
```
    TypeError: Cannot convert undefined or null to object
        at Function.getPrototypeOf (<anonymous>)
      at Object.<anonymous> (node_modules/whatwg-url/dist/utils.js:48:39)
      at Object.<anonymous> (node_modules/whatwg-url/dist/URL.js:4:15)
      at Object.<anonymous> (node_modules/whatwg-url/webidl2js-wrapper.js:3:13)
      at Object.<anonymous> (node_modules/whatwg-url/index.js:3:34)
      at Object.<anonymous> (test/sample_test.spec.ts:1:1)
```

# Instructions

1. Download this repo. Install packages with `npm install`
2. From the root directory, run the sample unit test with: `node ./node_modules/.bin/jest test/sample_test.spec.ts`