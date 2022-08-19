import { InjectionToken } from '@angular/core';
import { StaysService } from './services/stays/stays.service';

export const STAYS_SERVICE = new InjectionToken<StaysService>('STAYS_SERVICE');
