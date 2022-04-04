// import styled from 'styled-components'
import './Leftside.css'
import cardbg from '../images/card-bg.svg'
import photo from '../images/photo.svg'
import widgeticon from '../images/widget-icon.svg'
import itemicon from '../images/item-icon.svg'
import plusicon from '../images/plus-icon.svg'
import { connect } from 'react-redux'


const Leftside = (props) => {
    return (
        <>
            <section className='container'>
                <div className="leftcard">
                    <div className="userinfo">
                        <img className='userbgimg' src={cardbg} alt="" />
                        <div className='userbg'>
                            <img className='photo' src={photo} alt="" />

                        </div>
                        <div className='welcometxt'>
                            <span id='sp1'>Welcome, {props.user ? props.user.displayName : "there"} !</span><br />
                            <span id='sp2'>Add a photo</span>
                        </div>
                    </div>

                    <div className="widget">
                        <div className="widgetcontent">
                            <div className="widtxt">
                                <span>Connections</span>
                                <span>Grow your network</span>
                            </div>
                            <img src={widgeticon} alt="" />
                        </div>
                    </div>

                    <div className="itemicon">
                        <span>
                            <img src={itemicon} alt="" />
                            My items
                        </span>
                    </div>

                </div>
                <div className="communitycard">
                    <div className="groups">
                        <span>Groups</span>
                    </div>
                    <div className="events">
                        <span>
                            Events
                            <img src={plusicon} alt="" />
                        </span>
                    </div>
                    <div className="hashtag">
                        <span>Follow Hashtags</span>
                    </div>
                    <div className="dismore">
                        <span>Discover More</span>
                    </div>
                </div>

            </section>
        </>
    )
};


// const Link = styled.div``;

const mapStateToProps =(state)=>{
    return{
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(Leftside);