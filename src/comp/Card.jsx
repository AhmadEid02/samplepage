import React from 'react'

const Card = (props) => {
  return (
<div className="card mb-4 shadow-sm border-primary w-100 m-3">
                        <div className="card-header border-primary">
                            <h4 className="my-0 font-weight-normal">{props.name}</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">${props.price}
                                <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>{props.users} users included</li>
                                <li>{props.giga} GB of storage</li>
                                <li>{props.support}</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className={`btn btn-lg btn-block w-100 ${props.btnc}`}>{props.btn}</button>
                        </div>
                    </div> 
         )
}

export default Card