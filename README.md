# react-slim-media-query

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)
[![npm version](https://badge.fury.io/js/react-slim-media-query.svg)](https://badge.fury.io/js/react-slim-media-query)

A really lightweight CSS media query component for React.


## Usage

MediaQuery is a wrapper component that will render its children if the provided media query will match.
There are 2 ways to specify the query:
- Sending a `query` prop containg a CSS like media query.
- Sending specific props like `minWidth`, `maxWidth` etc. These can be numbers or strings. The current supported features are:
`minAspectRatio`, `maxAspectRatio`, `minDeviceAspectRatio`, `maxDeviceAspectRatio`, `minHeight`, `maxHeight`, `minDeviceHeight`,
`maxDeviceHeight`, `minWidth`, `maxWidth`, `minDeviceWidth`, `maxDeviceWidth`, `minColor`, `maxColor`, `minColorIndex`, `maxColorIndex`,
`minMonochrome`, `maxMonochrome`, `minResolution`, `maxResolution`.


```jsx
import { MediaQuery } from 'react-slim-media-query';

const App = () => (
    <div>
        <MediaQuery minWidth={1000}>
            <div>The width should be 1000 or higher.</div>
        </MediaQuery>
        <MediaQuery minWidth="1000px">
            <div>The width should be 1000 or higher.</div>
        </MediaQuery>
        <MediaQuery maxWidth={800}>
            <div>The width should be 800 or less.</div>
        </MediaQuery>
        <MediaQuery maxWidth="800px">
            <div>The width should be 800 or less.</div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 800px)">
            <div>The width should be 800 or less.</div>
        </MediaQuery>
    </div>
);
);
```

## Server Side Rendering

When rendered on server the query will always match. In order to override this behaviour you can set an initial state.


```jsx
import { MediaQuery } from 'react-slim-media-query';

const App = () => (
    <div>
        <MediaQuery minWidth={1000} initialState={{visible: true}}>
            <div>I should be visible when rendered on the server</div>
        </MediaQuery>
    </div>
);
);
```










