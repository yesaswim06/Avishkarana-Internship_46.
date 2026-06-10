import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration:1 }}
      className="page"
    >
      <h1>Student Task Manager</h1>

      <p>
        Organize assignments, projects and internship work efficiently.
      </p>

    </motion.div>
  );
}

export default Home;