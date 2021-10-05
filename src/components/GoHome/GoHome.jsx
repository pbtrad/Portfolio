import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
import './GoHome.css';

// Programatic navigation instead of intentional navigation (link component)- use history object as exercise
class GoHome extends Component {
    navigateToHome = () => {
        const {history} = this.props;
        history.push('/');
    }

    render() {
        const { location } = this.props;
        const whiteBtn = location.pathname === '/';
        return (
            <IconContext.Provider value={{ className: 'home-icon' }}>
            <button
                className={`go-home-btn ${
                    whiteBtn ? 'white-bkg' : 'gradient-bkg'
                }`}
                onClick={this.navigateToHome}
            >
                <FaHome />
            </button>
            </IconContext.Provider>
        );
    }
}

export default withRouter(GoHome);