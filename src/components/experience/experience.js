import NavBar from '../navbar/navbar';
import smartcowLogo from './icons/smartcow.png'
import prizmaticsLogo from './icons/prizmatics.png'
import './experience.css';

const Experience = () => {

  const companyLogo = 'https://via.placeholder.com/500x500';

  const companies = [
    {
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
    },
    {
      name: 'Prizmatics',
      logo: prizmaticsLogo,
      totalExperience: '2 Months',
      roles: [
        {
          title: 'Computer Vision Intern',
          type: 'Internship',
          from: 'June 2019',
          to: 'August 2019',
          location: 'Hyderabad, Telangana, India'
        } 
      ]
    }
  ]

  return (
    <div className="layout">
      <NavBar name='experience' />
      <div className="experience layout-padding">
        <h3 className="page-heading">Experience</h3>
          {companies.map((company, index) =>
            <div className="company-info" key={index} >
              <div className="company-name-container">
                <img className="company-logo" src={company.logo} width="60px" />
                <div className="company-title">
                  <h4>{company.name}</h4>
                  <p>{company.totalExperience}</p>
                </div>
              </div>

              {company.roles.map((role, index) =>
                <div className="company-role-list" key={index}>

                  <div className="company-role-bullet">
                    <div className="bullet-circle"></div>
                    {index < company.roles.length -1 && <div className="bullet-line"></div>}
                  </div>
                  <div className="company-role" key={index}> 
                    <h4>{role.title}</h4>
                    <p>{role.type}</p>
                    <div className="working-date" style={{display: 'flex', alignItems: 'center'}}>
                      <p>{role.from}</p>
                      <p>-</p>
                      <p>{role.to}</p>
                    </div>
                    <p>{role.location}</p>
                  </div>
                </div>
              )}
            </div>
          )}

      </div>
    </div>
  );
}

export default Experience;