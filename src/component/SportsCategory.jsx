import cricket from '../assets/bat balll.svg'
import football from '../assets/football.png'
import batminton from '../assets/batminton.png'
import Treadmill from '../assets/treadmill.svg'
import Walking from '../assets/Walking Pad.jpg'
import Exercise from '../assets/Exercise Cycle.jpg'
import Dumbbells from '../assets/dumbbell.svg'
import Basketball from '../assets/Basketball.png'
import { Fade } from "react-awesome-reveal";
const SportsCategory = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <Fade direction="left">
            <h2 className="text-3xl font-bold text-center mb-10 mt-10">SPORTS CATEGORIES</h2>
            
            <div className='grid grid-cols-3 md:grid-cols-5 gap-10 justify-items-center'>
            <div className='flex-col justify-center'>
                <img src={cricket} className='w-32 h-32' alt="" />
                <p className='text-xl font-bold pt-2 text-center'>Cricket</p>
            </div>
            <div className='flex-col justify-center'>
                <img src={football} className='w-32 h-32' alt="" />
                <p className='text-xl font-bold pt-2 text-center'>Football</p>
            </div>
            <div className='flex-col justify-center'>
                <img src={batminton} className='w-32 h-32' alt="" />
                <p className='text-xl font-bold pt-2 text-center'>Batmintont</p>
            </div>
            <div className='flex-col justify-center'>
                <img src={Treadmill} className='w-32 h-32' alt="" />
                <p className='text-xl font-bold pt-2 text-center'>Treadmill</p>
            </div>
            <div className='flex-col justify-center'>
                <img src={Walking} className='w-32 h-32' alt="" />
                <p className='text-xl font-bold pt-2 text-center'>Walking Pad</p>
            </div>
            <div className='flex-col justify-center'>
                <img src={Exercise} className='w-32 h-32' alt="" />
                <p className='text-xl font-bold pt-2 text-center'>Exercise Cycle</p>
            </div>
            <div className='flex-col justify-center'>
                <img src={Dumbbells} className='w-32 h-32' alt="" />
                <p className='text-xl font-bold pt-2 text-center'>Dumbbells</p>
            </div>
            <div className='flex-col justify-center'>
                <img src={Basketball} className='w-32 h-32' alt="" />
                <p className='text-xl font-bold pt-2 text-center'>Basketball</p>
            </div>
            
            </div>
            </Fade>
        </div>
    );
};

export default SportsCategory;