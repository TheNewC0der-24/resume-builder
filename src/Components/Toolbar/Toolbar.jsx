import React from 'react';
import styles from './Toolbar.module.css';

import { BiDownload } from 'react-icons/bi';

const Toolbar = () => {

    const colors = ["#00b0ff", "#00bfa6", "#f50057", "#536dfe", "#f9a826"]

    return (
        <div className='container'>
            <h1 className='text-center my-5'>Resume Builder</h1>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {colors.map((item) => (
                        <span
                            key={item}
                            style={{ backgroundColor: item }}
                            className={styles.color}
                        />
                    ))}
                </div>
                <button>Download<BiDownload className='fs-4' /></button>
            </div>
        </div>
    )
}

export default Toolbar;