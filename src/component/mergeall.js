
import React from 'react';
import Appbar from '../appbar/appbar';
import Header from './header';
import Body1 from './body1';
import Body2 from './body2';
import Body3  from './body3';
import Body4 from './body4';
import Footer from './footer';

const Merge = () => {
    return ( <div>
        <Appbar />
        <Header />
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        <Footer />
    </div> );
}
 
export default Merge;