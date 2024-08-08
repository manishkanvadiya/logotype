import React, { useState } from "react";
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import ai_img from '../../assets/img/ai_img.svg';
import { useNavigate } from "react-router-dom";

const Documents = () => {

    const navigation = useNavigate();

    const data = [
        {
            name: 'STAND NCC2016-BCA-Guide.pdf',
            createdAt: '05.15.2024',
            project: 'Magic Project',
            path: 'STAND NCC2016-BCA-Guide.pdf'
        },
        {
            name: 'STAND NCC2016-BCA-Guide.pdf',
            createdAt: '05.15.2024',
            project: 'Black Project',
            path: 'STAND NCC2016-BCA-Guide.pdf'
        },
        {
            name: 'STAND NCC2016-BCA-Guide.pdf',
            createdAt: '05.15.2024',
            project: 'Magic Project',
            path: 'STAND NCC2016-BCA-Guide.pdf'
        },
        {
            name: 'STAND NCC2016-BCA-Guide.pdf',
            createdAt: '05.15.2024',
            project: 'Black Project',
            path: 'STAND NCC2016-BCA-Guide.pdf'
        }
    ];

    return (
        <div className="sidebar_mar">
            <div className="header">
                <div className="user-info">
                    <img src={notification} alt='notification' className="notification-icon" />
                    <img src={user_icon} alt='user_icon' className="user-icon" onClick={() => navigation('/ProfileHeader')} />
                    <span className="username">username@gmail.com</span>
                    <img src={down_icon} alt='down_icon' className="dropdown-arrow" />
                </div>
            </div>

            <div className="document_content">
                <h2>Documents</h2>

                <div className="two_input_flex">
                    <div className="label_input_flex">
                        <label>
                            Project
                        </label>
                        <select className="project-select">
                            <option value="">Project</option>
                        </select>
                    </div>

                    <div className="label_input_flex">
                        <label>
                            Search query
                        </label>
                        <input
                            type="text"
                            placeholder="Search....."
                        />
                    </div>
                </div>

                <div className="table_style">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th className="text_center">Relevance</th>
                                <th>Name</th>
                                <th>Created At</th>
                                <th className="text_center">Source</th>
                                <th>Project</th>
                                <th>Path</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td className="text_center"><b>-</b></td>
                                    <td>{row.name}</td>
                                    <td className="color_gray">{row.createdAt}</td>
                                    <td className="text_center"><img src={ai_img} alt="ai_img" /></td>
                                    <td>{row.project}</td>
                                    <td className="color_gray">{row.path}</td>
                                    <td><button>Search</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table></div>
            </div>
        </div >
    );
};

export default Documents;
