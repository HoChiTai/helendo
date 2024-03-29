import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import Button from '~/components/Button';
import { ArrowRightIcon, FacebookIcon, TumblrIcon, TwitterIcon } from '~/components/Icons';
import routes from '~/config/routes';

function Footer() {
    return (
        <footer className="width-content mx-auto">
            <div className="footer-top py-[115px]">
                <div className="grid grid-cols-12 gap-y-0">
                    <div className="md:col-span-4 lm:col-span-6 col-span-12">
                        <div className="footer-widget">
                            <h2 className="text-[18px] mb-[15px] font-medium">Address</h2>
                            <ul>
                                <li className="flex items-center mb-[5px]">
                                    <FontAwesomeIcon icon={faLocationDot} className="w-[16px] h-[16px]" />
                                    <span className="ml-[10px] text-[16px]">Helendo, Chicago, USA 2023</span>
                                </li>
                                <li className="flex items-center mb-[5px]">
                                    <FontAwesomeIcon icon={faPhone} className="w-[16px] h-[16px]" />
                                    <a
                                        className="font-normal text-[16px] hover:text-primary transition-all ml-[10px]"
                                        href="tel:846677028028"
                                    >
                                        +846677028028
                                    </a>
                                </li>
                            </ul>
                            <ul className="flex pt-[35px]">
                                <li className="mr-[25px] ">
                                    <Button
                                        text
                                        href="https://www.facebook.com/"
                                        className="hover:text-primary transition-all"
                                    >
                                        <FacebookIcon />
                                    </Button>
                                </li>
                                <li className="mr-[25px] hover:text-primary transition-all">
                                    <Button
                                        text
                                        href="https://twitter.com/"
                                        className="hover:text-primary transition-all"
                                    >
                                        <TwitterIcon />
                                    </Button>
                                </li>
                                <li className="mr-[25px] hover:text-primary transition-all">
                                    <Button
                                        text
                                        href="https://www.tumblr.com/"
                                        className="hover:text-primary transition-all"
                                    >
                                        <TumblrIcon />
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-3 lm:col-span-6 col-span-12">
                        <div className="footer-widget">
                            <h2 className="text-[18px] mb-[15px] font-medium">Help & Information</h2>
                            <ul>
                                <li className="mb-[5px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/contact"
                                    >
                                        Help &amp; Contact Us
                                    </Button>
                                </li>
                                <li className="mb-[5px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/contact"
                                    >
                                        Returns &amp; Refunds
                                    </Button>
                                </li>
                                <li className="mb-[5px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        href="/"
                                    >
                                        Online Stores
                                    </Button>
                                </li>
                                <li className="mb-[5px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/contact"
                                    >
                                        Terms &amp; Conditions
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-2 lm:col-span-6 col-span-12">
                        <div className="footer-widget">
                            <h2 className="text-[18px] mb-[15px] font-medium">About Us</h2>
                            <ul>
                                <li className="mb-[5px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/about"
                                    >
                                        About Us
                                    </Button>
                                </li>
                                <li className="mb-[5px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/about"
                                    >
                                        What We Do
                                    </Button>
                                </li>
                                <li className="mb-[5px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/about"
                                    >
                                        FAQ Page
                                    </Button>
                                </li>
                                <li className="mb-[5px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/about"
                                    >
                                        Contact Us
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-3 lm:col-span-6 col-span-12">
                        <div className="footer-widget">
                            <h2 className="text-[18px] mb-[15px] font-medium">Newsletter</h2>
                            <form>
                                <div className="input-field relative max-w-[270px]">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                        className="bg-transparent border-0 border-b border-[rgba(0,0,0,.25)] border-solid outline-none w-full p-[10px_35px_10px_0] focus:border-primary"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-1/2 -translate-y-1/2 right-0 text-[20px] text-[#99999] opacity-70"
                                    >
                                        <ArrowRightIcon />
                                    </button>
                                </div>
                            </form>
                            <ul className="flex pt-[50px] ">
                                <li className="mr-[30px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/about"
                                    >
                                        Term & Condition
                                    </Button>
                                </li>
                                <li className="mr-[30px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/about"
                                    >
                                        Policy
                                    </Button>
                                </li>
                                <li className="mr-[30px]">
                                    <Button
                                        text
                                        className="font-normal leading-[28px] transition-all hover:text-primary"
                                        // href="/about"
                                    >
                                        Map
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="flex justify-between">
                    <ul className="flex">
                        <li className="mr-[30px]">
                            <Button
                                text
                                className="font-normal leading-[28px] transition-all hover:text-primary"
                                // href="/about"
                            >
                                Term & Condition
                            </Button>
                        </li>
                        <li className="mr-[30px]">
                            <Button
                                text
                                className="font-normal leading-[28px] transition-all hover:text-primary"
                                // href="/about"
                            >
                                Policy
                            </Button>
                        </li>
                        <li className="mr-[30px]">
                            <Button
                                text
                                className="font-normal leading-[28px] transition-all hover:text-primary"
                                // href="/about"
                            >
                                Map
                            </Button>
                        </li>
                    </ul>
                    <Button text to={routes.home}>
                        <img className="object-contain" src={images.logo} alt="Helendo" />
                    </Button>
                    <ul className="flex">
                        <h2 className="text-[16px] pr-[65px]">Follow Us On Social</h2>
                        <li className="mr-[25px] ">
                            <Button text href="https://www.facebook.com/" className="hover:text-primary transition-all">
                                <FacebookIcon />
                            </Button>
                        </li>
                        <li className="mr-[25px] hover:text-primary transition-all">
                            <Button text href="https://twitter.com/" className="hover:text-primary transition-all">
                                <TwitterIcon />
                            </Button>
                        </li>
                        <li className="mr-[25px] hover:text-primary transition-all">
                            <Button text href="https://www.tumblr.com/" className="hover:text-primary transition-all">
                                <TumblrIcon />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright w-full pt-[35px] pb-[25px]">
                <span className="flex font-normal justify-center items-center">
                    © 2023 Helendo. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
