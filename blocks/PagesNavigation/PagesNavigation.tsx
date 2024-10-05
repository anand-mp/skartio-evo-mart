import React from 'react';
import styles from './PagesNavigation.module.scss'
import Link from 'next/link';


export default function PagesNavigation() {
    return (
        <div className='container'>
            <div className={`${styles.mainDiv}`}>
                <h1 className={styles.heading}>New Arrivals</h1>

                <div className={styles.collectionNavigation}>
                    <Link href='' className={styles.collectionNavigationItem}>
                        <img
                            src="https://www.bando.com/cdn/shop/files/new-clothing_6246fa04-4a08-40cf-b722-3906ee0c6b47.jpg?v=1725565346&%3Bwidth=100&em-format=avif&em-width=100"
                            alt="New Clothing"
                        /><br />
                        <span>New Clothing</span>
                    </Link>

                    <Link href='' className={styles.collectionNavigationItem}>
                        <img
                            src="https://www.bando.com/cdn/shop/files/new-accessories_c95950ca-e904-4238-88c3-a1def154450f.jpg?v=1725565659&%3Bwidth=100&em-format=avif&em-width=100"
                            alt="New Clothing"
                        /><br />
                        <span>New Accessories</span>
                    </Link>


                    <Link href='' className={styles.collectionNavigationItem}>
                        <img
                            src="https://www.bando.com/cdn/shop/files/new-wellness_76e06326-7e2e-40ff-857a-b18f7d844f34.jpg?v=1725565346&%3Bwidth=100&em-format=avif&em-width=100"
                            alt="New Clothing"
                        /><br />
                        <span>New Wellness</span>
                    </Link>

                    <Link href='' className={styles.collectionNavigationItem}>
                        <img
                            src="https://www.bando.com/cdn/shop/files/new-desk_ff0f78d5-1c00-4e93-a37c-67fc0240a1e3.jpg?v=1725565772&%3Bwidth=100&em-format=avif&em-width=100"
                            alt="New Clothing"
                        /><br />
                        <span>New Desk</span>
                    </Link>

                    <Link href='' className={styles.collectionNavigationItem}>
                        <img
                            src="https://www.bando.com/cdn/shop/files/new-living_a4b0b6b7-4e44-4b0f-93d5-8ee0c71bb825.jpg?v=1725565346&%3Bwidth=100&em-format=avif&em-width=100"
                            alt="New Clothing"
                        /><br />
                        <span>New Living</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
