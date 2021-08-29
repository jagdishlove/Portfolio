import React, { useState } from "react";
import "./navBar.css";
import { Motion, spring, presets } from "react-motion";

const NavBar = () => {
    const [ismobile, setIsMobile] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <h3>PortFolio</h3>
                <div
                    className={ismobile ? "nav_item_mobile" : "nav_item"}
                    onClick={() => setIsMobile(false)}
                >
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <button className="signup">Resume</button>
                    <button className="login">Work</button>
                </div>
                {/* <FiMenu onClick={() => setIsMobile(!ismobile)} className="menu" size="60px" /> */}
                <svg
                    viewBox="0 0 96 96"
                    height="3em"
                    onClick={() => {
                        setToggle(!toggle);
                        setIsMobile(!ismobile);
                    }}
                >
                    <Motion
                        style={{
                            x: spring(toggle ? 1 : 0, presets.wobbly),
                            y: spring(toggle ? 0 : 1, presets.wobbly),
                        }}
                    >
                        {({ x, y }) => (
                            <g
                                id="navicon"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="14"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line
                                    transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45
                                        }, 7, 26)`}
                                    x1="7"
                                    y1="26"
                                    x2="89"
                                    y2="26"
                                />
                                <line
                                    transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45
                                        }, 7, 70)`}
                                    x1="7"
                                    y1="70"
                                    x2="89"
                                    y2="70"
                                />
                                <line
                                    transform={`translate(${x * -96})`}
                                    opacity={y}
                                    x1="7"
                                    y1="48"
                                    x2="89"
                                    y2="48"
                                />
                            </g>
                        )}
                    </Motion>
                </svg>
            </nav>

        </div>
    );
};

export default NavBar;
