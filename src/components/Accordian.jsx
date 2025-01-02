import React from 'react';
import './widgets.css';

const Accordian = ({ data }) => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                {data?.map((item) => (
                    <div className="accordion-item" key={item.id}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={item.databstarget}
                                aria-expanded={item.ariaexpanded === 'true'}
                                aria-controls={item.ariacontrols}
                            >
                                {item.title}
                            </button>
                        </h2>
                        <div
                            id={item.accordianId}
                            className={`accordion-collapse collapse ${item.ariaexpanded === 'true' ? 'show' : ''
                                }`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>{item.description}</p>
                                {
                                    item.list && (
                                        <ul>
                                            {item.list.map((listItem, index) => (
                                                <li key={index}>{listItem.listItem}</li>
                                            ))}
                                        </ul>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordian;
