import React from "react";
import '../styles/footer-styles.scss'
import '../styles/general.scss'
import '../styles/icons.scss'
import { Link } from "react-router-dom";

export function FooterComponent() {
    const page = <div className="footer-position w-100 footer-height">
        <div className="position-relative w-100 footer-height d-flex align-items-center justify-content-between">
        <button className="btn btn-primary m-1">
            <Link to="/">
                <span className="icon-back"> Back </span>
            </Link>
        </button>

        <button className="btn btn-primary m-1">
            <Link to="/customize">
                Next<span className="icon-next"></span>
            </Link>
        </button>
        </div>
    </div>
    return page;
}