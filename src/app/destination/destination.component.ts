import { Component, OnInit, Input } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-destination",
  templateUrl: "./destination.component.html",
  styleUrls: ["./destination.component.scss"],
})
export class DestinationComponent implements OnInit {
  @Input() destination;

  constructor() {}

  ngOnInit() {}

  destinationFileName() {
    return this.destination.label
      .toUpperCase()
      .replace(/ /g, "_")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
}
