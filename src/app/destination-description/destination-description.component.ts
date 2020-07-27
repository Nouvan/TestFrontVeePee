import { Component, Input } from "@angular/core";

@Component({
  selector: "app-destination-description",
  templateUrl: "./destination-description.component.html",
  styleUrls: ["./destination-description.component.css"],
})
export class DestinationDescriptionComponent {
  @Input() destination;
}
