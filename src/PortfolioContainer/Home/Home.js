import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Footer from './Footer';

export default function Home(){
    return(
        <section id="Home">
            <Header />
            <Profile/>
            <Footer />
        </section>
    );
}