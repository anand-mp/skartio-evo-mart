import React from 'react';
import styles from "./BannerSecond.module.scss";

export default function BannerSecond() {
    return (
        <div className={styles.mainDiv}>
            {/* <div className={styles.heroContentWrapper} >
                <div className={`${styles.heroContent} ${styles.transparent}`}>
                    <div className={styles.textStandard}>
                       
                    </div>
                </div>
            </div> */}

            <div className="header-row" id="header-row" style={{ padding: '0px', overflow: 'hidden', height: 'auto' }}>

                <div className="container-fluid" style={{ padding: "0px" }}>
                    <div className="row">

                        <div className="col-xs-12">
                            <a className="navbar-brand logo" href="/">
                                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23092024-MainBanner-Z1-P1-prebuzz-desktoprevised.gif" alt="company logo" style={{ width: "100%" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>        
            </div>
    )
}
