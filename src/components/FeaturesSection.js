import React from 'react';
import './FeaturesSection.css'; 
import { FaClipboardList, FaRecycle, FaBrain, FaChartBar, FaUser, FaBuilding, FaLock } from 'react-icons/fa';

function FeaturesSection() {
    return (
        <div className="features">
            <h2 className="features-title">We Offer Different Key Features</h2>
            <div className="features-container">
                <div className="feature-card">
                    <FaClipboardList className="feature-icon" />
                    <h3>Link Policy</h3>
                    <p>Using the ABHA number, you can link your health policies for a seamless cashless experience.</p>
                    <a href="/appointment" className="book-link">BOOK APPOINTMENT</a>
                </div>

                <div className="feature-card">
                    <FaRecycle className="feature-icon" />
                    <h3>Seamless Cashless Experience</h3>
                    <p>All health policy holders can avail cashless claims at any hospital using the ABHA number.</p>
                    <a href="/appointment" className="book-link">BOOK APPOINTMENT</a>
                </div>

                <div className="feature-card">
                    <FaBrain className="feature-icon" />
                    <h3>Intelligent Eligibility</h3>
                    <p>Check whether your policy covers the disease at any point using our platform.</p>
                    <a href="/appointment" className="book-link">BOOK APPOINTMENT</a>
                </div>

                <div className="feature-card">
                    <FaChartBar className="feature-icon" />
                    <h3>Analytics</h3>
                    <p>Hospitals can leverage dashboards powered by AI to understand claims and their status.</p>
                    <a href="/appointment" className="book-link">BOOK APPOINTMENT</a>
                </div>

                <div className="feature-card">
                    <FaUser className="feature-icon" />
                    <h3>Instant Support</h3>
                    <p>Access to immediate support for assistance and issue resolution.</p>
                    <a href="/appointment" className="book-link">BOOK APPOINTMENT</a>
                </div>

                <div className="feature-card">
                    <FaBuilding className="feature-icon" />
                    <h3>Tenant-Based</h3>
                    <p>Supports multi-tenancy for streamlined management across entities.</p>
                    <a href="/appointment" className="book-link">BOOK APPOINTMENT</a>
                </div>

                <div className="feature-card">
                    <FaLock className="feature-icon" />
                    <h3>ABDM Compliance</h3>
                    <p>Fully compliant with utmost data security and interoperability.</p>
                    <a href="/appointment" className="book-link">BOOK APPOINTMENT</a>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;
