# BBoxJS
BBoxJS is a light-weight Javascript solution for marking bounding boxes on an image

## Installing BBoxJS
BBoxJS can used as an IIFE called from a script tag or installed as a libary via npm. After initializing a `new BBoxAnnotator`, BBoxJS will search for a <div> with an ID of `bbox-annotator-container`.

### Using BBoxJS with React 

```bash
npm install bboxjs
```

```jsx
import React, { useRef } from 'react';
import BboxAnnotator from 'bboxjs';

export default function AnnotationEditor({ imgSrc }) {
    const div = useRef(null);

    if (div && div.current) {
        new BboxAnnotator(imgSrc, {
            prefix: 'testo-',
            callbacks: {
                onload: () => {
                    console.log('loaded')
                },
                onchange: (entries) => {
                    console.log(entries)
                }
            }
        })
    }
    
    return <div id="testo-bbox-annotator-container" style={{ width: '100%', zIndex: 999 }} ref={div} />
}
```

### Using BBoxJS as an IIFE 

```html
<script src="dist/bbox.js"></script>
```
See [demo.html](https://github.com/bluemellophone/bboxjs/blob/master/demo.html) for additional details.
