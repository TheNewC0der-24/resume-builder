import React from 'react';
import styles from './Info.module.css';

import summary from '../../assets/summary-skills.png';

const Info = () => {

    return (
        <div className={styles.container} id='info'>
            <div className='row mt-5'>
                <div className={`${styles.left} col-md-6 text-white p-5`}>
                    <div className={`${styles.info} mt-5 ms-5`}>
                        <h1 className='fw-bold'>Step-by-Step <br /> Guidance</h1>
                        <h5 className='mt-3'>Let us guide you with instructions through every line of your <span className='fw-bold'>RESUME.</span></h5>
                    </div>
                </div>

                <div className={`${styles.right} col-md-6 d-flex justify-content-center mx-auto p-5`}>
                    <img src={summary} className='img-fluid' alt="Summary" />
                </div>
            </div>
        </div>
    )
}

export default Info;