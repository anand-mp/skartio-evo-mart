import React, { useState } from 'react'
import styles from './Login.module.scss'
import Link from 'next/link'

export default function Login() {


    const [forgotPassword, setForgotPassword] = useState(false);

    const handleForgotPswd = () => {
        setForgotPassword(!forgotPassword);
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.secondDiv}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        {!forgotPassword ? (
                            <>
                                <span className={styles.loginTxt}>Login</span>
                                <div className={styles.inputDiv}>
                                    <input className={styles.inputField} type='text' placeholder='Email' />
                                </div>
                                <div className={styles.inputDiv}>
                                    <input className={styles.inputField} type='password' placeholder='Password' />
                                </div>
                                <div className={styles.inputDiv}>
                                    <button className={styles.signInBtn}>Sign In</button>
                                </div>
                                <div className={styles.inputDiv} style={{ display: "flex", gap: '30px' }}>
                                    <Link href="/register" className={styles.hoverLine}>Create Account</Link>
                                    <Link href="#" className={styles.hoverLine} onClick={handleForgotPswd}>Forgot password</Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <span className={styles.loginTxt}>Reset Password</span>
                                <div className={styles.inputDiv}>
                                    <input className={styles.inputField} type='text' placeholder='Enter your Email' />
                                </div>

                                <div className={styles.inputDiv}>
                                    <button className={styles.signInBtn}>Submit</button>
                                </div>
                                <div className={styles.inputDiv} style={{ display: "flex", gap: '30px' }}>
                                    <Link href="" className={styles.hoverLine} onClick={handleForgotPswd}>Cancel</Link>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
