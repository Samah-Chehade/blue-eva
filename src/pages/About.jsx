import { useEffect } from "react";
import azurDore from "../assets/azur-dore.jpg";

function About() {
  useEffect(() => {
    document.title = "Blue Eva | About";
  }, []);

  return (
    <div className="wrap">
      <div className="pagehead">
        <span className="eyebrow">About</span>
        <h1>More than a fragrance. A feeling.</h1>
      </div>

      <div className="story">
        <div className="stage">
          <img src={azurDore} alt="Azur Doré eau de parfum" />
        </div>
        <div>
          <p className="big">
            At Blue Eva, we believe that every scent tells a story. It’s more than what you wear — it’s a
            reflection of who you are.
          </p>
          <p>
            Our collection brings together carefully selected fragrances for every mood, every
            moment, and every personality.
          </p>
          <p>
            From soft and delicate notes to bold and unforgettable scents, we invite you to discover
            a fragrance that feels uniquely yours.
          </p>
          <p className="sign">Blue Eva — Make every moment memorable.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
