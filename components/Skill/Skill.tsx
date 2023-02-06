import React, { ReactNode } from "react";

import styles from "./Skill.module.scss";

interface Props {
    readonly colorPosition: string;
    readonly skill: string;
    readonly icon: ReactNode;
}

export const Skill: React.FunctionComponent<Props> = props => {
    const { colorPosition, skill, icon } = props;
    return (
        <div className={`${styles.skill_box} ${styles[colorPosition]}`}>
            <div className={styles.icon_wrap}>{icon}</div>
            <p>{skill}</p>
        </div>
    );
};
