import { FaSignInAlt, FaUser } from "react-icons/fa"

const Login = ({register}) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        console.log(formData.get('name'))
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
                    <div className={`form-group ${!register && 'd-none'}`}>
                        <input
                            type={'text'}
                            name={'name'}
                            className={'form-control'}
                            id={'name'}
                            placeholder={'Ismingizni kiriting'}
                        />
                    </div>

                    <div className={`form-group`}>
                        <input
                            type={'email'}
                            name={'email'}
                            className={'form-control'}
                            id={'email'}
                            placeholder={'emailingizni kiriting'}
                        />
                    </div>

                    <div className={`form-group`}>
                        <input
                            type={'password'}
                            name={'password'}
                            className={'form-control'}
                            id={'password'}
                            placeholder={'Parol kiriting'}
                        />
                    </div>

                    <div className={`form-group ${!register && 'd-none'}`}>
                        <input
                            type={'password'}
                            name={'confirmation'}
                            className={'form-control'}
                            id={'confirmation'}
                            placeholder={'Parolni tasdiqlang'}
                        />
                    </div>

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