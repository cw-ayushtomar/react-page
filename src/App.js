import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CarDetails from './components/CarDetails/CarDetails';
import ContactCard from './components/ContactCard/ContactCard';
import CarSpecifications from './components/CarSpecifications/CarSpecifications';
function App() {
  return (
    <div >
      <Navbar />
      <div className="container">
        <div className="row">

          <div className="col-md-1 col-sm-0"></div>
          <div className="col-md-10 col-sm-12">
            <CarDetails />
            <div className="col-md-7 col-sm-12">
              <ContactCard />

            </div>

          </div>
          <div className="col-md-1 col-sm-0"></div>
        </div>

      </div>
    </div>

  );
}

export default App;
