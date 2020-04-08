import React, { useRef, useState } from 'react';
import './CreditCardForm.scss';
import { Formik } from 'formik';
import creditCardBackground from '../../assets/img/23.jpeg';
import chip from '../../assets/img/chip.png';
import visa from '../../assets/img/visa.png';

const CreditCardForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Formik
      initialValues={{name: ''}}
      onSubmit={values => console.log('Submit: ', values)}>
      {
        ({handleSubmit, handleChange, values}) => (
          <form onSubmit={handleSubmit} className="form">
            <div className="card-wrapper">
              <div className={isFlipped ? 'card is-flipped' : 'card'}>
                <div className=" card__side card__front-side">
                  <div className="card__cover">
                    <img src={creditCardBackground} alt="credit-card" className="card__cover_img"/>
                  </div>
                  <div className="card__body">
                    <div className="card__top">
                      <img src={chip} alt="chip" className="card__top_chip"/>
                      <img src={visa} alt="visa-logo" className="card__top_visa"/>
                    </div>
                    <div className="card__number">
                      <label htmlFor="cardNumInput">
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
                      </label>
                    </div>
                    <div className="card__bottom">
                      <div className="card__bottom_data">
                        <label htmlFor="cardHoldersInput">
                          <span className="card__bottom_title">Card Holder</span>
                          <span className="card__bottom_text">FULL NAME</span>
                        </label>
                      </div>
                      <div className="card__bottom_data">
                        <label htmlFor="expiresMonthSelect">
                          <span className="card__bottom_title">Expires</span>
                        </label>
                        <div className="card__bottom_text-wrapper">
                          <label htmlFor="expiresMonthSelect">
                            <span className="card__bottom_text">MM</span>
                          </label>
                          <span className="card__bottom_text">/</span>
                          <label htmlFor="expiresYearSelect">
                            <span className="card__bottom_text">YY</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__side card__back-side">
                  <div className="card__cover">
                    <img src={creditCardBackground} alt="credit-card" className="card__cover_img"/>
                  </div>
                  <div className="card__back-side_body">
                    <div className="card__back-side_top"/>
                    <div className="card__cvv">
                      <span className="card__cvv_text">CVV</span>
                      <div className="card__cvv_line">
                      </div>
                    </div>
                    <div className="card__back-side_bottom">
                      <img src={visa} alt="visa-logo" className="card__top_visa"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form__content">
              <div className="form__input-wrapper">
                <label className="form__input_label">
                  Card Number
                </label>
                <input
                  id="cardNumInput"
                  type="text"
                  className="form__input"
                  onChange={handleChange}
                  onFocus={() => setIsFlipped(false)}
                />
              </div>
              <div className="form__input-wrapper">
                <label className="form__input_label">
                  Card Holders
                </label>
                <input
                  id="cardHoldersInput"
                  type="text"
                  className="form__input"
                  onChange={handleChange}
                  onFocus={() => setIsFlipped(false)}
                />
              </div>
              <div className="form__controls">
                <div className="form__selects">
                  <label htmlFor="expiresMonthSelect">Expiration Date</label>
                  <div className="form__selects-wrapper">
                    <div className="form__select-wrapper">
                      <select id="expiresMonthSelect"
                              defaultValue="Month"
                              className="form__select-wrapper_select"
                              onChange={handleChange}
                              onFocus={() => setIsFlipped(false)}
                      >
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
                      <select
                        id="expiresYearSelect"
                        defaultValue="Year"
                        className="form__select-wrapper_select"
                        onChange={handleChange}
                        onFocus={() => setIsFlipped(false)}
                      >
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
                  <input type="text"
                         className="form__input"
                         onChange={handleChange}
                         onFocus={() => setIsFlipped(true)}
                         onBlur={() => setIsFlipped(false)}
                  />
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
