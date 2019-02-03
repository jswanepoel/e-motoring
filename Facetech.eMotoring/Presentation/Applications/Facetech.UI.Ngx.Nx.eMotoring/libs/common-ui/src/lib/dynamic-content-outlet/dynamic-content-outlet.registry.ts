import { PersonCreateComponent, PersonListComponent} from "../person";
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";

/**
* A mapping of Component Name to Component Type
* that must be updated with each new component
* that you wish to load dynamically.
*/
export const DynamicContentOutletRegistry = {
  PersonCreateComponent: PersonCreateComponent,
  PersonListComponent: PersonListComponent,
  BreadcrumbsComponent: BreadcrumbsComponent
};
