import { Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import FormInput from '../FormInput/FormInput';
import request from '~/utils/httpRequest';
import config from '~/config';
import styles from './UserChangePassword.module.scss';

const cx = classNames.bind(styles);

function UserChangePassword() {
    const [message, setMessage] = useState('');
    const [values, setValues] = useState({
        password: '',
        newPassword: '',
        repeatNewPassword: '',
    });

    const input = [
        {
            id: 1,
            name: 'password',
            type: 'password',
            label: 'Password',
        },
        {
            id: 2,
            name: 'newPassword',
            type: 'password',
            label: 'New Password',
            errorMessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 3,
            name: 'repeatNewPassword',
            type: 'password',
            label: 'Repeat New Password',
            errorMessage: 'Password are not the same',
            pattern: values['newPassword'],
            required: true,
        },
    ];

    const onChangeValue = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (!(values['name'] === '' || values['address'] === '' || values['phone'] === '')) {
            console.log('Khong rong');
            request
                .post(config.apis.changePassword, values)
                .then((result) => {
                    if (result.data.statusId === 0) {
                        setMessage('Changed successfully');
                    } else {
                        setMessage(result.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setMessage('Changed failure');
                });
        }
    };

    return (
        <Fragment>
            <h1 className={cx('mt-32 text-primary')}>Change Password</h1>
            <form className="ing-form">
                <div className="flex">
                    <div className="flex-1 mx-40">
                        {input.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                className="mb-[20px]"
                                classOfForm="border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] py-[10px] px-[20px] w-full h-[50px]"
                                value={values[input.name]}
                                onChange={onChangeValue}
                            />
                        ))}
                    </div>
                </div>
                <button className="bg-primary py-4 px-6" onClick={handleChange}>
                    Change
                </button>
            </form>
            <div className="mt-20 mr-20 font-medium">{message}</div>
        </Fragment>
    );
}

export default UserChangePassword;