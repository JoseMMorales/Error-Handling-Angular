import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  //RIGHT URL: `https://jsonplaceholder.typicode.com/todos?_start=0&_limit=3`

  load(): Observable<Task[]> {
    return this.http //URL modified to return a failure
      .get<Task[]>(`https://jsonplaceholder.typde.com/todos?_start=0&_limit=3`)
      .pipe(
        catchError((error) => {
          console.info('Error handled by Data Service...');
          return throwError(() => {
            console.info('Error rethrown by Data Service...');
            return error;
          });
        })
      );
  }

  addTaskSync(task: Task): Task | never {
    if (task.id === 0) {
      throw Error(`Value zero (0) is not allowed as a task id`);
    }
    return task;
  }
}
