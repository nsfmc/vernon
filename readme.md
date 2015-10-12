# vernon

> The town gained infamy in the late 1950s and early 1960s due to the improbably high percentage of residents who put out insurance claims on lost limbs, to the point that many speculated that residents of the town were intentionally dismembering themselves for the insurance money. Although there is no real evidence to support these speculations, these insurance claims from Vernon, with a population of 500–800, accounted for as many as 2/3 of claims nationally. The town was referred to as "Nub City"

— wikipedia [Vernon, Florida](https://en.wikipedia.org/w/index.php?title=Vernon,_Florida&oldid=676377818)

## What this is

Vernon is yet another stub or "boilerplate" project for react, this time for react 0.14.0 + babel + eslint (w/ 'standard' config) and watchify set up. I am 100% sure somebody else has done this before, so don't feel compelled to use it at all.

### getting set up

    npm install

then, having done that, you can run

    npm run watch # in one tab, recompiles your js
    npm run start # in another, runs a static web server

and then, if `http-server` did its thing, a browser should open up with the page. you still need to reload it, like a savage, though.

#### entrypoints

If you're testing a component, you can either modify `src/components/main.jsx` directly, or you can create your own and modify `src/main.js`.

style components at `web/style/style.css` with plain css.

### shortcomings

i'd rather this were using react hot loader or pretty much anything else. as it is, i'm basically using this instead of jsfiddle.

also maybe some sort of css polyfill or what have you.

### "license"

lol, CC0.
