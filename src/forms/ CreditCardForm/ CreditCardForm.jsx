import React from 'react';
import './CreditCardForm.scss';
import { Formik } from 'formik';
import creditCardBackground from '../../assets/img/23.jpeg';
import chip from '../../assets/img/chip.png';
import visa from '../../assets/img/visa.png';

const CreditCardForm = () => {
  return (
    <Formik
      initialValues={{name: ''}}
      onSubmit={values => console.log('Submit: ', values)}>
      {
        ({handleSubmit, handleChange, values}) => (
          <form onSubmit={handleSubmit} className="form">
            <div className="card">
              <div className="card__cover">
                <img src={creditCardBackground} alt="credit-card" className="card__cover_img"/>
              </div>
              <div className="card__body">
                <div className="card__top">
                  <img src={chip} alt="chip" className="card__top_chip"/>
                  <img src={visa} alt="visa-logo" className="card__top_visa"/>
                </div>
                <div className="card__number">
                  <span>#</span>
                  <span>#</span>
                  <span>#</span>
                  <span>#</span>
                  <span>&emsp;</span>
                  <span>#</span>
                  <span>#</span>
                  <span>#</span>
                  <span>#</span>
                  <span>&emsp;</span>
                  <span>#</span>
                  <span>#</span>
                  <span>#</span>
                  <span>#</span>
                  <span>&emsp;</span>
                  <span>#</span>
                  <span>#</span>
                  <span>#</span>
                  <span>#</span>
                </div>
                <div className="card__bottom">
                  <div className="card__bottom_data">
                    <span className="card__bottom_title">Card Holder</span>
                    <span className="card__bottom_text">FULL NAME</span>
                  </div>
                  <div className="card__bottom_data">
                    <span className="card__bottom_title">Expires</span>
                    <span className="card__bottom_text">MM/YY</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form__content">
              <div className="form__input-wrapper">
                <label className="form__input_label">
                  Card Number
                </label>
                <input type="text" className="form__input" onChange={handleChange}/>
              </div>
              <div className="form__input-wrapper">
                <label className="form__input_label">
                  Card Holders
                </label>
                <input type="text" className="form__input" onChange={handleChange}/>
              </div>
              <div className="form__controls">
                <div className="form__selects">
                  <label htmlFor="select1">Expiration Date</label>
                  <div className="form__selects-wrapper">
                    <div className="form__select-wrapper">
                      <select id="select1" defaultValue="Month" className="form__select-wrapper_select" onChange={handleChange}>
                        <option value="Month" disabled>Month</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <div className="select-arrow"/>
                    </div>
                    <div className="form__select-wrapper">
                      <select defaultValue="Year" className="form__select-wrapper_select" onChange={handleChange}>
                        <option value="Year" disabled>Year</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                      </select>
                      <div className="select-arrow"/>
                    </div>
                  </div>
                </div>
                <div className="form__input-wrapper">
                  <label>CVV</label>
                  <input type="text" className="form__input" onChange={handleChange}/>
                </div>
              </div>
              <button className="btn btn__submit">Submit</button>
            </div>
          </form>
        )
      }
    </Formik>
  );
};

export default CreditCardForm;
