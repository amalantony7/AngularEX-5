import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
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
MatSnackBarModule,
MatTableModule,
MatListModule,
MatSelectModule,
MatAutocompleteModule,
MatSortModule,
MatCheckboxModule
]




@NgModule({
  imports : [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }
