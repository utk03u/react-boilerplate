import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import Nav from './components/Navigation/navmenu';
class Welcome extends React.Component {
    render () {
        return (
            <>
                <Nav />
            </>
        );
    }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
