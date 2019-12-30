import {Component, ViewChild} from '@angular/core';


import {ChatService} from "../chat.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";
import {LoginService} from "../login.service";

import * as firebase from 'firebase';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import {ChatboxComponent} from "../chatbox/chatbox.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent  {

  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;
  cropperSettings: CropperSettings;



 settingsForm: FormGroup;
 selectedFile:File;
 settingsSaveMessage:String;
 settingsSaveBol:boolean;
 settingsBol:boolean = false;

 file =0;

 data1: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private http:HttpClient,
              private chatService: ChatService,
              private  loginService: LoginService,
              private db: AngularFireDatabase,
              private  chatComponent: ChatboxComponent
  ){
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth =300;
    this.cropperSettings.croppedHeight = 300;
    this.cropperSettings.canvasWidth = 250;
    this.cropperSettings.canvasHeight = 200;
    this.cropperSettings.noFileInput = true;
    this.data1 = {};

    this.chatService.settingsSaveInfo()
      .subscribe(data=>{
        this.settingsBol = true;
        this.settingsSaveBol = data.status;
        this.settingsSaveMessage = data.message;
      });

  }
imgUrl = this.chatComponent.imgUrl;
  fileChangeListener($event) {
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
      image.onload = () => {
        that.cropper.setImage(image);
      };
      image.src = loadEvent.target.result;


    };


    myReader.readAsDataURL(file);
  }

  settingsForm = new FormGroup({
     age: new FormControl(),
     gender: new FormControl(),
    language: new FormControl()

  });
  userSettingsForm = new FormGroup({
    language: new FormControl()
  });
  onFileSelected(event: any){
    const file : File = event.target.files[0];

    this.file = 1;
    this.selectedFile = file;


  }

onSettings(form: FormGroup){
    var username = this.loginService.getUsername;
    var age = this.settingsForm.value.age;
    var gender = this.settingsForm.value.gender;
    var language = this.settingsForm.value.language;
    this.settingsBol = false;
    console.log(this.settingsForm.value);
    this.chatService.matchSettings({username:username,gender:gender,age:age,language:language});

}
onUserSettings(form: FormGroup){
  var username = this.loginService.getUsername;
  var language = this.userSettingsForm.value.language;
 this.settingsBol = false;


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

        this.chatService.userSettings({username: username, language:language, url: downloadUrl});
        console.log(downloadUrl);
        this.imgUrl = downloadUrl;
        this.chatComponent.imgUrl = downloadUrl;

        if(this.chatComponent.chatDataBol == true){
          var to = this.chatComponent.FPid;
          this.chatService.profilePicUpdate({to:to,url:downloadUrl});
        }

      });

    })
  }
else{
    this.chatService.userSettings({username:username,language:language,url: this.imgUrl})
  }
}
userSettings(){
  document.getElementById('matchSettings').style.display='none';
  document.getElementById('userSettings').style.display='block';
  document.getElementsByClassName('userS')[0].classList.add( 'active');
  document.getElementsByClassName('matchS')[0].classList.remove('active');
  document.getElementsByTagName('a')[0].style.color = '#FFFFFF';
  document.getElementsByTagName('a')[1].style.color = '#32465a';

}
matchSettings(){
  document.getElementById('matchSettings').style.display='block';
  document.getElementById('userSettings').style.display='none';
  document.getElementsByClassName('matchS')[0].classList.add( 'active');
  document.getElementsByClassName('userS')[0].classList.remove('active');
  document.getElementsByTagName('a')[0].style.color = '#32465a';
  document.getElementsByTagName('a')[1].style.color = '#FFFFFF';
}

back() {

      if (this.chatComponent.chatDataBol == true)
      {
        this.chatComponent.chatData = 1;
      }
      else {
        this.chatComponent.chatData =0;
        }
     }
}
