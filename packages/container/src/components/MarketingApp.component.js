import React from 'react';
import {mount} from "marketing/MarketingApp";

export default () => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        // import('marketing/MarketingApp').then(({mount}) => {
        mount(ref.current);
        // });
    }, []);

    return <div ref={ref}/>;
};
