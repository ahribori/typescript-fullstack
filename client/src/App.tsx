import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import Todo from './components/Todo';
import { IRootState } from './store';

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <Todo title="할일1"/>
                <Todo title="할일2"/>
                <Todo title="할일3"/>
                <Todo title="할일4"/>
                {this.renderButton()}
            </div>
        );
    }

    private handleButtonClick = e => {
        console.log(e);
    };

    private renderButton = () => {
        return <button onClick={this.handleButtonClick}>버튼</button>;
    };
}

export default connect(
    (state: IRootState): IRootState => {
        return state;
    },
    (dispatch: Dispatch) => {
        return {};
    },
)(App);
