import { Component, OnInit, Input } from '@angular/core'; 
import { NavParams, ModalController } from '@ionic/angular'; 

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})
export class ModalPopupPage implements OnInit {
  @Input() name: string;

  constructor(public modalController: ModalController) {   

  } 

  async closeModal() {
    await this.modalController.dismiss();
  } 


  ngOnInit() {   } 

  }
