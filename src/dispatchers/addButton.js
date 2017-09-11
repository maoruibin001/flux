/**
 * Created by lenovo on 2017/9/11.
 */
import addButtonStore from '../stores/addButton';
import {Dispatcher} from 'flux';

const AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            addButtonStore.addNewItemHandler(action.text);
            addButtonStore.emitChange();
            break;
        case 'REMOVE_ITEM':
            addButtonStore.removeItem(action.id);
            addButtonStore.emitChange();
            break;
        default:
            throw new Error(`no type ${action.actionType}`)
    }
});

export default AppDispatcher;