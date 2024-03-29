import { useEffect, useRef, useState, type ReactNode } from "react";
import "./Projects.css";

const projects = [
  {
    img: "https://amerna.org/images/proj1.png",
    href: "https://canadiansouq.netlify.app",
  },
  {
    img: "https://amerna.org/images/voldstudio.png",
    href: "https://voldstudio.com",
  },
  {
    img: "https://amerna.org/images/proj2.png",
    href: "https://xerolinux.xyz",
  },
];

interface IProjectsProps {
  children: ReactNode;
}

const Projects = ({ children }: IProjectsProps) => {
  const ulRef = useRef(null);
  const containerRef = useRef(null);
  const [currentProj, setCurrentProj] = useState(0);

  const nextProj = () => {
    setCurrentProj((current) =>
      current >= projects.length - 1 ? 0 : current + 1,
    );
  };

  const prevProj = () => {
    setCurrentProj((current) =>
      current < 1 ? projects.length - 1 : current - 1,
    );
  };

  useEffect(() => {
    const containerEl = containerRef.current;
    const containerWidth =
      containerEl.offsetWidth -
      parseFloat(getComputedStyle(containerEl).paddingRight);

    if (ulRef.current) {
      ulRef.current.style.transform = `translateX(${
        containerWidth * currentProj
      }px)`;
    }
  }, [currentProj]);

  return (
    <section dir="rtl" id="projects" ref={containerRef} className="container">
      {children}
      <div className="buttons-wrapper">
        <ul className="projects" ref={ulRef}>
          {projects.map(({ img, href }, idx) => (
            <li key={idx}>
              <a href={href} target="_blank">
                <img decoding="async" loading="lazy" src={img} alt={href} />
              </a>
            </li>
          ))}
        </ul>

        <button className="prev btn" onClick={nextProj}>
          <svg width="29" height="30" viewBox="0 0 18 19" fill="none">
            <path
              d="M4.5 7.05497L9 11.7325L13.5 7.05497"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <button className="next btn" onClick={prevProj}>
          <svg width="29" height="30" viewBox="0 0 18 19" fill="none">
            <path
              d="M4.5 7.05497L9 11.7325L13.5 7.05497"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <div className="dots">
        {Array.from(Array(projects.length)).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentProj(idx)}
            className={`dot ${currentProj === idx ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
