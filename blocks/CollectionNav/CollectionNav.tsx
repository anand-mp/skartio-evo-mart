import React, { useState } from 'react'
import styles from './CollectionNav.module.scss'

export default function CollectionNav() {

    const [isFiltersOpen, setFiltersOpen] = useState(false);
    const [isSortOpen, setSortOpen] = useState(false);
    const [activeSort, setActiveSort] = useState('Featured');

    const toggleFilters = () => setFiltersOpen(!isFiltersOpen);
    const toggleSort = () => setSortOpen(!isSortOpen);

    const handleSortChange = (sortOption: any) => {
        setActiveSort(sortOption);
        setSortOpen(false); // Close the sort popout after selection
    };

    return (
        <div>
            <div className='container'>
                <nav className={styles.collectionNav}>
                    <div className={styles.collectionNavButtons}>
                        <button
                            className={styles.collectionFiltersToggle}
                            onClick={toggleFilters}
                            aria-expanded={isFiltersOpen}

                        >
                            <span className={isFiltersOpen ? styles.hide : styles.show}>Filter</span>
                            <svg aria-hidden="true" focusable="false" role="presentation" className={styles.icon} style={{ paddingTop: "5px" }}>
                                <path d="M0 0h10v1H0zm2 2.5h6v1H2zM6.5 5h-3v1h3z" fillRule="evenodd"></path>
                            </svg>
                        </button>

                        <div className={styles.collectionSort}>
                            <div className={styles.popoutNavbar}>
                                <button
                                    type="button"
                                    className={styles.popoutToggle}
                                    onClick={toggleSort}
                                    aria-expanded={isSortOpen}
                                    aria-controls="sort-list"
                                    style={{borderRight:'1px solid black'}}
                                >
                                    <span>{activeSort}</span>
                                    <svg aria-hidden="true" focusable="false" role="presentation" className={styles.icon} style={{ paddingTop: "5px" }}>
                                        <path d="M0 0h10v1H0zm2 2.5h6v1H2zM6.5 5h-3v1h3z" fillRule="evenodd" ></path>
                                    </svg>
                                </button>
                                {isSortOpen && (
                                    <ul id="sort-list" className={styles.popoutList}>
                                        {[
                                            'Featured',
                                            'Best selling',
                                            'Alphabetically, A-Z',
                                            'Alphabetically, Z-A',
                                            'Price, low to high',
                                            'Price, high to low',
                                            'Date, old to new',
                                            'Date, new to old',
                                        ].map((sortOption, idx) => (
                                            <li key={idx} className={styles.popoutListItem}>
                                                <a href="#" onClick={() => handleSortChange(sortOption)}>
                                                    {sortOption}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
