import {createReducer, on} from '@ngrx/store'
import { addEmployee, removeEmployee} from '../Employess/employee.actions'

export interface EmpObject {
  name?: string
}

export interface EmployeesState{
    employeeList:EmpObject[]
}

export const initialEmployeeState:EmployeesState = {
  employeeList:[{name: 'vaibhav'}, {name: "rushi"}]
}

export const employeeReducer = createReducer(
initialEmployeeState,
  on(addEmployee, state=> ({...state, employeeList: []})),
  on(removeEmployee, state => ({ ...state, employeeList: []}))
)
