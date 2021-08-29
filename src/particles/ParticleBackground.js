import React from 'react'
import Particles from 'react-particles-js'
import ParticlesConfig from './ParticlesConfig'
import './particles.css'

const ParticleBackground = () => {
    return (
        <div className="particles">

            <Particles params={ParticlesConfig} />
        </div>
    );
}
export default ParticleBackground;