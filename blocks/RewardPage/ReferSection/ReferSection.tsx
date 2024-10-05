import React from 'react'
import styles from './ReferSection.module.scss'

export default function ReferSection() {
    return (
        <div>
            <div className={`${styles.mainDiv} container my-5 py-5 px-5`}>
                <h2 className={styles.headingTxt}>Refer a Friend!</h2>
                <div className={styles.paraDiv}>
                <p className={styles.paraTxt}>Pass on the rewards by sending $10 off an order of $20 or more to your friends. If they place an order, you’ll get $10 off an order of $20 or more too.</p>
                </div>
                <div className={styles.inputDiv}>
                <input className={styles.inputField}  type='text' placeholder='Enter your email address..'/>
                </div>
                <div>
                <div className={styles.btnDiv}>
                <button className={styles.btnField}>
                    Next
                </button>
                </div>
                </div>
            </div>
        </div>
    )
}
