import React from "react";
import styles from "./Footer.module.scss";

//
import { Btn } from "components";
import { motion } from "framer-motion";
import { footerAnimation } from "motion/framer";
//

export const Footer: React.FunctionComponent = () => {
    return (
        <motion.footer
            className={styles.footer_container}
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className={styles.footer_wrap}>
                <img
                    src="./assets/logo.svg"
                    alt="logo"
                    className={styles.logo}
                />
                <Btn color="black_btn" />
            </div>
        </motion.footer>
    );
};
