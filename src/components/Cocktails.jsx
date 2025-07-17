import React from "react";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const paralaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    paralaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id="cocktails">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="c-left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="c-right-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <div key={name}>
                <h3>{name}</h3>
                <p>
                  {country} | {detail}
                </p>
                <span>- {price}</span>
              </div>
            ))}
          </ul>
        </div>

        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <div key={name}>
                <h3>{name}</h3>
                <p>
                  {country} | {detail}
                </p>
                <span>- {price}</span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
