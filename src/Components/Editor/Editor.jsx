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

    const workExpBody = (
        <div className='container'>
            <div className='row'>
                <InputControl
                    Label='Title'
                    placeholder="Enter title eg. Frontend developer"
                />
                <InputControl
                    Label='Company Name'
                    placeholder="Enter company name eg. Google"
                />
            </div>
            <div className="row">
                <InputControl
                    Label="Certificate Link"
                    placeholder="Enter certificate link"
                />
                <InputControl
                    Label="Location"
                    placeholder="Enter location eg. Remote"
                />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <InputControl
                        Label="Start Date"
                        type="date"
                        placeholder="Enter start date of work"
                    />
                </div>
                <div className="col-md-6">
                    <InputControl
                        Label="End Date"
                        type="date"
                        placeholder="Enter end date of work"
                    />
                </div>
            </div>

            <div className="col">
                <label className='form-label'>Enter Work Description</label>
                <InputControl
                    placeholder="Line 1"
                />
                <InputControl
                    placeholder="Line 2"
                />
                <InputControl
                    placeholder="Line 3"
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
                />
            </div>
            <InputControl
                Label="Overview"
                placeholder="Enter basic overview of project"
            />
            <div className='row'>
                <div className="col-md-6">
                    <InputControl
                        Label="Deployed Link"
                        placeholder="Enter deployed link of project"
                    />
                </div>
                <div className="col-md-6">
                    <InputControl
                        Label="Github Repo Link"
                        placeholder="Enter GitHub repo link of project"
                    />
                </div>
            </div>
            <div className='row'>
                <label className='form-label'>Enter project description</label>
                <InputControl
                    placeholder="Line 1"
                />
                <InputControl
                    placeholder="Line 2"
                />
                <InputControl
                    placeholder="Line 3"
                />
                <InputControl
                    placeholder="Line 4"
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
                />
            </div>
            <InputControl
                Label="College/School Name"
                placeholder="Enter name of your college/school"
            />
            <div className='row'>
                <div className="col-md-6">
                    <InputControl
                        Label="Start Date"
                        type="date"
                        placeholder="Enter start date of this education"
                    />
                </div>
                <div className="col-md-6">
                    <InputControl
                        Label="End Date"
                        type="date"
                        placeholder="Enter end date of this education"
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
                />
                <InputControl
                    Label="Title"
                    placeholder="Enter your title eg. Frontend developer"
                />
            </div>
            <div className='row'>
                <div className="col-md-6">
                    <InputControl
                        Label="Linkedin Profile"
                        type="url"
                        placeholder="Enter your linkedin profile link"
                    />
                </div>
                <div className="col-md-6">
                    <InputControl
                        Label="Github Profile"
                        type="url"
                        placeholder="Enter your github profile link"
                    />
                </div>
            </div>
            <div className='row'>
                <InputControl
                    Label="Email"
                    type="email"
                    placeholder="Enter your email"
                />
                <InputControl
                    Label="Contact Number"
                    type="number"
                    placeholder="Enter your phone number"
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
                />
                <InputControl
                    placeholder="Line 2"
                />
                <InputControl
                    placeholder="Line 3"
                />
                <InputControl
                    placeholder="Line 4"
                />
            </div>
        </div>
    );

    const summaryBody = (
        <div className='container'>
            <InputControl
                Label="Summary"
                placeholder="Enter your objective/summary"
            />
        </div>
    );

    const otherBody = (
        <div className='container'>
            <InputControl
                Label="Other"
                placeholder="Enter something"
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
        setActiveInfo(info[sections[activeSection]]);
        setSectionTitle(sections[activeSection]);
    }, [activeSection]);

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
                    <div className='container d-flex gap-3 my-2'>
                        {
                            activeInfo?.details ? activeInfo.details?.map((item, index) => (
                                <h4>
                                    <span key={item.title + index} className="badge rounded-pill bg-secondary">
                                        {sections[activeSection]} {index + 1}
                                        <FaTimes className='ms-3 fs-4' style={{ cursor: 'pointer' }} />
                                    </span>
                                </h4>
                            )) : null
                        }
                    </div>
                    {generateForm()}
                </div>
            </div>
        </div>
    )
}

export default Editor;

