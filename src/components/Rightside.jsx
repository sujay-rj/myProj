import './Rightside.css'
import feedicon from '../images/feed-icon.svg'
import righticon from '../images/right-icon.svg'

const Rightside=(props)=>{
    return(
        <>
        <div className='rightcontainer'>
            <div className="followcard">
                <div className="righttitle">
                    <h2>
                        Add to your feed
                    </h2>
                    <img src={feedicon} alt="" />
                </div>

                <div className="feedlist">
                    <li>
                        <div className="rightavatar1"></div>
                        <div className='feedlist-list'>
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                    <div className="rightavatar2"></div>
                        <div className='feedlist-list'>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </div>

                <div className="recommendation">
                    View all recommendations
                    <img src={righticon} alt="" />
                </div>
                
            </div>
            <div className="bannercard">
            <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
            </div>
        </div>
        </>
    )
}

export default Rightside;