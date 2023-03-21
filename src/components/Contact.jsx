import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef(); //create a reference to the form element
  const [form, setForm] = useState({ //initialize form state
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // initialize loading state

  const handleChange = (e) => { // function to handle changes in the form inputs
    const { target } = e;
    const { name, value } = target;

    setForm({ // update form state with new values
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => { // function to handle form submission
    e.preventDefault(); // prevent default form submission behavior
    setLoading(true); // set loading state to true to indicate that the form is being submitted


    emailjs // use emailjs library to send email
      .send(
        'service_3uyczyk', // pass the service ID
        'template_bvcqb3j', // pass the template ID
        {
          from_name: form.name, // pass the name field from the form
          to_name: "Siminder Bansal", // pass the recipient name
          from_email: form.email, // pass the email field from the form
          to_email: "Bansalsiminder@gmail.com", // pass the recipient email
          message: form.message, // pass the message field from the form
        },
        'PL0UILMc9n8RwX5Ck' // pass the public key
      )
      .then( // if email is successfully sent
        () => { // set loading state to false
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({ // reset the form state to empty
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => { // if there is an error in sending email
          setLoading(false); // set loading state to false
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}  // attach the form reference to the form element
          onSubmit={handleSubmit} // attach the submit handler to the form
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message} // attach form value to input
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
