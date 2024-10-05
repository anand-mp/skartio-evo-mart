import React, { useState } from 'react';
import styles from "./Footer.module.scss"

export default function Footer() {


    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu: any) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };




    return (
        <div>
            <div className={styles.footerDiv}>
                <footer >
                    <div className="container p-4">

                        <section>
                            <h2 className={`${styles.footerTitle} text-center`}>BRIGHTEN UP YOUR INBOX</h2>
                            <p className={`${styles.footerSubTitle} text-center`}>Join our email list for new product releases, endless inspiration, and 10% off your next order.</p>
                        </section>

                        <section>
                            <form action="">
                                <div className="row d-flex justify-content-center text-center">

                                    <div className={styles.inputGroup}>
                                        <input
                                            className={styles.inputGroupField}
                                            type="email"
                                            placeholder="your-email@example.com"
                                            id="email-input"
                                            aria-label="your-email@example.com"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            name="contact[email]"
                                            data-newsletter-field=""
                                        />
                                        <button
                                            type="submit"
                                            className={`${styles.btn} ${styles.btnSecondary} ${styles.uppercase} ${styles.inputGroupButton}`}
                                            aria-label="Sign Up"
                                            name="subscribe"
                                            id="subscribe-button"
                                        >
                                            Sign Up
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </section>

                        <section className={styles.largeScreen}>
                            <div className="row">
                                {Array.from({ length: 4 }, (_, i) => (
                                    <div className={`${styles.menuDiv} col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-4 mb-md-0`} key={i}>
                                        <h5 className={`${styles.linkTitle} text-uppercase`}>Work With US</h5>
                                        <ul className="list-unstyled mb-0">
                                            {Array.from({ length: 4 }, (_, j) => (
                                                <li key={j}>
                                                    <a className={`${styles.linkItem} text-body`} href="#!">Link {j + 1}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={styles.smallScreen}>
                            <div className={styles.menuItemSm}>
                                <hr style={{margin:'5px 0px'}}/>
                                <button onClick={() => toggleMenu('new')} className={styles.sliderow}>
                                    <span className={styles.titleSm}>HELP + INFO</span>
                                    <span className={styles.chevron}>
                                        <i className={`bi ${openMenu === 'new' ? 'bi-chevron-up' : 'bi-chevron-right'}`}></i>
                                    </span>
                                </button>
                                {openMenu === 'new' && (
                                    <div className={styles.subMenuSm}>
                                        <a href="/collections/new-from-ban-do">New from ban.do</a>  <br />
                                        <a href="/collections/new-clothing">Clothing</a> <br />
                                        <a href="/collections/new-accessories">Accessories</a> <br />
                                        <a href="/collections/new-wellness">Wellness</a> <br />
                                        <a href="/collections/new-desk">Desk</a> <br />
                                        <a href="/collections/new-living">Living</a> <br />
                                    </div>
                                )}
                            </div>
                            <hr style={{margin:'5px 0px'}}/>
                            <div className={styles.menuItemSm}>
                                <button onClick={() => toggleMenu('new1')} className={styles.sliderow}>
                                    <span className={styles.titleSm}>COMPANY</span>
                                    <span className={styles.chevron}>
                                        <i className={`bi ${openMenu === 'new1' ? 'bi-chevron-up' : 'bi-chevron-right'}`}></i>
                                    </span>
                                </button>
                                {openMenu === 'new1' && (
                                    <div className={styles.subMenuSm}>
                                        <a href="/collections/new-from-ban-do">New from ban.do</a>  <br />
                                        <a href="/collections/new-clothing">Clothing</a> <br />
                                        <a href="/collections/new-accessories">Accessories</a> <br />
                                        <a href="/collections/new-wellness">Wellness</a> <br />
                                        <a href="/collections/new-desk">Desk</a> <br />
                                        <a href="/collections/new-living">Living</a> <br />
                                    </div>
                                )}
                            </div>
                            <hr style={{margin:'5px 0px'}}/>

                            <div className={styles.menuItemSm}>
                                <button onClick={() => toggleMenu('work')} className={styles.sliderow}>
                                    <span className={styles.titleSm}>WORK WITH US</span>
                                    <span className={styles.chevron}>
                                        <i className={`bi ${openMenu === 'work' ? 'bi-chevron-up' : 'bi-chevron-right'}`}></i>
                                    </span>
                                </button>
                                {openMenu === 'work' && (
                                    <div className={styles.subMenuSm}>
                                        <a href="/collections/new-from-ban-do">New from ban.do</a>  <br />
                                        <a href="/collections/new-clothing">Clothing</a> <br />
                                        <a href="/collections/new-accessories">Accessories</a> <br />
                                        <a href="/collections/new-wellness">Wellness</a> <br />
                                        <a href="/collections/new-desk">Desk</a> <br />
                                        <a href="/collections/new-living">Living</a> <br />
                                    </div>
                                )}
                            </div>
                            <hr style={{margin:'5px 0px'}}/>


                            <div className={styles.menuItemSm}>
                                <button onClick={() => toggleMenu('privacy')} className={styles.sliderow}>
                                    <span className={styles.titleSm}>PRIVACY + ACCESIBILITY</span>
                                    <span className={styles.chevron}>
                                        <i className={`bi ${openMenu === 'privacy' ? 'bi-chevron-up' : 'bi-chevron-right'}`}></i>
                                    </span>
                                </button>
                                {openMenu === 'privacy' && (
                                    <div className={styles.subMenuSm}>
                                        <a href="/collections/new-from-ban-do">New from ban.do</a>  <br />
                                        <a href="/collections/new-clothing">Clothing</a> <br />
                                        <a href="/collections/new-accessories">Accessories</a> <br />
                                        <a href="/collections/new-wellness">Wellness</a> <br />
                                        <a href="/collections/new-desk">Desk</a> <br />
                                        <a href="/collections/new-living">Living</a> <br />
                                    </div>
                                )}
                            </div>
                            <hr style={{margin:'5px 0px'}}/>


                        </section>



                        <section className={`${styles.logoSection} mb-4 text-center`}>
                            {/* Facebook */}
                            <a
                                data-mdb-ripple-init
                                className={`${styles.iconbtm} btn btn-link btn-floating btn-lg text-body m-1`}
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            {/* Twitter */}
                            <a
                                data-mdb-ripple-init
                                className={`${styles.iconbtm} btn btn-link btn-floating btn-lg text-body m-1`}
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            >
                                <i className="bi bi-twitter"></i>
                            </a>

                            {/* Google */}
                            <a
                                data-mdb-ripple-init
                                className={`${styles.iconbtm} btn btn-link btn-floating btn-lg text-body m-1`}
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            >
                                <i className="bi bi-google"></i>
                            </a>

                            {/* Instagram */}
                            <a
                                data-mdb-ripple-init
                                className={`${styles.iconbtm} btn btn-link btn-floating btn-lg text-body m-1`}
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                            {/* LinkedIn */}
                            <a
                                data-mdb-ripple-init
                                className={`${styles.iconbtm} btn btn-link btn-floating btn-lg text-body m-1`}
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>

                        </section>
                    </div>

                    <div className={`${styles.copyrightDiv} text-start p-3`} >
                        © 2020 Copyright:
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">ban.do.com</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}
