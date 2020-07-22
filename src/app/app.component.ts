import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer,
} from "@angular/core";
import * as destinations from "./destinations.json";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "scale(0.5)", opacity: 0 }), // initial
        animate(
          "1s cubic-bezier(.8, -0.6, 0.2, 1.5)",
          style({ transform: "scale(1)", opacity: 1 })
        ), // final
      ]),
    ]),
  ],
})
export class AppComponent {
  title = "TestFrontVeePee";

  /**
   * List of destinations
   */
  public destinations = destinations.destinations;

  /**
   * List of available countries
   */
  public countries;

  /**
   * Search select value
   */
  public search = "ALL";

  @ViewChild("inputGroupSelect", { static: true }) inputRef: ElementRef;
  constructor(private renderer: Renderer) {}
  ngOnInit() {
    const countries = new Set();
    this.destinations.map((x) => {
      countries.add(x.country);
    });

    this.countries = [...countries].sort();
  }

  onClickSelectLabel() {
    var event = new MouseEvent("mousedown", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    console.log(event);
    this.inputRef.nativeElement.dispatchEvent(event);
  }
}
