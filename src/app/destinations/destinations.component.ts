import { Component, OnInit, Input } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-destinations",
  templateUrl: "./destinations.component.html",
  styleUrls: ["./destinations.component.css"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "scale(0.5)", opacity: 0 }), // initial
        animate(
          "1s cubic-bezier(.8, -0.6, 0.2, 1.5)",
          style({ transform: "scale(1)", opacity: 1 })
        ), // final
      ]),
      transition(":leave", [
        style({ transform: "scale(1)", opacity: 1 }), // initial
        animate(
          "1s cubic-bezier(.8, -0.6, 0.2, 1.5)",
          style({ transform: "scale(0)", opacity: 0 })
        ), // final
      ]),
    ]),
  ],
})
export class DestinationsComponent implements OnInit {
  @Input() destinations;
  @Input() search;
  constructor() {}

  ngOnInit() {}
}
