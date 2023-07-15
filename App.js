import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src="tedx_logo.png" alt="TEDx IIT Hyderabad Logo" width="100px"/>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
      </header>
      <section>
      <main>
      <h1>Welcome to TEDx IIT Hyderabad</h1>
        <section id="about">
          <h2>About</h2>
          <p>
            TEDx IIT Hyderabad is an independently organized TED event
            dedicated to spreading ideas and inspiring individuals. We bring
            together thought leaders, innovators, and change-makers to share
            their stories and insights.
          </p>
        </section>
        <section id="speakers">
          <h2>Speakers</h2>
          <ul>
            <b>
            <li><a href="https://www.linkedin.com/in/murtuza-kutianawalla-985b7a79/?originalSubdomain=in">Speaker 1</a></li>
            <li><a href="https://www.linkedin.com/in/dr-ananya-s-rao-56913454/?original_referer=https%3A%2F%2Fwww%2Ebing%2Ecom%2F&originalSubdomain=in">Speaker 2</a></li>
            <li><a href="https://in.linkedin.com/in/cvskiran">Speaker 3</a></li>
            </b>
          </ul>
        </section>
        <section id="events">
          <h2>Events</h2>
          <ul>
            <b>
            <li><a>Event 1</a></li>
            <li><a>Event 2</a></li>
            <li><a>Event 3</a></li>
            </b>
        
          </ul>
        </section>
        
      </main>
      <footer className="Footer" >
        <div className="Footer-content">
          <div className="Footer-logo">
            <img src="/tedx_logo.png" alt="TEDx IITHyderabad Logo" width="200" />
          </div>
          <div className="Footer-links">
            <div className="Footer-section">
              <h5 className="Footer-section-title">Follow TEDxIITHyderabad</h5>
              <ul className="Footer-section-list">
                <li><a href="https://www.instagram.com/tedx.iithyderabad/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.youtube.com/channel/UC9rUC6h741BwWpkCb8ui-4A" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://twitter.com/TEDxIITHyd" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://in.linkedin.com/company/tedxiith" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/TEDxIITHyderabad/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://blog.ted.com/" target="_blank" rel="noopener noreferrer">TED Blog</a></li>
              </ul>
            </div>
            <div className="Footer-section">
              <h5 className="Footer-section-title">Programs &amp; Initiatives</h5>
              <ul className="Footer-section-list">
                <li><a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noopener noreferrer">TEDx</a></li>
                <li><a href="https://www.ted.com/participate/ted-fellows-program/apply-to-be-a-ted-fellow" target="_blank" rel="noopener noreferrer">TED Fellows</a></li>
                <li><a href="https://ed.ted.com/" target="_blank" rel="noopener noreferrer">TED Ed</a></li>
                <li><a href="https://www.ted.com/about/programs-initiatives/ted-translators" target="_blank" rel="noopener noreferrer">TED Translators</a></li>
                <li><a href="https://www.ted.com/about/programs-initiatives/ted-institute" target="_blank" rel="noopener noreferrer">TED Institute</a></li>
                <li><a href="https://www.audaciousproject.org/" target="_blank" rel="noopener noreferrer">The Audacious Project</a></li>
              </ul>
            </div>
            <div className="Footer-section">
              <h5 className="Footer-section-title">Our Community</h5>
              <ul className="Footer-section-list">
                <li><a href="https://www.ted.com/speakers" target="_blank" rel="noopener noreferrer">TED Speakers</a></li>
                <li><a href="https://www.ted.com/participate/ted-fellows-program/meet-the-ted-fellows" target="_blank" rel="noopener noreferrer">TED Fellows</a></li>
                <li><a href="https://www.ted.com/about/programs-initiatives/ted-translators" target="_blank" rel="noopener noreferrer">TED Translators</a></li>
                <li><a href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide" target="_blank" rel="noopener noreferrer">TEDx Organizers</a></li>
                <li><a href="https://community.ted.com/" target="_blank" rel="noopener noreferrer">TED Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="Footer-bottom">
          <div className="Footer-bottom-links">
            <a href="https://www.ted.com/about/our-organization/our-policies-terms/ted-talks-usage-policy" target="_blank" rel="noopener noreferrer">TED Talks Usage Policy</a>
            <a href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/sponsors-finances/sponsors-partnerships/about-partnerships" target="_blank" rel="noopener noreferrer">Advertising / Partnership</a>
            <a href="https://www.ted.com/" target="_blank" rel="noopener noreferrer">TED.com</a>
            <a href="https://www.ted.com/about/our-organization/our-policies-terms/ted-com-terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Use</a>
            <a href="https://www.ted.com/about/our-organization/jobs-at-ted" target="_blank" rel="noopener noreferrer">Jobs</a>
            <a href="https://www.ted.com/about/our-organization/contact-us/press-and-media-information" target="_blank" rel="noopener noreferrer">Press</a>
            <a href="https://help.ted.com/hc/en-us" target="_blank" rel="noopener noreferrer">Help</a>
            <a href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Preferences</a>
            <a href="https://www.ted.com/membership" target="_blank" rel="noopener noreferrer">Membership</a>
          </div>
          <p className="Footer-bottom-text">© TED Conferences. LLC. All rights reserved.</p>
        </div>
      </footer>
      </section>
    </div>
    
  );
}

export default App;
