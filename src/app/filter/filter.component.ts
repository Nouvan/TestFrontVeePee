import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent {
  @Input() countries;

  @Output() valueChange = new EventEmitter();

  public _value;
  @Input()
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.valueChange.emit(this.value);
  }
  constructor() {}
}
