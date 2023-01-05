import React from 'react';
import "./footer.scss";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div>
          <div className='info-container'>

            <div className='lists'>
              <h5>SHOP</h5>
              <a href="##">Ladies</a>
              <a href="##">Men</a>
              <a href="##">Kids</a>
              <a href="##">Baby</a>
              <a href="##">P&N Home</a>
              <a href="##">Sport</a>
            </div>

            <div className='lists'>
              <h5>CORPORATE INFO</h5>
              <a href="##">Career at P&N</a>
              <a href="##">About P&N group</a>
              <a href="##">Sustainability</a>
              <a href="##">Press</a>
              <a href="##">Investor relations</a>
              <a href="##">Corporate governance</a>
            </div>

            <div className='lists'>
              <h5>HELP</h5>
              <a href="##">My P&N</a>
              <a href="##">Find a store</a>
              <a href="##">Legal & Privacy</a>
              <a href="##">Contact</a>
              <a href="##">Report a scam</a>
              <a href="##">Cookie Notice</a>
            </div>

            <div style={{ width: '240px' }}>
              <a href="##">
                Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
              </a>
            </div>

          </div>


          <div>
            <ul className='list-style' style={{ listStyle: 'none', display: 'flex' }}>
              <li><a href="https://www.facebook.com/login/"><AiFillFacebook className='social-media-icon' /> </a></li>
              <li><a href="https://twitter.com/i/flow/login"><AiOutlineTwitter className='social-media-icon' /> </a></li>
              <li><a href="https://www.instagram.com/"><AiOutlineInstagram className='social-media-icon' /> </a></li>
              <li><a href="https://www.youtube.com/"><AiFillYoutube className='social-media-icon' /> </a></li>
              <li><a href="https://in.pinterest.com/login/"><FaPinterest className='social-media-icon' /> </a></li>
            </ul>


            <div>
              <p className='para'>
                The content of this site is copyright-protected and is the property of P & N Prateek & Nidhi AB. P&N’s business concept is to offer fashion and quality at the best price in a sustainable way. P&N has since it was founded in 1947 grown into one of the world's leading fashion companies.
              </p>
            </div>


            <div className='logo'>
              <h5><img src={logo} alt="" style={{height: '80px', width: '80px'}} /></h5>
            </div>

          </div>
        </div>



      </footer>
    </>
  );
};

export default Footer;
