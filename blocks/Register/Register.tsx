import React from 'react'
import styles from './Register.module.scss'
import Link from 'next/link'

export default function Register() {
    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={styles.secondDiv}>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <span className={styles.loginTxt}>Create Account</span>
                            <div className={styles.inputDiv}>
                                <input className={styles.inputField} type='text' placeholder='First Name' />
                            </div>
                            <div className={styles.inputDiv}>
                                <input className={styles.inputField} type='text' placeholder='Last Name' />
                            </div>
                            <div className={styles.inputDiv}>
                                <input className={styles.inputField} type='text' placeholder='Email' />
                            </div>
                            <div className={styles.inputDiv}>
                                <input className={styles.inputField} type='text' placeholder='Password' />
                            </div>

                            <div className={styles.inputDiv}>
                                <button className={styles.signInBtn}>Create </button>
                            </div>

                            <div className={styles.inputDiv} style={{ display: "flex", gap: '30px' }}>
                                <Link href="/login" className={styles.hoverLine}>log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
