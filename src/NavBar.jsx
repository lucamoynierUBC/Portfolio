import { Flex } from "antd";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function NavBar() {
    const [location, setLocation] = useLocation();
    const initialState = () => {
        // Determine initial state based on the current location
        switch(location) {
            case '/':
                return 'Home';
            case '/about':
                return 'About';
            // Add more cases as needed
            default:
                return 'Home';
        }
    };
    const [selected, setSelected] = useState(initialState);

    const handleButtonClick = (buttonLabel, path) => {
        setSelected(buttonLabel);
        setLocation(path); // Change location when button is clicked
    };

    // Function to determine button style
    const getButtonStyle = (buttonLabel) => {
        return buttonLabel === selected
            ? { textDecoration: "underline black 2px" } // Style for selected button
            : {}; // Default style for unselected buttons
    };

    return (
        <div className="NavBar">
            <Flex align="flex-start">
                <Link href="/"onClick={() => handleButtonClick("Home" , "/")}>
                    <button 
                        style={getButtonStyle("Home")}
                        className="NavBtn NavBtn-shadow-drop NavBtn-shadow-drop--black"
                    >
                        Home
                    </button>
                </Link>
                <Link href="/" onClick={() => handleButtonClick("Experience", "/")}>
                    <button 
                        style={getButtonStyle("Experience") }
                        className="NavBtn NavBtn-shadow-drop NavBtn-shadow-drop--black"
                    >
                        Experience
                    </button>
                </Link>
                <Link href="/about" onClick={() => handleButtonClick("About", "/about")}>
                    <button 
                        style={getButtonStyle("About")}
                        className="NavBtn NavBtn-shadow-drop NavBtn-shadow-drop--black"
                    >
                        About
                    </button>
                </Link>
                <Link href="/" onClick={() => handleButtonClick("Contact" , "/")}>
                    <button 
                        style={getButtonStyle("Contact")}
                        className="NavBtn NavBtn-shadow-drop NavBtn-shadow-drop--black"
                    >
                        Contact
                    </button>
                </Link>
            </Flex>
        </div>
    );
}
