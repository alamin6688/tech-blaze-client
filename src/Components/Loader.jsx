import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center 
        min-h-[calc(100vh-284px)]'>
            <ScaleLoader size={100} color='#0000FF'></ScaleLoader>
        </div>
    );
};

export default Loader;