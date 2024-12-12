import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import bannerImg from "../assets/emran-binhasan.png";
import star from "../assets/shapes/star.png";
import shape1 from "../assets/shapes/shape-1.png";
import zigzag from "../assets/shapes/zigzag.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import social media icons

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center h-screen">
      <div className="flex-1 relative">
        <motion.img
          src={star}
          animate={{
            x: [120, 140],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-12 absolute top-4 left-4"
          style={{ width: "2rem", height: "2rem" }} // Responsive size
        />

        <motion.img
          src={shape1}
          animate={{
            y: [400, 380],
            x: [130, 150],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-10 absolute top-4 left-4"
          // Responsive size
        />

        <motion.img
          src={bannerImg}
          animate={{ y: [15, 10, 15] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="max-w-80 rounded-3xl border-2 mx-auto"
          alt="Emran Bin Hasan"
        />
      </div>
      <motion.div
        animate={{ x: [5, 10, 5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex-1 flex flex-col items-center"
      >
        <motion.img
          src={zigzag}
          animate={{ y: [15, 10, 15], x: [50, 45] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-10"
        />
        <h3 className="text-2xl">
          Hi, <span>I'm </span>
        </h3>
        <h2 className="text-3xl font-medium">
          <Typewriter
            options={{
              strings: ["Emran Bin Hasan", "Full Stack Developer"],
              autoStart: true,
              loop: true,
              delay: 50, // Adjust the typing speed
            }}
          />
        </h2>
        <p className="text-lg">
          I am a Full Stack Developer with a deep passion for creating high-quality web applications. My goal is to secure a role where I can leverage my skills to contribute to innovative projects and drive digital transformation.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg transition-transform"
        >
          <a href="/path-to-your-resume.pdf" download="Emran_Bin_Hasan_Resume">Download Resume</a>
        </motion.button>
        <div className="mt-4 flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-700" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-pink-600" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
