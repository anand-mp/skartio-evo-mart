import React from 'react';
import styles from './RedeemSteps.module.scss';

export default function RedeemSteps() {
    return (
        <div className='container py-5'>
            <div className={`${styles.heading}`}>
                <h1>Hey, friend! We want to thank you for shopping with us, so we created a rewards program that lets you get tons of exclusive perks.</h1>
            </div>
            <div className={`${styles.steps} py-5 row`}>
                <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4' style={{ textAlign: 'center', }}>
                    <img className={styles.imgClass} src='https://cdn-widget-assets.yotpo.com/static_assets/3G33AVhBcTmSCT_pfJWPJA/images/image_2024_07_12_14_25_46_605' />
                    <div className={styles.titleTxt}>Join Us</div>
                    <div className={styles.subTitleTxt}>It’s free! All we need is your name, email address, and birthday.</div>
                </div>

                <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4' style={{ textAlign: 'center', }}>
                    <img className={styles.imgClass} src='https://cdn-widget-assets.yotpo.com/static_assets/3G33AVhBcTmSCT_pfJWPJA/images/image_2024_07_12_14_25_39_351' />
                    <div className={styles.titleTxt}>Join Us</div>
                    <div className={styles.subTitleTxt}>It’s free! All we need is your name, email address, and birthday.</div>
                </div>


                <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4' style={{ textAlign: 'center', }}>
                    <img className={styles.imgClass} src='https://cdn-widget-assets.yotpo.com/static_assets/3G33AVhBcTmSCT_pfJWPJA/images/image_2024_07_12_14_25_27_032' />
                    <div className={styles.titleTxt}>Join Us</div>
                    <div className={styles.subTitleTxt}>It’s free! All we need is your name, email address, and birthday.</div>
                </div>

            </div>

            <div className={styles.bottomLine}></div>
        </div>
    )
}
