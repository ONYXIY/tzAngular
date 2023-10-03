import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { IUser } from '../interfaces/users.interface';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public apiUrl = 'http://cars.cprogroup.ru/api/rubetek/angular-testcase-list/';
  private usersSubject = new BehaviorSubject<IUser[]>([]);
  public users$ = this.usersSubject.asObservable().pipe(filter(users => users !== null));


  fetchUsers(): void{
    this.http.get<{users: IUser[]}>(this.apiUrl).subscribe(res =>{
      this.usersSubject.next(res.users)
    })
  }
patchUsers(){
//
}

}
