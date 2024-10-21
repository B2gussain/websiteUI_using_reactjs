import React from "react";
import Gallery_one from "../assets/gallery-1.webp";
import Gallery_two from "../assets/gallery-2.webp";
import Gallery_three from "../assets/gallery-3.webp";
import Gallery_four from "../assets/gallery-4.webp";
import Gallery_fifth from "../assets/gallery-5.webp";
import poster from "../assets/bg.webp";
import insta1 from "../assets/instagram-7.webp"
import insta2 from "../assets/instagram-8.webp"
import insta3 from "../assets/instagram-9.webp"
import insta4 from "../assets/instagram-10.webp"
import insta5 from "../assets/instagram-11.webp"
import insta6 from "../assets/instagram-12.webp"
import hand from "../assets/hand.svg"


const Gallery = () => {
  return (
    <div className="gallery">
      <div className="bgtext">
        <h1 className="bgh">Gallery</h1>
        <div className="textblock">
          <h3>Our Gallery</h3>
          <h1>
            We Have Done Lots Of Projects
            <br />
            Let'see Our Gallery
          </h1>
        </div>
      </div>
      <div className="pic_row_one">
        <img className="gallery_pic_a" src={Gallery_one} alt="" />
        <img className="gallery_pic_b" src={Gallery_two} alt="" />
        <img className="gallery_pic_c" src={Gallery_three} alt="" />
      </div>
      <div className="pic_row_two">
        <img className="gallery_pic_d" src={Gallery_four} alt="" />
        <img className="gallery_pic_e" src={Gallery_fifth} alt="" />
      </div>
      <button>READ MORE</button>
      <div className="poster">
        <img src={poster} alt="" />
      </div>
      <div className="faq_block">
        <div className="faq_text">
          {" "}
          <div className="faqbgtext">
            <h1 className="faqbgh">FAQ</h1>
            <div className="faqtextblock">
              <h3>Salon FAQ</h3>
              <h1>Haircut Salon FAQ</h1>
              <p>
                Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed
                arcu vel eros accumsan tincidunt maximus eget lectus. Nullam sed
                ipsum mauris. Nam a nisl et lacus pretium porttitor.
              </p>
            </div>
          </div>
        </div>
        <div className="faq_que">
          <div className="que">
            <h3>What should you not ask your hairdresser?</h3>
            <p>+</p>
          </div>
          <div className="que">
            <h3>What are the 5 management tips in a salon?</h3>
            <p>+</p>
          </div>
          <div className="que">
            <h3>Protect Your Business with Insurance?</h3>
            <p>+</p>
          </div>
          <div className="que">
            <h3>What should you not ask your hairdresser?</h3>
            <p>+</p>
          </div>
          <div className="que">
            <h3>How can I make my salon run smoother?</h3>
            <p>+</p>
          </div>
          <div className="que">
            <h3>Open a Business Bank Account?</h3>
            <p>+</p>
          </div>
        </div>
      </div>
      <div className="instagram_pics">
        <img src={insta1} alt="" />
        <img src={insta2} alt="" />
        <img src={insta3} alt="" />
        <img src={insta4} alt="" />
        <img src={insta5} alt="" />
        <img src={insta6} alt="" />
      </div>
      <div className="footer_top">
        <h1>Subscribe Our Newsletter</h1>
        <div className="input_block">
          <input type="email" placeholder="Email Address" />
          <button><img src={hand} alt="" /></button>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
