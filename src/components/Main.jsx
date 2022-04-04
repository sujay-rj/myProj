import './Main.css'
import mainuser from '../images/user.svg'
import Postmodal from './Postmodal';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getArticleAPI } from '../actions';
import ReactPlayer from 'react-player';
import photoicon from '../images/gallery-icon.svg'
import videoicon from '../images/video-icon.svg'
import eventicon from '../images/event-icon.svg'
import articleicon from '../images/write-article-icon.svg'
import menuicon from '../images/menu-icon.svg'
import likeicon from '../images/like-icon.svg'
import hearticon from '../images/heart-icon.svg'
import commenticon from '../images/comment-icon.svg'
import shareicon from '../images/share-icon.svg'
import sendicon from '../images/send-icon.svg'
import spinnericon from '../images/Spinner-icon.svg'



const Main = (props) => {
    const [showModal, setshowModal] = useState("close");

    useEffect(() => {
        props.getArticles();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        switch (showModal) {
            case "open":
                setshowModal("close");
                break;
            case "close":
                setshowModal("open");
                break;

            default:
                setshowModal("close");
                break;
        }
    }


    return (
        <>
            {
                props.articles.length === 0 ? (
                    <p>There are no articles </p>
                ) : (
                    <section className='maincontainer'>
                        <div className="sharebox">
                            <div className='startapost'>
                                {props.user && props.user.photoURL ? (
                                    <img src={props.user.photoURL} alt="" />
                                ) : (
                                    <img src={mainuser} alt="" />
                                )}

                                <button onClick={handleClick}
                                    disabled={props.loading ? true : false}>
                                    Start a post</button>
                            </div>
                            <div>
                                <div className='mainbtns'>
                                    <button>
                                        <img src={photoicon} alt="" style={{width:"25px"}}/>
                                        <span>Photo</span>
                                    </button>

                                    <button>
                                        <img src={videoicon} alt="" style={{width:"25px"}} />
                                        <span>Video</span>
                                    </button>

                                    <button>
                                        <img src={eventicon} alt="" style={{width:"25px"}}/>
                                        <span>Event</span>
                                    </button>
                                    <button>
                                        <img src={articleicon} alt="" style={{width:"25px"}}/>
                                        <span>Write article</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Content>
                            {props.loading && <img src={spinnericon} alt="" style={{width:"100px", height:"100px"}}/>}
                            {props.articles.length > 0 &&
                                props.articles.map((article, key) => (

                                    <div key={key} className="mainarticle">
                                        <div className="sharedactor">
                                            <div>
                                                <img src={article.actor.image} alt="" />
                                                <div className='sharedactor-list'>
                                                    <span>{article.actor.title}</span>
                                                    <span>{article.actor.description}</span>
                                                    <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <button>
                                                <img src={menuicon} alt="" style={{width:"20px", marginTop:"10px"}}/>
                                            </button>
                                        </div>

                                        <div className="maindescription">
                                            {article.description}
                                        </div>

                                        <div className="mainsharedimg">
                                            {
                                                !article.sharedImg && article.video ? (
                                                    <ReactPlayer url={article.video} width={'100%'} />
                                                ) : (
                                                    article.sharedImg && <img src={article.sharedImg} alt="" />
                                                )}
                                        </div>

                                        <div className="socialcounts">
                                            <li>
                                                <button>
                                                    <img src={commenticon} alt="" style={{width:"18px"}}/>
                                                    <img src={hearticon} alt="" style={{width:"15px", marginRight:"6px",}}/>
                                                    <span>69</span>
                                                </button>
                                            </li>
                                            <li>
                                                <span>{article.comments}</span>
                                            </li>
                                        </div>

                                        <div className="socialactions">
                                            <button>
                                                <img src={likeicon} alt="" style={{width:"25px"}}/>
                                                <span>Likes</span>
                                            </button>

                                            <button>
                                                <img src={commenticon} alt="" style={{width:"25px"}}/>
                                                <span>Comments</span>
                                            </button>

                                            <button>
                                                <img src={shareicon} alt="" style={{width:"25px"}}/>
                                                <span>Share</span>
                                            </button>

                                            <button>
                                                <img src={sendicon} alt="" style={{width:"25px"}}/>
                                                <span>Send</span>
                                            </button>
                                        </div>

                                    </div>
                                ))}
                        </Content>

                        <Postmodal showModal={showModal} handleClick={handleClick} />
                    </section>
                )}
        </>
    )
}

const Content = styled.div`
text-align:center;
& > img {
    width: 30px;
}
`;

const mapStateToProps = (state) => {
    return {
        loading: state.articleState.loading,
        user: state.userState.user,
        articles: state.articleState.articles,
    };
};

const mapDispatchToprops = (dispatch) => ({
    getArticles: () => dispatch(getArticleAPI()),
});

export default connect(mapStateToProps, mapDispatchToprops)(Main);