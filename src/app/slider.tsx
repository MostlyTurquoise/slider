"use client";

import { useRef, useState } from "react";
import styles from "./slider.module.css";

export default function Slider(props: {}) {
    let [n, setN] = useState(0);
    let [i, setI] = useState(0);
    let clickRef = useRef({
        x: 0,
        y: 0,
    });
    const drag = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setN(e.clientX - clickRef.current.x);
        setI(e.clientY - clickRef.current.y);
        console.log(e);
    };
    const up = (e: MouseEvent) => {
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", up);
    };
    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.sliderLabel}>
                {i == 0
                    ? `${Math.round(n/10)}`
                    : `${Math.round(n/10)} + ${Math.round(i/10)}i`}
            </div>
            <div className={styles.sliderBar}>
                <div
                    className={styles.sliderKnob}
                    style={{ left: `${n - 10}px`, top: `${i - 10}px` }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (
                            clickRef.current.x == 0 ||
                            clickRef.current.y == 0
                        ) {
                            clickRef.current.x = e.clientX;
                            clickRef.current.y = e.clientY;
                        }

                        document.addEventListener("mousemove", drag);
                        document.addEventListener("mouseup", up);
                    }}
                ></div>
            </div>
        </div>
    );
}
