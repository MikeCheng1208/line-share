# Line Share

meta
```html
<meta property="og:title" content="title"/>
<meta property="og:description" content="description"/>
<meta property="og:url" content="share url"/>
<meta property="og:image" content="share images"/>
```
NPM:  https://www.npmjs.com/package/line-share

## Installation
```
npm install line-share -D
```
And then import it:
```javascript
import lineShare from "line-share";
const line = new lineShare();

/* fill in share url */
line.share("https://github.com/MikeCheng1208/");
```