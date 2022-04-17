import React from 'react';
import { NavigationDots } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <div className='app__wrapper app__flex'>
                <Component />

                <div className='copyright' >
                    <p className='c-text'>@2022 JOHN MCLEAN</p>
                    <p className='c-text'>All rights reserved.</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap