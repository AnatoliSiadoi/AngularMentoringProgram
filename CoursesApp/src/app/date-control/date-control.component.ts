import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component( {
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: [ './date-control.component.css' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateControlComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateControlComponent),
    multi: true
  }]
} )

export class DateControlComponent implements ControlValueAccessor, Validator {

  @Input()
  public date: Date;

  onChange = (value: any) => { };
  onTouched = () => { };

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return Validators.required(control) && 
    Validators.pattern('MM-dd-yyyy')(control);
  }

  writeValue(obj: any): void {
    this.date = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void { }
}