import NavBar from '../navbar/navbar';
import gitHeaderImage from './icons/git-header.svg';
import editIcon from './icons/edit.svg';
import gmailIcon from './icons/gmail.svg';
import twitterIcon from './icons/twitter.svg';
import mapsIcon from './icons/maps.svg';
import profilePicture from './icons/profile.png';
import Projects from './components/projects';
import './home.css';

import jsIcon from './icons/js.png';
import zmqIcon from './icons/zmq.png';
import pyTorchIcon from './icons/pytorch.png';
import dockerIcon from './icons/docker.png';
import flaskIcon from './icons/flask.png';
import pythonIcon from './icons/python.png';
import opencvIcon from './icons/opencv.png';
import gitIcon from './icons/git.png';
import reactIcon from './icons/react.png';
import bashIcon from './icons/bash.png';


const Home = () => {
  const profileName = "Nitin Rai";
  const profileTitle = "AI Application Developer";
  const githubUsername = "imneonizer";
  const twitterUsername = "imneonizer";
  const linkedinUsername = "imneonizer";
  const profileEmail = "mneonizer@gmail.com";
  const profileAddress = "Delhi, India";
  const profileShortDescription = "Specialized in Computer Vision and Image Processing."
  const profileDescription = "Offering years of extensive experience and exceptional analytical and critical thinking skills, great work ethics and ability to learn and adapt in fast paced, deadline driven team environment.";

  const openGithub = () => {window.open(`https://github.com/${githubUsername}`)};
  const openTwitter = () => {window.open(`https://twitter.com/${twitterUsername}`)};
  const openMail = () => {window.open(`mailto:${profileEmail}`)};
  const openMap = () => {window.open(`http://maps.google.com/?q=${profileAddress}`)};


  return (
    <div className="layout">
      <NavBar name='home' />
      <div className="home layout-padding">
        <div className="profile-section">

          <div className="profile-section-left">
            <img className="profile-picture" src={profilePicture} width="150px" />
            <p className="profile-name" style={{paddingTop: '1em'}}><b>{profileName}</b></p>
            <p className="profile-username" style={{paddingBottom: '.5em'}}>{githubUsername}</p>
            <p className="profile-short-description">{profileShortDescription}</p>
            <button className="github-link-button" onClick={openGithub}>GitHub</button>
          </div>

          <div className="profile-section-right">
            <div className="profile-section-right-intro-container">
              <p className="profile-section-right-intro-username" style={{cursor: 'pointer'}} onClick={openGithub}>{githubUsername} / README.md</p>

              <div className="send-feedback-container" style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={openTwitter}>
                <img src={editIcon} className="send-feedback-icon" width="15px" style={{paddingRight: '5px'}} />
                <p className="profile-section-right-intro-feedback">Send Feedback</p>
              </div>
            </div>

            <div className="separator" />

            <div className="profile-section-right-container">
              <p className="profile-title"><b>Hey, I am an {profileTitle} 🚀</b></p>
              <p className="profile-description">{profileDescription}</p>

              <div className="profile-section-right-links-container">
                <div className="profile-section-right-links">
                  <div style={{display: 'flex', alignItems: 'center'}} >
                    <img src={gmailIcon} width="27px" style={{paddingRight: '10px'}} />
                    <p className="clickable" onClick={openMail}>{profileEmail}</p>
                  </div>

                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={twitterIcon} width="27px" style={{paddingRight: '10px'}} />
                    <p className="clickable" onClick={openTwitter}>@{twitterUsername}</p>
                  </div>

                  <div style={{display: 'flex', alignItems: 'center', paddingTop: '.5em'}}>
                    <img src={mapsIcon} width="15px" style={{paddingLeft: '5px', paddingRight: '18px'}} />
                    <p className="clickable" onClick={openMap}>{profileAddress}</p>
                  </div>
                </div>

                <div className="profile-section-right-image">
                  <img src={gitHeaderImage} width="250px" />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="projects-section">
          <h2 className="top-projects-heading" style={{paddingTop: '1em', paddingBottom: '.5em'}}>Top Projects</h2>
          <Projects />
        </div>

        <div className="tech-stack-section">
          <div className="tech-stack-container" style={{display: 'flex', alignItems: 'center'}}>
            <div className="tech-stack-wrapper">
              <img src={zmqIcon} width="40px"/>
              <img src={pyTorchIcon} width="40px"/>
              <img src={dockerIcon} width="40px"/>
              <img src={flaskIcon} width="40px"/>
              <img src={pythonIcon} width="40px"/>
              <img src={opencvIcon} width="40px"/>
              <img src={jsIcon} width="40px"/>
              <img src={gitIcon} width="40px"/>
              <img src={reactIcon} width="40px"/>
              <img src={bashIcon} width="40px"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;