import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DestinationComponent } from "./destination/destination.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FilterComponent } from "./filter/filter.component";
import { CalltoactionComponent } from "./calltoaction/calltoaction.component";
import { FooterComponent } from "./footer/footer.component";
import { DestinationImageComponent } from "./destination-image/destination-image.component";
import { DestinationDescriptionComponent } from "./destination-description/destination-description.component";
import { DestinationsComponent } from "./destinations/destinations.component";
import { HeaderComponent } from "./header/header.component";
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    FilterComponent,
    CalltoactionComponent,
    FooterComponent,
    DestinationImageComponent,
    DestinationDescriptionComponent,
    DestinationsComponent,
    HeaderComponent,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
