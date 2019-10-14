import React from 'react';
import Card from './Card';
import './list.css';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsList from '../Actions/listActionCreator';
import EditText from './EditText';
import AddCardComponent from './AddCardComponent';

class List extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <div className="myMainContainer">
                <div className="myContainer myList">
                    <EditText
                        onSave={val => {
                            this.props.listActions.editList(list.listID, val);
                        }}
                        value={list.title}
                    />
                    <Card list={list} />
                    <AddCardComponent list={list} />
                </div>
            </div>
        );
    }
}

List.propTypes = {
    listID: PropTypes.string,
};

const mapDispatchToProps = dispatch => {
    return {
        listActions: bindActionCreators(
            Object.assign({}, actionsList),
            dispatch,
        ),
    };
};

export default connect(mapDispatchToProps)(List);
