import React, { useState, useEffect } from 'react';
import InputControl from '../InputControl/InputControl';
import styles from './Editor.module.css';

import { FaTimes } from 'react-icons/fa';

const Editor = (props) => {

    const sections = props.sections;

    const info = props.info;

    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);

    const [activeInfo, setActiveInfo] = useState(info[sections[Object.keys(sections)[0]]]);

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

    const [activeDetailIndex, setActiveDetailIndex] = useState(0);

    const [values, setValues] = useState({
        name: activeInfo?.detail?.name || "",
        title: activeInfo?.detail?.title || "",
        linkedin: activeInfo?.detail?.linkedin || "",
        github: activeInfo?.detail?.github || "",
        email: activeInfo?.detail?.email || "",
        phone: activeInfo?.detail?.phone || "",
    });

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values };
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
    };

    const workExpBody = (
        <div className='container'>
            <div className='row'>
                <InputControl
                    Label='Role'
                    placeholder="Enter role eg. Frontend developer"
                    value={values.role}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, role: event.target.value }))
                    }
                />
                <InputControl
                    Label='Company Name'
                    placeholder="Enter company name eg. Google"
                    value={values.companyName}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, companyName: event.target.value }))
                    }
                />
            </div>
            <div className="row">
                <InputControl
                    Label="Certificate Link"
                    placeholder="Enter certificate link"
                    value={values.certificateLink}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, certificateLink: event.target.value }))
                    }
                />
                <InputControl
                    Label="Location"
                    placeholder="Enter location eg. Remote"
                    value={values.location}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, location: event.target.value }))
                    }
                />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <InputControl
                        Label="Start Date"
                        type="date"
                        placeholder="Enter start date of work"
                        value={values.startDate}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, startDate: event.target.value }))
                        }
                    />
                </div>
                <div className="col-md-6">
                    <InputControl
                        Label="End Date"
                        type="date"
                        placeholder="Enter end date of work"
                        value={values.endDate}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, endDate: event.target.value }))
                        }
                    />
                </div>
            </div>

            <div className="col">
                <label className='form-label'>Enter Work Description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
            </div>
        </div>
    );

    const projectBody = (
        <div className="container">
            <div className="row">
                <InputControl
                    Label="Project Name"
                    placeholder="Enter project name eg. Chat app"
                    value={values.projectName}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, projectName: event.target.value }))
                    }
                />
            </div>
            <InputControl
                Label="Overview"
                placeholder="Enter basic overview of project"
                value={values.overview}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, overview: event.target.value }))
                }
            />
            <div className='row'>
                <div className="col-md-6">
                    <InputControl
                        Label="Deployed Link"
                        placeholder="Enter deployed link of project"
                        value={values.deployedLink}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, deployedLink: event.target.value }))
                        }
                    />
                </div>
                <div className="col-md-6">
                    <InputControl
                        Label="Github Repo Link"
                        placeholder="Enter GitHub repo link of project"
                        value={values.githubRepoLink}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, githubRepoLink: event.target.value }))
                        }
                    />
                </div>
            </div>
            <div className='row'>
                <label className='form-label'>Enter project description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}

                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );

    const educationBody = (
        <div className='container'>
            <div className='row'>
                <InputControl
                    Label="Degree"
                    placeholder="Enter degree eg. B-tech"
                    value={values.degree}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, degree: event.target.value }))
                    }
                />
            </div>
            <InputControl
                Label="College/School Name"
                placeholder="Enter name of your college/school"
                value={values.collegeName}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, collegeName: event.target.value }))
                }
            />
            <div className='row'>
                <div className="col-md-6">
                    <InputControl
                        Label="Start Date"
                        type="date"
                        placeholder="Enter start date of this education"
                        value={values.startDate}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, startDate: event.target.value }))
                        }
                    />
                </div>
                <div className="col-md-6">
                    <InputControl
                        Label="End Date"
                        type="date"
                        placeholder="Enter end date of this education"
                        value={values.endDate}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, endDate: event.target.value }))
                        }
                    />
                </div>
            </div>
        </div>
    );

    const basicInfoBody = (
        <div className='container'>
            <div className='row'>
                <InputControl
                    Label="Full Name"
                    placeholder="Enter name"
                    value={values.name}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <InputControl
                    Label="Title"
                    placeholder="Enter your title eg. Frontend developer"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <div className='row'>
                <div className="col-md-6">
                    <InputControl
                        Label="Linkedin Profile"
                        type="url"
                        placeholder="Enter your linkedin profile link"
                        value={values.linkedin}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
                        }
                    />
                </div>
                <div className="col-md-6">
                    <InputControl
                        Label="Github Profile"
                        type="url"
                        placeholder="Enter your github profile link"
                        value={values.github}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, github: event.target.value }))
                        }
                    />
                </div>
            </div>
            <div className='row'>
                <InputControl
                    Label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <InputControl
                    Label="Contact Number"
                    type="number"
                    placeholder="Enter your phone number"
                    value={values.phone}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, phone: event.target.value }))
                    }
                />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className='container'>
            <div className='col'>
                <label className='form-label'>List your achievements</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );

    const summaryBody = (
        <div className='container'>
            <InputControl
                Label="Summary"
                placeholder="Enter your objective/summary"
                value={values.summary}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, summary: event.target.value }))
                }
            />
        </div>
    );

    const otherBody = (
        <div className='container'>
            <InputControl
                Label="Other"
                placeholder="Enter something"
                value={values.other}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, other: event.target.value }))
                }
            />
        </div>
    );

    const generateForm = () => {
        switch (sections[activeSection]) {
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.achievements:
                return achievementsBody;
            case sections.summary:
                return summaryBody;
            case sections.others:
                return otherBody;

            default:
                return null;
        }
    };

    useEffect(() => {
        const activeInfo = info[sections[activeSection]]
        setActiveInfo(activeInfo);
        setSectionTitle(sections[activeSection]);
        setActiveDetailIndex(0);
        setValues({
            // Basic Info
            name: activeInfo?.detail?.name || "",
            title: activeInfo?.detail?.title || "",
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.detail?.github || "",
            email: activeInfo?.detail?.email || "",
            phone: activeInfo?.detail?.phone || "",

            // Work Experience
            role: activeInfo?.detail?.role || "",
            companyName: activeInfo?.detail?.companyName || "",
            certificateLink: activeInfo?.details ? activeInfo.details[0]?.certificateLink || "" : "",
            location: activeInfo?.details?.location || "",

            // Project
            projectName: activeInfo?.details ? activeInfo.details[0]?.projectName || "" : "",
            overview: activeInfo?.details ? activeInfo.details[0]?.overview || "" : "",
            deployedLink: activeInfo?.details ? activeInfo.details[0]?.deployedLink || "" : "",
            githubRepoLink: activeInfo?.details ? activeInfo.details[0]?.githubRepoLink || "" : "",

            // Education
            degree: activeInfo?.details?.degree || "",
            collegeName: activeInfo?.details?.collegeName || "",

            // Summary
            summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",

            // Others
            other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",

            // For Education and Work Experience
            startDate: activeInfo?.details ? activeInfo.details[0]?.startDate || "" : "",
            endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",

            // For Project, Work Experience and Achievements  
            points: activeInfo?.details
                ? activeInfo.details[0]?.points
                    ? [...activeInfo.details[0]?.points]
                    : ""
                : activeInfo?.points
                    ? [...activeInfo.points]
                    : "",
        })
        // eslint-disable-next-line
    }, [activeSection]);

    useEffect(() => {
        setActiveInfo(info[sections[activeSection]]);
    }, [activeSection, info, sections]);

    useEffect(() => {
        const details = activeInfo?.details;
        if (!details) return;

        const activeInformation = info[sections[activeSection]];

        setValues({
            role: activeInformation.details[activeDetailIndex]?.role || "",
            companyName: activeInformation.details[activeDetailIndex]?.companyName || "",
            certificateLink: activeInformation.details[activeDetailIndex]?.certificateLink || "",
            location: activeInformation.details[activeDetailIndex]?.location || "",
            startDate: activeInformation.details[activeDetailIndex]?.startDate || "",
            endDate: activeInformation.details[activeDetailIndex]?.endDate || "",
            projectName: activeInformation.details[activeDetailIndex]?.projectName || "",
            overview: activeInformation.details[activeDetailIndex]?.overview || "",
            deployedLink: activeInformation.details[activeDetailIndex]?.deployedLink || "",
            githubRepoLink: activeInformation.details[activeDetailIndex]?.githubRepoLink || "",
            degree: activeInformation.details[activeDetailIndex]?.degree || "",
            collegeName: activeInformation.details[activeDetailIndex]?.collegeName || "",
            points: activeInformation.details[activeDetailIndex]?.points || "",

        });
        // eslint-disable-next-line
    }, [activeDetailIndex]);

    const handleSave = () => {
        switch (sections[activeSection]) {
            case sections.basicInfo:
                {
                    const tempDetail = {
                        name: values.name,
                        title: values.title,
                        linkedin: values.linkedin,
                        github: values.github,
                        email: values.email,
                        phone: values.phone
                    }
                    props.setInfo((prev) => ({
                        ...prev,
                        [sections.basicInfo]: {
                            ...prev[sections.basicInfo],
                            detail: tempDetail,
                            sectionTitle,
                        },
                    }));
                    break;
                }
            case sections.workExp:
                {
                    const tempDetail = {
                        role: values.role,
                        companyName: values.companyName,
                        certificateLink: values.certificateLink,
                        location: values.location,
                        startDate: values.startDate,
                        endDate: values.endDate,
                        points: values.points
                    }
                    const tempDetails = [...info[sections.workExp]?.details];
                    tempDetails[activeDetailIndex] = tempDetail;
                    props.setInfo((prev) => ({
                        ...prev,
                        [sections.workExp]: {
                            ...prev[sections.workExp],
                            details: tempDetails,
                            sectionTitle,
                        }
                    }));
                    break;
                }
            case sections.project:
                {
                    const tempDetail = {
                        projectName: values.projectName,
                        overview: values.overview,
                        deployedLink: values.deployedLink,
                        githubRepoLink: values.githubRepoLink,
                        points: values.points
                    }
                    const tempDetails = [...info[sections.project]?.details];
                    tempDetails[activeDetailIndex] = tempDetail;
                    props.setInfo((prev) => ({
                        ...prev,
                        [sections.project]: {
                            ...prev[sections.project],
                            details: tempDetails,
                            sectionTitle,
                        }
                    }));
                    break;
                }
            case sections.education:
                {
                    const tempDetail = {
                        degree: values.degree,
                        collegeName: values.collegeName,
                        startDate: values.startDate,
                        endDate: values.endDate,
                    }
                    const tempDetails = [...info[sections.education]?.details];
                    tempDetails[activeDetailIndex] = tempDetail;
                    props.setInfo((prev) => ({
                        ...prev,
                        [sections.education]: {
                            ...prev[sections.education],
                            details: tempDetails,
                            sectionTitle,
                        }
                    }));
                    break;
                }
            case sections.achievements:
                {
                    const tempPoints = values.points;
                    props.setInfo((prev) => ({
                        ...prev,
                        [sections.achievements]: {
                            ...prev[sections.achievements],
                            points: tempPoints,
                            sectionTitle,
                        }
                    }));
                    break;
                }
            case sections.summary:
                {
                    const tempDetail = values.summary;
                    props.setInfo((prev) => ({
                        ...prev,
                        [sections.summary]: {
                            ...prev[sections.summary],
                            detail: tempDetail,
                            sectionTitle,
                        }
                    }));
                    break;
                }
            case sections.others:
                {
                    const tempDetail = values.others;
                    props.setInfo((prev) => ({
                        ...prev,
                        [sections.others]: {
                            ...prev[sections.others],
                            detail: tempDetail,
                            sectionTitle,
                        }
                    }));
                    break;
                }
            default:
                return null;
        }
    }

    const handleAdd = () => {
        const details = activeInfo?.details;
        if (!details) return;

        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details.push({});

        props.setInfo(prev => ({
            ...prev, [sections[activeSection]]:
            {
                ...info[sections[activeSection]],
                details: details
            }
        }));
        setActiveDetailIndex(details.length - 1);
    };

    const handleDelete = (index) => {
        const details = activeInfo?.details ? [...activeInfo?.details] : "";
        if (!details) return;

        details.splice(index, 1);

        props.setInfo((prev) => ({
            ...prev, [sections[activeSection]]:
            {
                ...info[sections[activeSection]],
                details: details
            }
        }));
        setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    };

    return (
        <div className='container'>
            <div className={`${styles.card} card my-5`}>
                <div className={`${styles.header} card-header`}>
                    <nav className="nav d-flex justify-content-between gx-3" style={{ cursor: "pointer" }}>
                        {Object.keys(sections)?.map((key) => (
                            <div className={`fw-bold mx-2 ${activeSection === key ? styles.active : ""}`} onClick={() => setActiveSection(key)} key={key}>
                                {sections[key]}
                            </div>
                        ))}
                    </nav>
                </div>
                <div className='card-body'>
                    <h2 className={`${styles.title} card-title fw-bold`}>{sectionTitle}</h2>
                    <div className={`${styles.chip} container d-flex justify-content-center gap-3 my-4`}>
                        {
                            activeInfo?.details ? activeInfo?.details?.map((item, index) => (
                                <h5>
                                    <span
                                        className={`${styles.badge} ${activeDetailIndex === index ? styles.activeChip : ""} badge rounded-pill`}
                                        key={item.title + index}
                                        onClick={() => setActiveDetailIndex(index)}
                                    >
                                        {sections[activeSection]} {index + 1}
                                        <FaTimes className='ms-3' style={{ cursor: 'pointer' }} onClick={(event) => {
                                            event.stopPropagation();
                                            handleDelete(index)
                                        }}
                                        />
                                    </span>
                                </h5>
                            )) : ""
                        }
                        {
                            activeInfo?.details &&
                                activeInfo?.details?.length > 0 ? (
                                <div className={styles.new} onClick={handleAdd}>
                                    +New
                                </div>
                            ) : (
                                ""
                            )}
                    </div>
                    {generateForm()}
                    <div className="d-grid col-4 mx-auto">
                        <button onClick={handleSave} className={`${styles.saveBtn} btn`}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;

