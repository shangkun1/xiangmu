import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addScoreAction, subScoreAction, asyncAddScoreAction } from './store/actions/scoreAction';
import { getHttpK1 } from './store/actions/kemuAction';


function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    // return {
    //     addScore: () => dispatch(addScoreAction()),
    //     subScore: () => dispatch(subScoreAction())
    // }
    return bindActionCreators({ getHttpK1, asyncScore: asyncAddScoreAction, addScore: addScoreAction, subScore: subScoreAction }, dispatch)
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
        let { getHttpK1 } = this.props;
        getHttpK1();
    }
    render() {
        // return <div>首页</div>
        let { state: { score, kemu }, addScore, subScore, asyncScore } = this.props;
        return <div>
            {/* <h3>{this.props.state.score}</h3> */}
            <h3>{score}</h3>
            <button onClick={asyncScore}>异步加分</button>
            <button onClick={addScore}>加分</button>
            <button onClick={subScore}>减分</button>
            <div>
                <ul>
                    {kemu.result && kemu.result.list.map(val => {
                        return (
                            <React.Fragment key={val}>
                                <li>{val.a}</li>
                                <li>{val.b}</li>
                                <li>{val.c}</li>
                                <li>{val.d}</li>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </div>
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

