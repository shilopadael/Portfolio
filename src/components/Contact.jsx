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
      className="xl:mt-4 xl:flex-row flex-col-reverse flex
    gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl h-[550px]"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Your contact information */}
          <div className="flex flex-col gap-2 py-7 items-center">
            <p className="text-white text-base font-medium">
              Phone - +972 509 493 576:
            </p>
            <p className="text-white text-base font-medium">
              Email - shilop18@gmail.com
            </p>
            <a
              href="https://wa.me/+972509493576?text=Hello%20I%20want%20to%20contact%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              Contact on WhatsApp
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[400px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
