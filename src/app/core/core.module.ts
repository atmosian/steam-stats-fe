import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '@atmEnvironments/environment';
import { rootReducers } from './store/root.reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class CoreModule {}
