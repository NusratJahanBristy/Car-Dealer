import React from 'react';
import fluoride from '../../../assets/services/1.jpg'
import cavity from '../../../assets/services/2.jpg'
import whitening from '../../../assets/services/3.jpg'
import Feature from './Feature';

const Features = () => {
    
    const featureData = [
        {
            id: 1,
            name: 'Car Comparison:Toyota vs Premio',
            description: 'Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan.The first generation Premio is an upscale, luxurious sedan in comparison to the Allion, which has a more youthful, sporting nature. ',
            img: fluoride
        },
        {
            id: 2,
            name: 'Why You should Buy a car online',
            description: 'Buying a car online has become a matter of confusion for every car buyer.Its all about convenience when it comes to shopping online.Buying a car online should be no exception.',
            img: cavity
        },
        {
            id: 3,
            name: 'Electric Cars Vs Traditional Carslder',
            description: 'The idea of a vehicle that runs on battery power is not a new invention.In fact ,the idea of electric cars is just as old as gaspowered cars.Whats changed is the batteries,charging,range and several other factors.',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-emerald-600 uppercase'>Featured Articles</h3>
                <h2 className='text-3xl'>Featured Articles</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    featureData.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;