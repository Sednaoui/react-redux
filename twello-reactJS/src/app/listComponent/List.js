import React from 'react';
import './list.css';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '../cardComponent/Card';
import * as actionsList from './listActionCreator';
import EditText from '../EditTextComponent/EditText';
import AddCardComponent from '../cardComponent/AddCardComponent';

const List = (props) => {
    const { list } = props;

    return (
        <div className="myMainContainer">
            <div className="myContainer myList">
                <EditText
                    onSave={(val) => {
                        props.listActions.editList(list.listID, val);
                    }}
                    value={list.title} />
                <Card list={list} />
                <AddCardComponent list={list} />
            </div>
        </div>
    );
};

List.propTypes = {
    listID: PropTypes.string,
    list: PropTypes.objectOf(PropTypes.any),
    listActions: PropTypes.objectOf(PropTypes.any),
};

List.defaultProps = {
    listID: '',
    list: {},
    listActions: {},
};

const mapDispatchToProps = (dispatch) => ({
    listActions: bindActionCreators(
        { ...actionsList },
        dispatch,
    ),
});

export default connect(null, mapDispatchToProps)(List);
