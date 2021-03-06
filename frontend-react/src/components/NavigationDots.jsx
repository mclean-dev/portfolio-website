import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {['home', 'portfolio', 'about', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    alt={`${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: "#313BAC" } : { }}
                />

            ))}
        </div>
    )
}

export default NavigationDots