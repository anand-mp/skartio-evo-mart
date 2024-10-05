import React from 'react'
import styles from "./About.module.scss"

export default function About() {
    return (
        <div>
            <div className="px-4  my-5 text-center">

                <h2 className={`${styles.heading} `}>ABOUT US</h2>
                <div className="col-lg-6 mx-auto">
                    <p className={`${styles.para} lead mb-4`}>
                        We exist to help you be your best and we encourage joy. We put you first—and, more importantly, we believe you should put yourself first. Since 2008 we’ve been curating and creating clothes, accessories, planners, and more to make life a little bit brighter and a lot more fun. Over a decade later, this remains our mission, as does drawing awareness to mental health issues and creating products dedicated to you and your well-being.
                    </p>
                </div>
            </div>
        </div>
    )
}
