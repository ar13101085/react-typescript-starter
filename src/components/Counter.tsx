import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';


function Counter(props: any) {
    return (
        <React.Fragment>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{props.count}</strong></p>

            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { props.increment(); }}>
                Increment
            </button>
        </React.Fragment>
    );
}

export default connect(
    (state: ApplicationState) => state.counter,
    CounterStore.actionCreators
)(Counter);
