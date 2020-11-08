import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './index.css'

export const Home = ({ payments }: any) => {
    return (
        <div className="home-container">
            <div className="home-container-heading">Regular payments</div>
            {payments.map((payment: any) => {
                return (
                    <div className="payments-container">
                        <div className="payments-container-row payments-container-top-row">
                            <div>{payment.title}</div>
                            <div>{payment.amount}</div>
                        </div>

                        <div className="payments-container-row payments-container-bottom-row">
                            <div>{payment.frequency}</div>
                            <div>{payment.nextPaymentDate}</div>
                        </div>
                    </div>
                )
            })}
            <Link to={'/add'} className="add-btn">
                Add a bill
            </Link>
        </div>
    )
}

const mapStateToProps = ({ payments }: any) => ({ payments })
const mapDispatchToProps = {}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
