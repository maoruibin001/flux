/**
 * Created by lenovo on 2017/9/11.
 */
import React from 'react';

const AddButtonController = (props) => {
    let itemHtml = props.items.map((e, i) => {
        return <li key={i} onClick={() => {
            props.remove(e.id)}}>{e.text + '' + e.id}</li>
    });

    return <div>
        <ul>{itemHtml}</ul>
        <button onClick={props.onClick}>addItem</button>
    </div>
};

export default AddButtonController;