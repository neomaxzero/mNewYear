import React, {Component} from 'react';
import styles from './app.css';
import Counter from './Counter';
import CoolMessage from './CoolMessage';

export default class App extends Component {
    state = {
        showCounter: true,
    }

    showMessage = () => {
        this.setState({showCounter: false});
    }
    render() {
        const { showCounter } = this.state;
        return (            
        <div className="appContainer"> 
        { showCounter ?
            <div>
                <h3 className="row justify-content-center align-items-center"> New Year's arriving : </h3> 
                <Counter countdownDone={this.showMessage} /> 
            </div> : <CoolMessage />
        } 
        </div>)

    }
}

