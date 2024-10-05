import React from 'react';
import styles from "./Banner.module.scss";

export default function Banner() {
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
                                <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20" alt="company logo" style={{ width: "100%" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>        
            </div>
    )
}
