import * as React from 'react';
import { connect } from 'react-redux';

const Home = () =>{
    return  (
        <div>
            <p>Welcome to React typescript starter.</p><br/>
        </div>
    )
};

export default connect()(Home);
