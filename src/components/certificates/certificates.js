import NavBar from '../navbar/navbar';
import './certificates.css';

const Certificates = () => {
  return (
    <div className="layout">
      <NavBar name='certificates' />
      <div className="certificates layout-padding">
        <p>This is Certificates page!</p>
      </div>
    </div>
  );
}

export default Certificates;