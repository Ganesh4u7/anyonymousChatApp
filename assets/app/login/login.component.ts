import {Component, OnInit, ViewChild} from '@angular/core';

import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ChatService} from "../chat.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AngularFireDatabase} from "@angular/fire/database";

import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';

import io from 'socket.io-client';

import * as firebase from 'firebase';
import {FirebaseObjectObservable} from "@angular/fire/database-deprecated";


interface FeaturedPhotoUrls {
  url:string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  declarations: [ImageCropperComponent]
})
export class LoginComponent implements OnInit {

  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;

  data1: any;
  cropperSettings: CropperSettings;

  FeaturedPhotoStream:FirebaseObjectObservable<FeaturedPhotoUrls>;

  user:firebase.User;
  signupForm: FormGroup;
  loginForm: FormGroup;
  passCheck : boolean;
  errMsg: string;
  selectedFile:File;
  imgUrl: string;
  file =0;
  url;
  width,height =0;
  NoImageUrl ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  loginStatus = true;
  data2 = false;





  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: LoginService,
              private chatService: ChatService,
              private http:HttpClient,
              private db: AngularFireDatabase
  ) {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth =300;
    this.cropperSettings.croppedHeight = 300;
    this.cropperSettings.canvasWidth = 250;
    this.cropperSettings.canvasHeight = 200;
    this.cropperSettings.noFileInput = true;
    this.data1 = {};


    this.FeaturedPhotoStream = this.db.object('/photos')

    this.chatService.signupStatus().subscribe(data=>{


      console.log(data)
      if(data.success == true){

        this.router.navigate(['/chat']);
        this.service.setLoggedin(true);
        this.service.setUsername(data.username,data.url);

      }
      else{
        this.errMsg = 'Username Taken ,Please Try with another name';
      }

    });

    this.chatService.loginStatus().subscribe(data=> {
      // console.log(data.success)
      if (data.success == true) {
        this.router.navigate(['/chat']);
        this.service.setLoggedin(true);
        var Url= '';

        firebase.database().ref('photos/' + data.username).once('value').then(snapshot =>{
          this.imgUrl = snapshot.val();


        });
        this.service.setUsername(data.username,data.url);

      }
      else {
        this.loginStatus = false;
      }

    });

  }
  fileChangeListener($event) {
    this.data2= true;
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    };

    myReader.readAsDataURL(file);

  }

  const loginForm = new FormGroup({
    username: new FormControl(),
    pwd: new FormControl()
  });


  ngOnInit(){
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      pwd:new FormControl(null),
      cpwd: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl(null)
    dob:new FormControl(null)});


    this.loginForm = new FormGroup({
      username: new FormControl(null),
      pwd: new FormControl(null)
    });

    this.service.getLoggedInUser()
      .subscribe(user => {
        if (user) {

          // console.log(user);
          this.user = user;

          if(user) {

            this.chatService.login({name:user.displayName,email:user.email});
            this.router.navigate(['/chat']);
            this.service.setLoggedin(true);
            this.service.setUsername(user.displayName);
          }
        }
      })
  }
  loginGoogle(){
    console.log('Login..');
    this.service.login();


  }
  loginFB(){
    console.log("Login..");
    this.service.loginFB();
  }
  logout(){
    this.service.logout();
  }

  onLogin(form: FormGroup){
    var name = this.loginForm.value.username;
    var pwd = this.loginForm.value.pwd;
    this.chatService.login({username:name,password:pwd});

  }

  onSignUp(form: FormGroup){

    if(this.signupForm.value.pwd == this.signupForm.value.cpwd){

      this.passCheck = true;
      var data = JSON.stringify(this.signupForm.value);

      var username = this.signupForm.value.username;
      var email = this.signupForm.value.email;
      var pwd = this.signupForm.value.pwd;
      var dob = this.signupForm.value.dob;
      var gender=this.signupForm.value.gender;
      // console.log(username);
      // console.log(this.passCheck);

      if(this.data1 && this.data1.image) {
        var file:File = this.data1.image;
        const metaData = {contentType: 'image/jpeg'};
        var downloadUrl;
        console.log(file);

        const storageRef: firebase.storage.Reference = firebase.storage().ref('photos/' + username);
        storageRef.putString(this.data1.image.split(/,(.+)/)[1],'base64',metaData).then(snapshot => {

          snapshot.ref.getDownloadURL().then(url => {
            // console.log('Url:' + url);
            downloadUrl = url;
            //console.log(downloadUrl);

            firebase.database().ref('photos/' + username).set(downloadUrl);
            this.chatService.signup({username: username, email: email, password: pwd,gender:gender,dob:dob, url: downloadUrl});
            //console.log(downloadUrl);
            //this.chatService.signup({username: username ,email:email,password :pwd,url:downloadUrl});

          });

        }
      }
      else {

        this.chatService.signup({username: username, email: email, password: pwd,gender:gender,dob:dob, url: this.NoImageUrl});

      }

    }
    else{
      this.passCheck = false;
    }
  }



}
