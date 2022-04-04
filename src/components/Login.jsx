import React from 'react';
import './Login.css'
import imag from '../images/LinkedIn_Logo.svg.webp'
import hero from '../images/login-hero.svg'
import google from '../images/google.svg'
import {Navigate} from 'react-router-dom'

import { connect } from 'react-redux';
import { signInAPI } from '../actions';

const Login = (props) => {
    return (
        <>
            <div className='container'>

                    {
                        props.user &&
                        <Navigate to='/home' />
                    }

                <section className='nav'>
                    <a href="/" className='imglink'>
                        <img src={imag} alt='linkedin-logo' />
                    </a>
                    <div className="btns">
                        <div className='joinnow'> Join now</div>
                        <div className='signin'>Sign in</div>
                    </div>
                </section>
                {/* section 2  */}
                <section className='banner'>
                    <div className="hero">
                        <h1>Welcome to your professional community</h1>
                        <img src={hero} alt="heroimage" />    
                    </div>
                    <form className='form'>
                        <div className="google" onClick={()=>props.signIn()}>
                            <img src={google} alt="google icon" />
                            <p>sign in with google</p>
                            
                        </div>
                    </form>
                </section>
            </div>
        </>


    );
};

const mapStateToProps = (state)=>{
    return{
            user :state.userState.user,
    }
}

const mapDispatchToProps =(dispatch)=>({
    signIn:()=>dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
       