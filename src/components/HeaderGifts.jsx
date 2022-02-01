import React from 'react';

const HeaderGifts = ({ showForm }) => {
    return (
        <div>
            <div>
                <header className="header">
                    <div className="header__gift__left">
                        <div>
                            <h2 className="header__text">Admin UI</h2>
                        </div>
                        <div>
                            <button onClick={showForm} >
                                Add new
                            </button>
                        </div>
                    </div>
                    <div className="header__gift__right">
                        <div>
                            <h4 className="header__text">User Login</h4>
                        </div>
                        <div>
                            <a href="/">Logout</a>
                            {/* <h4 className="header__text">Logout</h4>*/}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default HeaderGifts;