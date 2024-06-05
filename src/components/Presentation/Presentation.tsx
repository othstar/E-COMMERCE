import Image from '/assets/shared/desktop/image-best-gear.jpg';
import './style.css';

const Presentation = () => {
  return (
    <div className="presentation container">
      <div className="description">
        <h3>
          Bringing you the <span>best</span> audio gear
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="logo-container">
        <img src={Image} alt="photo" />
      </div>
    </div>
  );
};

export default Presentation;
