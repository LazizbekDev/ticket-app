import { FaSignInAlt, FaUser } from "react-icons/fa"
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {signin, signup} from "../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = ({register}) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth)

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmation = formData.get('confirmation');

        if (register) {
            if (register && password !== confirmation) {
                toast.error('Parol mos emas!')
            } else {
                const userData = {
                    name,
                    email,
                    password
                }

                dispatch(signup(userData))
            }
        } else {
            const userData = {
                email,
                password
            }

            dispatch(signin(userData))
        }
    }

    return (
        <>
            <section className={'heading'}>
                <h1>{register ? t('creat_acc') : t('login_acc')}</h1>
                <p>{register ? (<span className={'flex-center'}>
                    <FaUser /> {t('creat_acc_p')}
                </span>) : (<span className={'flex-center'}>
                    <FaSignInAlt /> {t('login_acc_p')}
                </span>)}</p>
                {user}
            </section>

            <section className={'form'}>
                <form onSubmit={onSubmit}>
                    {register && <div className={`form-group`}>
                        <input
                            type={'text'}
                            name={'name'}
                            className={'form-control'}
                            id={'name'}
                            placeholder={t('input.name')}
                            required
                            onInvalid={(e) => e.target.setCustomValidity("Ism kiritilishi shart")}
                            onInput={(e) => e.target.setCustomValidity("")}
                        />
                    </div>}

                    <div className={`form-group`}>
                        <input
                            type={'email'}
                            name={'email'}
                            className={'form-control'}
                            id={'email'}
                            placeholder={t('input.email')}
                            required
                            onInvalid={(e) => e.target.setCustomValidity("Email kiritilishi shart")}
                            onInput={(e) => e.target.setCustomValidity("")}
                        />
                    </div>

                    <div className={`form-group`}>
                        <input
                            type={'password'}
                            name={'password'}
                            className={'form-control'}
                            id={'password'}
                            placeholder={t('input.password')}
                            required
                            onInvalid={(e) => e.target.setCustomValidity("Parol kiritilishi shart")}
                            onInput={(e) => e.target.setCustomValidity("")}
                        />
                    </div>

                    {register && <div className={`form-group`}>
                        <input
                            type={'password'}
                            name={'confirmation'}
                            className={'form-control'}
                            id={'confirmation'}
                            placeholder={t('input.confirm')}
                            required
                            onInvalid={(e) => e.target.setCustomValidity("Parol tasdiqlanishi lozim")}
                            onInput={(e) => e.target.setCustomValidity("")}
                        />
                    </div>}

                    <div className={'form-group'}>
                        <button className={'btn btn-block'}>
                            {register ? t('creat_acc') : t('login_acc')}
                        </button>
                    </div>

                </form>
            </section>
        </>
    );
};

export default Login;