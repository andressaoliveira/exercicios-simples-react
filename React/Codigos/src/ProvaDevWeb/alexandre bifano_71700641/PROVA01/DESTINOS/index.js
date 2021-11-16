import {connect} from 'react-redux';
import {clickButton} from '../redux/actions';
import destinos from './DESTINOS';


const mapStateToProps = store => ({
   newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => ({
    clickButton: (value) => dispatch(clickButton(value))
});

const destinosConnected = connect(mapStateToProps, mapDispatchToProps)(destinos);

export {destinosConnected as destinos}

