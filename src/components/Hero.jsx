import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

function Hero() {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2.5 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2.5 });
  }, []);

  const [videoState, setVideoState] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideo = () => {
    if (window.innerWidth < 760) {
      setVideoState(smallHeroVideo);
    } else {
      setVideoState(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideo);

    return () => {
      window.removeEventListener("resize", handleVideo);
    };
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>

        <div className="md:w-10/12 w:9/12">
          <video autoPlay muted playsInline={true} key={videoState}>
            <source src={videoState} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
