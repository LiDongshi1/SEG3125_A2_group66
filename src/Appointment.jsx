import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export default function BookWithoutLogin() {
  const [firstName, setFirstName]   = useState('')
  const [lastName, setLastName]     = useState('')
  const [serviceOption, setService] = useState('')
  const [phoneNumber, setPhone]     = useState('')
  const [date, setDate]             = useState('')
  const [error, setError]           = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if (
      !firstName.trim() ||
      !lastName.trim()    ||
      !serviceOption     ||
      !phoneNumber.trim() ||
      !date
    ) {
      setError(true)
      return
    }
    setError(false)
    setShowPopup(true)
  }

  return (
    <div>
      <h1
        className="text-center"
        style={{
          color: '#800000',
          fontFamily: 'Verdana',
          fontSize: '30px',
          marginTop: '120px'
        }}
      >
        Appointment without login
      </h1>

      <div style={{ height: '80%', width: '50%', margin: '0 auto 25px' }}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div style={{ marginTop: '3%' }}>
            {/** First Name **/}
            <div className="mb-3" style={{ width: '50%', margin: '0 auto' }}>
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                className="form-control"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>

            {/** Last Name **/}
            <div className="mb-3" style={{ width: '50%', margin: '0 auto' }}>
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                className="form-control"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>

            {/** Service **/}
            <div className="mb-3" style={{ width: '50%', margin: '0 auto' }}>
              <label htmlFor="services" className="form-label">
                Service
              </label>
              <select
                id="services"
                className="form-select"
                value={serviceOption}
                onChange={e => setService(e.target.value)}
              >
                <option value="" disabled>— choose one —</option>
                <option value="Haircut">Haircut</option>
                <option value="Perm">Perm</option>
                <option value="Hair Coloring">Hair Coloring</option>
                <option value="Treatment">Treatment</option>
              </select>
            </div>

            {/** Phone Number **/}
            <div className="mb-3" style={{ width: '50%', margin: '0 auto' }}>
              <label htmlFor="phone_number" className="form-label">
                Phone Number
              </label>
              <input
                id="phone_number"
                type="tel"
                className="form-control"
                value={phoneNumber}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            {/** Date **/}
            <div className="mb-3" style={{ width: '50%', margin: '0 auto' }}>
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                id="date"
                type="date"
                className="form-control"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div
              id="errorMessage"
              className="text-center"
              style={{ color: 'red', fontSize: '0.9rem', marginBottom: '12px' }}
            >
              The field cannot be empty!
            </div>
          )}

          <div className="text-center" style={{ marginTop: '7%' }}>
            <button
              type="submit"
              className="rounded-pill btn btn-primary"
              style={{ width: '55%' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {showPopup && (
        <div
          id="pop_up"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div>
            <div
              className="text-center rounded-pill btn btn-secondary"
              style={{ width: '500px', marginBottom: '25px' }}
            >
              Your appointment has been confirmed!
            </div>
            <div className="text-center">
              <button
                className="rounded-pill btn btn-primary"
                style={{ width: '250px' }}
                onClick={() => {
                    setShowPopup(false)
                    navigate('/')
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
