import './contact.css'
import tickCorrect from './icons/tick.svg'
import profilePicture from '../home/icons/profile.png';
import githubWall from './icons/githubwall.svg';
import youtubeIcon from './icons/youtube.svg';
import instagramIcon from './icons/instagram.svg';
import ytScreenshot from './icons/yt-screenshot.png';
import gmailIcon from './icons/gmail.svg';
import twitterIcon from './icons/twitter.svg';
import linkedinIcon from './icons/linkedin.svg';



const Contact = () => {
    const data = {
        name: 'Nitin Rai',
        githubUsername: 'imneonizer',
        experience: 2,
        youtube:{
            username: 'UCIk7UzLda',
            screenshot: ytScreenshot,
            url: 'https://www.youtube.com/channel/UCIk7UzLdaZVWOBaNZo7hgNg'
        },
        instagram: {
            username: 'the.nitin.rai',
            posts: 105,
            followers: '2k',
            url: 'https://www.instagram.com/the.nitin.rai/'
        },
        links: {
            email: 'mneonizer@gmail.com',
            twitter: 'https://twitter.com/imneonizer',
            linkedin: 'https://www.linkedin.com/in/imneonizer',
        }
    }

    const openLink = (link) => {if (link){window.open(link)}};
    const openMail = (email) => {if (email){window.open(`mailto:${email}`)}};

    return (
        <div className="contact-container">

            <div className="profile-margin">

                <div className="profile-top-container">
                    <div className="profile-top">
                        <img src={profilePicture} width="60px" />
                        <div className="profile-name-username">
                            <h4>{data.name}</h4>
                            <p>@{data.githubUsername}</p>
                        </div>
                    </div>

                    
                    <div className="year-of-experience">
                        <p>Exp +{data.experience}</p>
                    </div>

                    <div className="verify-tick">
                        <img src={tickCorrect} width="60%" />
                    </div>
                </div>

                <div className="profile-bottom-container">
                    <div className="profile-quote-wrapper">
                        
                        <div className="profile-quote">
                            <img src={githubWall} />
                            <p>
                                What people call <b>AI</b> is no more than finding answers to questions we know to ask.
                                <br /><br />
                                <b>Real AI</b> is answering questions we haven't dreamed of yet.
                            </p>
                        </div>

                        <div className="youtube-channel">
                            <div className="social-wrapper" style={{cursor: 'pointer'}} onClick={() => openLink(data.youtube.url)}>
                                <img src={youtubeIcon} width="50px" />
                                <div className="plink-name">
                                    <h4>{data.name}</h4>
                                    <p>@{data.youtube.username}</p>
                                </div>
                            </div>
                            <img src={data.youtube.screenshot} width="100%" style={{borderRadius: '10px'}} />
                        </div>

                    </div>

                    <div className="profile-links-wrapper">

                        <div className="instagram-account">
                            <div className="social-wrapper" style={{cursor: 'pointer'}} onClick={() => openLink(data.instagram.url)}>
                                <img src={instagramIcon} width="40px" />
                                <div className="plink-name">
                                    <h4>{data.name}</h4>
                                    <p>@{data.instagram.username}</p>
                                </div>
                            </div>

                            <div className="instagram-meta-container">
                                <div className="instagram-meta-text">
                                    <p>{data.instagram.posts}</p>
                                    <h4>Posts</h4>
                                </div>

                                <div className="instagram-meta-text">
                                    <p>{data.instagram.followers}</p>
                                    <h4>Followers</h4>
                                </div>
                            </div>
                            
                        </div>

                        <div className="social-links">

                            <div className="social-links-wrapper" style={{cursor: 'pointer'}} onClick={() => openMail(data.links.email)}>
                                <img src={gmailIcon} width="20px" />
                                <p>{data.links.email}</p>
                            </div>

                            <div className="social-links-wrapper" style={{cursor: 'pointer'}} onClick={() => openLink(data.links.twitter)}>
                                <img src={twitterIcon} width="20px" />
                                <p>{data.links.twitter}</p>
                            </div>

                            <div className="social-links-wrapper" style={{cursor: 'pointer'}} onClick={() => openLink(data.links.linkedin)}>
                                <img src={linkedinIcon} width="20px" />
                                <p>{data.links.linkedin}</p>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;