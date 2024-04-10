import React from 'react'
import './CSS/AboutUs.css'
import about_img from "../Components/Assets/About_img.jpeg"

const AboutUs = () => {
  return (
    <div className='aboutus'>
        <h1>About Us</h1>
      <p>Welcome to SHOE HAVEN, where passion for footwear meets quality craftsmanship.</p>
      <p>At SHOE HAVEN, we believe that every step you take should be in comfort and style. Our mission is to provide our customers with the finest selection of shoes that not only look good but feel great too.</p>
      <p>Established in 2005, we've been dedicated to curating the best shoe collections from around the world. From trendy sneakers to elegant dress shoes, we have something for every occasion and every taste.</p>
      <p>Our team of expert shoemakers ensures that each pair meets our rigorous standards of quality and durability. We use only the finest materials and employ meticulous craftsmanship to create footwear that you'll love to wear.</p>
      <p>Customer satisfaction is our top priority. Whether you're shopping online or visiting our brick-and-mortar store, our friendly and knowledgeable staff are here to assist you every step of the way.</p>
      <p>Thank you for choosing Shoe Emporium for all your footwear needs. We look forward to helping you put your best foot forward!</p>
      <div className="about-img">
        <img src={about_img} alt="" />
      </div>
    </div>
  )
}

export default AboutUs