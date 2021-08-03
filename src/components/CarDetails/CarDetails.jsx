import React from 'react';
import CarImage from './CarImage/CarImage';
import CarInfo from './CarInfo/CarInfo';
export default function CarDetails() {
  return (
    <div>
      <h3 className="fw-bold">
        Honda Amaze
      </h3>

      <div className="card col-sm-12 m-0">
        <div className="card-body">
          <div className="d-flex row">
            <div className="col-md-6 d-flex ">
              <CarImage />
            </div>
            <div className="col-md-6 d-flex flex-column ">
              <div className="row">
                <CarInfo />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
