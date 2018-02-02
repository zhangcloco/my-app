import React from 'react';
import Demo1 from '../../components/demo/demo1';
import Menu from '../../components/menu/menu';
import App from '../../components/banner/banner';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <App />
                <Menu />
            </div>
        );
    }
}
