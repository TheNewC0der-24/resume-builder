import React from 'react';
import styles from './InputControl.module.css';

const InputControl = ({ Label, ...props }) => {
    return (
        <>
            <form>
                <div className="mb-3">
                    {
                        Label && <label className='form-label'>{Label}</label>
                    }
                    <input type='text' className={`${styles.input} form-control`} {...props} />
                </div>
            </form>
        </>
    )
}

export default InputControl;