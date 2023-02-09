import { FaSignInAlt, FaUser } from "react-icons/fa"
import {toast} from "react-toastify";

const Login = ({register}) => {

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
            }
        }
    }

    return (
        <>
            <section className={'heading'}>
                <h1>{register ? "Hisob yaratish" : "Kirish"}</h1>
                <p>{register ? (<span className={'flex-center'}>
                    <FaUser /> Yangi hisobingizni yarating
                </span>) : (<span className={'flex-center'}>
                    <FaSignInAlt /> Hisobingizga kiring
                </span>)}</p>
            </section>

            <section className={'form'}>
                <form onSubmit={onSubmit}>
                    {register && <div className={`form-group`}>
                        <input
                            type={'text'}
                            name={'name'}
                            className={'form-control'}
                            id={'name'}
                            placeholder={'Ismingizni kiriting'}
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
                            placeholder={'emailingizni kiriting'}
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
                            placeholder={'Parol kiriting'}
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
                            placeholder={'Parolni tasdiqlang'}
                            required
                            onInvalid={(e) => e.target.setCustomValidity("Parol tasdiqlanishi lozim")}
                            onInput={(e) => e.target.setCustomValidity("")}
                        />
                    </div>}

                    <div className={'form-group'}>
                        <button className={'btn btn-block'}>
                            {register ? "Hisob yaratish" : "Kirish"}
                        </button>
                    </div>

                </form>
            </section>
        </>
    );
};

export default Login;