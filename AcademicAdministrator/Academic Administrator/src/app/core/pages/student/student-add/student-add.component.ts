import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { i } from 'chart.js/dist/chunks/helpers.core';
import { zip } from 'rxjs';
import { StdDataService } from '../std-data.service';
import { ModalService } from '../../../../shared/modal/modal.service'
interface dept {
  dept: string;
}
interface year {
  year: string;
}

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit, OnChanges {
  @Input('action') action = '';
  @Input('data') data?: any;
  studentForm: FormGroup;
  @Output() studentEmittter: EventEmitter<any> = new EventEmitter();
  submitted: boolean = false;

  constructor(public _stdservice: StdDataService, private fb: FormBuilder, private _modalService: ModalService) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.studentForm);

  }

  ngOnChanges(): void {
    if (this.action === 'edit' && this.data) {
      this.initForm();
      this.studentForm.patchValue({
        id: this.data._id,
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        fatherName: this.data.fatherName,
        motherName: this.data.motherName,
        fatherOccupation: this.data.fatherOccupation,
        motherOccupation: this.data.motherOccupation,
        fatherMobile: this.data.fatherMobile,
        motherMobile: this.data.motherMobile,
        username: this.data.username,
        password: this.data.password,
        registerno: this.data.registerno,
        deptbranch: this.data.deptbranch,
        mobile: this.data.mobile,
        email: this.data.email,
        dob: this.data.dob,
        address: this.data.address,
        city: this.data.city,
        state: this.data.state,
        zipcode: this.data.zipcode,
        country: this.data.country,
        gender: this.data.gender,
        img: this.data.img
      })
    }
  }

  ///form initialisation
  initForm() {
    this.studentForm = this.fb.group({
      id: [""],
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: [''],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      fatherOccupation: ['', [Validators.required]],
      motherOccupation: ['', Validators.required],
      fatherMobile: ['', [Validators.required]],
      motherMobile: ['', Validators.required],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      registerno: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      deptbranch: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]],
      country: ['', [Validators.required]],
      gender: [''],
      img: ['']
    });
  }

  ////dob///
  onDob() {
    let dobval = this.studentForm.controls['dob'].value;
    if (dobval.length === 2 || dobval.length === 5) {
      this.studentForm.controls['dob'].setValue(dobval + '/')
    }
  };

  imgDel() {
    this.studentForm.controls.img.setValue('');
  }

  onFile(event: any) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (_event) => {
      this.studentForm.controls.img.setValue(reader.result);
    }
  }


  onCancel() {
    this.studentForm.reset()
  }


  onSubmit() {
    if (!this.studentForm.valid) {
      return;
    }
    this.submitted = true;
    if (this.action === 'edit') {
      this._stdservice.updateStudent(this.studentForm.value).subscribe(res => {
        console.log('res', res)
        this.studentEmittter.emit({ closeModal: true })
        this.studentForm.reset();
      })
    } else {
      this._stdservice.addStudent(this.studentForm.value).subscribe(res => {
        this.studentEmittter.emit({ closeModal: true })
        this.studentForm.reset();
      })
    }
  }

  closeModal() {
    this._modalService.closeModal('studentPopup');
    this.studentForm.reset()
  }



  //send validation to html
  get studentFormControl() {
    return this.studentForm.controls;
  };

  Dept: any = [
    { dept: 'BCA' },
    { dept: 'Bsc cs' },
  ];
  Year: year[] = [
    { year: 'First-Year' },
    { year: 'Seconnd-year' },
    { year: 'Third-Year' },
  ]

}
