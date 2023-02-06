import React from "react";
import styles from "./Header.module.scss";

import { Btn } from "components";

import { motion } from "framer-motion";
import { headerAnimation } from "motion/framer";

export const Header: React.FunctionComponent = () => {
    return (
        <motion.header
            className={styles.header_container}
            variants={headerAnimation}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.header_wrap}>
                <img
                    src="./assets/logo.svg"
                    alt="logo"
                    className={styles.logo}
                />
                <Btn color="black_btn" />
            </div>
        </motion.header>
    );
};
