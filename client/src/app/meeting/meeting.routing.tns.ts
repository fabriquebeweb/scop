import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';

@NgModule({
  imports: [NativeScriptRouterModule.forChild([])],
  exports: [NativeScriptRouterModule]
})
export class MeetingRoutingModule { }
