import React from 'react';
import './Background.css'

function Background({title}) {
    return (
        <section className='Background'>
            <div className='Background__content'>
                <h2>{title}</h2>
                <p>Molla</p>
            </div>
        </section>
    );
}

export default Background;