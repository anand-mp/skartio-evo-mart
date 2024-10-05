import React from 'react';
import styles from "./RewardImage.module.scss"

export default function RewardImage() {
    return (
        <div>
            <div className={`${styles.container} container py-5`}>
                <img src="https://www.thanks.com/wp-content/uploads/2021/03/Prizes-Awards-and-Rewards-Differences-in-Employee-Motivation-915x410.png" alt="Snow" className={styles.image} />
                    <div className={styles.centered} >
                        <button type="button" className={`${styles.btn1}  `}>Sign up now</button>
                        <button type="button" className={`${styles.btn2}  `}>Log in</button>

                    </div>
            </div>
        </div>
    )
}
