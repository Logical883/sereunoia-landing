import { useState, useEffect, useRef } from "react";
import "./App.css";
import logo from "./assets/sereunoia-logo.png";

// Hero carousel images
const heroImages = [
  {
    src: "https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Students thriving at university",
    caption: "Build your community"
  },
  {
    src: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Student in deep focus session",
    caption: "Master deep focus"
  },
  {
    src: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Student in wellness and calm state",
    caption: "Find your balance"
  },
  {
    src: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Sunrise yoga and meditation session",
    caption: "Restore your energy"
  },
  {
    src: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Group study session",
    caption: "Study smarter together"
  },
];

// Resource modal data
const resourceArticles = [
  {
    id: 1,
    title: "5 Ways to Stay Focused During Exam Week",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=900",
    readTime: "5 min read",
    category: "Productivity",
    content: [
      {
        heading: "1. Use the Pomodoro Technique",
        body: "The Pomodoro Technique is one of the most researched and proven methods for maintaining focus during intense study periods. The idea is simple: work for 25 minutes with complete, undivided attention, then take a 5-minute break. After four cycles, take a longer 20–30 minute break. This rhythm prevents mental fatigue and trains your brain to associate sitting down with doing deep work. During exam week, aim for 8–10 Pomodoros per day, and use the Sereunoia app to track your sessions and earn rewards for consistency."
      },
      {
        heading: "2. Prioritize Sleep — Non-Negotiable",
        body: "It might feel heroic to pull all-nighters during exam week, but the science is clear: sleep deprivation reduces cognitive performance by up to 40%. Memory consolidation — the process by which your brain turns short-term studying into long-term knowledge — happens almost entirely during REM sleep. Aim for 7–8 hours every night. If you must study late, set a hard stop time and stick to it. A well-rested brain on exam day will outperform a sleep-deprived one every single time."
      },
      {
        heading: "3. Eliminate Digital Distractions",
        body: "Social media, messaging apps, and YouTube are designed by the world's best engineers to hijack your attention. During exam week, fight back deliberately. Use website blockers like Cold Turkey or Freedom, put your phone in another room, or use the Sereunoia focus mode to lock into a distraction-free session. Research from the University of California Irvine found that it takes an average of 23 minutes to fully regain focus after an interruption. Every notification is costing you nearly half an hour of deep work."
      },
      {
        heading: "4. Create a Stress-Busting Ritual",
        body: "Chronic stress elevates cortisol levels, which actively impairs memory formation and recall — the exact opposite of what you need during exams. Build short stress-relief rituals into your study schedule. Even 10 minutes of mindful breathing, a brisk walk outside, or a light stretch between sessions can dramatically reduce anxiety and restore mental clarity. The Sereunoia app features guided 10-minute reset meditations specifically designed for students in high-pressure periods. Use them."
      },
      {
        heading: "5. Study Smart with Active Recall",
        body: "Re-reading notes is the least effective study method. Active recall — testing yourself repeatedly on material — is proven to be significantly more effective for long-term retention. Use flashcards (physical or digital), practice past papers under timed conditions, and explain concepts out loud as if teaching someone else. This technique, combined with spaced repetition (reviewing material at increasing intervals), is how top students consistently outperform their peers during exams — not by studying more hours, but by studying smarter."
      }
    ]
  },
  {
    id: 2,
    title: "10-Minute Reset Meditation",
    image: "https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg?auto=compress&cs=tinysrgb&w=900",
    readTime: "10 min guided session",
    category: "Wellness",
    content: [
      {
        heading: "Before You Begin",
        body: "Find a quiet space where you won't be interrupted for the next 10 minutes. You can sit on a chair with your feet flat on the floor, or cross-legged on the ground. Rest your hands on your knees, palms facing upward as a gesture of openness. Close your eyes gently, not forcefully. There's no right or wrong way to feel right now — just let yourself arrive here, in this moment, exactly as you are."
      },
      {
        heading: "Minutes 1–2: Breath Awareness",
        body: "Begin by simply noticing your natural breath. Don't try to change it — just observe. Feel the cool air entering your nostrils, the slight expansion of your chest and belly, and the warmth of the air as you exhale. If thoughts arise (and they will), gently acknowledge them without judgment and return your attention to the breath. Think of your thoughts as clouds passing through a vast open sky. You are the sky, not the clouds."
      },
      {
        heading: "Minutes 3–5: Body Scan Release",
        body: "Slowly bring your attention to different parts of your body, starting from the top of your head and moving downward. As you reach each area — forehead, jaw, shoulders, chest, stomach, hands — consciously release any tension you find there. The jaw and shoulders are where students hold the most stress. Unclench your teeth. Let your shoulders drop away from your ears. Allow your hands to soften and open. With each exhale, imagine tension dissolving like mist in warm sunlight."
      },
      {
        heading: "Minutes 6–8: Visualization",
        body: "Picture yourself in a place where you feel completely safe and at peace. It might be a beach at sunrise, a quiet forest path, a childhood bedroom, or a rooftop overlooking your city. Engage all five senses in this place. What do you see? What do you hear? What does the air smell like? What does the ground feel like beneath you? This visualization activates the parasympathetic nervous system — your body's natural rest and recovery mode — reducing cortisol and restoring mental clarity."
      },
      {
        heading: "Minutes 9–10: Intention Setting",
        body: "As you prepare to return to your day, set a single, clear intention. Not a to-do list — just one quality you want to bring to your next few hours. It might be focus, patience, curiosity, or calm. Hold this intention in your mind for a moment. Then slowly wiggle your fingers and toes, deepen your breath, and gently open your eyes. You've just given your mind and body a genuine reset. Carry this calm with you into whatever comes next."
      }
    ]
  },
  {
    id: 3,
    title: "The Ultimate Semester Planner",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=900",
    readTime: "7 min read",
    category: "Planning",
    content: [
      {
        heading: "Why Most Student Planners Fail",
        body: "The problem with most semester planners isn't the planner — it's the approach. Students map out assignments and exams, but fail to account for self-care, social commitments, recovery time, and the inevitable unexpected crises. A truly effective semester planner doesn't just track deadlines; it maps your entire life across the semester in a way that's realistic, flexible, and sustainable. This guide walks you through building one that actually works."
      },
      {
        heading: "Step 1: The Master Timeline (Week 1)",
        body: "In the first week of semester, take 60 minutes to map out the entire term on a single page. Mark every exam, assignment deadline, project submission, and important event. Color-code by course. Then — and this is the crucial step most students skip — identify the three or four weeks that look most intense, and plan lighter social and extracurricular commitments during those periods. You can't predict everything, but you can build in buffer. Also mark personal commitments: family events, birthdays, trips. Your life doesn't pause for your degree."
      },
      {
        heading: "Step 2: Weekly Planning Rituals",
        body: "Every Sunday evening, spend 20 minutes planning the week ahead. Review your master timeline. Identify this week's top three priorities across all your courses. Then schedule specific study blocks for each task — not just 'study for finance' but 'complete chapters 5–7 notes for finance, Tuesday 2–4pm.' Specificity is everything. A vague intention is just a wish. A scheduled block with a defined output is a commitment. Use the Sereunoia weekly planner template to structure this ritual."
      },
      {
        heading: "Step 3: Daily Structure That Protects Your Energy",
        body: "Your daily schedule should protect your energy, not just fill your time. Schedule your most cognitively demanding work during your peak energy hours — for most people, this is mid-morning. Reserve administrative tasks (emails, scheduling, light reading) for low-energy afternoon slots. And build in hard stops: a time after which you close the books, eat dinner, and recover. Sustainable studying is a marathon strategy, not a sprint. Students who protect their evenings consistently outperform those who study until midnight every night."
      },
      {
        heading: "Step 4: The Self-Care Tracker",
        body: "Include a weekly self-care tracker alongside your academic planner. Track sleep hours, exercise sessions, social time, and mood on a simple 1–5 scale. This data reveals patterns: the weeks your mood drops are often the weeks you sacrificed sleep for extra study hours. When you see these correlations, you make smarter tradeoffs. Self-care isn't a reward for finishing work — it's the fuel that makes the work possible. Schedule it first, and protect it like your most important deadline."
      },
      {
        heading: "Download & Use the Sereunoia Semester Planner",
        body: "The Sereunoia Semester Planner PDF includes a master timeline template, weekly planning pages, daily schedule blocks, self-care trackers, and an end-of-semester reflection guide. It's designed specifically for university students balancing academics, wellness, and social life. Print it out, stick it on your wall, and use it every single week. Students who plan consistently don't just perform better academically — they report significantly lower stress levels and higher overall satisfaction with their university experience."
      }
    ]
  }
];

function ResourceModal({ article, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal-image-wrap">
          <img src={article.image} alt={article.title} className="modal-hero-img" />
          <div className="modal-image-overlay">
            <span className="modal-category">{article.category}</span>
            <span className="modal-readtime">⏱ {article.readTime}</span>
          </div>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{article.title}</h2>
          <div className="modal-divider" />
          {article.content.map((section, idx) => (
            <div key={idx} className="modal-section">
              <h3 className="modal-section-heading">{section.heading}</h3>
              <p className="modal-section-body">{section.body}</p>
            </div>
          ))}
          <div className="modal-footer-cta">
            <p>Want tools that make this easier?</p>
            <button className="modal-cta-btn">Download the App →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselTimer = useRef(null);

  // Auto-rotate carousel every 5 seconds
  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 400);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % heroImages.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + heroImages.length) % heroImages.length;
    goToSlide(prev);
  };

  const resetTimer = () => {
    if (carouselTimer.current) clearInterval(carouselTimer.current);
    carouselTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  useEffect(() => {
    carouselTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(carouselTimer.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "features", "app", "events", "resources", "join"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Modal */}
      {activeArticle && (
        <ResourceModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}

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

          {/* Hero Carousel */}
          <div className="hero-image fade-in-up delay-1">
            <div className="carousel-wrapper">

              {/* Images */}
              <div className="carousel-track">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${
                      index === currentSlide ? "active" : ""
                    } ${isTransitioning ? "transitioning" : ""}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="carousel-image"
                    />
                    <div className="carousel-caption-overlay">
                      <span className="carousel-caption">{image.caption}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Focus card always on top */}
              <div className="focus-card">
                <div className="card-icon">📍</div>
                <div>
                  <p className="card-title">Deep Focus Session</p>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>

              {/* Prev / Next arrows */}
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={() => { prevSlide(); resetTimer(); }}
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={() => { nextSlide(); resetTimer(); }}
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="carousel-dots">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => { goToSlide(index); resetTimer(); }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Progress bar timer */}
              <div className="carousel-progress">
                <div
                  className="carousel-progress-fill"
                  key={currentSlide}
                />
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
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2"/>
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
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
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
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2"/>
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
                <img
                  src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Student using focus app"
                  className="phone-img"
                />
              </div>
            </div>
            <div className="phone phone-2">
              <div className="phone-screen">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Wellness and productivity dashboard"
                  className="phone-img"
                />
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
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://sereunoia.app&color=0a192f&bgcolor=ffffff&margin=4&format=png"
                  alt="Scan to download Sereunoia"
                  className="qr-image"
                />
                <small>Scan to download</small>
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
            <p>Experience in-person or online wellness and productivity events.</p>
            <button className="view-all-btn">View All Events →</button>
          </div>

          <div className="events-grid">
            <div
              className="event-card fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="event-badge">Nov 22</div>
              <div className="event-image">
                <img
                  src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sunrise Yoga and Meditation"
                />
              </div>
              <h3>Sunrise Yoga & Meditation</h3>
              <p className="event-location">
                📍 Location: <span>TBD</span>
              </p>
              <p className="event-description">
                Start your day with calm, body-centric movement and guided
                mindfulness.
              </p>
              <button className="event-btn">Book Now</button>
            </div>

            <div
              className="event-card fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="event-badge green">Nov 29</div>
              <div className="event-image">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Midterm Focus Marathon"
                />
              </div>
              <h3>Midterm Focus Marathon</h3>
              <p className="event-location">
                📍 Location: <span>TBD</span>
              </p>
              <p className="event-description">
                Co-work group study session with live tutor support and focus
                tools.
              </p>
              <button className="event-btn">Book Now</button>
            </div>

            <div
              className="event-card fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="event-badge dark">Dec 10</div>
              <div className="event-image">
                <img
                  src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Master Your Schedule Workshop"
                />
              </div>
              <h3>Master Your Schedule</h3>
              <p className="event-location">
                📍 Location: <span>TBD</span>
              </p>
              <p className="event-description">
                Crush your day with high-efficiency tools and scheduling
                strategies.
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
            {resourceArticles.map((article, idx) => (
              <div
                key={article.id}
                className="resource-card fade-in-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="resource-card-thumb">
                  <img src={article.image} alt={article.title} />
                  <span className="resource-card-category">
                    {article.category}
                  </span>
                </div>
                <div className="resource-card-body">
                  <h3>{article.title}</h3>
                  <p>{article.content[0].body.slice(0, 110)}…</p>
                  <button
                    className="resource-link"
                    onClick={() => setActiveArticle(article)}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
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
            Real stories from students who transformed their university
            experience with Sereunoia
          </p>

          <div className="testimonials-grid">
            {[
              {
                initials: "AK",
                name: "Akua Mensah",
                role: "Computer Science, KNUST",
                gradient: "blue-gradient",
                text: "Sereunoia helped me balance my course load and mental health. The focus sessions are a game-changer, and the yoga events actually helped me sleep better during finals week!",
              },
              {
                initials: "KO",
                name: "Kwame Osei",
                role: "Business Administration, UG",
                gradient: "purple-gradient",
                text: "I was always distracted by my phone during study sessions. The buddy accountability feature keeps me on track, and I've improved my GPA this semester!",
              },
              {
                initials: "EA",
                name: "Esi Addo",
                role: "Psychology, Ashesi University",
                gradient: "green-gradient",
                text: "The events are so well-organized and fun! I've made friends, learned productivity hacks, and actually feel like I'm thriving instead of just surviving uni.",
              },
              {
                initials: "FK",
                name: "Fiifi Koomson",
                role: "Mechanical Engineering, KNUST",
                gradient: "pink-gradient",
                text: "As an engineering student with a packed schedule, Sereunoia's meditation sessions help me reset between classes. The rewards system makes self-care feel like an achievement!",
              },
              {
                initials: "AA",
                name: "Ama Asante",
                role: "Law, University of Ghana",
                gradient: "teal-gradient",
                text: "Privacy was my biggest concern with wellness apps, but Sereunoia actually respects my data. Plus, the community events feel authentic and supportive, not corporate.",
              },
              {
                initials: "KA",
                name: "Kofi Annan",
                role: "Medicine, UCC",
                gradient: "orange-gradient",
                text: "The semester planner and resources are incredibly helpful. I used to feel overwhelmed, but now I have a system that works. Sereunoia gets the student struggle!",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="testimonial-card fade-in-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className={`author-avatar ${t.gradient}`}>
                    {t.initials}
                  </div>
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
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