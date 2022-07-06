import React, { useRef, useState } from 'react';
import styles from './Toolbar.module.css';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';

import ReactToPrint from 'react-to-print';

const Toolbar = () => {

    const colors = ["#00b0ff", "#00bfa6", "#f50057", "#536dfe", "#f9a826"]

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        others: "Others"
    }

    const [resumeInfo, setResumeInfo] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievements]: {
            id: sections.achievements,
            sectionTitle: sections.achievements,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.others]: {
            id: sections.others,
            sectionTitle: sections.others,
            detail: "",
        },
    });

    const [activeColor, setActiveColor] = useState(colors[0]);

    const resumeRef = useRef();

    return (
        <div className='container'>
            <h1 className={`${styles.heading} text-center my-5`}>Resume Builder</h1>
            <div className="row">
                <div className={`${styles.colors} col-md-6 d-flex justify-content-center gap-3`}>
                    {colors.map((item) => (
                        <span
                            key={item}
                            style={{ backgroundColor: item, width: "30px", height: "30px" }}
                            className={`${styles.colorBtn} ${activeColor === item ? styles.active : ""} btn rounded-5`}
                            onClick={() => setActiveColor(item)}
                        />
                    ))}
                </div>
                <ReactToPrint
                    trigger={() => {
                        return (
                            <div className={`${styles.margin} col-md-6 text-center`}>
                                <button className={`${styles.downloadBtn} btn btn-primary`}>
                                    <span>Download</span>
                                </button>
                            </div>
                        );
                    }}
                    content={() => resumeRef.current}
                />
            </div>
            <div>
                <Editor sections={sections} info={resumeInfo} setInfo={setResumeInfo} />
            </div>
            <h1 className='text-center mt-5'>Resume Template</h1>
            <Resume ref={resumeRef} sections={sections} info={resumeInfo} activeColor={activeColor} />
        </div>
    )
}

export default Toolbar;