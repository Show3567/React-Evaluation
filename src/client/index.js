import React from 'react';
import ReactDOM from 'react-dom';
import AllUsers from './components/AllUsers';
import ShowHobby from './components/ShowHobby';
import './index.scss';

const App = () => {

    return (
        <div>
            <AllUsers />
            <ShowHobby />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
