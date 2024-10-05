import React, { useState } from 'react'
import styles from "./Header.module.scss"
import Link from 'next/link';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setSearchValue('')
  };

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu:any) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };


  return (
    <div className={styles.navMargin}>
      <div className={`${styles.lgScreen} fixed-top`}>

        <div className={` ${styles.topNav} col-12 d-flex justify-content-between align-items-center`} >
          <i className={`${styles.icon} bi bi-universal-access`}></i>
          <span style={{ flexGrow: 1, textAlign: "center" }} className={`${styles.alertTxt}`}>
            SALE ALERT: UP TO 60% OFF FALL CLOTHES AND ACCESSORIES!
          </span>
        </div>

        <div className={`${styles.navbarWrapper} `}>
          <header className={`${styles.headerWrapper} container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4  `}>
            <div className="col-md-2 mb-2 mb-md-0">
              <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
        <use href="#bootstrap"></use>
      </svg> */}
                <img src='https://www.bando.com/cdn/shop/files/bando-logo_160x.png?v=1672181650' className={styles.logo} />
              </a>
            </div>

            <ul className={`${styles.navList} nav col-12 col-md-auto mb-2 justify-content-center mb-md-0`}>
              <div className={`${styles.menuItem} ${styles.parent}`} role="button" aria-haspopup="true" aria-expanded="false">
                <a href="/new" className={styles.navlinkTop}>
                  <span className={styles.navtext}>NEW</span>
                </a>
                <div className={styles.dropdown} id="dropdown" >
                  <div className={styles.dropdownWrapper} >
                    <div className={styles.dropdownInner}>
                      <a href="/collections/new-from-ban-do" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '10ms' }}>
                        <span className={styles.navtext}>NEW FROM ban.do</span>
                      </a>
                      <a href="/collections/new-clothing" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '60ms' }}>
                        <span className={styles.navtext}>CLOTHING</span>
                      </a>
                      <a href="/collections/new-accessories" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '110ms' }}>
                        <span className={styles.navtext}>ACCESSORIES</span>
                      </a>
                      <a href="/collections/new-wellness" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '160ms' }}>
                        <span className={styles.navtext}>WELLNESS</span>
                      </a>
                      <a href="/collections/new-desk" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '210ms' }}>
                        <span className={styles.navtext}>DESK</span>
                      </a>
                      <a href="/collections/new-living" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '260ms' }}>
                        <span className={styles.navtext}>Living</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.menuItem} ${styles.parent}`} role="button" aria-haspopup="true" aria-expanded="false">
                <a href="/collections/new" className={styles.navlinkTop}>
                  <span className={styles.navtext}>DESK</span>
                </a>
                <div className={styles.dropdown} id="dropdown">
                  <div className={styles.dropdownWrapper} >
                    <div className={styles.dropdownInner}>
                      <a href="/collections/new-from-ban-do" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '10ms' }}>
                        <span className={styles.navtext}>NEW FROM ban.do</span>
                      </a>
                      <a href="/collections/new-clothing" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '60ms' }}>
                        <span className={styles.navtext}>CLOTHING</span>
                      </a>
                      <a href="/collections/new-accessories" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '110ms' }}>
                        <span className={styles.navtext}>ACCESSORIES</span>
                      </a>
                      <a href="/collections/new-wellness" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '160ms' }}>
                        <span className={styles.navtext}>WELLNESS</span>
                      </a>
                      <a href="/collections/new-desk" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '210ms' }}>
                        <span className={styles.navtext}>DESK</span>
                      </a>
                      <a href="/collections/new-living" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '260ms' }}>
                        <span className={styles.navtext}>Living</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.menuItem} ${styles.parent}`} role="button" aria-haspopup="true" aria-expanded="false">
                <a href="/collections/new" className={styles.navlinkTop}>
                  <span className={styles.navtext}>CLOTHING</span>
                </a>
                <div className={styles.dropdown} id="dropdown">
                  <div className={styles.dropdownWrapper} >
                    <div className={styles.dropdownInner}>
                      <a href="/collections/new-from-ban-do" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '10ms' }}>
                        <span className={styles.navtext}>NEW FROM ban.do</span>
                      </a>
                      <a href="/collections/new-clothing" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '60ms' }}>
                        <span className={styles.navtext}>CLOTHING</span>
                      </a>
                      <a href="/collections/new-accessories" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '110ms' }}>
                        <span className={styles.navtext}>ACCESSORIES</span>
                      </a>
                      <a href="/collections/new-wellness" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '160ms' }}>
                        <span className={styles.navtext}>WELLNESS</span>
                      </a>
                      <a href="/collections/new-desk" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '210ms' }}>
                        <span className={styles.navtext}>DESK</span>
                      </a>
                      <a href="/collections/new-living" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '260ms' }}>
                        <span className={styles.navtext}>Living</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.menuItem} ${styles.parent}`} role="button" aria-haspopup="true" aria-expanded="false">
                <a href="/collections/new" className={styles.navlinkTop}>
                  <span className={styles.navtext}>ACCESSORIES</span>
                </a>
                <div className={styles.dropdown} id="dropdown">
                  <div className={styles.dropdownWrapper} >
                    <div className={styles.dropdownInner}>
                      <a href="/collections/new-from-ban-do" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '10ms' }}>
                        <span className={styles.navtext}>NEW FROM ban.do</span>
                      </a>
                      <a href="/collections/new-clothing" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '60ms' }}>
                        <span className={styles.navtext}>CLOTHING</span>
                      </a>
                      <a href="/collections/new-accessories" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '110ms' }}>
                        <span className={styles.navtext}>ACCESSORIES</span>
                      </a>
                      <a href="/collections/new-wellness" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '160ms' }}>
                        <span className={styles.navtext}>WELLNESS</span>
                      </a>
                      <a href="/collections/new-desk" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '210ms' }}>
                        <span className={styles.navtext}>DESK</span>
                      </a>
                      <a href="/collections/new-living" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '260ms' }}>
                        <span className={styles.navtext}>Living</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              <div className={`${styles.menuItem} ${styles.parent}`} role="button" aria-haspopup="true" aria-expanded="false">
                <a href="/collections/new" className={styles.navlinkTop}>
                  <span className={styles.navtext}>WELLNESS</span>
                </a>
                <div className={styles.dropdown} id="dropdown">
                  <div className={styles.dropdownWrapper} >
                    <div className={styles.dropdownInner}>
                      <a href="/collections/new-from-ban-do" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '10ms' }}>
                        <span className={styles.navtext}>NEW FROM ban.do</span>
                      </a>
                      <a href="/collections/new-clothing" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '60ms' }}>
                        <span className={styles.navtext}>CLOTHING</span>
                      </a>
                      <a href="/collections/new-accessories" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '110ms' }}>
                        <span className={styles.navtext}>ACCESSORIES</span>
                      </a>
                      <a href="/collections/new-wellness" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '160ms' }}>
                        <span className={styles.navtext}>WELLNESS</span>
                      </a>
                      <a href="/collections/new-desk" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '210ms' }}>
                        <span className={styles.navtext}>DESK</span>
                      </a>
                      <a href="/collections/new-living" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '260ms' }}>
                        <span className={styles.navtext}>Living</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              <div className={`${styles.menuItem} ${styles.parent}`} role="button" aria-haspopup="true" aria-expanded="false">
                <a href="/collections/new" className={styles.navlinkTop}>
                  <span className={styles.navtext}>LIVING</span>
                </a>
                <div className={styles.dropdown} id="dropdown">
                  <div className={styles.dropdownWrapper} >
                    <div className={styles.dropdownInner}>
                      <a href="/collections/new-from-ban-do" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '10ms' }}>
                        <span className={styles.navtext}>NEW FROM ban.do</span>
                      </a>
                      <a href="/collections/new-clothing" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '60ms' }}>
                        <span className={styles.navtext}>CLOTHING</span>
                      </a>
                      <a href="/collections/new-accessories" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '110ms' }}>
                        <span className={styles.navtext}>ACCESSORIES</span>
                      </a>
                      <a href="/collections/new-wellness" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '160ms' }}>
                        <span className={styles.navtext}>WELLNESS</span>
                      </a>
                      <a href="/collections/new-desk" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '210ms' }}>
                        <span className={styles.navtext}>DESK</span>
                      </a>
                      <a href="/collections/new-living" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '260ms' }}>
                        <span className={styles.navtext}>Living</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.menuItem} ${styles.parent}`} role="button" aria-haspopup="true" aria-expanded="false">
                <a href="/collections/new" className={styles.navlinkTop}>
                  <span className={styles.navtext}>SALE</span>
                </a>
                <div className={styles.dropdown} id="dropdown">
                  <div className={styles.dropdownWrapper} >
                    <div className={styles.dropdownInner}>
                      <a href="/collections/new-from-ban-do" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '10ms' }}>
                        <span className={styles.navtext}>NEW FROM ban.do</span>
                      </a>
                      <a href="/collections/new-clothing" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '60ms' }}>
                        <span className={styles.navtext}>CLOTHING</span>
                      </a>
                      <a href="/collections/new-accessories" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '110ms' }}>
                        <span className={styles.navtext}>ACCESSORIES</span>
                      </a>
                      <a href="/collections/new-wellness" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '160ms' }}>
                        <span className={styles.navtext}>WELLNESS</span>
                      </a>
                      <a href="/collections/new-desk" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '210ms' }}>
                        <span className={styles.navtext}>DESK</span>
                      </a>
                      <a href="/collections/new-living" className={`${styles.navlink} ${styles.child}`} style={{ transitionDelay: '260ms' }}>
                        <span className={styles.navtext}>Living</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              <div className={`${styles.menuItem} ${styles.parent}`} role="button" aria-haspopup="true" aria-expanded="false">
                <a href="/rewards" className={styles.navlinkTop}>
                  <span className={styles.navtext}>REWARDS</span>
                </a>

              </div>

            </ul>

            <div className="col-md-2 text-end">
              <Link href="/login"><i className={`${styles.rightIcon} bi bi-person`} ></i></Link>
              &nbsp; &nbsp;
              <i className={`${styles.rightIcon} bi bi-search`} onClick={toggleDropdown}></i> &nbsp; &nbsp;

              <span className="visually-hidden">Search</span>

              {isOpen && (
                <div className={styles.dropdownSearch}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <i className={`${styles.closeIcon} bi bi-x`} onClick={closeDropdown}></i>
                </div>
              )}
              <i className={`${styles.cartIcon} bi bi-bag`} ></i>
            </div>
          </header>
        </div>

      </div>

      <div className={`${styles.smScreen} fixed-top`}>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between">
            {/* Left: Menu Button */}
            <div>
              <button
                className={`${styles.navbarTogglerSm} navbar-toggler`}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            {/* Center: Brand */}
            <a className="navbar-brand mx-auto" href="#">
              <img src='https://www.bando.com/cdn/shop/files/bando-logo_220x.png?v=1672181650' className={styles.logoSmScreen} />
            </a>

            {/* Right: Cart Icon */}
            <div>
              <i className={`${styles.iconSmScreen} bi bi-search`} onClick={toggleDropdown}></i>
              <span className="visually-hidden" >Search</span>

              {isOpen && (
                <div className={styles.dropdownSearch}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <i className={`${styles.closeIcon} bi bi-x`} onClick={closeDropdown}></i>
                </div>
              )}
              <i className={`${styles.iconSmScreen} bi bi-bag`}></i>
            </div>

            {/* Offcanvas Menu */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <i className={`${styles.personIconSm} bi bi-person`}></i>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className={styles.drawerMenu}>
                  <hr/>
                  <div className={styles.menuItemSm}>
                    <button onClick={() => toggleMenu('new')} className={styles.sliderow}>
                      <span className={styles.title}>New</span>
                      <span className={styles.chevron}>
                      <i className={`bi ${openMenu === 'new' ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                      </span>
                    </button>
                    {openMenu === 'new' && (
                      <div className={styles.subMenu}>
                        <hr/>
                        <a href="/collections/new-from-ban-do">New from ban.do</a><hr/>
                        <a href="/collections/new-clothing">Clothing</a><hr/>
                        <a href="/collections/new-accessories">Accessories</a><hr/>
                        <a href="/collections/new-wellness">Wellness</a><hr/>
                        <a href="/collections/new-desk">Desk</a><hr/>
                        <a href="/collections/new-living">Living</a>
                      </div>
                    )}
                  </div>
                  <hr/>

                  {/* Repeat for other menu items */}
                  <div className={styles.menuItemSm}>
                    <button onClick={() => toggleMenu('desk')} className={styles.sliderow}>
                      <span className={styles.title}>Desk</span>
                      <span className={styles.chevron}>
                      <i className={`bi ${openMenu === 'new' ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                      </span>
                    </button>
                    {openMenu === 'desk' && (
                      <div className={styles.subMenu}>
                        <hr/>
                        <a href="/collections/planners">Planners + Calendars</a><hr/>
                        <a href="/collections/notebooks-folders">Notebooks + Folders</a><hr/>
                        <a href="/collections/desk-accessories">Desk Accessories</a><hr/>
                        <a href="/collections/writing-supplies">Writing Supplies</a><hr/>
                        <a href="/collections/stickers-tape">Stickers + Tape</a><hr/>
                        <a href="/collections/card">Cards</a>
                      </div>
                    )}
                  </div>
                  <hr/>


                  <div className={styles.menuItemSm}>
                    <button onClick={() => toggleMenu('Clothing')} className={styles.sliderow}>
                      <span className={styles.title}>Clothing</span>
                      <span className={styles.chevron}>
                      <i className={`bi ${openMenu === 'new' ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                      </span>
                    </button>
                    {openMenu === 'Clothing' && (
                      <div className={styles.subMenu}>
                        <hr/>
                        <a href="/collections/planners">Planners + Calendars</a><hr/>
                        <a href="/collections/notebooks-folders">Notebooks + Folders</a><hr/>
                        <a href="/collections/desk-accessories">Desk Accessories</a><hr/>
                        <a href="/collections/writing-supplies">Writing Supplies</a><hr/>
                        <a href="/collections/stickers-tape">Stickers + Tape</a><hr/>
                        <a href="/collections/card">Cards</a>
                      </div>
                    )}
                  </div>
                  <hr/>


                  <div className={styles.menuItemSm}>
                    <button onClick={() => toggleMenu('Accessories')} className={styles.sliderow}>
                      <span className={styles.title}>Accessories</span>
                      <span className={styles.chevron}>
                      <i className={`bi ${openMenu === 'new' ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                      </span>
                    </button>
                    {openMenu === 'Accessories' && (
                      <div className={styles.subMenu}>
                        <hr/>
                        <a href="/collections/planners">Planners + Calendars</a><hr/>
                        <a href="/collections/notebooks-folders">Notebooks + Folders</a><hr/>
                        <a href="/collections/desk-accessories">Desk Accessories</a><hr/>
                        <a href="/collections/writing-supplies">Writing Supplies</a><hr/>
                        <a href="/collections/stickers-tape">Stickers + Tape</a><hr/>
                        <a href="/collections/card">Cards</a>
                      </div>
                    )}
                  </div>
                  <hr/>


                  <div className={styles.menuItemSm}>
                    <button onClick={() => toggleMenu('Wellness')} className={styles.sliderow}>
                      <span className={styles.title}>Wellness</span>
                      <span className={styles.chevron}>
                      <i className={`bi ${openMenu === 'new' ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                      </span>
                    </button>
                    {openMenu === 'Wellness' && (
                      <div className={styles.subMenu}>
                        <hr/>
                        <a href="/collections/planners">Planners + Calendars</a><hr/>
                        <a href="/collections/notebooks-folders">Notebooks + Folders</a><hr/>
                        <a href="/collections/desk-accessories">Desk Accessories</a><hr/>
                        <a href="/collections/writing-supplies">Writing Supplies</a><hr/>
                        <a href="/collections/stickers-tape">Stickers + Tape</a><hr/>
                        <a href="/collections/card">Cards</a>
                      </div>
                    )}
                  </div>
                  <hr/>
                  {/* Continue for other categories */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

  )
}
