import { Injectable } from "@angular/core";

/**
 * Service to manage popup modal
 */
@Injectable({
    providedIn: "root"
})

export class ModalService {

    modalArray: any[] = [];

    /**
     * Method which add popup native element
     * @param element - native element
     */
    add(element:any) {
        this.modalArray.push(element);
    }


    /**
     * Method to remove the popup element from the array list
     * @param {string} id - Modal id
     */
    remove(id: string): void {
        this.modalArray = this.modalArray.filter(x => x.id != id);
    }


    /**
     * Method to open the modal based on the modal id
     * @param {string} id - Modal id 
     */
    openModal(id: string): void {
        const modal = this.modalArray.find(x => x.id == id);
        modal.open()
    }

    
    /**
     * Method to close the opened survey
     * @param {string} id - Modal id 
     */
    closeModal(id: string): void {
        const modal = this.modalArray.find(x => x.id == id);
        modal?modal.close():'';
    }
}
