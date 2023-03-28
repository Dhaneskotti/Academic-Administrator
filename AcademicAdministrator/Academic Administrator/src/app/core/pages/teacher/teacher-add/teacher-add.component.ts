import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { TechDataService } from '../tech-data.service';
import { ModalService } from '../../../../shared/modal/modal.service'
interface dept {
  dept: string;
}
interface year {
  year: string;
}
@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss'],
})
export class TeacherAddComponent implements OnInit, OnChanges {
  @Input('action') action = '';
  @Input('data') data?: any;
  teacherForm: FormGroup;
  @Output() teacherEmittter: EventEmitter<any> = new EventEmitter()

  constructor(public _techdata: TechDataService, private _fb: FormBuilder, private _modalService: ModalService) { }

  imgToggle: boolean = false;
  submitted: boolean = false;
  //storing form data
  formdata: Array<any> = [];

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    if (this.action === 'edit' && this.data) {
      this.initForm();
      this.teacherForm.patchValue({
        id: this.data._id,
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        username: this.data.username,
        password: this.data.password,
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



  initForm() {
    this.teacherForm = this._fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: [''],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      staffId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      subject: ['', [Validators.required]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      country: ['', [Validators.required]],
      gender: [''],
      img: [''],
    });
  }

  onDob() {
    let dobval = this.teacherForm.controls['dob'].value;
    if (dobval.length === 2 || dobval.length === 5) {
      this.teacherForm.controls['dob'].setValue(dobval + '/');
    }
  }

  imgDel() {
    this.teacherForm.controls.img.setValue('');
  }

  onFile(event: any) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.teacherForm.controls.img.setValue(reader.result);
    };
  }

  onCancel() {
    this.teacherForm.reset();
  }

  onSubmit() {
    if (!this.teacherForm.valid) {
      return
    };
    this.submitted = true;

    if (this.action === 'edit') {
      this._techdata.update(this.teacherForm.value).subscribe((res) => {
        console.log(res);
        this.teacherEmittter.emit({ closeModal: true })
        this.teacherForm.reset();
      })
    } else {
      this._techdata.sendTeachData(this.teacherForm.value).subscribe((res) => {
        this.teacherEmittter.emit({ closeModal: true })
        this.teacherForm.reset();
      })
    }
    this._techdata.getTeachData();

  }

  closeModal() {
    this._modalService.closeModal('teacherPopup');
    this.teacherForm.reset()
  }

  get teacherFormControl() {
    return this.teacherForm.controls;
  }

  Year: year[] = [
    { year: 'First-Year' },
    { year: 'Seconnd-year' },
    { year: 'Third-Year' },
  ]
  Dept: dept[] = [
    { dept: 'Bsc cs', },
    { dept: 'BCA', },
  ];
}
