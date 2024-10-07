import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectEmployeeState = (state: AppState) => state.employee;

export const selectEmpList = createSelector(
    selectEmployeeState,
  (state)=> state.employeeList
)