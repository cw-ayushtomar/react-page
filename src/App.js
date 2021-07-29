import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CarDetails from './components/CarDetails/CarDetails';
function App() {
  return (
    <div >
      <Navbar />
      <div className="container">
        <div className="row">

      <div className="col-1">

      </div>
      <div className="col-10">
      <CarDetails />

      </div>
      <div className="col-1">

</div>
      </div>
      
    </div>
    </div>

  );
}

export default App;
