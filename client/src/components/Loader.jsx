import loading from "./loader.gif";
const Loader = ({main}) => {
    return (
        <div className={'loading'} style={{background: main && 'black'}}>
            <img src={loading} width={main ? 200 : 60} alt={'yuklanmoqda'} />
        </div>
    );
};

export default Loader