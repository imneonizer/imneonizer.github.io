import NavBar from '../navbar/navbar';
import './education.css';

const Education = () => {
  return (
    <div className="layout">
      <NavBar name='education' />
      <div className="education layout-padding">
        <p>This is Education page!</p>
      </div>
    </div>
  );
}

export default Education;