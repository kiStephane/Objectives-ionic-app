import { CoreModule } from './../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    imports : [
        BrowserModule,
        CoreModule
    ]
})
export class SharedModule {}