import { Link } from "react-router-dom";

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/terms-and-condition" className="footer__link">
                Terms & Conditions
            </Link>
            <div className="footer__copyright">
                Copyright © {new Date().getFullYear()} Free Netflix Premium Account Generator is not affiliated with, or sponsored or endorsed by, Netflix, Inc. | Powered by DarkMan
            </div>
        </div>
    )
}

export default Footer;
