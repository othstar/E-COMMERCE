import Header from '../components/Header';
import Footer from '../components/Footer';
import Router from '../router';

const Layout = () => {
  return (
    <div className="layout-cotainer">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <Router />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
