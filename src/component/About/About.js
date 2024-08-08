import React from "react";
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigation = useNavigate();

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

            <div className="about_content">
                <h2>About Us</h2>
                <p className="integrate_style">Integrate everything</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Cras semper auctor neque vitae tempus. Posuere urna nec tincidunt praesent semper feugiat. Cursus turpis massa tincidunt dui ut ornare. Molestie nunc non blandit massa. Cras semper auctor neque vitae tempus quam pellentesque. Varius morbi enim nunc faucibus a pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. In cursus turpis massa tincidunt dui ut. Euismod nisi porta lorem mollis aliquam ut. Purus non enim praesent elementum facilisis.</p>
                <p>Eget arcu dictum varius duis at consectetur. Risus ultricies tristique nulla aliquet. Tristique senectus et netus et malesuada fames ac turpis. Quam quisque id diam vel quam elementum pulvinar. A diam sollicitudin tempor id eu. Mauris cursus mattis molestie a. Libero justo laoreet sit amet cursus sit. Etiam erat velit scelerisque in dictum non consectetur a. Vel fringilla est ullamcorper eget nulla facilisi. Eu consequat ac felis donec.</p>
            </div>

        </div >
    );
};

export default About;
