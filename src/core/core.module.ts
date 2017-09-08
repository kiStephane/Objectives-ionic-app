import { NgModule } from '@angular/core';
import { NgDbHelperModule } from 'ng-db-helper';

import { getDbHelperModuleConfiguration } from './configs/database.config';

@NgModule({
  imports: [
    NgDbHelperModule.forRoot(getDbHelperModuleConfiguration)
  ],
  declarations: []
})
export class CoreModule { }