import NavBar from '../navbar/navbar';
import './experience.css';

import smartcowLogo from './icons/smartcow.png';

const Experience = () => {
  const companies = [{
    name: 'SmartCow',
    logo: smartcowLogo,
    totalExperience: '2 Years',
    roles: [
      {
        title: 'AI Application Developer',
        type: 'Full Time',
        from: 'August 2019',
        to: 'Present',
        location: 'Hyderabad, Telangana, India'
      },
      {
        title: 'Jr. Machine Learning Engineer',
        type: 'Full Time',
        from: 'August 2019',
        to: 'August 2020',
        location: 'Hyderabad, Telangana, India'
      }
    ]
  }]
  return (
    <div className="layout">
      <NavBar name='experience' />
      <div className="experience layout-padding">
        <h2 className="experience-heading" style={{paddingTop: '.5em', paddingBottom: '.5em'}}>Experience</h2>
        
        <div className="company-experience">
          {companies.map((company, index) =>
            <div className="company-info" key={index} >
              <div className="company-name-container" style={{display: 'flex'}}>
                <img src={company.logo} />
                <div>
                  <p>{company.name}</p>
                  <p>{company.totalExperience}</p>
                </div>
              </div>

              {company.roles.map((role, index) =>
                <div className="company-role" key={index}>
                  <p>{role.title}</p>
                  <p>{role.type}</p>
                  <p>{role.from}</p>
                  <p>{role.to}</p>
                  <p>{role.location}</p>
                </div>

              )}
              
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Experience;