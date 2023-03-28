import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { DeptServiceService } from '../dept-service.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit, OnChanges {
  @Input('action') action = '';
  @Input('data') data?: any;
  departmentForm: FormGroup;
  @Output() deptEmittter: EventEmitter<any> = new EventEmitter()

  constructor(private _fb: FormBuilder, private _dept: DeptServiceService, private _modalService: ModalService) { }

  ngOnInit(): void {
    this.initform()
  }
  submitted: boolean = false;

  initform() {
    this.departmentForm = this._fb.group({
      id: [''],
      deptId: ['', [Validators.required, Validators.minLength(3)]],
      deptName: ['', [Validators.required]],
      hodName: ['', [Validators.required]],
      stud: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    })
  }

  ngOnChanges(): void {
    if (this.action === 'edit' && this.data) {
      this.initform();
      this.departmentForm.patchValue({
        id: this.data._id,
        deptId: this.data.deptId,
        deptName: this.data.deptName,
        hodName: this.data.hodName,
        stud: this.data.stud,
      })
    }
  }


  onSubmit() {
    this.submitted = true;
    if (this.departmentForm.invalid) {
      return
    }

    if (this.action === 'edit') {
      this._dept.update(this.departmentForm.value).subscribe((res) => {
        console.log(res);
        this.deptEmittter.emit({ closeModal: true })
        this.departmentForm.reset();
      })
    } else {
      this._dept.sendData(this.departmentForm.value).subscribe(res => {
        console.log(res);
        this.deptEmittter.emit({ closeModal: true });
        this.departmentForm.reset()
      })
    }
    this._dept.getData();


  }

  closeModal() {
    this._modalService.closeModal('deptPopup');
    this.departmentForm.reset()
  }

  get UserNameControl() {
    return this.departmentForm.controls;
  };
}
