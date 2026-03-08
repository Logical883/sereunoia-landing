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

// ===== FOOTER MODAL DATA =====
const footerModalData = {
  "about": {
    title: "About Us",
    icon: "🌱",
    content: [
      {
        heading: "Who We Are",
        body: "Sereunoia is a student wellness and productivity platform built by university students who understand the real pressures of academic life. We were tired of wellness apps that felt clinical, generic, and completely disconnected from what it actually means to be a student. So we built something better — something that fits into the rhythm of campus life, speaks the language of students, and actually makes a difference."
      },
      {
        heading: "Our Mission",
        body: "Our mission is simple: to help every university student in Africa and beyond thrive — not just academically, but holistically. We believe that focus, wellness, and community are not separate goals. They are the same goal. When you feel good, you study better. When you study better, you feel good. Sereunoia is the bridge between the two."
      },
      {
        heading: "What We Do",
        body: "We combine a powerful mobile app with curated in-person and online events to create a complete student wellness ecosystem. The app helps you build focus habits, track your productivity, stay accountable with friends, and earn real rewards. The events — from sunrise yoga to exam focus marathons — give you the human connection and community that no app alone can provide."
      },
      {
        heading: "Our Story",
        body: "Sereunoia was founded at KNUST (Kwame Nkrumah University of Science and Technology) in Ghana, born out of late-night study sessions, burnout, and a shared belief that students deserve better tools. Our founding team experienced firsthand how overwhelming university life can be — and how transformative it is when you find the right habits, the right community, and the right support system. We built Sereunoia to be that support system for every student."
      },
      {
        heading: "Our Values",
        body: "We are guided by five core values: Student-First Design — every decision we make starts with the student experience. Radical Privacy — your data is yours, full stop. Authentic Community — we build real human connections, not follower counts. Evidence-Based Wellness — everything we recommend is grounded in research. And Joyful Productivity — because thriving should feel good, not like another assignment."
      }
    ]
  },
  "blog": {
    title: "Blog",
    icon: "✍️",
    content: [
      {
        heading: "Welcome to the Sereunoia Blog",
        body: "The Sereunoia Blog is your go-to resource for practical, research-backed insights on student wellness, productivity, focus, and university life. We write for real students — busy, ambitious, sometimes overwhelmed, and always looking for smarter ways to thrive. No fluff, no filler. Just actionable content you can use today."
      },
      {
        heading: "What We Write About",
        body: "Our blog covers five core themes: Focus & Productivity (Pomodoro techniques, deep work strategies, exam preparation methods), Mental Wellness (stress management, sleep optimization, mindfulness for students), Social & Community (building accountability networks, navigating university relationships, finding your tribe), Career & Growth (balancing academics with personal development, building skills alongside your degree), and Campus Life (event recaps, student stories, Sereunoia community highlights)."
      },
      {
        heading: "Featured Articles",
        body: "Some of our most-read pieces include: '5 Ways to Stay Focused During Exam Week', 'The Science of Sleep and Academic Performance', 'How to Build an Accountability System That Actually Works', 'Why Your Study Environment Matters More Than You Think', and 'The Ultimate Semester Planner Guide'. New articles are published every week, written by our team and guest contributors from the student community."
      },
      {
        heading: "Contribute to the Blog",
        body: "Are you a student with a story to tell, a productivity hack that changed your life, or a wellness insight you want to share? We welcome guest contributors from across the university community. If you have something valuable to say to your fellow students, we want to help you say it. Reach out to us at blog@sereunoia.com with your pitch and we'll get back to you within 5 business days."
      }
    ]
  },
  "events": {
    title: "Events",
    icon: "🎯",
    content: [
      {
        heading: "Sereunoia Events — Designed for Student Life",
        body: "Sereunoia events are premium, intentional experiences designed specifically for university students. We don't do generic wellness workshops. Every event we curate is built around the real rhythms, pressures, and needs of student life — from sunrise yoga sessions before early lectures, to focused group study marathons during midterm season, to end-of-semester celebration and recovery experiences."
      },
      {
        heading: "Types of Events We Host",
        body: "Our events fall into four categories: Wellness Events (yoga, meditation, breathwork, and movement sessions designed to reduce stress and restore energy), Productivity Events (focus marathons, study sessions with live tutor support, and planning workshops), Learning Events (skill-building workshops, career development sessions, and mindset talks by inspiring speakers), and Community Events (social mixers, accountability group meetups, and Sereunoia community celebrations)."
      },
      {
        heading: "In-Person & Online",
        body: "We host both in-person events on and around university campuses and fully virtual events accessible to students anywhere. Our in-person events are held at carefully selected venues — spaces that feel premium, calm, and intentional. Our virtual events are hosted on platforms that make participation easy and interactive. Wherever you are, there's a Sereunoia event for you."
      },
      {
        heading: "How to Book",
        body: "Booking a Sereunoia event is simple. Browse upcoming events on our platform, select the one you want, and secure your spot with a single tap. Some events are free for Sereunoia app members; others are ticketed. Early bird spots are always available for members who book through the app. Download the Sereunoia app to get notified first when new events drop."
      },
      {
        heading: "Host an Event With Us",
        body: "Are you a student organization, campus wellness center, or brand that wants to co-host a Sereunoia event? We're open to partnerships with organizations whose values align with ours. If you want to bring a Sereunoia wellness or productivity experience to your campus, reach out to us at events@sereunoia.com and let's build something together."
      }
    ]
  },
  "features": {
    title: "Features",
    icon: "⚡",
    content: [
      {
        heading: "Timed Focus Sessions",
        body: "Start a focused work or study session with a single tap. Choose your session length, pick your environment sound (lo-fi beats, white noise, or silence), and lock in. The app tracks your focus time, flags interruptions, and builds a history of your productivity over time. You can run solo sessions or invite friends to join a shared focus room — studying together, even remotely."
      },
      {
        heading: "Buddy Accountability System",
        body: "Pair up with a study buddy or accountability partner inside the app. Set shared goals, check in on each other's progress, and send motivational nudges when your partner needs a push. Research consistently shows that social accountability is one of the most powerful drivers of habit formation. Sereunoia makes it effortless to build and maintain these partnerships."
      },
      {
        heading: "Gamified Rewards Engine",
        body: "Every focus session you complete, every wellness habit you log, and every event you attend earns you Sereunoia points. Points unlock badges, level up your profile, and can be redeemed for real rewards — including discounts at partner brands, free event tickets, and exclusive Sereunoia merchandise. We made self-improvement feel like a game because games are fun, and fun habits stick."
      },
      {
        heading: "Curated Event Access",
        body: "The app is your gateway to all Sereunoia events. Browse upcoming events, get personalized recommendations based on your goals and interests, book your spot, and receive reminders so you never miss an experience. App members get priority access and early-bird pricing on all ticketed events — a benefit that pays for itself with a single booking."
      },
      {
        heading: "Wellness Check-Ins",
        body: "A daily 60-second wellness check-in helps you track your mood, energy levels, sleep quality, and stress. Over time, the app surfaces patterns in your data — showing you which habits correlate with your best days and which behaviors are quietly draining your energy. Knowledge is the first step to change, and Sereunoia gives you that knowledge about yourself."
      },
      {
        heading: "Privacy-First Architecture",
        body: "Unlike most wellness apps, Sereunoia is built on a privacy-first foundation. We collect only the data necessary to provide your experience. We do not sell your data to third parties. We do not use your personal information for advertising. Your wellness data is encrypted and accessible only to you. Privacy is not a feature at Sereunoia — it is a core principle."
      }
    ]
  },
  "faq": {
    title: "Frequently Asked Questions",
    icon: "❓",
    content: [
      {
        heading: "What is Sereunoia?",
        body: "Sereunoia is a wellness and productivity platform built specifically for university students. It combines a mobile app with curated in-person and online events to help students build focus habits, manage stress, stay accountable, and earn rewards for healthy behaviors. Think of it as your all-in-one student thriving toolkit."
      },
      {
        heading: "Is Sereunoia free to use?",
        body: "Sereunoia offers a free tier with access to core features including timed focus sessions, basic wellness check-ins, and community access. Premium features — including the full rewards engine, advanced analytics, buddy accountability tools, and event discounts — are available through a Sereunoia membership. Pricing is designed to be accessible for students. Check the app for current plans and student pricing."
      },
      {
        heading: "Which universities is Sereunoia available at?",
        body: "Sereunoia is currently available to students at all major universities across Ghana, including KNUST, University of Ghana, Ashesi University, and University of Cape Coast. We are actively expanding to other institutions across West Africa and beyond. If you want Sereunoia at your university, reach out to us at campuses@sereunoia.com and we'll prioritize your institution."
      },
      {
        heading: "How do I earn rewards?",
        body: "You earn Sereunoia points by completing focus sessions, logging daily wellness check-ins, attending events, hitting streak milestones, and referring friends to the platform. Points accumulate in your account and can be redeemed directly through the app for badges, event tickets, partner discounts, and merchandise. The more consistently you show up for yourself, the more you earn."
      },
      {
        heading: "Is my data safe with Sereunoia?",
        body: "Absolutely. Privacy is one of our core values, not an afterthought. We collect only the minimum data needed to provide your experience. We never sell your personal data or wellness information to third parties. All sensitive data is encrypted. You can request a full export or deletion of your data at any time through the app settings. For full details, please read our Privacy Policy."
      },
      {
        heading: "How do I join a Sereunoia event?",
        body: "Download the Sereunoia app, create your account, and navigate to the Events section. You'll see all upcoming events filtered by date, type, and location. Select the event you want, book your spot (free or ticketed depending on the event), and you'll receive a confirmation and reminder. App members always get priority access to event spots before they open to the general public."
      },
      {
        heading: "Can I use Sereunoia without attending events?",
        body: "Yes, absolutely. The app is a fully standalone productivity and wellness tool. Events are an optional but highly recommended addition to your Sereunoia experience. Many of our most active users attend events regularly, but the app delivers tremendous value on its own through focus sessions, wellness tracking, accountability features, and the rewards system."
      }
    ]
  },
  "help": {
    title: "Help Center",
    icon: "🛟",
    content: [
      {
        heading: "Getting Started with Sereunoia",
        body: "Welcome to Sereunoia! Setting up your account takes less than 3 minutes. Download the app from the App Store or Google Play, enter your university email address, create your profile (name, university, course of study), set your primary goals (focus, wellness, community, or all three), and you're ready to go. Your first focus session is waiting for you on the home screen."
      },
      {
        heading: "Setting Up Your First Focus Session",
        body: "From the home screen, tap 'Start Focus Session'. Choose your session duration (we recommend 25 minutes for beginners using the Pomodoro method), select your preferred background sound, and tap 'Begin'. The app will enter focus mode, silencing non-essential notifications and tracking your session. When the timer ends, you'll receive your session summary and points earned. It's that simple."
      },
      {
        heading: "Managing Your Account",
        body: "Access your account settings by tapping your profile icon in the top-right corner of the app. From settings, you can update your personal information, change your university affiliation, manage notification preferences, adjust privacy settings, view your data, connect or disconnect your buddy accountability partner, and manage your membership or subscription. If you need to delete your account, this option is also available in settings under 'Account Management'."
      },
      {
        heading: "Troubleshooting Common Issues",
        body: "App not loading? Try closing and reopening the app, then check your internet connection. Focus session not recording? Ensure the app has permission to run in the background on your device. Points not updating? Points typically update within 60 seconds of session completion — if they haven't appeared after 5 minutes, try refreshing your profile. Event booking not confirming? Check your email for a confirmation message and look in your spam folder. If none of these solve your issue, contact our support team."
      },
      {
        heading: "Contacting Support",
        body: "Our support team is available Monday through Friday, 8am to 6pm GMT. You can reach us through the in-app support chat (fastest response), by email at support@sereunoia.com (response within 24 hours), or through our social media channels. We take every support request seriously and aim to resolve all issues within one business day. For urgent issues affecting your event booking, please use the in-app chat for the fastest response."
      }
    ]
  },
  "privacy": {
    title: "Sereunoia Privacy Policy",
    icon: "🔒",
    content: [
      {
        heading: "Our Commitment to Your Privacy",
        body: "Sereunoia (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information of our users. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website, mobile application, and related services (collectively, the “Services”). By using Sereunoia, you agree to the practices described in this Privacy Policy."

      },
      {
        heading: "Information We Collect",
        body: "We collect only the data necessary to provide and improve your Sereunoia experience. This includes: Account Data (name, university email, university affiliation, profile photo if provided), Usage Data (focus session durations, wellness check-in responses, app navigation patterns), Event Data (event bookings, attendance records, feedback), and Device Data (device type, operating system, app version for technical support purposes). We do not collect your contacts, location (unless you opt in for local event recommendations), or any data beyond what is described here."
      },
      {
        heading: "How We Use Your Data",
        body: "Your data is used exclusively to: provide and personalize your Sereunoia experience, calculate and credit your rewards points, send you relevant event recommendations and reminders, improve app performance and fix technical issues, and generate anonymized aggregate insights about student wellness trends (never individual-level data). We do not use your data for advertising. We do not sell your data. Ever."
      },
      {
        heading: "Data Sharing",
        body: "Sereunoia does not sell, rent, or trade your personal data to any third party. We share data only in two limited circumstances: with trusted technical service providers (such as cloud hosting and analytics providers) who are contractually bound to use the data only for the services they provide to us, and when required by law (such as a valid court order). In all other cases, your data stays within Sereunoia."
      },
      {
        heading: "Your Rights",
        body: "You have the right to access all data we hold about you, correct any inaccurate data, request deletion of your data at any time, export your data in a portable format, opt out of any optional data collection, and withdraw consent for any data use at any time. To exercise any of these rights, visit Settings > Privacy in the app, or contact us at privacy@sereunoia.com. We will respond to all requests within 30 days."
      },
      {
        heading: "Data Security",
        body: "All personal data transmitted between your device and our servers is encrypted using TLS 1.3. Sensitive data at rest is encrypted using AES-256 encryption. Access to personal data within our organization is strictly limited to team members who require it to perform their roles, and all access is logged and audited. We conduct regular security reviews and respond to vulnerabilities immediately. If a data breach ever occurs, we will notify affected users within 72 hours."
      },
      {
        heading: "Changes to This Policy",
        body: "If we make material changes to this Privacy Policy, we will notify you via email and in-app notification at least 14 days before the changes take effect. We will never retroactively change how we use data you've already provided without your explicit consent. The current version of this policy is always available in the app under Settings > Privacy Policy. Last updated: November 2024."
      }
    ]
  },
  "terms": {
    title: "Terms of Service",
    icon: "📋",
    content: [
      {
        heading: "Agreement to Terms",
        body: "By downloading, installing, or using the Sereunoia application or attending any Sereunoia event, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legal agreement between you and Sereunoia Technologies Ltd. We've written them in plain language because we believe you deserve to understand exactly what you're agreeing to."
      },
      {
        heading: "Eligibility",
        body: "Sereunoia is designed for and available to university and tertiary education students aged 16 and above. By creating an account, you confirm that you are currently enrolled in an accredited university or tertiary institution. We reserve the right to verify enrollment and suspend accounts that do not meet eligibility requirements. If you are under 18, you confirm that you have obtained parental or guardian consent to use our services."
      },
      {
        heading: "Your Account",
        body: "You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You must not share your account with others or allow anyone else to access Sereunoia using your credentials. If you suspect unauthorized access to your account, contact us immediately at support@sereunoia.com. Sereunoia will not be liable for any loss arising from unauthorized use of your account."
      },
      {
        heading: "Acceptable Use",
        body: "You agree to use Sereunoia only for lawful purposes and in ways that do not infringe the rights of others. You must not use the platform to harass, bully, or harm other users, share false or misleading information, attempt to gain unauthorized access to any part of our systems, scrape or extract data from the platform, or use the platform for any commercial purpose without our written consent. Violation of these rules may result in immediate account suspension."
      },
      {
        heading: "Rewards & Points",
        body: "Sereunoia points earned through the app are non-transferable, have no cash value unless explicitly redeemed through our rewards program, and may expire after 12 months of account inactivity. We reserve the right to modify the rewards program, adjust point values, and change redemption options with 30 days notice. Points obtained through fraudulent activity (such as using automated tools to simulate focus sessions) will be forfeited and may result in account termination."
      },
      {
        heading: "Events",
        body: "By booking a Sereunoia event, you agree to the event-specific terms presented at the time of booking. Refund policies vary by event type: free events have no refund process; paid events offer full refunds up to 48 hours before the event and no refunds after that point unless the event is cancelled by Sereunoia. Sereunoia reserves the right to refuse admission to events to anyone who violates our community standards."
      },
      {
        heading: "Intellectual Property",
        body: "All content on the Sereunoia platform — including the app design, written content, graphics, logos, and event materials — is the intellectual property of Sereunoia Technologies Ltd and is protected by copyright law. You may not reproduce, distribute, or create derivative works from our content without our explicit written permission. User-generated content (such as profile information or event feedback) remains your property, but you grant us a license to use it within the platform."
      },
      {
        heading: "Limitation of Liability",
        body: "Sereunoia provides wellness and productivity tools to support your university experience, but we are not a medical or mental health service. Our content is for informational purposes only and is not a substitute for professional medical, psychological, or psychiatric advice. If you are experiencing a mental health crisis, please contact a qualified professional or emergency services immediately. Sereunoia's liability for any claim arising from use of our services is limited to the amount you paid for your subscription in the 12 months preceding the claim."
      },
      {
        heading: "Changes to Terms",
        body: "We may update these Terms of Service from time to time. When we make material changes, we will notify you via email and in-app notification at least 14 days before the new terms take effect. Your continued use of Sereunoia after the effective date constitutes acceptance of the updated terms. If you do not agree to the updated terms, you may close your account before the effective date. These terms were last updated in November 2024."
      }
    ]
  },
  "contact": {
    title: "Contact Us",
    icon: "💬",
    content: [
      {
        heading: "We'd Love to Hear From You",
        body: "Whether you have a question about the app, want to partner with us, are interested in bringing Sereunoia to your campus, or just want to say hello — we genuinely want to hear from you. Sereunoia is built for students, and the best ideas for making it better come directly from the community. Don't hesitate to reach out."
      },
      {
        heading: "General Inquiries",
        body: "For general questions about Sereunoia, our platform, or our mission, email us at hello@sereunoia.com. We read every message and aim to respond within 2 business days. If your inquiry is time-sensitive, please mark your subject line as URGENT and we'll prioritize your message."
      },
      {
        heading: "Technical Support",
        body: "Experiencing an issue with the app? Our support team is here to help. Reach us through the in-app support chat for the fastest response (typically under 2 hours during business hours), or email support@sereunoia.com for issues that require more detailed investigation. When contacting support, please include your device type, operating system version, and a description of the issue so we can resolve it as quickly as possible."
      },
      {
        heading: "Events & Partnerships",
        body: "Interested in co-hosting a Sereunoia event, bringing our experiences to your campus, or partnering with us as a brand or organization? We'd love to explore what's possible. Email events@sereunoia.com with a brief overview of your organization, your proposed collaboration idea, and your timeline. Our partnerships team will respond within 5 business days."
      },
      {
        heading: "Campus Ambassadors",
        body: "Want to represent Sereunoia at your university? We're building a network of passionate student ambassadors across universities in Ghana and beyond. Ambassadors get early access to new features, exclusive event invitations, ambassador-only rewards, and the opportunity to shape the future of the platform. Apply at campuses@sereunoia.com with your name, university, and why you want to be part of the Sereunoia movement."
      },
      {
        heading: "Media & Press",
        body: "Are you a journalist, blogger, or content creator covering student life, wellness, or African tech? We'd love to connect. Email press@sereunoia.com with your publication or platform details and your story angle. We can arrange interviews with our founding team, provide platform demos, and supply press materials. Our media kit is available on request."
      }
    ]
  },
  "support-email": {
    title: "Email Support",
    icon: "📧",
    content: [
      {
        heading: "Reach Our Support Team",
        body: "Our dedicated support team is available to help you with any questions, issues, or feedback you have about Sereunoia. We're real people who genuinely care about your experience, and we take every message seriously. No bots, no canned responses — just helpful, human support from people who use and believe in the platform."
      },
      {
        heading: "Email: support@sereunoia.com",
        body: "Send your support request to support@sereunoia.com and we'll respond within 24 hours on business days. For the fastest resolution, please include your registered email address or username, a clear description of the issue you're experiencing, any error messages you've seen, your device type and operating system, and screenshots if relevant. The more detail you provide, the faster we can help."
      },
      {
        heading: "Support Hours",
        body: "Our support team is available Monday through Friday, 8:00am to 6:00pm GMT. Messages received outside these hours will be addressed on the next business day. For urgent issues — such as an event booking problem within 24 hours of an event — please use the in-app support chat, which is monitored during extended hours including weekends for time-sensitive event-related matters."
      },
      {
        heading: "Common Issues We Can Help With",
        body: "Our support team can assist with account access and login issues, points and rewards discrepancies, event booking confirmations and cancellations, app performance and technical bugs, account data requests and deletions, membership and billing questions, and feedback or suggestions for improving the platform. Whatever your issue, we're here to make it right."
      },
      {
        heading: "In-App Support Chat",
        body: "For the fastest support, use the in-app support chat accessible from Settings > Help & Support. The chat connects you directly with our support team during business hours. Outside business hours, you can leave a message and a team member will follow up first thing the next business day. The chat also gives us immediate access to your account context, which often allows us to resolve issues faster than email."
      }
    ]
  }
};

// ===== FOOTER MODAL COMPONENT =====
function FooterModal({ modalKey, onClose }) {
  const data = footerModalData[modalKey];

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

  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel footer-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="footer-modal-header">
          <div className="footer-modal-icon">{data.icon}</div>
          <h2 className="footer-modal-title">{data.title}</h2>
          <div className="modal-divider" />
        </div>

        <div className="footer-modal-body">
          {data.content.map((section, idx) => (
            <div key={idx} className="modal-section">
              <h3 className="modal-section-heading">{section.heading}</h3>
              <p className="modal-section-body">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="footer-modal-cta">
          <p>Have more questions?</p>
          <button
            className="modal-cta-btn"
            onClick={onClose}
          >
            Close & Explore Sereunoia →
          </button>
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
  // Inside App() function, add this state:
const [activeFooterModal, setActiveFooterModal] = useState(null);
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

      {/* Footer Modal */}
      {activeFooterModal && (
        <FooterModal
          modalKey={activeFooterModal}
          onClose={() => setActiveFooterModal(null)}
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
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("about")}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("blog")}
            >
              Blog
            </button>
          </li>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("events")}
            >
              Events
            </button>
          </li>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("features")}
            >
              Features
            </button>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Resources</h4>
        <ul>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("faq")}
            >
              FAQ
            </button>
          </li>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("help")}
            >
              Help Center
            </button>
          </li>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("privacy")}
            >
              Privacy Policy
            </button>
          </li>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("terms")}
            >
              Terms of Service
            </button>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <ul>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("contact")}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              className="footer-link-btn"
              onClick={() => setActiveFooterModal("support-email")}
            >
              support@sereunoia.com
            </button>
          </li>
        </ul>
        <div className="social-links">
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">📷</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;