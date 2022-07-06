import React, { useEffect, useState } from 'react';
import styles from './Resume.module.css';

import { FaLinkedinIn, FaGithub, FaPhoneAlt, FaAt, FaCalendar, FaLink } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Resume = (props) => {

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
                                    item.role && <h5>{item.role}</h5>
                                }
                                {
                                    item.companyName && <h5 className='text-danger'>{item.companyName}</h5>
                                }
                                {
                                    item.location &&
                                    <p>
                                        <IoLocationSharp className='text-danger me-1' />{item.location}
                                    </p>
                                }
                                {
                                    item.certificateLink &&
                                    <a href={item.certificateLink} target='_blank' rel="noreferrer" className='text-danger text-decoration-none'>
                                        <FaLink className='me-1' />{item.certificateLink}
                                    </a>
                                }
                                {
                                    item.startDate && item.endDate ? (
                                        <p className='mt-3'>
                                            <FaCalendar className='text-danger me-1' />{getFormatDate(item.startDate)} - {getFormatDate(item.endDate)}
                                        </p>
                                    ) : (
                                        ("")
                                    )
                                }
                                {
                                    item.points?.length > 0 && (
                                        <p>Work Description :
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
                                    item.projectName && <h5 className='text-danger'>{item.projectName}</h5>
                                }
                                {
                                    item.overview && <p align='justify'>{item.overview}</p>
                                }
                                {
                                    item.deployedLink && item.githubRepoLink &&
                                    <div className='row'>
                                        <a href={item.deployedLink} className='text-danger text-decoration-none mb-2'>
                                            <FaLink className='me-1' />Deployed Link : {item.deployedLink}
                                        </a>
                                        <a href={item.githubRepoLink} className='text-danger text-decoration-none mb-2'>
                                            <FaGithub className='me-1' />Repo Link : {item.githubRepoLink}
                                        </a>
                                    </div>
                                }
                                {
                                    item.points?.length > 0 && (
                                        <p>Description :
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
                                    item.degree && <h5>{item.degree}</h5>
                                }
                                {
                                    item.collegeName && <h5 className='text-danger'>{item.collegeName}</h5>
                                }
                                {
                                    item.startDate && item.endDate ? (
                                        <p className='mt-3'>
                                            <FaCalendar className='text-danger me-1' />{getFormatDate(item.startDate)} - {getFormatDate(item.endDate)}
                                        </p>
                                    ) : (
                                        ("")
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
                    information.achievements.points.map((item) => (
                        <div key={item.title}>
                            {
                                item.points?.length > 0 && (
                                    <ul>
                                        {item.points.map((elem, index) => (
                                            <li key={elem + index}>
                                                {elem}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </div>
                    ))
                }
            </div>,

        [sections.summary]:
            <div className="mb-5" key={"summary"} dragdraggable onDragOver={() => setTarget(information.summary.id)} onDragEnd={() => setSource(information.summary.id)}>
                <h3 className={`${styles.heading}`}>About Me</h3>
                <p align='justify'>{info.summary?.summary}</p>
            </div>,

        [sections.others]:
            <div className="mb-5" key={"other"} draggable onDragOver={() => setTarget(information.others.id)} onDragEnd={() => setSource(information.others.id)}>
                <h3 className={`${styles.heading}`}>{information.others.sectionTitle}</h3>
                <p align='justify'>{info.others?.others}</p>
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

    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Resume Template</h1>
                <div className="card">
                    <div className={`${container} card-body`}>
                        <div className={`${styles.header} card-header`}>
                            <h1>{information.basicInfo?.detail?.name}</h1>
                            <h5 className='text-danger'>{information.basicInfo?.detail?.title}</h5>

                            <div className={`${styles.links} mt-4 d-flex gap-5`}>
                                {
                                    information.basicInfo?.detail?.email &&
                                    (
                                        <a href={`mailto:${information.basicInfo?.detail?.email}`} type='email'>
                                            <FaAt className={`${styles.linkIcon} me-1`} />{information.basicInfo?.detail?.email}
                                        </a>
                                    )
                                }
                                {
                                    information.basicInfo?.detail?.phone &&
                                    (
                                        <a href={`tel:${information.basicInfo?.detail?.phone}`}>
                                            <FaPhoneAlt className={`${styles.linkIcon} me-1`} />{information.basicInfo?.detail?.phone}
                                        </a>
                                    )
                                }
                                {
                                    information.basicInfo?.detail?.linkedin &&
                                    (
                                        <a href={information.basicInfo?.detail?.linkedin} target="_blank" rel="noreferrer">
                                            <FaLinkedinIn className={`${styles.linkIcon} me-1`} />{information.basicInfo?.detail?.linkedin}
                                        </a>
                                    )
                                }
                                {
                                    information.basicInfo?.detail?.github &&
                                    (
                                        <a href={information.basicInfo?.detail?.github} target="_blank" rel="noreferrer">
                                            <FaGithub className={`${styles.linkIcon} me-1`} />{information.basicInfo?.detail?.github}
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-7'>
                                {
                                    columns[0].map(item => sectionDivs[item])
                                }
                            </div>
                            <div className='col-md-5'>
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
}

export default Resume;