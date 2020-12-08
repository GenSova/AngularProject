import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  log(message: any) {
    console.log('Logging.service log message: ',
      message);
  }
}
