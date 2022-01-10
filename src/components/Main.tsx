import React from "react";
import {deleteTodo, fetchTodos, ITodo} from "../actions";
import {IStoreState} from "../reducers";
import {connect} from "react-redux";

interface MainProps {
    todos: ITodo[];

    fetchTodos: Function;

    deleteTodo: typeof deleteTodo;
}

class Main extends React.Component<MainProps> {

    state = {fetching: false}

    onFetchTodos = () => {
        this.setState({fetching: true});
        this.props.fetchTodos();
    }

    componentDidUpdate(prevProps: Readonly<MainProps>, prevState: Readonly<{}>, snapshot?: any) {
        if (!prevProps.todos.length && this.props.todos.length){
            this.setState({fetching: false})
        }
    }

    render() {

        return (<div>
            <button onClick={this.onFetchTodos}>Get todos</button>
            {this.state.fetching && <span>Loading...</span>}
            {this.props.todos.map(todo =>
                <div key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>
                    {todo.title}
                </div>)}
        </div>);
    }
}

const mapStateToProps = ({todos}: IStoreState): { todos: ITodo[] } => {
    return {todos}
}

export default connect(mapStateToProps, {fetchTodos, deleteTodo})(Main);
