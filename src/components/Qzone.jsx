import swiming from '../assets/swimming.png'
import classes from '../assets/class.png'
import playground from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 rounded-lg'>
            <h2 className='font-semibold p-3'> Q-Zone</h2>
            <img src={swiming} alt="" />
            <img src={classes} alt="" />
            <img src={playground} alt="" />
        </div>
    );
};

export default Qzone;