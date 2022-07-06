import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaAngleUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <style jsx='true'>
                {`
                     .btn {
                        text-decoration: none !important;
                        outline: 0 !important;
                        box-shadow: none !important;
                        border: none !important;
                    }
                `}
            </style>

            <footer className="text-center text-white" style={{ backgroundColor: "rgb(238, 252, 255)" }}>
                <div className="container p-4 pb-0">
                    <ScrollToTop
                        smooth
                        top="20"
                        component={<FaAngleUp size={30} />}
                        style={{ backgroundColor: 'rgb(238,252,255)', color: '#239ce2', borderRadius: '50%' }}
                    />

                    <h4 className='text-dark'>Connect with me on My Social Accounts</h4>
                    <section className="mb-4">
                        <a
                            className="btn btn-primary m-1"
                            style={{ backgroundColor: "#3b5998" }}
                            href="https://www.facebook.com/bhavya.khurana.399"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            href="https://twitter.com/Bhavya06001699"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="mailto:khuranabhavya24@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaGoogle />
                        </a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="https://www.instagram.com/__khurana__._/"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#0082ca" }}
                            href="https://www.linkedin.com/in/bhavyakhurana24/"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#333333" }}
                            href="https://github.com/TheNewC0der-24"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaGithub />
                        </a>
                        <div className="d-flex justify-content-center mt-2">
                            <a className='text-decoration-none text-dark fs-3 fw-bold' href="https://www.buymeacoffee.com/bhavyakhurana" target='_blank' rel="noreferrer"> Support :
                                <img className='img-fluid ms-2' src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" height="50" width="150" alt="Bhavya Khurana" ></img>
                            </a>
                        </div>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "#239ce2" }}>
                    © 2022 Copyright - <span className='badge text-bg-dark'>Bhavya Khurana</span>
                </div>
            </footer>
        </>
    );
}

export default Footer;