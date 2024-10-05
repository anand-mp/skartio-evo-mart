import React, { useState } from 'react'
import styles from "./ProductDetails.module.scss"

export default function ProductDetails() {

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu: any) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };


  return (
    <div className='container'>
      <nav className={`${styles.breadCrumb} py-1`} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
      <section id={styles.productInfo}>

        <div className={styles.itemImageParent}>
          <div className={styles.itemListVertical}>
            <div className={styles.thumbBox}>
              <img src="https://i.ibb.co/VJf6fXm/thumb1.jpg" alt="thumbnail" />
            </div>
            <div className={styles.thumbBox}>
              <img src="https://i.ibb.co/Jt5zc58/thumb2.jpg" alt="thumbnail" />
            </div>
            <div className={styles.thumbBox}>
              <img src="https://i.ibb.co/Yf9LMpy/thumb3.jpg" alt="thumbnail" />
            </div>
            <div className={styles.thumbBox}>
              <img src="https://i.ibb.co/60hPGy2/thumb4.jpg" alt="thumbnail" />
            </div>
          </div>
          <div className={styles.itemImageMain}>
            <img src="https://i.ibb.co/xYpFY0T/item1.jpg" alt="default" />
          </div>
        </div>

        <div className={styles.itemInfoParent}>
          <div className={styles.mainInfo}>
            <div className={styles.starRating}>
              <span>★★★★</span>★ <span className={styles.starRatingTxt}>6 Reviews</span>
            </div>
            <h3 className={styles.productTitle}>EYEBOGLER Regular Fit Men's Cotton T-Shirt</h3>
            <div className={styles.storeName}>ban.DO</div>

            <div className={styles.priceTxt}>₹ 449.00</div>
            <div className={styles.descTxt}>20% OFF W/ CODE GIMME20</div>
            <div className={styles.inputDiv}>
              <button className={styles.signInBtn}>Add to bag</button>
            </div>
          </div>

          {/* <div className={styles.selectItems}>
            <div className={styles.changeColor}>
              <label><b>Colour:</b> Black</label><br />
              <div className={styles.thumbBox}>
                <img src="https://i.ibb.co/QjkJJk3/select1.jpg" alt="thumbnail" />
              </div>
              <div className={styles.thumbBox}>
                <img src="https://i.ibb.co/C297yD0/select2.jpg" alt="thumbnail" />
              </div>
            </div>

            <div className={styles.changeSize}>
              <label><b>Size:</b></label><br />
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
              </select>
            </div>

            <div className={styles.description}>
              <ul>
                <li>Care Instructions: Machine Wash</li>
                <li>Fit Type: Classic Fit</li>
                <li>Color name: Black-White</li>
                <li>Material: Cotton</li>
                <li>Pattern: Solid</li>
              </ul>
            </div>
          </div> */}

          <div className='my-5'>
            <div className={styles.menuItemSm}>
              <hr className={styles.horizontalLine} />
              <button onClick={() => toggleMenu('new')} className={styles.sliderow}>
                <span className={styles.titleSm}>Description</span>
                <span className={styles.chevron}>
                  <i className={`bi ${openMenu === 'new' ? 'bi-chevron-down' : 'bi-chevron-right'}`} ></i>
                </span>
              </button>

              {openMenu === 'new' && (
                <div className={styles.subMenuSm}>
                  <p className={styles.descParaTxt}>
                    It’s no secret that we love Baggu’s classic reusable bags. And we also love things that are little versions of bigger things. Like baby shoes, tiny houses, Barbie hairbrushes, and this baby Baggu! It’s the perfect size for lunches or picking up food to-go or when you only need a couple things at the store.
                  </p>

                  <ul className={styles.list}>
                    <li>Baggu x Sanrio</li>
                    <li>100% ripstop nylon (40% recycled)</li>
                    <li>18 in. × 10 in. × 4 in.</li>
                    <li>Holds 50 lbs.
                    </li>
                    <li>Machine washable
                    </li>
                  </ul>

                  <p className={styles.descParaTxt}>Item SKU: GP-334392
                  </p>
                </div>
              )}
              <hr className={styles.horizontalLine} />

            </div>

            <div className={styles.menuItemSm}>
              <button onClick={() => toggleMenu('new1')} className={styles.sliderow}>
                <span className={styles.titleSm}>Shipping</span>
                <span className={styles.chevron}>
                  <i className={`bi ${openMenu === 'new1' ? 'bi-chevron-down' : 'bi-chevron-right'}`} ></i>
                </span>
              </button>

              {openMenu === 'new1' && (
                <div className={styles.subMenuSm}>
                  <p className={styles.descParaTxt}>
                    It’s no secret that we love Baggu’s classic reusable bags. And we also love things that are little versions of bigger things. Like baby shoes, tiny houses, Barbie hairbrushes, and this baby Baggu! It’s the perfect size for lunches or picking up food to-go or when you only need a couple things at the store.
                  </p>

                  <p className={styles.descParaTxt}>
                    It’s no secret that we love Baggu’s classic reusable bags. And we also love things that are little versions of bigger things. Like baby shoes, tiny houses, Barbie hairbrushes, and this baby Baggu!
                  </p>
                </div>
              )}
              <hr className={styles.horizontalLine} />

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
