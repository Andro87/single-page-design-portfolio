import React from "react";
import styles from "./Btn.module.scss";

interface Props {
    readonly color: string;
}

export const Btn: React.FunctionComponent<Props> = props => {
    const { color } = props;
    return (
        <button
            type="button"
            title="Free Consultation"
            className={`${styles.btn_consultation} ${styles[color]}`}
        >
            Free Consultation
        </button>
    );
};
