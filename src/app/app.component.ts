import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public title = "TestFrontVeePee";
  private _destinationsJson = "./assets/destinations.json";

  /**
   * List of destinations
   */
  public destinations: any = [];

  /**
   * List of available countries
   */
  public countries;

  /**
   * Search select value
   */
  public search = "ALL";

  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {
    this._httpClient.get(this._destinationsJson).subscribe((response) => {
      this.destinations = response;

      const countries = new Set();
      this.destinations.map((x) => {
        countries.add(x.country);
      });

      this.countries = [...countries].sort();
    });
  }
}
