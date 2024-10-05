import React, { useEffect, useState } from 'react';
import styles from './ProductGridItem.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';


const products = [
    {
        id: 1,
        name: 'Baby Baggu - Pink Spike',
        image: [
            'https://www.bando.com/cdn/shop/files/bando-3p-baggu-baby-baggu-pink-spike-01_53ff3b2a-149f-476e-ae99-ff5e8729861f.jpg?v=1723666167',
            'https://www.bando.com/cdn/shop/files/bando-3p-baggu-baby-baggu-pink-spike-02.jpg?v=1723558079',
            'https://www.bando.com/cdn/shop/files/bando-3p-baggu-baby-baggu-pink-spike-03.jpg?v=1723558079&em-format=avif&em-width=1024'
        ],
        price: '$9.00',
        compareAtPrice: '$12.00',
        vendor: 'Baggu',
    },
    {
        id: 2,
        name: 'Reusable Baggu - Yellow Sun',
        image: [
            'https://www.bando.com/cdn/shop/files/bando-il-fw24-cherry-carafe-03.jpg?v=1724687109&em-format=avif&em-width=1024',
            'https://www.bando.com/cdn/shop/files/bando-il-fw24-cherry-carafe-02.jpg?v=1723573552&em-format=avif&em-width=1024',
            'https://www.bando.com/cdn/shop/files/bando-il-fw24-cherry-carafe-01.jpg?v=1723573552&em-format=avif&em-width=1024'
                ],
        price: '$15.00',
        compareAtPrice: '$20.00',
        vendor: 'Baggu',
    },
    {
        id: 3,
        name: 'Reusable Baggu - Yellow Sun',
        image: [
            'https://www.bando.com/cdn/shop/files/bando-il-fw24-daily-mood-tracker-today-im-feeling-01_0da29dbd-1ebb-4c60-8236-64bc3fcc9d23.jpg?v=1721761658&em-format=avif&em-width=1024',
            'https://www.bando.com/cdn/shop/files/bando-il-fw24-daily-mood-tracker-today-im-feeling-03.jpg?v=1724687186&em-format=avif&em-width=1024',
            'https://www.bando.com/cdn/shop/files/bando-il-fw24-daily-mood-tracker-today-im-feeling-02.jpg?v=1723050331&em-format=avif&em-width=1024'
                ],
        price: '$15.00',
        compareAtPrice: '$20.00',
        vendor: 'Baggu',
    },
    {
        id: 4,
        name: 'Reusable Baggu - Yellow Sun',
        image: [
            'https://www.bando.com/cdn/shop/files/bando-il-fw24-quilted-blanket-01.jpg?v=1721749836&em-format=avif&em-width=1024',
            'https://www.bando.com/cdn/shop/files/bando-il-fw24-quilted-blanket-02.jpg?v=1721749836&em-format=avif&em-width=1024'
                ],
        price: '$15.00',
        compareAtPrice: '$20.00',
        vendor: 'Baggu',
    },
    // Add more products as needed
];




export default function ProductGridItem() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    const router = useRouter();

const isHomePage = router.pathname === '/';

    return (
        <div className={isHomePage ? 'container my-5' : 'container-fluid my-5'}>
            <div className="row d-flex justify-content-center">
                <h2 className={styles.homeSubtitle}>Featured Collections</h2>
                <div className={styles.tabs}>

                    <div className={styles['tabs-buttons']}>
                        <button
                            type="button"
                            className={`${styles['tab-link']} ${activeTab === 0 ? styles['current'] : ''}`}
                            onClick={() => handleTabClick(0)}
                            tabIndex={0}
                        >
                            <span>New Arrivals</span>
                        </button>
                        <button
                            type="button"
                            className={`${styles['tab-link']} ${activeTab === 1 ? styles['current'] : ''}`}
                            onClick={() => handleTabClick(1)}
                            tabIndex={1}
                        >
                            <span>Sale</span>
                        </button>
                    </div>

                </div>

                {/* Loop through each product and display the card */}
                {products.map((product, index) => {
                    const [currentSlide, setCurrentSlide] = useState(0);
                    const [isHovered, setIsHovered] = useState(false);
                    const images = product.image;
                    const slides = images.map((img) => ({ url: img }));

                    // Set up an interval to change slides when hovered
                    useEffect(() => {
                        let interval: any;
                        if (isHovered) {
                            interval = setInterval(() => {
                                setCurrentSlide((prev) => (prev + 1) % slides.length);
                            }, 3000);
                        }
                        return () => clearInterval(interval);
                    }, [isHovered, slides.length]);

                    const goToSlide = (index: any) => {
                        setCurrentSlide(index);
                    };

                    return (
                        
                        <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
                            <Link href="/" className={styles.linkTag}>
                                <div
                                    className={`${styles.card} card`}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <div className={styles.carousel} style={{ position: 'relative' }}>
                                        <div className={styles.carouselInner}>
                                            {slides.map((slide, index) => (
                                                <div
                                                    key={index}
                                                    className={`${styles.carouselItem} ${index === currentSlide ? styles.active : ''}`}
                                                >
                                                    <img src={slide.url} alt={`Slide ${index + 1}`} className={styles.slideImage} />
                                                </div>
                                            ))}
                                        </div>

                                        {isHovered && (
                                            <div className={`${styles.carouselIndicators} d-none d-lg-block`}>
                                                {slides.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                                                        onClick={() => goToSlide(index)}
                                                    ></button>
                                                ))}
                                            </div>
                                        )}

                                        {isHovered && (
                                            <div style={{ position: 'absolute', bottom: '10px' }} className={`${styles.btnDiv}`}>
                                                <button type="button" className={`${styles.quickviewBtn} btn`}>QUICK VIEW</button>
                                            </div>
                                        )}
                                    </div>

                                    <div className={`${styles.cardBody} card-body`}>
                                        <div className={styles.prdName}>{product.name.toUpperCase()}</div>
                                        <div className={styles.prdDesc}>{product.vendor}</div>
                                        <div className={styles.prdPrice}>{product.price}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
