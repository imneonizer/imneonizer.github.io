import NavBar from '../navbar/navbar';
import Contact from '../contact/contact';
import cbseIcon from './icons/cbse.png';
import './education.css';

const Education = () => {

  const instituteLogo = 'https://via.placeholder.com/500x500';

  const education = [
    {
      course: 'B.Tech Computer Science',
      institute: 'YBN University',
      info: '2018 - 2022',
      logo: instituteLogo
    },
    {
      course: 'XII (Senior Secondary) Science',
      institute: 'Central Board of Secondary Education',
      info: 'Year of completion 2018 - CGPA 8.0',
      logo: cbseIcon
    },
    {
      course: 'XII (Secondary)',
      institute: 'Central Board of Secondary Education',
      info: 'Year of completion 2016 - CGPA 8.8',
      logo: cbseIcon
    }
  ]

  const openLink = (link) => {if (link){window.open(link)}};

  return (
    <div className="layout">
      <NavBar name='education' />
      <div className="education layout-padding">
        <h3 className="page-heading">Education</h3>

        <div className="education-container">
          {education.map((education, index) =>    
            <div className="education-info" key={index} onClick={() => openLink(education.url)} style={{cursor: 'pointer'}}>
              <div className="education-name-container">
                <img className="education-logo" src={education.logo} width="60px" />
                <div className="education-title">
                  <h4>{education.course}</h4>
                  <p>{education.institute}</p>
                  <p>{education.info}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <h3 className="page-heading" style={{marginTop: '.5em'}}>Contact</h3>
        <Contact />
      </div>
    </div>
  );
}

export default Education;