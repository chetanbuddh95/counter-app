import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config-store';
import Counter from './counter/component';

const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));