import {Injectable} from '@angular/core';


@Injectable()
export class TemplateEmail {
  private emailStructure: any = '.start.';
  constructor() {

  }
  structure(): any {
    return this.emailStructure;
  }
  distructure(value: any): void {
    this.emailStructure += value;
  }
}
