import React, { Component } from 'react';
import './addRemoveItem.css';

export default class AddRemoveItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({label: e.target.value})
    }

    // очистка поля
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({ label: '' })
    }

    render(){
        return(
            <form className="d-flex"
                 onSubmit={ this.onSubmit }>
                <div className="form-group">
                    <input 
                        className="form-control" 
                        placeholder="напр: Иван Иванов" 
                        onChange={ this.onLabelChange }
                        value={ this.state.label }/>
                </div>
                <button className="btn btn-primary">Добавить сотрудника</button>
            </form>
        );
    }
}