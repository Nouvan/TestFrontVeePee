import { Component, Input } from "@angular/core";

@Component({
  selector: "app-destination-image",
  templateUrl: "./destination-image.component.html",
  styleUrls: ["./destination-image.component.css"],
})
export class DestinationImageComponent {
  @Input() destination;

  destinationFileName() {
    return this.destination.label
      .toUpperCase()
      .replace(/ /g, "_")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
}
