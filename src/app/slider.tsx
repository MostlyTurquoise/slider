"use client";

import { useState } from "react";
import styles from "./slider.module.css";

export default function Slider(props: {}) {
    let [n, setN] = useState(0);
    let [i, setI] = useState(0);
    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.sliderLabel}>
                {i == 0 ? `${n}` : `${n} + ${i}i`}
            </div>
            <div className={styles.sliderBar}>
                <div
                    className={styles.sliderKnob}
                    style={{ left: `${n + i * 10}%` }}
                    onClick={(e) => {
                        document.addEventListener("mousemove", (e) => {});
                    }}
                ></div>
            </div>
        </div>
    );
}
