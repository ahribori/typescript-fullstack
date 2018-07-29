import * as React from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Todo title="할일1" />
                <Todo title="할일2" />
                <Todo title="할일3" />
                <Todo title="할일4" />
            </div>
        );
    }
}

export default App;
