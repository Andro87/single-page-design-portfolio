import React from "react";

import styles from "./Main.module.scss";

import { Skill, Btn } from "components";

import { skills } from "data/skills";

import { motion } from "framer-motion";
import { mainAnimation, heroAnimation } from "motion/framer";

export const Main: React.FunctionComponent = () => {
    return (
        <motion.main
            className={styles.main_container}
            variants={mainAnimation}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.main_wrap}>
                <div className={styles.main_intro}>
                    <h1>Design solutions made easy</h1>
                    <p>
                        With over ten years of experience in various design
                        disciplines, I’m your one-stop shop for your design
                        needs.
                    </p>
                </div>

                <div className={styles.main_skills_container}>
                    {skills.map((skill, index) => (
                        <Skill
                            key={index}
                            colorPosition={skill.colorPosition}
                            icon={skill.icon}
                            skill={skill.skill}
                        />
                    ))}
                </div>

                <motion.div
                    className={styles.main_info_container}
                    variants={heroAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className={styles.main_info_picture}>
                        <img src="/assets/image-amy.webp" alt="" />
                    </div>

                    <div className={styles.main_info}>
                        <h2>
                            I’m Amy, and I’d love to work on your next project
                        </h2>
                        <p>
                            I love working with others to create beautiful
                            design solutions. I’ve designed everything from
                            brand illustrations to complete mobile apps. I’m
                            also handy with a camera!
                        </p>
                        <Btn color="red_btn" />
                    </div>
                </motion.div>
            </div>
        </motion.main>
    );
};
