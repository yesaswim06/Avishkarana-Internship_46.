import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ x:-100 }}
      animate={{ x:0 }}
    >
      <h1>About Us</h1>

      <p>
        Student Task Manager helps students track assignments,
        deadlines and daily activities.
      </p>

    </motion.div>
  );
}

export default About;