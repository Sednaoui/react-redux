import React from 'react';
import './Styles/list.css';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from './Card';
import * as actionsList from '../Actions/listActionCreator';
import EditText from './EditText';
import AddCardComponent from './AddCardComponent';

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
};

const mapDispatchToProps = (dispatch) => ({
    listActions: bindActionCreators(
        { ...actionsList },
        dispatch,
    ),
});

export default connect(null, mapDispatchToProps)(List);
