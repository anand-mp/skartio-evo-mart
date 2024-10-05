import React from 'react'
import styles from './HomeCards.module.scss'

export default function HomeCards() {
    return (
        <div className={styles.mainDiv}>
            <div className="container">
                <div className="row justify-content-center " style={{ textAlign: 'center' }}>
                    <div className={`${styles.img} col-xs-12 col-sm-6 col-md-4 `}>
                        <a className="navbar-brand logo" href="/">
                            <img style={{marginBottom:"20px"}} src="https://img.freepik.com/free-vector/skin-treatment-cosmetic_23-2147697213.jpg?t=st=1727158037~exp=1727161637~hmac=16e19694406cbb791cb792bdd2b2013e1485d0971ec79d0f4579e8287b28afc3&w=740" />
                        </a>
                    </div>

                    <div className={`${styles.img} col-xs-12 col-sm-6 col-md-4 `}>
                        <a className="navbar-brand logo" href="/">
                            <img style={{marginBottom:"20px"}} src="https://img.freepik.com/free-vector/pink-cosmetic-advertising_23-2147713641.jpg?t=st=1727158000~exp=1727161600~hmac=e4879e9a5f224c6c35076702bbbb7999cc225bdc1fb1632d0bf2dfaed9ebc3e7&w=740" />
                        </a>
                    </div>


                    <div className={`${styles.img} col-xs-12 col-sm-6 col-md-4 `}>
                        <a className="navbar-brand logo" href="/">
                            <img style={{marginBottom:"20px"}} src="https://img.freepik.com/free-vector/realistic-natural-cosmetic-advertisement-background_52683-9569.jpg?t=st=1727158312~exp=1727161912~hmac=d31e6e9600d2a5e03294f9f2b33fa174355d85c8397eacb91909fcf4a028dfb4&w=740" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
