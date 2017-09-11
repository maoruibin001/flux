/**
 * Created by lenovo on 2017/9/11.
 */
import {EventEmitter} from 'events';

const store = Object.assign({}, EventEmitter.prototype,  {
    list: [],
    id: 0,
    getAll() {
        return this.list;
    },

    addNewItemHandler(text) {
        this.list.push({
            text,
            id: this.id++
        })
    },
    removeItem(id) {
        this.list = this.list.filter(e => e.id !== id);
    },
    emitChange() {
        this.emit('change');
    },

    AddChangeListener(cb) {
        this.on('change', cb);
    },

    removeListener(cb) {
        this.removeListener('change', cb);
    }

});

export default store;