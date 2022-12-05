import React, {Component} from "react";
import logo from "../img/logo2.png";

export default class NavComponent extends Component{
    render() {
        return (
            <div>
                <div className="TopFooter">
                    <div className="TFContainer">
                        <div className="Describe">
                            <div className="PostLogo">
                                <img src={logo} alt="123"/>
                                <h3>Grand Gym</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem.</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">Read More ></a>
                        </div>
                        <div className="RecentPost">
                            <h2>Recent Posts</h2>
                            <div className="Post">
                                <p className="PostDate">September 08.2015</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="Post">
                                <p className="PostDate">September 08.2015</p>
                                <p>Diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                            </div>
                            <div className="Post">
                                <p className="PostDate">September 08.2015</p>
                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima</p>
                            </div>
                        </div>
                        <div className="OurTwit">
                            <h2>Our Twitter</h2>
                            <div className="Post">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p className="PostDate">3 mins ago</p>
                            </div>
                            <div className="Post">
                                <p>Diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                                <p className="PostDate">5 hours ago</p>
                            </div>
                            <div className="Post">
                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima</p>
                                <p className="PostDate">10 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BotFooter">
                    <ul>
                        <p>Copyright © 2022 <span>Grand Gym</span>  </p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content */}
                        <li><a href="">Privacy Policy </a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content */}
                        <li><a href="">FAQ</a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content */}
                        <li><a href="">Support</a></li>
                    </ul>
                    <p>Designed by <span>Diam nonummy</span> on <span>etiam processus</span></p>
                </div>
            </div>
        );
    }
}