import React from 'react';
import styles from './Header.module.css';
import resume from '../../assets/Resume.svg';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>

                <h1 className={styles.heading}>
                    A <span className='fw-bold'>Resume</span> that stands out !
                </h1>
                <h2 className={styles.heading}>
                    Make your own resume. <span className='fw-bold'>It's free</span>
                </h2>
            </div>

            <div className={styles.right}>
                <img src={resume} alt="Resume" />
            </div>
        </div>
    )
}

export default Header;