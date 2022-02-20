import { useNavigate } from "react-router-dom";
import linkedinIcon from './icons/linkedin.svg';
import homeIcon from './icons/home.svg';
import certificateIcon from './icons/certificates.svg';
import experienceIcon from './icons/experience.svg';
import educationIcon from './icons/education.svg';
import './navbar.css';

const NavBar = (props) => {
  const history= useNavigate();
  const linkedinUsername = "imneonizer";
  const openLinkedIn = () => {window.open(`https://www.linkedin.com/in/${linkedinUsername}/`)}

  return (
    <div className="navbar">
      <div className="navbar-left" style={{cursor: 'pointer'}} onClick={openLinkedIn}>
        <img src={linkedinIcon} width="55px" />
        <input className="navbar-linkedin-search" placeholder={' @'+linkedinUsername} disabled={true} style={{cursor: 'pointer'}}></input>
      </div>

      <div className="navbar-right">
        <div className="navbar-icon">
          <img width="27px" className={props.name === 'home' ? 'navbar-button-active': 'navbar-button-inactive'} src={homeIcon} onClick={() => history('/')} />
          {props.name === 'home' && <div className="navbar-icon-active-indicator" />}
        </div>
        
        <div className="navbar-icon">
          <img width="27px" className={props.name === 'experience' ? 'navbar-button-active': 'navbar-button-inactive'} src={experienceIcon} onClick={() => history('/experience')} />
          {props.name === 'experience' && <div className="navbar-icon-active-indicator" />}
        </div>

        <div className="navbar-icon">
          <img width="27px" className={props.name === 'certificates' ? 'navbar-button-active': 'navbar-button-inactive'} src={certificateIcon} onClick={() => history('/certificates')} />
          {props.name === 'certificates' && <div className="navbar-icon-active-indicator" />}
        </div>

        <div className="navbar-icon">
          <img width="27px" className={props.name === 'education' ? 'navbar-button-active': 'navbar-button-inactive'} src={educationIcon} onClick={() => history('/education')} />
          {props.name === 'education' && <div className="navbar-icon-active-indicator" />}
        </div>
      </div>
    </div>
  );
}

export default NavBar;