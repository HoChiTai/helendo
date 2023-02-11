import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { QuickViewContext } from '~/pages/Home/Home';
import images from '~/assets/images';
import routes from '~/config/routes';
import Button from '~/components/Button';
import { ExitIcon, HeartIcon, MinusIcon, PlusIcon } from '~/components/Icons';
import styles from './QuickView.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function QuickView() {
    const handleShowQuickView = useContext(QuickViewContext);

    const [count, setCount] = useState(1);

    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };
    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleChanged = (e) => {
        const newCount = e.target.value;
        var regex = /^[0-9]+$/;
        if (newCount.match(regex)) {
            setCount(parseInt(newCount));
        }
    };

    return (
        <div className={cx('wrapper ')}>
            <div className="fixed inset-0 bg-gray-900/[0.7] z-40" onClick={handleShowQuickView}></div>
            <div className="fixed flex top-1/2 left-1/2 w-[1170px] -translate-x-1/2 -translate-y-1/2 bg-white z-50">
                <button className="absolute right-8 top-8" onClick={handleShowQuickView}>
                    <ExitIcon />
                </button>
                <Link to={routes.products} className="block">
                    <img src={images.product1_585x585} alt="Product" className="w-full h-full object-cover" />
                </Link>
                <div className="py-[40px] px-[30px]">
                    <h2 className="text-[24px] mb-[15px]">Animi Dolor Pariatur</h2>
                    <span className="text-[30px] leading-[42px] text-[#999999] block mb-[25px]">$10.00</span>
                    <h3 className="stock font-semibold text-[14px] mb-[20px]">
                        Available:<span className="text-[#3bc604] ml-[5px]">in-stock</span>
                    </h3>
                    <p>At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.</p>
                    <div className="flex py-[30px]">
                        <div className="relative inline-flex border border-[#dddddd] mr-[15px] ">
                            <div className="flex justify-center w-[120px]">
                                <button className="cursor-pointer translate-x-3/4" onClick={handleDecrease}>
                                    <MinusIcon width="1.6rem" height="1.6rem" />
                                </button>
                                <input
                                    className="qty-input outline-none text-center w-[100px] px-[15px] h-[46px] leading-[40px]"
                                    value={count}
                                    onChange={handleChanged}
                                    onBlur={() => console.log('hello')}
                                />
                                <button className="cursor-pointer -translate-x-3/4" onClick={handleIncrease}>
                                    <PlusIcon width="1.6rem" height="1.6rem" />
                                </button>
                            </div>
                        </div>
                        <Button primary className="mr-[15px] w-[162px] h-[46px] justify-center">
                            Add to cart
                        </Button>
                        <button className="border border-[#dddddd] border-solid text-[20px] w-[46px] h-[46px] leading-[46px] inline-flex justify-center items-center transition-all text-primary-hover ">
                            <HeartIcon width="2rem" height="2rem" />
                        </button>
                    </div>
                    <div className="font-medium">
                        <span>SKU:</span>
                        <span className="text-[#666666] ml-[5px]">500</span>
                    </div>
                    <div className="flex">
                        <span className="text-black font-medium">Categories:</span>
                        <Link to={routes.products}>
                            <button className="transition-all text-primary-hover capitalize text-[#666666] font-medium ml-[10px]">
                                accessory
                            </button>
                        </Link>
                        <Link to={routes.products}>
                            <button className="transition-all text-primary-hover capitalize text-[#666666] font-medium ml-[10px]">
                                decoration
                            </button>
                        </Link>
                        <Link to={routes.products}>
                            <button className="transition-all text-primary-hover capitalize text-[#666666] font-medium ml-[10px]">
                                furniture
                            </button>
                        </Link>
                    </div>
                    <div className="flex">
                        <span className="text-black font-medium">Tags:</span>
                        <Link to={routes.products}>
                            <button className="transition-all text-primary-hover capitalize text-[#666666] font-medium ml-[10px]">
                                <span className="accessories">accessories</span>
                            </button>
                        </Link>
                        <Link to={routes.products}>
                            <button className="transition-all text-primary-hover capitalize text-[#666666] font-medium ml-[10px]">
                                <span className="chair">chair</span>
                            </button>
                        </Link>
                        <Link to={routes.products}>
                            <button className="transition-all text-primary-hover capitalize text-[#666666] font-medium ml-[10px]">
                                <span className="glass">glass</span>
                            </button>
                        </Link>
                        <Link to={routes.products}>
                            <button className="transition-all text-primary-hover capitalize text-[#666666] font-medium ml-[10px]">
                                <span className="deco">deco</span>
                            </button>
                        </Link>
                        <Link to={routes.products}>
                            <button className="transition-all text-primary-hover capitalize text-[#666666] font-medium ml-[10px]">
                                <span className="table">table</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickView;
