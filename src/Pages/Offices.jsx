import React from 'react';
import './CSS/Offices.css';
import offi_img from '../Components/Assets/office_img.jpeg'

const Offices = () => {
  
  const offices = [
    { id: 1, name: 'Ratnapura', location: 'Church Rd,Ratnapura,Sri Lanka' },
    { id: 2, name: 'Badulla', location: 'Udasgiriya,Badulla,Sri Lanka' },
    { id: 3, name: 'Maharagama', location: 'Meegaswewa,Maharagama,Sri Lanka' },
  ];

  return (
    <div className="offices-container">
      <h2 className="offices-heading">Our Offices</h2>
      <ul className="office-list">
        {offices.map(office => (
          <li key={office.id} className="office-item">
            <h3 className="office-name">{office.name}</h3>
            <p className="office-location">{office.location}</p>
          </li>
        ))}
      </ul>
      <div className="office-img">
        <img src={offi_img} alt="" />
      </div>
    </div>
  );
};

export default Offices;
