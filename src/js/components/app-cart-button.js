import React from 'react';

export default (props) => {
    return (
        <button className="btn btn-default btn-sm" onClick={ props.hanlder }>
        { props.txt }
        </button>
    )
}