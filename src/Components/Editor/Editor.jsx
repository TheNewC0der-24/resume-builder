import React, { useState } from 'react';
import styles from './Editor.module.css';

const Editor = (props) => {

    const sections = props.sections;

    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);

    return (
        <div className='container mt-5'>
            <div className='card'>
                <div className="card-body">
                    <div className='card-header'>
                        <nav className="nav d-flex justify-content-between gap-3" style={{ cursor: "pointer" }}>
                            {Object.keys(sections)?.map((key) => (
                                <div className={activeSection === key ? styles.active : ""} onClick={() => setActiveSection(key)} key={key}>
                                    {sections[key]}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;

