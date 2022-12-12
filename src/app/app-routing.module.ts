import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./main/Modules/home/home.component";
import { ReglementModule } from "./main/Modules/reglement/reglement.module";
import {FactureModule} from "./main/Modules/facture/facture.module";

const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./main/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "facture",
    loadChildren: () =>
        import("./main/Modules/facture/facture.module").then((m) => m.FactureModule),
  }, 
  {
    path: "produit",
    loadChildren: () =>
      import("./main/Modules/produit/produit.module").then(
        (m) => m.ProduitModule
      ),
  },
  {
    path: "reglement",
    loadChildren: () =>
      import("./main/Modules/reglement/reglement.module").then(
        (m) => m.ReglementModule 
      ),
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },

  {
    path: "**",
    redirectTo: "/pages/miscellaneous/error", //Error 404 - Page not found
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
