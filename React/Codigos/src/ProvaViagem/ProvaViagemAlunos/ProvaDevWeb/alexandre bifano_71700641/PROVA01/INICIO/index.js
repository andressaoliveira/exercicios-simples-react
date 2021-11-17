import {connect} from 'react-redux';
import {clickButton} from '../redux/actions';
import inicio from './INICIO';


const mapStateToProps = store => ({
   newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => ({
    clickButton: (value) => dispatch(clickButton(value))
});

const inicioConnected = connect(mapStateToProps, mapDispatchToProps)(inicio);

export {inicioConnected as inicio}