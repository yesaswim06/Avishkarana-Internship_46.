import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ y:100 }}
      animate={{ y:0 }}
    >
      <h1>Contact Us</h1>

      <p>Email: support@studenttask.com</p>

      <p>Phone: +91 9876543210</p>

    </motion.div>
  );
}

export default Contact;