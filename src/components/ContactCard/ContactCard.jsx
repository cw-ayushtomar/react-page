import React from 'react'

export default function ContactCard() {
    return (
        <div className="mt-4 ">
            <div className="card">
                <div className="card-body">
                    <div className="row">

                    
                    <div className="d-none d-sm-block col-md-1">
                        <img style={{width:"3em"}} src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/offer-tag.svg" alt="" />
                    </div>
                    <div className="col-md-7 col-xs-12">

                    <div className="fw-bold fs-4">Contact Card</div>
                    <div><i class="fas fa-phone-alt"></i>  18002090230</div>
                    <div>Get in touch for the best buying option from your authorized dealer</div>
                    </div>

                    <div className="col-sm-4 align-self-center">
                        <button className="btn btn-danger">
                            <div className="fw-bold">Get Assistance</div></button>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
