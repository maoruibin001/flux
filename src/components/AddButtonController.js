/**
 * Created by lenovo on 2017/9/11.
 */
import React from 'react';
import createReactClass from 'create-react-class';
import AddButton from './AddButton';

import addButtonAction from '../actions/addButton';

import addButtonStore from '../stores/addButton';

const AddButtonController = createReactClass({

    getInitialState(){
        return {
            items: addButtonStore.getAll()
        }
    },

    componentDidMount(){
        addButtonStore.AddChangeListener(this._onChange);
    },

    componentWillUnmount(){
        addButtonStore.removeListener(this._onChange);
    },

    _onChange(){
        this.setState({
            items: addButtonStore.getAll()
        });
    },

    onClick() {
        addButtonAction.addNewItem('new Item');
    },

    remove(id) {
        addButtonAction.removeItem(id);
    },

    render() {
        return <AddButton onClick={this.onClick} items={this.state.items} remove={this.remove}/>
    }
});

export default AddButtonController;