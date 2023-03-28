import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentViewModule } from 'src/app/core/pages/student-view/student-view.module';
import { StudentViewService } from 'src/app/core/pages/student-view/student-view.service';
import { AuthModule } from '../auth.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
})
export class UserloginComponent implements OnInit {
  adminLogin: FormGroup;
  studLogin: FormGroup;
  submitted = false;
  teachData: Array<any> = []
  id: any;
  pas: any;
  action: any = "admin";
  img: any = '../../../assets/img/login1.gif';
  constructor(private _fb: FormBuilder, public _auth: AuthService, public _stdview: StudentViewService, private _router: Router) { }

  ngOnInit(): void {
    this.adminFormInit();
    this.studformInit();
    this.getdata();
  }

  adminFormInit() {
    this.adminLogin = this._fb.group({
      adminID: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  studformInit() {
    this.studLogin = this._fb.group({
      registerno: ['', [Validators.required]],
      studPass: ['', [Validators.required]],
    })
  }

  getdata() {
    this._auth.get().subscribe((res) => {
      res.forEach((element: any) => {
        this.teachData.push(element.staffId)
        // console.log(element.staffId);

      });
      console.log(this.teachData);

    })
  }

  admin() {
    this.action = "admin"
    this.img = '../../../assets/img/login1.gif';

  }

  stud() {
    this.action = "stud"
    this.img = '../../../assets/img/log.gif';
  }

  login() {
    // if (!this.adminLogin.valid) {
    //   return
    // }
    // this.submitted = true;

    const adminId = this.adminLogin.controls['adminID'].value;
    const pass = this.adminLogin.controls['password'].value;

    if (adminId && pass) {

      this._auth.formValidation(this.adminLogin.value).subscribe((res: any) => {
        console.log(res, 'resssss');

        const adminId = this.adminLogin.controls['adminID'].value;
        const pass = this.adminLogin.controls['password'].value;
        const { staffId } = res.data;
        const { password } = res.data;
        this.id = staffId;
        this.pas = password


        console.log(`resPass ${password} resAdminId ${staffId} pass${pass} adminId ${adminId}`);


        if (adminId == staffId && pass == password) {
          this._router.navigateByUrl('auth/core')
        } else {
          console.log('invalid AdminId and Password');
        }

      });
    } else {
      alert('Empty AdminId field or password')
    }

    let found = this.teachData.find(ele => ele == adminId)

    if (found == adminId) {
      alert('valid')
      console.log('hai');

    } else {
      console.log(adminId, this.teachData);

      alert('invalid')
    }
    // console.log(this.adminLogin.value);
  }


  loginStud() {
    const reg = this.studLogin.controls['registerno'].value;
    const pass = this.studLogin.controls['studPass'].value;
    this._auth.studValidation(this.studLogin.value).subscribe((res) => {
      console.log(res.dbData.registerno, 'std ressss');
      this._auth.stdget(res.dbData.registerno).subscribe(res => {
        console.log(res, 'reg');
        this._stdview.setUserData(res);
        this._stdview.getUserData().subscribe(res => {
          console.log('sdfghjkdfg', res);
        })
        if (res) {
          this._router.navigateByUrl('/auth/std')
        }
      })
    })
    console.log(reg, pass);
    this.studLogin.reset()
  }



  get adminLogincontrols() {
    return this.adminLogin.controls;
  }
}
