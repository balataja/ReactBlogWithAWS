import React from 'react';

class Input extends React.Component {
    render() {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <textarea type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onChange={this.props.onChange} />
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        )
    }
}

export default Input;