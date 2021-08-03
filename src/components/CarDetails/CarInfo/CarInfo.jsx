import React from 'react'

export default function CarInfo() {
    return (
        <>
            <div className="row">
                <div className="card-group align-items-start">
                    <div className="card">

                        <div className="card-body">
                            <p class="fs-6 card-subtitle mb-2 text-muted">Version</p>
                            1.2 EMT Petrol
                        </div>

                    </div>




                    <div className="card">

                        <div className="card-body">
                            <p class="fs-6 card-subtitle mb-2 text-muted">City</p>
                            Show price in my city
                        </div>

                    </div>


                </div>
            </div>

            <div className="row">

                <div className="col-sm-8 align-self-center pt-3">
                    <h4 className="fw-bold">₹ 6.25 Lakh</h4>
                </div>
                <div>
                    <p className="fw-light">Avg. Ex-Showroom price</p>
                </div>
                <div >
                    <a href="#" className="pe-5 fs-5 text-decoration-none">Get EMI Assistance</a>
                    <button type="button" className="btn btn-outline-success btn-sm">Check your EMI</button>
                </div>
                <div className="col-sm-12 col-md-8">
                    <button type="button" className="m-3 w-100 btn btn-danger">
                        <div className="fw-bold fs-5">
                            Get July Offers
                        </div>
                    </button>

                </div>
            </div>


        </>
    )
}
