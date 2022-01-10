import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import Main from "./components/Main";
import {reducers} from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
    return <Provider store={store}>
        <Main />
    </Provider>;
}
ReactDOM.render(<App/>, document.getElementById('root'));

/*interface IAppProps {
    color?: string;
}

interface IAppState {
    counter: number
}*/

/*const App = (props: IAppProps): JSX.Element => {
    const [counter, setCounter] = useState(0);
    const onIncrement = (): void => {
        setCounter(counter + 1);
    }

    const onDecrement = (): void => {
        setCounter(counter - 1);
    }
    return (<div color={props.color}>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <span>{counter}</span>
    </div>);
    ;
}*/

/*
class App extends React.Component<IAppProps, IAppState> {

    state = {counter: 0}

    onIncrement =() => {
        this.setState(prev => ({counter: prev.counter + 1}));
    }

    onDecrement =() => {
        this.setState({counter: this.state.counter - 1});
    }

    render() {
        return ( <div color={this.props.color}>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={this.onDecrement}>-</button>
            <span>{this.state.counter}</span>
        </div>);
    }
}
*/


