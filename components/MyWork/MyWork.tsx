import React from "react";
import styles from "./MyWork.module.scss";

//
import { Carousel } from "components";
import { motion } from "framer-motion";
import { workAnimation } from "motion/framer";
//

export const MyWork: React.FunctionComponent = () => {
    return (
        <motion.section
            aria-label="My work"
            className={styles.section_mywork_container}
            variants={workAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <h3> My Work </h3>
            <div className={styles.carousel_container}>
                <Carousel />
            </div>
        </motion.section>
    );
};
