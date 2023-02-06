import React from "react";
import styles from "./Book.module.scss";

import { Btn } from "components";
import { motion } from "framer-motion";
import { bookAnimation } from "motion/framer";
//

export const Book: React.FunctionComponent = () => {
    return (
        <section
            aria-label="Book a call"
            className={styles.section_book_container}
        >
            <motion.div
                className={styles.section_book_wrap}
                variants={bookAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className={styles.wrapper}>
                    <h4>Book a call with me</h4>
                    <p>
                        I’d love to have a chat to see how I can help you. The
                        best first step is for us to discuss your project during
                        a free consultation. Then we can move forward from
                        there.
                    </p>
                </div>
                <Btn color="red_btn" />
            </motion.div>
        </section>
    );
};
