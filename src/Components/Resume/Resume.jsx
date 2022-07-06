import React, { useEffect, useState, useRef, forwardRef } from 'react';
import styles from './Resume.module.css';

import { FaLinkedinIn, FaGithub, FaPhoneAlt, FaAt, FaCalendar, FaLink } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Resume = forwardRef((props, ref) => {

    const info = props.info;
    const sections = props.sections;

    const information = {
        workExp: info[sections.workExp],
        basicInfo: info[sections.basicInfo],
        project: info[sections.project],
        education: info[sections.education],
        achievements: info[sections.achievements],
        summary: info[sections.summary],
        others: info[sections.others],
    }

    const getFormatDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    const [source, setSource] = useState('');
    const [target, setTarget] = useState('');

    const [columns, setColumns] = useState([[], []]);

    const sectionDivs = {
        [sections.workExp]:
            <div className="mb-5" key={"workexp"} draggable onDragOver={() => setTarget(information.workExp.id)} onDragEnd={() => setSource(information.workExp.id)}>
                <h3 className={`${styles.heading}`}>{information.workExp.sectionTitle}</h3>
                <div className={styles.content}>
                    {
                        information.workExp.details.map((item) => (
                            <div key={item.title} className={styles.item}>
                                {
                                    item.role ? <h5>{item.role}</h5> : <div />
                                }
                                {
                                    item.companyName ? <h5 className={styles.color}>{item.companyName}</h5> : <div />
                                }
                                {
                                    item.location ?
                                        <p>
                                            <IoLocationSharp className={`${styles.color} me-1`} />{item.location}
                                        </p> : <div />
                                }
                                {
                                    item.certificateLink ?
                                        <a href={item.certificateLink} target='_blank' rel="noreferrer" className={`${styles.color} text-decoration-none mt-3`}>
                                            <FaLink className='me-1' />{item.certificateLink}
                                        </a> : <div />
                                }
                                {
                                    item.startDate && item.endDate ? (
                                        <p className='mt-3'>
                                            <FaCalendar className={`${styles.color} me-1`} />{getFormatDate(item.startDate)} - {getFormatDate(item.endDate)}
                                        </p>
                                    ) : (
                                        <div />
                                    )
                                }
                                {
                                    item.points?.length > 0 && (
                                        <p className='mt-3'>Work Description :
                                            <ul>
                                                {item.points.map((elem, index) => (
                                                    <li key={elem + index}>
                                                        {elem}
                                                    </li>
                                                ))}
                                            </ul>
                                        </p>
                                    )
                                }
                            </div>
                        ))}
                </div>
            </div>,

        [sections.project]:
            <div className="mb-5" key={"project"} draggable onDragOver={() => setTarget(information.project.id)} onDragEnd={() => setSource(information.project.id)}>
                <h3 className={`${styles.heading}`}>{information.project.sectionTitle}</h3>
                <div className={styles.content}>
                    {
                        information.project.details.map((item) => (
                            <div key={item.title} className={styles.item}>
                                {
                                    item.projectName ? <h5 className={styles.color}>{item.projectName}</h5> : <div />
                                }
                                {
                                    item.overview ? <p align='justify'>{item.overview}</p> : <div />
                                }
                                <div className='row'>
                                    {
                                        item.deployedLink ?
                                            <a href={item.deployedLink} target='_blank' rel="noreferrer" className={`${styles.color} text-decoration-none mt-2`}>
                                                <FaLink className='me-1' />Deployed Link
                                            </a> : <div />

                                    }
                                    {
                                        item.githubRepoLink ?
                                            <a href={item.githubRepoLink} target='_blank' rel="noreferrer" className={`${styles.color} text-decoration-none my-2`}>
                                                <FaGithub className='me-1' />Repo Link
                                            </a> : <div />
                                    }
                                </div>
                                {
                                    item.points?.length > 0 ? (
                                        <p>Description :
                                            <ul>
                                                {item.points.map((elem, index) => (
                                                    <li key={elem + index}>
                                                        {elem}
                                                    </li>
                                                ))}
                                            </ul>
                                        </p>
                                    ) : (
                                        <div />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>,

        [sections.education]:
            <div className="mb-5" key={"education"} draggable onDragOver={() => setTarget(information.education.id)} onDragEnd={() => setSource(information.education.id)}>
                <h3 className={`${styles.heading}`}>{information.education.sectionTitle}</h3>
                <div className={styles.content}>
                    {
                        information.education.details.map((item) => (
                            <div key={item.title} className={styles.item}>
                                {
                                    item.degree ? <h5>{item.degree}</h5> : <div />
                                }
                                {
                                    item.collegeName ? <h5 className={styles.color}>{item.collegeName}</h5> : <div />
                                }
                                {
                                    item.startDate && item.endDate ? (
                                        <p className='mt-2'>
                                            <FaCalendar className={`${styles.color} me-1`} />{getFormatDate(item.startDate)} - {getFormatDate(item.endDate)}
                                        </p>
                                    ) : (
                                        <div />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>,

        [sections.achievements]:
            <div className="mb-5" key={"achievement"} draggable onDragOver={() => setTarget(information.achievements.id)} onDragEnd={() => setSource(information.achievements.id)}>
                <h3 className={`${styles.heading}`}>{information.achievements.sectionTitle}</h3>
                {
                    information.achievements?.points?.length > 0 ? (
                        <ul>
                            {
                                information.achievements?.points.map((elem, index) => (
                                    <li key={elem + index}>
                                        {elem}
                                    </li>
                                ))
                            }
                        </ul>
                    ) : (
                        <div />
                    )
                }
            </div>,

        [sections.summary]:
            <div className="mb-5" key={"summary"} draggable onDragOver={() => setTarget(information.summary.id)} onDragEnd={() => setSource(information.summary.id)}>
                <h3 className={`${styles.heading}`}>About Me</h3>
                <p align='justify'>{information.summary?.detail}</p>
            </div>,

        [sections.others]:
            <div className="mb-5" key={"other"} draggable onDragOver={() => setTarget(information.others.id)} onDragEnd={() => setSource(information.others.id)}>
                <h3 className={`${styles.heading}`}>{information.others.sectionTitle}</h3>
                <p align='justify'>{information.others?.detail}</p>
            </div>
    }

    useEffect(() => {
        setColumns([
            [sections.summary, sections.education, sections.project],
            [sections.workExp, sections.achievements, sections.others]
        ]);
        // eslint-disable-next-line
    }, []);

    const swapSorceTarget = (source, target) => {
        if (!source || !target) return;

        const tempColumns = [[...columns[0]], [...columns[1]]];

        let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
        let sourceColumnIndex = 0;
        if (sourceRowIndex < 0) {
            sourceColumnIndex = 1;
            sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
        }

        let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
        let targetColumnIndex = 0;
        if (targetRowIndex < 0) {
            targetColumnIndex = 1;
            targetRowIndex = tempColumns[1].findIndex((item) => item === target);
        }

        const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
        tempColumns[sourceColumnIndex][sourceRowIndex] = tempColumns[targetColumnIndex][targetRowIndex];

        tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

        setColumns(tempColumns);
    }

    useEffect(() => {
        swapSorceTarget(source, target);
        // eslint-disable-next-line
    }, [source]);

    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!props.activeColor || !container) return;

        container.style.setProperty("--color", props.activeColor)
    }, [props.activeColor]);

    return (
        <>
            <div className="mb-5 mt-3">
                <div className="card" ref={ref}>
                    <div ref={containerRef} className={`${styles.container} card-body`}>
                        <div className={`${styles.header} card-header`}>
                            <h1>{information.basicInfo?.detail?.name}</h1>
                            <h5 className={styles.color}>{information.basicInfo?.detail?.title}</h5>

                            <div className={`${styles.links} mt-4 d-flex gap-5`}>
                                {
                                    information.basicInfo?.detail?.email ?
                                        (
                                            <a href={`mailto:${information.basicInfo?.detail?.email}`} type='email'>
                                                <FaAt className={`${styles.linkIcon} me-1`} />{information.basicInfo?.detail?.email}
                                            </a>
                                        ) : (
                                            <div />
                                        )
                                }
                                {
                                    information.basicInfo?.detail?.phone ?
                                        (
                                            <a href={`tel:${information.basicInfo?.detail?.phone}`}>
                                                <FaPhoneAlt className={`${styles.linkIcon} me-1`} />{information.basicInfo?.detail?.phone}
                                            </a>
                                        ) : (
                                            <div />
                                        )
                                }
                                {
                                    information.basicInfo?.detail?.linkedin ?
                                        (
                                            <a href={information.basicInfo?.detail?.linkedin} target="_blank" rel="noreferrer">
                                                <FaLinkedinIn className={`${styles.linkIcon} me-1`} />{information.basicInfo?.detail?.linkedin}
                                            </a>
                                        ) : (
                                            <div />
                                        )
                                }
                                {
                                    information.basicInfo?.detail?.github ?
                                        (
                                            <a href={information.basicInfo?.detail?.github} target="_blank" rel="noreferrer">
                                                <FaGithub className={`${styles.linkIcon} me-1`} />{information.basicInfo?.detail?.github}
                                            </a>
                                        ) : (
                                            <div />
                                        )
                                }
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-sm-7'>
                                {
                                    columns[0].map(item => sectionDivs[item])
                                }
                            </div>
                            <div className='col-sm-5'>
                                {
                                    columns[1].map(item => sectionDivs[item])
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

export default Resume;