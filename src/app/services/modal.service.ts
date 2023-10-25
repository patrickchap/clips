import { Injectable } from '@angular/core';
import IModal from '../interfaces/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: IModal[] = [];

  constructor() { }

  isVisable(id: string): boolean {
    console.log("isVisable:", id);
    let findModal = this.modals.find(m => m.id === id);
    if(findModal){
      return findModal.visable;
    }
    return false;
  }

  toggle(id: string): void {
    let findModal = this.modals.find(m => m.id === id);
    if(findModal){
      findModal.visable = !findModal.visable;
    }
  }

  register(id: string){
    this.modals.push(
      {id: id, visable: false}
    );
  }

  unRegister(id: string){
    this.modals = this.modals.filter(m => m.id !== id);
  }
}
