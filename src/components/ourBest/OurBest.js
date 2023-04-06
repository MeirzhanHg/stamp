import BestItem from '../bestItem/BestItem';

import solimoCoffee from '../../resources/img/solimo-coffee.jpg'
import prestoCoffee from '../../resources/img/presto-coffee.jpg'
import aromisticoCoffee from '../../resources/img/aromistico-coffee.jpg'

import './ourBest.scss'

const OurBest = () => {
    return (
        <div className="ourbest">
            <div className="container">
                <div className="ourbest__title title">Our best</div>
                <div className='ourbest__items'>
                    <BestItem img={solimoCoffee} title='Solimo Coffee Beans 2 kg' price='10.73$'/>
                    <BestItem img={prestoCoffee} title='Presto Coffee Beans 1 kg' price='15.99$'/>
                    <BestItem img={aromisticoCoffee} title='AROMISTICO Coffee 1 kg' price='6.99$'/>
                </div>
            </div>
        </div>
    )
}

export default OurBest;