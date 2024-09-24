import React from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../../assets/image/image1.png";
import image1 from "../../assets/image/image2.png";
import image2 from "../../assets/image/image3.png";
import image3 from "../../assets/image/image4.png";
import image4 from "../../assets/image/image5.png";
function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Login");
  };
  return (
    <div className="food-chain">
      <div className="navbar">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="30"
            height="30"
            class="bi bi-balloon-heart"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"
            />
          </svg>
          <h3>Zen Food Chain</h3>
        </div>
        <div className="navbar-list">
          {/* <h3 onClick={() => navigate("/")}>Home</h3> */}
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Product</h3>
          <h3>Services</h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={image} alt="Food Chain" />
        </div>
        <div className="heading">
          <h1>
            PROVIDING <br />
            TOP-NOTCH AND INNOVATIVE MEDICAL CARE
          </h1>
          <button type="button" onClick={handleClick}>
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="content-1">
        <div className="heading-1">
          <h1>A health center that truly listens</h1>
        </div>
        <div className="para">
          <p>
            This page should focus on your brand's background. What's your
            unique story? Why should prospective clients choose to sign up with
            you? This is your chance to build a relationship with them, starting
            with your backstory, vision, or philosophy. You can even share your
            brand's beginnings if you feel that it's relatable to your clients.
            Just remember to be approachable, friendly, and welcoming.
            <br /> <br />
            Once you're done, seal the deal with a compelling closing line that
            gets them to take action.
          </p>
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item">
          <img src={image1} alt="Special juice" />
          <h3>Special juice</h3>
          <p>Indulge in our delectable desserts made with fresh ingredients.</p>
          <button>Order Now</button>
        </div>
        <div class="menu-item">
          <img src={image2} alt="Preventive Medicine" />
          <h3> Preventive Medicine</h3>
          <p>Indulge in our delectable desserts made with fresh ingredients.</p>
          <button>Order Now</button>
        </div>
        <div class="menu-item">
          <img src={image3} alt="Wellness Programs" />
          <h3>Wellness Programs</h3>
          <p>Indulge in our delectable desserts made with fresh ingredients.</p>
          <button>Order Now</button>
        </div>
      </div>
      <div className="container">
        <div className="content-2">
          <h1>OUR MAIN SERVICES</h1>
          <div className="heading-2">
            <div className="para-2">
              <p>
                A brief and compelling description of your company's mission,
                vision, and values.
              </p>
              <button>Learn More</button>
            </div>
            <div className="image-2">
              <img src={image4} alt="pic" />
            </div>
          </div>
        </div>
        <div className="content-3">
          <h1>OUR STORY</h1>
          <div className="heading-3">
            <div className="image-3">
              <img src={image} alt="pic" />
            </div>
            <div className="para-3">
              <p>
                Share a compelling narrative about your company's journey, its
                founding story, and key milestones. Highlight the passion and
                dedication that led to the creation of Foodie, and how it has
                grown over the years.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="content-4">
        <h1>Why Choose Us?</h1>
        <p>
          Foodied is your go-to destination for delicious and convenient food
          delivery. We offer a wide selection of dishes, fast delivery, and
          excellent customer service.
        </p>
        <h1> Reviews from Our Patients</h1>
        <div className="menu-2">
          <div className="menu-item-2">
            <h3> Serve Healthy Food</h3>
            <p>
              We prioritize using fresh and high-quality ingredients to prepare
              healthy and delicious meals.
            </p>
          </div>
          <div className="menu-item-2">
            <h3> Best Quality</h3>
            <p>
              We prioritize using fresh and high-quality ingredients to prepare
              healthy and delicious meals.
            </p>
          </div>
          <div className="menu-item-2">
            <h3> Fast Delivery</h3>
            <p>
              We prioritize using fresh and high-quality ingredients to prepare
              healthy and delicious meals.
            </p>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h2>Our Schedule</h2>
            <p>Monday to Saturday</p>
            <p>8:00 am to 8:00 pm</p>
            <br />
            <p>Sundays</p>
            <p>12:00 noon to 8:00 pm</p>
          </div>
          <div class="footer-section">
            <h2>Our Food Your Way</h2>
            <p>All our branches are wheelchair-accessible</p>
          </div>
          <div class="footer-section">
            <p>123 Anywhere St.</p>
            <p>Any City, ST 12345</p>
            <br />
            <p>Call: +123-456-7980</p>
            <p>Email: hello@reallygreatsite.com</p>
            <br />
            <p>All our branches are wheelchair-accessible</p>
          </div>
        </div>
        <div class="footer-socials">
          <h2>Socials</h2>
          <div class="social-icons">
            <a href="">
              {/* <img src="facebook-icon.png" alt="Facebook" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                color="white"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                color="white"
                class="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                color="white"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Zen Food Chain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
