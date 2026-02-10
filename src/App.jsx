import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/sereunoia-logo.png";
// import Students from "./assets/Students.jpg";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "features",
        "app",
        "events",
        "resources",
        "join",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="Sereunoia Logo" className="logo-image" />
            <span>Sereunoia</span>
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <button
                className={activeSection === "home" ? "active" : ""}
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeSection === "features" ? "active" : ""}
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
            </li>
            <li>
              <button
                className={activeSection === "events" ? "active" : ""}
                onClick={() => scrollToSection("events")}
              >
                Events
              </button>
            </li>
            <li>
              <button
                className={activeSection === "resources" ? "active" : ""}
                onClick={() => scrollToSection("resources")}
              >
                Resources
              </button>
            </li>
            <li>
              <button
                className="nav-cta"
                onClick={() => scrollToSection("join")}
              >
                Join Sereunoia
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Focus better.
              <br />
              Feel better.
              <br />
              <span className="gradient-text">
                Thrive in
                <br />
                university.
              </span>
            </h1>
            <p className="hero-tagline">Reward Your Habits</p>
            <p className="hero-description">
              Sereunoia combines a mobile app with curated events to help
              <br />
              students build balance, reduce distractions, and build healthy,
              focus habits.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get App Now</button>
            </div>
          </div>
          <div className="hero-image fade-in-up delay-1">
            <div className="image-placeholder">
              {/* Replace this URL with your actual image URL */}
              {/* <img
                src={Students}
                alt="African students studying"
                className="hero-background-image"
              /> */}
              <img
                src="https://images.pexels.com/photos/6146973/pexels-photo-6146973.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying together"
                className="hero-background-image"
              />
              <div className="focus-card">
                <div className="card-icon">📍</div>
                <div>
                  <p className="card-title">Deep Focus Session</p>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="features-container">
          <p className="section-label">THE PROBLEM</p>
          <h2 className="section-title">
            University life is exciting—but exhausting.
          </h2>
          <p className="section-description">
            Juggling classes, social life, self/tuition, and deadlines is
            overwhelming. Most wellness
            <br />
            apps feel too generic, clinical, or disconnected from real student
            life.
          </p>
          <p className="features-subtitle">
            <strong>Sereunoia was built for students, by students—</strong>to
            make focus, wellness, and productivity
            <br />
            simple, social, and fun.
          </p>

          <div className="features-grid">
            <div
              className="feature-card fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="feature-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Timed Focus Sessions</h3>
              <p>
                Start solo or group sessions to lock into work or study, then
                track your focus during each session.
              </p>
            </div>

            <div
              className="feature-card fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="feature-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M23 21v-2a4 4 0 0 0-3-3.87"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 3.13a4 4 0 0 1 0 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Buddy Accountability</h3>
              <p>
                Pair up with friends to keep each other on track and motivated.
              </p>
            </div>

            <div
              className="feature-card fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="feature-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="22 4 12 14.01 9 11.01"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Gamified Rewards</h3>
              <p>
                Earn badges, climb leaderboards, and redeem real rewards when
                you hit your goals.
              </p>
            </div>

            <div
              className="feature-card fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="feature-icon pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Curated Events</h3>
              <p>
                Join live yoga, meditation, workshops and wellness
                activities—online and IRL.
              </p>
            </div>

            <div
              className="feature-card fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="feature-icon teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Privacy First</h3>
              <p>
                Your data belongs to you alone. Your data stays private. Your
                data won't be sold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="app-section">
        <div className="app-container">
          <div className="app-phones fade-in-left">
            <div className="phone phone-1">
              <div className="phone-screen">
                <div className="phone-content"></div>
              </div>
            </div>
            <div className="phone phone-2">
              <div className="phone-screen">
                <div className="phone-content dark"></div>
              </div>
            </div>
          </div>
          <div className="app-content fade-in-right">
            <h2 className="app-title">Focus. Connect. Thrive.</h2>
            <p className="app-description">
              The Sereunoia app keeps you focused, awards your habits, and
              <br />
              connects you with friends and campus events—it's your pocket-sized
              <br />
              tool for a balanced, energetic life.
            </p>
            <div className="app-buttons">
              <button className="app-store-btn">
                <span className="btn-icon">📱</span>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </button>
              <div className="qr-code">
                <div className="qr-grid">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <small>Scan QR code</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="testimonial-container">
          <blockquote className="fade-in-up">
            "Sereunoia isn't just digital tools. We host intentional,
            <br />
            premium wellness and productivity experiences you
            <br />
            won't find anywhere else on campus."
          </blockquote>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events">
        <div className="events-container">
          <div className="events-header">
            <h2>Join Our Events</h2>
            <p>
              Experience in-person or online wellness and productivity events.
            </p>
            <button className="view-all-btn">View All Events →</button>
          </div>

          <div className="events-grid">
            <div
              className="event-card fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="event-badge">Nov 22</div>
              <div className="event-image event-yoga"></div>
              <h3>Sunrise Yoga & Meditation</h3>
              <p className="event-location">
                📍 Location: <span>TBD</span>
              </p>
              <p className="event-description">
                Start your day with calm, body-centric
              </p>
              <button className="event-btn">Book Now</button>
            </div>

            <div
              className="event-card fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="event-badge green">Nov 29</div>
              <div className="event-image event-marathon"></div>
              <h3>Midterm Focus Marathon</h3>
              <p className="event-location">
                📍 Location: <span>TBD</span>
              </p>
              <p className="event-description">
                Co-work group study session with live tutor.
              </p>
              <button className="event-btn">Book Now</button>
            </div>

            <div
              className="event-card fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="event-badge dark">Dec 10</div>
              <div className="event-image event-schedule"></div>
              <h3>Master Your Schedule</h3>
              <p className="event-location">
                📍 Location: <span>TBD</span>
              </p>
              <p className="event-description">
                Crush your day with high-efficiency tools and scheduling.
              </p>
              <button className="event-btn light">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="resources">
        <div className="resources-container">
          <h2>Learn. Grow. Thrive</h2>
          <p className="resources-subtitle">
            Short, actionable wellness and productivity tips for busy students.
          </p>

          <div className="resources-grid">
            <div
              className="resource-card fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3>5 Ways to Stay Focused During Exam Week</h3>
              <p>
                Master time management, sleep importance and stress-busting
                techniques.
              </p>
              <a href="#" className="resource-link">
                Read More →
              </a>
            </div>

            <div
              className="resource-card fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3>10-Minute Reset Meditation</h3>
              <p>A short guided session to clear your mind between classes.</p>
              <a href="#" className="resource-link">
                Read More →
              </a>
            </div>

            <div
              className="resource-card fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3>The Ultimate Semester Planner</h3>
              <p>
                A printable PDF mapped to track deadlines, exams, and self-care
                routines.
              </p>
              <a href="#" className="resource-link">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="join">
        <div className="join-container">
          <h2 className="fade-in-up">Be Part of the First Wave</h2>
          <p className="fade-in-up delay-1">
            Ask questions on how to sign up today to access or use the App,
            attend exclusive in-person events, and earn exclusive rewards.
          </p>

          <form className="join-form fade-in-up delay-2">
            <input type="text" placeholder="Logical Legend" required />
            <input type="email" placeholder="logical@gmail.com" required />
            <input type="text" placeholder="KNUST" required />
            <input type="text" placeholder="Your pronouns" />
            <button type="submit" className="submit-btn">
              Contact Us
            </button>
            <p className="form-note">We will never spam you</p>
          </form>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="client-testimonials">
        <div className="testimonials-container">
          <h2 className="fade-in-up">What Students Are Saying</h2>
          <p className="testimonials-subtitle fade-in-up delay-1">
            Real stories from students who transformed their university experience with Sereunoia
          </p>

          <div className="testimonials-grid">
            <div
              className="testimonial-card fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Sereunoia helped me balance my course load and mental health. The focus sessions are a game-changer, and the yoga events actually helped me sleep better during finals week!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar blue-gradient">AK</div>
                <div className="author-info">
                  <h4>Akua Mensah</h4>
                  <p>Computer Science, KNUST</p>
                </div>
              </div>
            </div>

            <div
              className="testimonial-card fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "I was always distracted by my phone during study sessions. The buddy accountability feature keeps me on track, and I've improved my GPA this semester!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar purple-gradient">KO</div>
                <div className="author-info">
                  <h4>Kwame Osei</h4>
                  <p>Business Administration, UG</p>
                </div>
              </div>
            </div>

            <div
              className="testimonial-card fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "The events are so well-organized and fun! I've made friends, learned productivity hacks, and actually feel like I'm thriving instead of just surviving uni."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar green-gradient">EA</div>
                <div className="author-info">
                  <h4>Esi Addo</h4>
                  <p>Psychology, Ashesi University</p>
                </div>
              </div>
            </div>

            <div
              className="testimonial-card fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "As an engineering student with a packed schedule, Sereunoia's meditation sessions help me reset between classes. The rewards system makes self-care feel like an achievement!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar pink-gradient">FK</div>
                <div className="author-info">
                  <h4>Fiifi Koomson</h4>
                  <p>Mechanical Engineering, KNUST</p>
                </div>
              </div>
            </div>

            <div
              className="testimonial-card fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Privacy was my biggest concern with wellness apps, but Sereunoia actually respects my data. Plus, the community events feel authentic and supportive, not corporate."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar teal-gradient">AA</div>
                <div className="author-info">
                  <h4>Ama Asante</h4>
                  <p>Law, University of Ghana</p>
                </div>
              </div>
            </div>

            <div
              className="testimonial-card fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "The semester planner and resources are incredibly helpful. I used to feel overwhelmed, but now I have a system that works. Sereunoia gets the student struggle!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar orange-gradient">KA</div>
                <div className="author-info">
                  <h4>Kofi Annan</h4>
                  <p>Medicine, UCC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="Sereunoia Logo" className="logo-image" />
              <span>Sereunoia</span>
            </div>
            <p>
              Wellness and productivity tools and
              <br />
              events for ambitious students.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">support@sereunoia.com</a>
                </li>
              </ul>
              <div className="social-links">
                <a href="#" aria-label="Twitter">
                  𝕏
                </a>
                <a href="#" aria-label="Facebook">
                  f
                </a>
                <a href="#" aria-label="Instagram">
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;