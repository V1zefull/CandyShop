import React from 'react';

const ServicesComponent = () => {
    return (
        <div className="services">
            <div className="serv-container">
                <h1>Услуги</h1>
                <div className="serv-container-in">
                    <p>Абонименты:</p>
                    <div className="serv-in">
                        <div className='standard'><p>Стандарт</p></div>
                        <div className='silver'><p>Серебро</p></div>
                        <div className='gold'><p>Золото</p></div>
                    </div>
                </div>
                <div className="serv-container-in">
                    <p>Персональный тренер:</p>
                    <div className="serv-in">
                        <div className='standard'><p>1 занятие</p></div>
                        <div className='silver'><p>6 занятий</p></div>
                        <div className='gold'><p>Безлимит</p></div>
                    </div>
                </div>
                <div className="serv-container-in">
                    <p>Другие дополнительные услуги:</p>
                    <div className="serv-in">
                        <div className='standard'><p>Услуга 1</p></div>
                        <div className='silver'><p>Услуга 2</p></div>
                        <div className='gold'><p>Услуга 3</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesComponent;