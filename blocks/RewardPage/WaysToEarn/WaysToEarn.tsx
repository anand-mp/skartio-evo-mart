import React from 'react'
import styles from './WaysToEarn.module.scss'

export default function WaysToEarn() {
    return (
        <div>
            <div className='container py-5'>
                <div>
                    <h2 className={styles.heading}>Ways To Earn</h2>
                </div>

                <div className='row pt-3'>
                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                        <div className={`${styles.campaignTile} `}>
                            <div className={styles.headlineCenterElement}>
                                <div className={styles.titleText}>50 Points</div>
                                <div className={styles.descriptionText}>Create an Account</div>
                            </div>

                            <div className={styles.headlineCenterElement2}>
                                <button className={styles.signUpBtn}>Sign Up</button>
                                <div className={styles.descriptionText2}>Already a Member? <a href=''>Login</a></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                        <div className={`${styles.campaignTile} `}>
                            <div className={styles.headlineCenterElement}>
                                <div className={styles.titleText}>50 Points</div>
                                <div className={styles.descriptionText}>Create an Account</div>
                            </div>

                            <div className={styles.headlineCenterElement2}>
                                <button className={styles.signUpBtn}>Sign Up</button>
                                <div className={styles.descriptionText2}>Already a Member? <a href=''>Login</a></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                        <div className={`${styles.campaignTile} `}>
                            <div className={styles.headlineCenterElement}>
                                <div className={styles.titleText}>50 Points</div>
                                <div className={styles.descriptionText}>Create an Account</div>
                            </div>

                            <div className={styles.headlineCenterElement2}>
                                <button className={styles.signUpBtn}>Sign Up</button>
                                <div className={styles.descriptionText2}>Already a Member? <a href=''>Login</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
