import {Component,ElementRef,OnInit,OnDestroy, Input,Renderer2, Inject} from "@angular/core";
import {ModalService} from "./modal.service";
import { DOCUMENT } from '@angular/common';


@Component({
    selector:"modal",
    templateUrl:'./modal.component.html',
    styleUrls:['./modal.component.css']
})

export class ModalComponent implements OnInit,OnDestroy{


    @Input() id:string = ""; //Modal id
    private element:any; //Native Element
    
    constructor(@Inject(DOCUMENT) private document:Document,private el:ElementRef,private modalService:ModalService,private render:Renderer2){
        this.element = el.nativeElement;       
    }

    ngOnInit(){
        this.modalService.add(this);
        this.document.body.appendChild(this.element);

    }

    /**
     * Method to open the modal
     */
    open(){
        this.element.style.display = 'block';  
        this.render.addClass(this.element,'show'); 
        const body = document.querySelector('body');
        this.render.addClass(body,'modal-open');             
    }

    /**
     * Method to close the modal
     */
    close(){
        this.render.removeClass(this.element,'show');
        this.element.style.display = 'none';
        const body = document.querySelector('body');
        this.render.removeClass(body,'modal-open');
    }


    /**
     * Method to remove the element from the body
     */
    ngOnDestroy(){
        this.element.remove();
        this.modalService.remove(this.id);
    }
}