import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPopupPage } from "../modal-popup/modal-popup.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public modalController: ModalController) {}

  async whois() {
    const modal = await this.modalController.create({
      component: ModalPopupPage,
      componentProps: { name: "Jack Sparrow" },
    });
    return await modal.present();
  }
}
