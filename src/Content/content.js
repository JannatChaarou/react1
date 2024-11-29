import React from 'react';
import Cards from '../Card/card';

function Content() {
    return (
        <section className="content">
            <h1>Welcome to Our Online Store</h1>
            <div className="card-container">
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </section>
    );
}

export default Content;
