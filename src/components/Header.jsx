import './Header.css'
import homeLogo from '../images/home-logo.svg'
import icon from '../images/search-icon.svg'
import navhome from '../images/nav-home.svg'
import navnetwork from '../images/nav-network.svg'
import navjob from '../images/nav-jobs.svg'
import navmsg from '../images/nav-messaging.svg'
import navnoti from '../images/nav-notifications.svg'
import navuser from '../images/user.svg'
import navwork from '../images/nav-work.svg'
import navdownicon from '../images/down-icon.svg'
import { connect } from 'react-redux'
import {signOutAPI} from '../actions';

const Header = (props) => {
  return (
    <>
      <section className='header'>
        <div className="content">

          <a href="/home" className='logo'>
            <img src={homeLogo} alt="in logo" />
          </a>

          <div className="search">
            <div className="input">
              <input type="text" placeholder='Search' />
            </div>
            <div className='icon'>
              <img src={icon} alt="" />
            </div>
          </div>

          <div className="navmenu">
            <div className="navwrap">
              <div className="navlist">
                <a href='/'>
                  <img src={navhome} alt="" />
                  <span>Home </span>
                </a>
              </div>
              <div className="navlist">
                <a href='/'>
                  <img src={navnetwork} alt="" />
                  <span>My Network</span>
                </a>
              </div>
              <div className="navlist">
                <a href='/'>
                  <img src={navjob} alt="" />
                  <span>Jobs</span>
                </a>
              </div>
              <div className="navlist">
                <a href='/'>
                  <img src={navmsg} alt="" />
                  <span>Messaging</span>
                </a>
              </div>
              <div className="navlist">
                <a href='/'>
                  <img src={navnoti} alt="" />
                  <span>Notifiations</span>
                </a>
              </div>

              <div className="user">
                <a> 
                  {
                    props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt=""/> ) : (
                  <img className='navuserimg1' src={navuser} alt="" />
                    )}
                  <span className='userspan'>
                    <p>Me</p>
                    <img className='navdownimg2' src={navdownicon} alt="" />
                  </span>
                </a>
                <div className="signout" onClick={()=>props.signOut()}>
                  <a>Sign out</a>
                </div>

              </div>

              <div className="work">
                <a href="/">
                  <img src={navwork} alt="" />
                  <span className='workspan'>
                  <p>Work</p>
                    <img src={navdownicon} alt="" />
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps=(state)=>{
  return{
    user:state.userState.user,
  };
};

const mapDispatchToProps=(dispatch)=>({
  signOut:()=>dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);