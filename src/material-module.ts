import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports:[
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        MatListModule, 
        MatMenuModule, 
        MatSidenavModule,
        MatGridListModule,
        MatDividerModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ],
    exports:[
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        MatListModule, 
        MatMenuModule, 
        MatSidenavModule,
        MatGridListModule,
        MatDividerModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule{}