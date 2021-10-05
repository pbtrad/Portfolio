import React, { Component } from 'react';
import { ReactBurgerMenu } from 'react-burger-menu';
import './Home.css';
import { Link } from 'react-router-dom';
import egg from './../../assets/egg.jpeg';
import Modal from '../Modal/Modal';

class Home extends Component {
    state = { showModal: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showModal: true });
        }, 1000);
    }

    closeModal = () => {
        this.setState({ showModal: false });
    };
    render() {
        return (
        <div className="home-container">
            {this.state.showModal && <Modal closeModal={this.closeModal} />}
            <div className="header-text">
                <h1>Welcome to my Portfolio</h1>
                <p>Paul Browne - Full Stack Developer</p>
            </div>
            <div className="head-btns">
                <Link to="/about" className="btn btn-white">
                    <p className="btn-text">Know more about me</p>
                </Link>
                <Link to="/contact" className="btn btn-transparent">
                <p className="btn-text">Connect with me</p>
                </Link>
            </div>
            <div className="splash-image">
            <img
                        src={egg}
                        alt='egg'
                        className='egg'
                    />
            </div>
        </div>
        );
    }
}

export default Home;