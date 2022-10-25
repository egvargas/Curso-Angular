import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { DirectivaPersonalizadaDirective } from './directives/directiva-personalizada.directive';
import { FormularioReactivoComponent } from './components/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DemoTablaComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FiltroCursosPipe } from './components/pipes/pipes-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablasComponent,
    DirectivasComponent,
    DirectivaPersonalizadaDirective,
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    FormularioReactivoComponent,
    DemoTablaComponent,
    FiltroCursosPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
