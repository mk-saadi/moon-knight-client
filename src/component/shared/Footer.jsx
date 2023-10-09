import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-300 text-gray-700">
            <div>
                <p>
                    Cosmos Jewelry Ltd.
                    <br />
                    Shipping Exquisite Products Since 2009.
                </p>
            </div>
            <div className="order-3">
                <span className="footer-title">Social</span>
                <a
                    className="link link-hover flex justify-center items-center gap-1"
                    href="#"
                >
                    <FaFacebookSquare />
                    Facebook
                </a>
                <a
                    className="link link-hover flex justify-center items-center gap-1"
                    href="#"
                >
                    <FaInstagramSquare /> Instagram
                </a>
                <a
                    className="link link-hover flex justify-center items-center gap-1"
                    href="#"
                >
                    <FaTwitterSquare />
                    Twitter
                </a>
                <a
                    className="link link-hover flex justify-center items-center gap-1"
                    href="#"
                >
                    <FaLinkedin />
                    LinkedIn
                </a>
            </div>
            <div className="order-2">
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div className="order-1">
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
