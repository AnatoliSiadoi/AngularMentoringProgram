import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component( {
  selector: 'app-duration-control',
  templateUrl: './duration-control.component.html',
  styleUrls: [ './duration-control.component.css' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationControlComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DurationControlComponent),
    multi: true
  } ]
})

export class DurationControlComponent implements OnInit, ControlValueAccessor, Validator {

  private duration: number;
  
  onChange = (value: any) => { };
  onTouched = () => { };

  get value() {
    return this.duration;
  }

  @Input() set value( val ) {
    this.duration = val;
    this.onChange(this.duration);
  }

  constructor () { }

  validate(control: AbstractControl): ValidationErrors {
    return Validators.min(0)(control) &&
     Validators.max(10000)(control);
  }

  writeValue(obj: any): void {
    this.duration = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  ngOnInit(): void { }
}
