import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I have</h5>
            <h2>My Experience</h2>


            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>React JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <div className="experience__content"></div>
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>Mongo DB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>Php</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>MySql</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>)
}

export default Experience