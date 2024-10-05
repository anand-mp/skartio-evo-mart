import React from 'react'
import styles from './RewardsPoints.module.scss'

export default function RewardsPoints() {
    return (
        <div>
            <div className='container'>
                <div>
                    <h2 className={styles.heading}>100 POINTS = $5</h2>
                </div>
                <div className={`${styles.textBlock1} pt-3`}>
                    <div className={styles.textDsp1}>For every dollar you spend at bando.com, you’ll earn one point. Earn 100 points, and you’ll get $5 off your next order.</div>
                </div>
                <div className={styles.textBlock2}>
                    <div className={styles.textDsp2}>You’ll also get 50 points just for signing up!
                    </div>
                </div>

                <div className={styles.textBlock3}>
                    <div className={`${styles.textDsp3} row `}>
                        <div className='col-4 col-md-4 col-lg-4 col-xl-4'>
                            <h2>$5</h2>
                            <div className={styles.pointsTxt}>100 points</div>
                        </div>

                        <div className='col-4 col-md-4 col-lg-4 col-xl-4'>
                            <h2>$5</h2>
                            <div className={styles.pointsTxt}>100 points</div>
                        </div>

                        <div className='col-4 col-md-4 col-lg-4 col-xl-4'>
                            <h2>$5</h2>
                            <div className={styles.pointsTxt}>100 points</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
