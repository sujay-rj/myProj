import './Home.css';
import Header from './Header';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <>
            {
                !props.user && <Navigate to='/' />
            }
            <Header />
            <section className='adsection'>
                <div className="adcontent">
                    <h5>Hiring in a hurry? - </h5>
                    <p>Find talented pros in record time with Upwork and keep business moving</p>
                </div>
            </section>

            <section className='layout'>
                <Leftside />
                <Main />
                <Rightside />
            </section>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        user: state.userState.user,
    }
}

// const mapDispatchToProps=(dispatch)=>{

// }
export default connect(mapStateToProps)(Home);