import * as React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from '../lib';

const App = () => (
    <div>
        <MediaQuery minWidth={1000}>
            <span>Lonely boy</span>
        </MediaQuery>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
