import React  from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={(event) => props.handleChange(event.target.value)} />
        </div>
    );
}

TextInput.propTypes = {
    handleChange: PropTypes.func,
    title: PropTypes.string,
    value: PropTypes.string,
};

export default TextInput;