import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const CVPath = "/public/CV/Shilo_Padael_-_Computer_Science_Student.pdf";
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex
    gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 
            placeholder:text-secondart
            text-white rounded-lg outlined-none
            border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 
            placeholder:text-secondart
            text-white rounded-lg outlined-none
            border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 
            placeholder:text-secondart
            text-white rounded-lg outlined-none
            border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8
          outline-none w-fit text-white
          font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          <a
            href="https://wa.me/+972509493576?text=Hello%20I%20want%20to%20contact%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            Contact on WhatsApp
          </a>
          <motion.div
                whileHover={{ backgroundColor: "#00A86B" }}
                whileTap={{ scale: 0.95 }}
                className="bg-tertiary py-2 px-2 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                <a
                  href={CVPath}
                  download="Shilo_Padael_CV.pdf"
                  className="w-full h-full flex justify-center items-center"
                >
                  Download CV
                </a>
              </motion.div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
