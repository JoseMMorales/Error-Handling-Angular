import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { WidgetErrorComponent } from '../widget-error/widget-error.component';
import { catchError, Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    WidgetErrorComponent,
  ],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  error: Error | null = null;

  constructor(private widgetData: DataService) {}

  ngOnInit(): void {
    this.tasks$ = this.widgetData.load().pipe(
      tap({
        error: (error) => {
          this.error = error;
          console.log(
            `Update component's 'error' property showing the error banner`
          );
        },
      }),
      catchError(() => {
        console.log(`Replacing the failed observable with an empty array`);
        return of([]);
      })
    );
  }

  addTask() {
    try {
      this.widgetData.addTaskSync({ id: 0, title: 'New Task' });
    } catch (error) {
      if (error instanceof Error) {
        this.error = error;
        throw error; // Stop propagation
      }
    }
  }
}
