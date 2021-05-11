import React, { Component } from 'react';
import './employees.css';

import EmployeesServise from '../../services/employeesServise';

import AddItem from '../addItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class Employees extends Component {
    
  employeesServise = new EmployeesServise();

  // для установления ключей для добавленных элементов
  maxId = 100;

  state = {}
  
  // получение из БД
  componentDidMount() {
    this.employeesServise
    .getAllPeople()
    .then((employeesList) => {
      this.setState({
        employeesList
      });
    });
  }

  // отрисовка элементов из БД
  renderItems(arr) {
      if(arr){
      const TrashIcon = <FontAwesomeIcon icon={faTrashAlt} />
          return arr.map(({ id, first_name, last_name }) => {
              return (
                  <li className="list-group-item d-flex justify-content-between"
                      key={ id }>
                      { first_name } { last_name }
                      <button type="button"
                              className="btn btn-outline-danger btn-sm float-right"
                              onClick={ () => this.deleteItem(id)}
                              >
                        {TrashIcon}
                      </button>
                  </li>
              );
          });
      }
  }

  // ф-я удаления эленентов
  deleteItem = (id) => {
    this.setState( ({employeesList}) => {
        const idx = employeesList.findIndex((el) => el.id === id);
        const newArr = [...employeesList.slice(0, idx), ...employeesList.slice(idx+1)];
        return {employeesList: newArr };
    })     
  }

  
  // ф-я создания эленентов
  createNewItem (name) {
    return (
      { first_name: name,
      id: this.maxId++} )
  }

  // ф-я добавления эленентов
  addItem = (name) => {
    const newItem = this.createNewItem(name);

    this.setState( ({ employeesList }) => {
        const newArr = [ ...employeesList, newItem ];
        return { employeesList: newArr };
    })
  }
    
  render() {
      const { employeesList } = this.state;
      const items = this.renderItems(employeesList);

      return (
        <React.Fragment>
          <ul className="item-list list-group">
            <h3>Сотрудники: </h3>
            {items}    
          </ul>

          <AddItem
            onItemAdded = { this.addItem }/>
        </React.Fragment>
      );
    }
}