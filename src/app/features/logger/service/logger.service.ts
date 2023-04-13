import { Injectable } from '@angular/core';
import { ILogger } from '../model/logger.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {

  buffer: string[] = [];

  constructor() { }

  log(): void {
    
  }
}
