import { useState } from "react";
import "./NavBar.css";
import { LuSearchCode } from "react-icons/lu";
import { FaOpencart } from "react-icons/fa";

function NavBar({ display, bill, setSearch }) {
    const [isActive, setIsActive] = useState(true);

    const toggleSearch = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="overall">
            <h1>chocoBake</h1>
            <div className="icons">
                <h1 className="cakeCountInCart">{display}</h1>
                <input type="text" className={isActive ? "deactive" : "active"} onChange={(e) => setSearch(e.target.value)} />
                <LuSearchCode className="icons1" onClick={toggleSearch} />
                <FaOpencart onClick={bill} />
            </div>
        </div>
    );
}

export default NavBar;
