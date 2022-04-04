import styled from 'styled-components'
import './Postmodal.css'
import user from '../images/user.svg'
import { connect } from 'react-redux'
import crossicon from '../images/cross-icon.svg'
import anyone from '../images/anyone-icon.svg'
import photoicon from '../images/gallery-icon.svg'
import videoicon from '../images/video-icon.svg'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import firebase from 'firebase/compat/app';
import { postArticleAPI } from '../actions'

const Postmodal = (props) => {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === '' || image === undefined) {
            alert(`not an image, the file is a ${typeof image}`);
            return;
        }
        setShareImage(image);

    };

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    };

    const postArticle =(e)=>{
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }

        const payload ={
            image:shareImage,
            video: videoLink,
            user:props.user,
            description: editorText,
            timestamp:firebase.firestore.Timestamp.now(),

        };

        props.postArticle(payload);
        reset(e);
    };

    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    }

    return (
        <>

            {props.showModal === 'open' && (

                <Container className="postmodalcontainer">
                    <Content className='postmodalcontent'>
                        <Header className='postheader'>
                            <h2>Create a post</h2>
                            <button onClick={(event) => reset(event)}>
                                <img src={crossicon} alt="" style={{width:"15px",marginTop:"3px"}}/>
                            </button>
                        </Header>

                        <SharedContent className='post-sharedcontent'>
                            <UserInfo className='post-userinfo'>

                                {props.user.photoURL ? (
                                    <img src={props.user.photoURL} alt="" />
                                ) : (
                                    <img src={user} alt="" />
                                )}
                                <span>{props.user.displayName}</span>
                            </UserInfo>
                            <Editor className='editor'>
                                <textarea
                                    value={editorText}
                                    onChange={(e) => setEditorText(e.target.value)}
                                    placeholder="What do you want to talk about ?"
                                    autoFocus={true}
                                />

                                {
                                    assetArea === 'image' ? (

                                        <UploadImage className='postmodal-uploadimage'>
                                            <input
                                                type="file"
                                                accept='image/gif, image/jpeg, image/png'
                                                name='image'
                                                id='file'
                                                style={{ display: "none" }}
                                                onChange={handleChange}
                                            />
                                            <p>
                                                <label htmlFor="file">
                                                    Select an image to share
                                                </label>
                                            </p>
                                            {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}

                                        </UploadImage>
                                    ) : (
                                        assetArea === 'media' &&
                                        <>
                                            <input type="text"
                                                placeholder='Please input a video link'
                                                value={videoLink}
                                                style={{ width: "100%", height: "25px", fontSize: "15px" }}
                                                onChange={(e) => setVideoLink(e.target.value)}
                                            />

                                            {videoLink && <ReactPlayer width={"100%"} url={videoLink} />}
                                        </>
                                    )
                                }


                            </Editor>
                        </SharedContent>

                        <ShareCreation className='sharecreation'>

                            <AttachAssets className='attachassests'>
                                <AssetButton className='assetbutton1'
                                    onClick={() => switchAssetArea('image')}
                                >
                                    <img src={photoicon} alt="" style={{width:"28px"}}/>
                                </AssetButton>

                                <AssetButton className='assetbutton2'
                                    onClick={() => switchAssetArea('media')}
                                >
                                    <img src={videoicon} alt="" style={{width:"31px"}}/>
                                </AssetButton>
                            </AttachAssets>

                            < ShareComment className='sharecomment'>
                                <AssetButton className='assetbutton3'>
                                    <img src={anyone} alt="" style={{width:"20px"}}/>
                                    Anyone
                                </AssetButton>
                            </ShareComment>

                            <PostButton className='postbutton'
                                disabled={!editorText ? true : false}
                                onClick={(event)=> postArticle(event)}
                            >
                                <p>Post</p>
                            </PostButton>

                        </ShareCreation>


                    </Content>
                </Container>

            )}

        </>
    )

}

const Container = styled.div``;
const Content = styled.div``;
const Header = styled.div``;
const SharedContent = styled.div``;
const UserInfo = styled.div``;
const ShareCreation = styled.div``;
const AttachAssets = styled.div``;
const AssetButton = styled.div``;
const ShareComment = styled.div``;
const PostButton = styled.div`
    background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.8)" : "#0a66c2")} ;
    color: ${(props) => (props.disabled ? "white" : "white")};

    
&:hover {
    background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.08)" : "#004182")};
}
`;
const Editor = styled.div``;
const UploadImage = styled.div`
    text-align: center;
    img{
        width:100%;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToprops = (dispatch) => ({
    postArticle:(payload)=> dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Postmodal);