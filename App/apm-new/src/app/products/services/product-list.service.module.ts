import { NgModule } from '@angular/core';

// empty module,
//  workwarount to avoid cicular refereces to
// @Injectable({ providedIn: ProductListRouteResolverModule }) on porduct-list.service
// check:
// https://stackoverflow.com/questions/51097327/angular-6-providedin-doesnt-work-staticinjectorerror
// https://www.youtube.com/watch?v=jigR_jBhDMs
@NgModule()
export class ProductListRouteResolverModule {}
