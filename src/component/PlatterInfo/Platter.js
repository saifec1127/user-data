import React, { useContext } from 'react';
import PlatterContext from '../../context/PlatterContext';
import './Platter.css';

const Platter = () => {
    const { platterList } = useContext(PlatterContext);

    return (
        <div className="platter-container">
            <h1>Platter Data</h1>
            <ul className="platter-list">
                {platterList.map((platter) => (
                    <li key={platter._id} className="platter-item">
                        <h2 className="platter-title">{platter.stater}</h2>
                        <div className="platter-details">
                            <span className="platter-course">{platter.mainCourse}</span>
                            <span className="platter-dessert">{platter.dessert}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Platter;
