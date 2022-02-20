import NavBar from '../navbar/navbar';
import './certificates.css';

const Certificates = () => {
  const instituteLogo = 'https://via.placeholder.com/500x500';

  const course = [
    {
      name: 'Jetson AI Specialist',
      institute: 'Nvidia DLI',
      logo: instituteLogo,
      issued: 'Oct 2020',
    },
    {
      name: 'Getting Started with Deepstream for Video Analytics on Jetson',
      institute: 'Nvidia DLI',
      logo: instituteLogo,
      issued: 'Apr 2020',
      url: 'https://courses.nvidia.com/certificates/c0b7f6086f134b3399c336b890b8894f'
    },
    {
      name: 'Fundamentals of Accelerated Datascience with RAPIDS',
      institute: 'Nvidia DLI',
      logo: instituteLogo,
      issued: 'Dec 2019',
    },
    {
      name: 'Convolutional Neural Networks',
      institute: 'Deeplearning.ai',
      logo: instituteLogo,
      issued: 'Nov 2019',
    },
    {
      name: 'Neural Networks and Deep Learning',
      institute: 'Deeplearning.ai',
      logo: instituteLogo,
      issued: 'Oct 2019',
    },
    {
      name: 'Machine Learning by Stanford University',
      institute: 'Coursera',
      logo: instituteLogo,
      issued: 'Sep 2019',
    },
    {
      name: 'Getting Started with AI ON Jetson',
      institute: 'Nvidia DLI',
      logo: instituteLogo,
      issued: 'Aug 2019',
    },
  ]

  const openLink = (link) => {if (link){window.open(link)}};
  
  return (
    <div className="layout">
      <NavBar name='certificates' />
      <div className="certificates layout-padding">
        <h3 className="page-heading">Licenses & Certifications</h3>
        {course.map((course, index) =>
              <div className="certificates-info" key={index} onClick={() => openLink(course.url)} style={{cursor: 'pointer'}}>
                <div className="certificate-name-container">
                  <img className="institute-logo" src={course.logo} width="60px" />
                  <div className="certificate-title">
                    <h4>{course.name}</h4>
                    <p>{course.institute}</p>
                    <p>Issued {course.issued}</p>
                  </div>
                </div>
              </div>
            )}
        </div>
    </div>
  );
}

export default Certificates;