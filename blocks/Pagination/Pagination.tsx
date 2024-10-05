import React from 'react';
import styles from './Pagination.module.scss';
import Link from 'next/link';

export default function Pagination() {
    return (
        <div className='container my-4 d-flex justify-content-center'>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {/* Previous Page */}
            <li className="page-item" >
              <Link href="#" className="page-link text-black" aria-label="Previous">
                <span aria-hidden="true">
                  <i className="bi bi-chevron-left"></i>
                </span>
              </Link>
            </li>
  
            {/* Page Numbers */}
            <li className="page-item">
              <Link href="#" className={`page-link text-black ${styles.noBorder}`}>1</Link>
            </li>
            <li className="page-item">
              <Link href="#" className={`page-link text-black ${styles.noBorder}`}>2</Link>
            </li>
            <li className="page-item">
              <Link href="#" className={`page-link text-black ${styles.noBorder}`}>3</Link>
            </li>
            <li className="page-item">
              <Link href="#" className={`page-link text-black ${styles.noBorder}`}>4</Link>
            </li>
            <li className="page-item">
              <Link href="#" className={`page-link text-black ${styles.noBorder}`}>5</Link>
            </li>
  
            {/* Next Page */}
            <li className="page-item">
              <Link href="#" className="page-link text-black" aria-label="Next">
                <span aria-hidden="true">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}
