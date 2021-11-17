import {connect} from 'react-redux';
import {clickButton} from '../redux/actions';
import menu from './MENU';


const mapStateToProps = store => ({
   newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => ({
    clickButton: (value) => dispatch(clickButton(value))
});

const menuConnected = connect(mapStateToProps, mapDispatchToProps)(menu);

export {menuConnected as menu}

