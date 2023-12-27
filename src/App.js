import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import WOW from 'wowjs';
import Home from './Home.js';
import About from "./About.js";
import Services from "./Services.js";
import Blog from "./Blog.js";
import Contact from "./Contact.js";
import Price from "./Price.js";
import Feature from "./Feature.js";
import Team from "./Team.js";
import Testimonial from "./Testimonial.js";
import Quote from "./Quote.js";


function App() {
  useEffect(() => {
    // WOW initialization - if using WOW.js
    new WOW.WOW().init();

    const hideSpinner = setTimeout(() => {
      const spinnerElement = document.getElementById('spinner');
      if (spinnerElement) {
        spinnerElement.classList.remove('show');
      }
    }, 1);

    return () => {
      clearTimeout(hideSpinner);
    };
  }, []);
  useEffect(() => {
    const $dropdowns = document.querySelectorAll('.dropdown');

    const handleDropdownHover = (event) => {
      const dropdown = event.currentTarget;
      const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      const showClass = 'show';

      dropdown.classList.add(showClass);
      dropdownToggle.setAttribute('aria-expanded', 'true');
      dropdownMenu.classList.add(showClass);
    };

    const handleDropdownLeave = (event) => {
      const dropdown = event.currentTarget;
      const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      const showClass = 'show';

      dropdown.classList.remove(showClass);
      dropdownToggle.setAttribute('aria-expanded', 'false');
      dropdownMenu.classList.remove(showClass);
    };

    if (window.matchMedia('(min-width: 992px)').matches) {
      $dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseenter', handleDropdownHover);
        dropdown.addEventListener('mouseleave', handleDropdownLeave);
      });
    } else {
      $dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener('mouseenter', handleDropdownHover);
        dropdown.removeEventListener('mouseleave', handleDropdownLeave);
      });
    }
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar && window.scrollY > 45) {
        navbar.classList.add('sticky-top', 'shadow-sm');
      } else if (navbar) {
        navbar.classList.remove('sticky-top', 'shadow-sm');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      $dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener('mouseenter', handleDropdownHover);
        dropdown.removeEventListener('mouseleave', handleDropdownLeave);
      });
    };
  });
  return (
    <Router>
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route  path="/price" element={<Price/>} />
        <Route  path="/feature" element={<Feature/>} />
        <Route  path="/team" element={<Team />} />
        <Route  path="/testimonial" element={<Testimonial />} />
        <Route  path="/quote" element={<Quote />} />
    </Routes>
    </Router>
  );
}

export default App;