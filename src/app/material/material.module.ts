import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatDividerModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';


const MaterialComponents = [
MatButtonModule,
MatIconModule,
MatButtonToggleModule,
MatBadgeModule,
MatProgressSpinnerModule,
MatProgressBarModule,
MatToolbarModule,
MatSidenavModule,
MatMenuModule,
MatDividerModule,
MatExpansionModule,
MatCardModule,
MatTabsModule,
MatStepperModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatDatepickerModule,
MatNativeDateModule,
MatTooltipModule,
MatSnackBarModule
]




@NgModule({
  imports : [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }
