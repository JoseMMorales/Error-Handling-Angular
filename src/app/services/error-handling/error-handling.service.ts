import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {
  constructor(private snackBar: MatSnackBar) {}

  handleError(error: unknown) {
    this.snackBar.open(
      'Error was detected! We are already working on it!',
      'Close',
      {
        duration: 2000,
      }
    );
    console.warn(`Caught by Custom Error Handler: `, error);
  }
}
