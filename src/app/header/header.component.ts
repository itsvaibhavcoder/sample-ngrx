import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectEmpList } from '../states/Employess/employee.selector';
import { EmpObject } from '../states/Employess/employee.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // empList$: Observable<EmpObject[]>;
  constructor(private store: Store<AppState>) {
    // this.empList$ = this.store.select(selectEmpList);
    // console.log(this.empList$);
   }

  ngOnInit(): void {
  }
  
}
