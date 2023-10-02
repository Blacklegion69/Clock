import AnalogClock from '@/components/AnalogClock';
import BarClock from '@/components/BarClock';
import DigitalClock from '@/components/DigitalClock';
import HomeLoader from '@/components/HomeLoader';

const App = () => {
    return (
        <div>
            <AnalogClock />
            <DigitalClock />
            <BarClock />
            <HomeLoader />
        </div>
    );
};

export default App;
