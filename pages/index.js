import Image from "next/image";
import { Outfit, Oxanium } from "next/font/google";
import ExperienceFilter from "./components/ExperienceFilter";
import { useState } from "react"; 

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {

  const [filter, setFilter] = useState("ALL");

  return (
    <div className="relative min-h-screen">
      {/* Fond noir simple */}
      <div className="portfolio-background"></div>
      
      {/* Cercle violet 1*/}
      <div className="purple-circle-1" style={{bottom: '-30%', right: '65%'}}></div>

      {/* Cercle violet 2*/}
      <div className="purple-circle-2" style={{bottom: '-15%', left: '50%'}}></div>

      {/* Cercle violet 3*/}
      <div className="purple-circle-3" style={{top: '95%', left: '-10%'}}></div>    
      
      {/* Cercle violet 4*/}
      <div className="purple-circle-4" style={{top: '180%', left: '70%'}}></div>   

      {/* Cercle violet 5*/}
      <div className="purple-circle-5" style={{top: '210%', left: '-30%'}}></div>         

      {/* Ligne horizontale décorative 1*/}
      <div className="decorative-line-1"></div>

      {/* Ligne horizontale décorative 2*/}
      <div className="decorative-line-2"></div>

      {/* Ligne horizontale décorative 3*/}
      <div className="decorative-line-3"></div>

      {/* Ligne verticale décorative 1*/}
      <div className="decorative-line-vertical-1"></div>

      {/* Ligne verticale décorative 2*/}
      <div className="decorative-line-vertical-2"></div>


      {/* Header Navigation */}
      <header className="header-nav">
        <nav>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact us</a>
          </div>
        </nav>
      </header>
      

      {/* Contenu principal */}
      <div
        className={`${outfit.className} font-sans relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        

        {/* Section About */}
        <section id="about" className="about-section">

          <div className="about-avatar">
            <Image src="/Avatar.png" alt="Image illustrative" width={320} height={320} />
          </div>

          <div className="about-content">
           
            <h2>I'm <span class="highlight-name">Emilie Tao</span></h2>

            
            <h3>A junior developper</h3>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae odio sollicitudin convallis. Praesent commodo sapien non nibh facilisis, nec bibendum odio rhoncus.</p>
            
            <a href="https://github.com/Toco1406" target="_blank" class="github-button">
              GitHub
            </a>

            <a href="https://fr.linkedin.com/in/emilie-tao-144432256" target="_blank" class="linkedin-button">
              Linkedin
            </a>

          </div>
      
        </section>


        {/* Marquee carousel below the line */}
        <section className="carousel-section">
          <div className="marquee-wrapper">
            <div className={`marquee-track ${oxanium.className}`}>
              <span className="marquee-item">TURNING IDEAS INTO REALITY</span>
              <span className="marquee-item">TURNING IDEAS INTO REALITY</span>
              <span className="marquee-item">TURNING IDEAS INTO REALITY</span>
              <span className="marquee-item">TURNING IDEAS INTO REALITY</span>
              <span className="marquee-item">TURNING IDEAS INTO REALITY</span>
              <span className="marquee-item">TURNING IDEAS INTO REALITY</span>
              <span className="marquee-item">TURNING IDEAS INTO REALITY</span>
              <span className="marquee-item">TURNING IDEAS INTO REALITY</span>
            </div>
          </div>
        </section>



        {/* Section Project */}
        <section id="project" class="project-section">
          <div class="container">
            <h2 className={oxanium.className}>Explore my work</h2>
            <div class="projects-grid">

              {/* Projet 1 */}
              <div class="project-card">
                <img src="https://via.placeholder.com/400x250" alt="Projet 1" />
                <div class="project-content">
                  <h3>Projet 1</h3>
                  <p>Un projet web moderne utilisant HTML, CSS et JavaScript.</p>
                  <a href="https://asso-afcb.fr/" target="_blank" class="github-btn">
                    Visiter le site
                  </a>
                </div>
              </div>

              {/* Projet 2 */}
              <div class="project-card">
                <img src="https://via.placeholder.com/400x250" alt="Projet 2"/>
                <div class="project-content">
                  <h3>Projet 2</h3>
                  <p>Une application React avec une interface claire et fluide.</p>
                  <a href="https://github.com/ton-repo/projet2" target="_blank" class="github-btn">
                    Voir sur GitHub
                  </a>
                </div>
              </div>

              {/* Projet 3 */}
              <div class="project-card">
                <img src="https://via.placeholder.com/400x250" alt="Projet 3"/>
                <div class="project-content">
                  <h3>Projet 3</h3>
                  <p>Un projet backend Node.js avec API REST et base de données.</p>
                  <a href="https://github.com/ton-repo/projet3" target="_blank" class="github-btn">
                    Voir sur GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Section Experience */}
      <section id="experience" className="experience-section">

        {/* Ligne horizontale décorative 4*/}
        <div className="decorative-line-4"></div>

        {/* Titre */}
        <h2 className={`experience-title ${oxanium.className}`}>
          My Experience
        </h2>

        {/* Filtre */}
        <ExperienceFilter onFilterChange={setFilter} />

        {/* Grille */}
        <div className="experience-grid">
          
          {/* EXPERIENCE 1 */}
          {(filter === "ALL" || filter === "PROFESSIONAL EXPERIENCE") && (
            <div className="experience-card">
              <div className="experience-content">
                <h3>Association Franco-Chinoise de la Blockchain</h3>
                <p>Apprenticeship as Web developper</p>
              </div>
            </div>
          )}

          {/* EXPERIENCE 2 */}
          {(filter === "ALL" || filter === "PROFESSIONAL EXPERIENCE") && (
            <div className="experience-card">
              <div className="experience-content">
                <h3>Coucou concept</h3>
                <p>Internship as Assistant Web Developer</p>
              </div>
            </div>
          )}

          {/* EXPERIENCE 3 */}
          {(filter === "ALL" || filter === "EDUCATION") && (
            <div className="experience-card">
              <div className="experience-content">
                <h3>CY Cergy Paris University</h3>
                <p>University Bachelor's in Technology in Multimedia and Internet Professions, Web Development and Interactive Systems Track</p>
              </div>
            </div>
          )}

          {/* EXPERIENCE 4 */}
          {(filter === "ALL" || filter === "EDUCATION") && (
            <div className="experience-card">
              <div className="experience-content">
                <h3>Crocé Spinelli Professional High School</h3>
                <p>Professional Baccalaureate in Commerce and Sales</p>
              </div>
            </div>
          )}

        </div>
      </section>


        {/* Section Contact */}
        <section id="contact" className="contact-section">

          {/* Ligne horizontale décorative 4*/}
          <div className="decorative-line-4"></div>

          <h2 className={`contact-title ${oxanium.className}`}>Let's Talk</h2>

          {/* ✅ Grille à deux colonnes */}
          <div className="contact-grid">
            <div className="contact-avatar">
              <Image src="/Avatar2.png" alt="Image illustrative" width={320} height={320} />
            </div>

            <div className="contact-content">
              <form action="#" method="post">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message..." required></textarea>

                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
            {/* Ligne horizontale décorative 4*/}
            <div className="decorative-line-4"></div>
        </section>

      </main>
      </div>
    </div>
  );
}
