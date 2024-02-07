import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title"> 
            {/* <div className="orange-circle" /> */}
            {/* <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }} */}
            {/* > */}
              {/* Find <br />
              
             Property */}
            {/* </motion.h1> */}
          </div>
          <h2>Keeping It Really Real</h2>
          <h4>(Find your property at one go at one place)</h4>
          {/* <div className="flexColStart secondaryText flexhero-des">
            <span>Finding and buying property made easy with just one click</span>
            <span>Choose a perfect one for you</span>
          </div> */}

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                {/* <CountUp start={8800} end={9000} duration={4} /> <span>+</span> */}
              </span>
              {/* <span className="secondaryText">Premium Product</span> */}
            </div>

            <div className="flexColCenter stat">
              {/* <span> */}
                {/* <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span> */}
              {/* <span className="secondaryText">Happy Customer</span> */}
            </div>

            <div className="flexColCenter stat">
              {/* <span>
                <CountUp end={28} /> <span>+</span>
              </span> */}
              {/* <span className="secondaryText">Awards Winning</span> */}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img className="created" src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
