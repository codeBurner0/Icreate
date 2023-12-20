import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { MdEmail, MdContacts } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
function Footer() {
  const navigate = useNavigate()
  return (
    <div className="footer_div">
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3 className="title_heading">
            I<span>CREATE</span>
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1" onClick={() => navigate('/')}>
              Home&nbsp;
            </a>

            <a href="#" onClick={() => navigate('/create')}>
            Create &nbsp;
            </a>

            <a href="#" onClick={() => navigate('/community')}>
              community&nbsp;
            </a>

            <a href="#" onClick={() => navigate('/about')}>
              About
            </a>
          </p>

          <p class="footer-company-name">BlogFusion ankit© 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>27, Om Nagar colony</span> Mathura, Uttar Pradesh
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>967-785-679-345</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:ankit.anand.fullstackdeveloper@gmail.com">
                support@icreate.com
              </a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Icreate is your all-in-one platform designed to empower designers
            and make web developers to shine on a global stage.
          </p>

          <div class="footer-icons">
            <a href="https://www.linkedin.com/in/ankit-anand-437187215/">
              <BsLinkedin className="icon1" />
            </a>
            <a href="https://github.com/codeBurner0">
              <FaGithubSquare className="icon1" />
            </a>
            <a href="mailto:ankit.anand.fullstackdeveloper@gmail.com">
              <MdEmail className="icon1" />
            </a>
            <a href="#">
              <MdContacts
                className="icon1"
                onClick={() => navigate('/')}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
