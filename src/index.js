import * as React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from '../lib';

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

ReactDOM.render(<App />, document.getElementById('root'));
