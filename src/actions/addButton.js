/**
 * Created by lenovo on 2017/9/11.
 */
import addButtonDispatcher from '../dispatchers/addButton';


const addButtonAction = {
    addNewItem(text) {
        addButtonDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text
        })
    },
    removeItem(id) {
        addButtonDispatcher.dispatch({
            actionType: "REMOVE_ITEM",
            id
        })
    }
};

export default addButtonAction;