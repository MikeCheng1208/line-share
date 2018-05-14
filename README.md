# Line Share

meta
```html
<meta property="og:title" content="title"/>
<meta property="og:description" content="description"/>
<meta property="og:url" content="share url"/>
<meta property="og:image" content="share images"/>
```

## Installation
```
npm install line-share
```
And then import it:
```javascript
const lineShare = require('line-share');
const line = new lineShare();
/* fill in share url */
line.share("https://github.com/MikeCheng1208/");
```