import NavBar from '../navbar/navbar';
import './certificates.css';

import nvidiaLogo from './icons/nvidia.png'
import courseraLogo from './icons/coursera.png'
import dlaiLogo from './icons/dlai.png'


const Certificates = () => {
  const instituteLogo = 'https://via.placeholder.com/500x500';

  const course = [
    {
      name: 'Fundamentals of CNNs and RNNs',
      institute: 'Sungkyunkwan University',
      logo: courseraLogo,
      issued: 'Feb 2022',
      url: 'https://www.coursera.org/account/accomplishments/certificate/NQRHFQDJZAAP'
    },
    {
      name: 'Jetson AI Specialist',
      institute: 'Nvidia DLI',
      logo: nvidiaLogo,
      issued: 'Oct 2020',
    },
    {
      name: 'Getting Started with Deepstream for Video Analytics on Jetson',
      institute: 'Nvidia DLI',
      logo: nvidiaLogo,
      issued: 'Apr 2020',
      url: 'https://courses.nvidia.com/certificates/c0b7f6086f134b3399c336b890b8894f'
    },
    {
      name: 'Fundamentals of Accelerated Datascience with RAPIDS',
      institute: 'Nvidia DLI',
      logo: nvidiaLogo,
      issued: 'Dec 2019',
      url: 'https://courses.nvidia.com/certificates/dbe1048176c04a22ab68091e1a721040'
    },
    {
      name: 'Convolutional Neural Networks',
      institute: 'Deeplearning.ai',
      logo: dlaiLogo,
      issued: 'Nov 2019',
      url: 'https://www.coursera.org/account/accomplishments/verify/686XBVVWQ8J7'
    },
    {
      name: 'Neural Networks and Deep Learning',
      institute: 'Deeplearning.ai',
      logo: dlaiLogo,
      issued: 'Oct 2019',
      url: 'https://www.coursera.org/account/accomplishments/certificate/D9WNWH2AW4FH'
    },
    {
      name: 'Machine Learning by Stanford University',
      institute: 'Coursera',
      logo: courseraLogo,
      issued: 'Sep 2019',
      url: 'https://www.coursera.org/account/accomplishments/certificate/4MJGBK3WR2Y5'
    },
    {
      name: 'Getting Started with AI ON Jetson',
      institute: 'Nvidia DLI',
      logo: nvidiaLogo,
      issued: 'Aug 2019',
      url: 'https://courses.nvidia.com/certificates/08b3334d4eef4ce9996dcd303387c229'
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