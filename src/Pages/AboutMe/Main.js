import React from "react";
import { useGlobalContext } from "../../Components/state/useContext";
import { motion } from "framer-motion";
import { learnedTechnologies } from "../../Components/data/technologiesData";
import SocialLinks from "./SocialLinks";
import pfp0 from "../../Components/Images/tono-blancon.jpeg";
import UTNCertificate from "../../Components/Images/UTN-Certificate .png";
import {
  StyledAboutMe,
  StyledTechs,
  CustomizedToolTip,
  StyledEducation,
} from "./styled-components";

function Main() {
  const { pageVariants, pageTransitions } = useGlobalContext();

  return (
    <motion.section
      exit="off"
      animate="on"
      initial="off"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <StyledAboutMe>
        <div>
          <p>
            I'm Lautaro Figueroa, 22 years old, from Argentina and I'm most
            excited about <b>Full-Stack Web Development</b>, using mainly
            <b> React.js with Redux</b> and
            <b> MongoDB</b> as preferred database. <br />
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            However, I'm currently diving into Python by creating some basic
            programs / games as I intend to be part of the <b>cybersecurity </b>
            field in the mid term.
          </p>
          <p>
            Whenever I start a new project, my main goal is to try to deliver
            the most <b>user-friendly interface</b> with a modern design so that
            the user can have the best possible experience on my site.
          </p>
          <p>
            Some of the <span>technologies/languages</span> I use:
          </p>
          <StyledTechs>
            {learnedTechnologies.map((tech) => (
              <CustomizedToolTip
                placement="top"
                key={tech.title}
                title={<img src={tech.src} width={tech.width ?? 50} />}
              >
                <span key={tech.title}>{tech.title}</span>
              </CustomizedToolTip>
            ))}
          </StyledTechs>
          <p>
            <span>
              {/* I'm looking for new and strong challenges so i can improve as a
              developer and help a business at the same time. */}
            </span>
          </p>
        </div>
        <div className="photo-socialmedia">
          <img src={pfp0} alt="Lautaro Figueroa" />
          <SocialLinks />
        </div>
      </StyledAboutMe>
      <StyledEducation>
        <ul>
          <h2>Education</h2>
          <h3>National Technological University of Argentina</h3>
          <h4>Professional Frontend Development</h4>
          <i> May 2021 - Nov 2021</i>
          <li>Average 88.5%</li>
        </ul>
        <img
          src={UTNCertificate}
          alt="Professional Frontend Development certificate"
        />
      </StyledEducation>
    </motion.section>
  );
}

export default Main;
