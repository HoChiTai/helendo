import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import routes from '~/config/routes';
import images from '~/assets/images';
import { ExitIcon, MiniCartIcon, UserIcon } from '~/components/Icons';
import MiniCartItem from './MiniCartItem';
import styles from './Header.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header({ type = 'block' }) {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const info = cookies.get('info');
    const [isSticky, setIsSticky] = useState(false);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        // Button is displayed after scrolling for 90 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset >= 90) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <header
            className={cx('w-full bg-white z-[100]', {
                transparent: type === 'transparent',
                isSticky,
            })}
        >
            <div className="container mx-auto flex justify-between items-center   ">
                <Link to={routes.home}>
                    <img className={cx('object-contain')} src={images.logo} alt="Helendo" />
                </Link>
                <nav className={cx('flex justify-center')}>
                    <NavLink
                        className={(nav) => cx('nav-item', 'py-12 mr-16', { active: nav.isActive })}
                        to={routes.home}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={(nav) => cx('nav-item', 'py-12 mr-16', { active: nav.isActive })}
                        to={routes.products}
                    >
                        Products
                    </NavLink>
                    <NavLink className={(nav) => cx('nav-item', 'py-12', { active: nav.isActive })} to={routes.blogs}>
                        Blogs
                    </NavLink>
                </nav>
                <div className={cx('actions', 'flex justify-end items-center')}>
                    <button
                        className={cx('action-btn', 'flex justify-end items-center mr-14')}
                        onClick={() => setShowCart(true)}
                    >
                        <MiniCartIcon />
                        <span className={cx('badge')}>1</span>
                    </button>

                    {!!!token ? (
                        <Link to={routes.auth} className={cx('action-btn', 'mr-14')}>
                            <UserIcon />
                        </Link>
                    ) : (
                        <Tippy
                            interactive
                            render={(attrs) => (
                                <div className={cx('user-info')} tabIndex="-1" {...attrs}>
                                    {/* C??c ch???c n??ng c???a User */}
                                </div>
                            )}
                        >
                            <button>
                                <img
                                    src={info.avatar || images.avatar}
                                    alt="avatar"
                                    className="object-cover w-12 h-12 rounded-full shadow border border-solid border-slate-300"
                                />
                            </button>
                        </Tippy>
                    )}
                </div>
                <div className={cx('minicart-area', { active: showCart })} onClick={() => setShowCart(false)}>
                    <div className={cx('minicart-inner', 'fixed inset-y-0 right-0')}>
                        <button className="text-4xl" onClick={() => setShowCart(false)}>
                            <ExitIcon />
                        </button>
                        <div className={cx('minicart-list', 'pt-10 flex-1')}>
                            <MiniCartItem />
                            <MiniCartItem />
                            <MiniCartItem />
                        </div>
                        <div className="minicart-subtotal flex justify-between text-[24px] font-medium pt-[40px]">
                            <span>Subtotal:</span>
                            <span>$202.00</span>
                        </div>
                        <Button second to={routes.cart} className="mt-[40px] w-full justify-center">
                            View cart
                        </Button>
                        <Button primary to={routes.checkout} className="w-full justify-center text-primary mt-[15px]">
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
