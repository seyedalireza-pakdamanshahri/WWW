import React, { useState, useRef } from 'react';
import './MainPage.css';
import projectImage from "/Users/arshia/horse-app/src/path_to_image.jpg";
import team1 from "/Users/arshia/horse-app/src/team1.jpg";
import logo from "/Users/arshia/horse-app/src/logo1.png";

const MainPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const toggleModal = () => setShowModal(prev => !prev);

    const handleOutsideClick = (event: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            toggleModal();
        }
    }

    return (
        <div className="container">
            <header className="header">
                <h1>خوش آمدید به پروژه ما</h1>
            </header>

            <section className="intro">
                <p>این یک مقدمه در مورد پروژه است...</p>
            </section>

            <section className="project-info">
                <img src={projectImage} alt="Project Image" className="project-img" onClick={toggleModal} />
                <div className="project-desc">
                    <h2>سیستم ثبت اسب‌ها برای دامپزشکان</h2>
                    <p>ما یک سیستم را طراحی کرده‌ایم که اسب‌ها را مانند بیماران برای دامپزشکان ثبت می‌کند.</p>
                </div>
            </section>

            <section className="crew">
                <h2>ملاقات با تیم</h2>
                <div className="crew-members">
                    <div className="member-container">
                        <img src={team1} alt="Member 1" />
                        <h3>نام عضو 1</h3>
                        <p>توضیحات مختصر در مورد عضو</p>
                    </div>
                    {/* 
        Repeat for other members... 
        <div className="member-container">
            <img src={team2} alt="Member 2" />
            <h3>نام عضو 2</h3>
            <p>توضیحات مختصر در مورد عضو</p>
        </div>
        */}
                </div>
            </section>

            <section className="sponsors">
                <h2>حامیان ما</h2>
                <div className="sponsor-logos">
                    <img src={logo} alt="Sponsor 1 Logo" />
                </div>
            </section>

            {showModal && (
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content" ref={modalRef}>
                        <span className="close-btn" onClick={toggleModal}>&times;</span>
                        <h2>اطلاعات بیشتر در مورد پروژه</h2>
                        <p>اینجا می‌توانید اطلاعات بیشتری در مورد پروژه و ویژگی‌های آن بیابید.</p>
                    </div>
                </div>
            )}

            <footer className="footer">
                <p>کلیه حقوق محفوظ است © 2023</p>
            </footer>
        </div>
    );
}

export default MainPage;