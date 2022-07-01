import React from 'react';
import styles from './Header.module.css';
import resume from '../../assets/Resume.svg';

const Header = () => {
    return (
        <div className={styles.container}>
            <div>
                <span className="badge text-bg-primary me-2">Fast.</span>
                <span className="badge text-bg-primary me-2">Easy.</span>
                <span className="badge text-bg-primary">Effective.</span>
                <h1 className={styles.heading}>
                    A <span className='fw-bold'>Resume</span> that stands out!
                </h1>
                <h3 className={styles.heading}>
                    Make your own resume. <span className='fw-bold'>It's free</span>
                </h3>
                <h1 className={`${styles.heading} mt-4`}>You're just minutes away from a <span>polished, professional</span> RESUME.</h1>
                <p className={`${styles.heading} ${styles.para} p-2 mt-3`}>
                    Take the next step toward the job you want with an impressive, eye-catching <h5 className='badge bg-dark fw-bold'>RESUME.</h5>
                </p>
            </div>

            <div className={styles.right}>
                <img src={resume} alt="Resume" />
            </div>
        </div>
    )
}

export default Header;