// src/App.jsx
import React, { useState } from 'react'
import logo from './assets/logo.jpg'
import { Link } from 'react-router-dom'
import { FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const navItems = [
  { label: 'Home',       href: '/' },
  { label: 'Appointment',href: '#Appointment' },
  { label: 'Pricing',    href: '#Pricing' },
  { label: 'Contact',    href: '#Contact' },
]

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Scissors logo"
            className="img-thumbnail"
            style={{ width: '100px', marginLeft: '10px', borderColor: "white" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navmenu">
          <ul className="navbar-nav">
            {navItems.map(item => (
              <li className="nav-item" key={item.label}>
                <Link
                  to={item.href}
                  className="nav-link text-black text-decoration-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex ms-3">
            <Link to="/signin">
              <button className="btn btn-secondary me-2 text-black">Sign in</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-dark text-white">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>

    <header className='text-center mt-5 border-bottom' style={{
          background: 'linear-gradient(to bottom, #f8ccd0 0%, #ffffff 100%)',
          padding: '4rem 0',
        }}>
      <h1 className="hero-title">The Pegasus</h1>
      <p className='lead'>Salon online booking</p>
      <div className='d-flex justify-content-center mt-3' id='Appointment'>
        <input type="text" className='form-control w-25' placeholder='Search services...' />
      </div>
      <div className="d-flex justify-content-center gap-3 mt-4">
          <Link to="/book-without-login">
            <button className="btn btn-warning rounded-pill">BOOK without login</button>
          </Link>
          <Link to="/signin">
            <button className="btn btn-dark rounded-pill text-white">BOOK now</button>
          </Link>
        </div>
    </header>

    <section className='text-center my-5' id='Pricing' style={{
      backgroundColor: 'white',
    }}>
      <h2>Price</h2>
      <ul className='list-unstyled'>
        <li>Haircut (30$)</li>
        <li>Perm (70$)</li>
        <li>Hair Coloring (50$)</li>
        <li>Treatment (80$)</li>
      </ul>

    </section>

    <footer className="bg-light py-3" id="Contact">
        <div className="container text-center">
          <div className="mb-2">
            <a
              href="https://www.instagram.com/the_pegasus100/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark mx-2"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:dli168@example.com"
              className="text-dark mx-2"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://linkedin.com/the_pegasus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark mx-2"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div>
            <p>Student Name: Mengzhi Wu, Dongshi Li <br />
               Student Number: 300263217 & 300294775
            </p>
          </div>
        </div>
      </footer>
    </>

  )
}
