import React, { useState } from "react"

import { images } from "../../constants"
import { AppWrap, MotionWrap } from "../../wrapper"
import "./Footer.scss"

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e) => {
    const contact = {
      "form-name": "contact",
      name: name,
      email: email,
      message: message,
    }

    e.preventDefault()
    setLoading(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(contact),
    })
      .then(() => {
        setTimeout(() => {
          setLoading(false)
          setIsFormSubmitted(true)
        }, 750)
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      <h2 className="head-text">Have a coffee & chat with me.</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:mclean.jb@gmail.com" className="p-text">
            mclean.jb@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (919) 880-5025" className="p-text">
            +1 (919) 880-5025
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" name="contact" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />

          <div className="app__flex">
            <input type="text" className="p-text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea name="message" placeholder="Your Message" value={message} onChange={handleChangeInput} className="p-text" />
          </div>
          <button className="p-text" type="submit">
            {loading ? "Sending" : "Send Messsage"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      <div className="app__footer-policies app__wrapper">
        <h3 className="head-text">Refund, Cancellation, and Delivery Policy</h3>
        <h4>Fulfillment Policy</h4>
        <p>
          I strive to provide transparent and mutually beneficial terms for all my freelance web development services. Below, you'll find my general policies
          regarding refunds, cancellations, and project fulfillment. Please note that every contract will be tailored individually to accommodate the specific
          needs and requirements of each client.
        </p>
        <h4>Refund Policy:</h4>
        <ul>
          <li>
            <em>Initial Consultation</em>: The initial consultation, if charged, is non-refundable as it covers the time and effort for project assessment and planning.
          </li>
          <li><em>Project Deposits</em>: Deposits are non-refundable once project work has commenced unless otherwise stated in the agreement.</li>
          <li>
            <em>Partial Refunds</em>: In cases where project objectives have not been met due to significant developer fault, partial refunds may be issued at my
            discretion after thorough review.
          </li>
        </ul>
        <h4>Cancellation Policy:</h4>
        <ul>
          <li>
            <em>Cancellation by Client</em>: Clients may cancel services prior to the completion of the project under the following conditions:
            <ul>
              <li>Any deposits paid are non-refundable unless explicitly stated in the agreement.</li>
              <li>Additional fees may apply if substantial work has already been completed.</li>
            </ul>
          </li>
          <li>
            <em>Cancellation by Developer</em>: I reserve the right to terminate an agreement under specific conditions (e.g., non-payment, breach of contract,
            uncooperative behavior) after written notification to the client.
          </li>
        </ul>
        <h4>Delivery Policy:</h4>
        <ul>
          <li>
            <em>Project Timeline</em>: Timelines for delivery are established in consultation with the client and outlined in the contract. Delays may occur due to scope
            changes, additional requirements, or factors beyond our control.
          </li>
          <li><em>Final Deliverables</em>: Upon completion and full payment, final deliverables will be handed over as outlined in the agreement.</li>
        </ul>
        <h4>Return Policy:</h4>
        <p>
          Since we provide digital services, returns are not applicable. However, I ensure quality and compliance with project specifications through regular
          client communication.
        </p>
        <h4><em>Note:</em></h4>
        <p><em>For specific fulfillment policies regarding your project, please refer to the contract or contact me directly at mclean.jb@gmail.com.</em></p>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg")
