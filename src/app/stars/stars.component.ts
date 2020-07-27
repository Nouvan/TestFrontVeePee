import { Component, Input } from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"],
})
export class StarsComponent {
  public nb: number = 0;
  @Input()
  set number(nb) {
    this.nb = nb.replace(/\D/g, "");
  }
}
