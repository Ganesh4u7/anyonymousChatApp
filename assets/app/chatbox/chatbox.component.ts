import {AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ChatService} from "../chat.service";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";


import {leave} from "@angular/core/src/profile/wtf_impl";
import {s} from "@angular/core/src/render3";



@Component({
  selector:'chat-box',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
  providers:[ChatService]
})

export class ChatboxComponent implements OnInit,OnDestroy,AfterViewChecked{

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  user:String;
  allow=false;
  allowFind: boolean;
  room:String;
  users:Array<{name:String,id:String}> =[];
  messageText:String = '';
  chatDetails:any;
  FPname:string;FPgender:string;FPage:number;FPlanguage:string;FPimgUrl:string;FPid:string;
  chatData= 0;
  chatDataBol= false;
  msgData = 0;
  imgUrl: string ;
  FPurl: string;
  leftMessage1:{user:string,message:string}= {user:'',message:''};
  leftMessage= 'Please Click on Find Person to start chatting';
  toggle :boolean = true;
  typing:boolean = false;



  messageArray:Array<{user:string,message:string}> = [];
  constructor(private _chatService:ChatService,
              private router:Router,
              private  loginService:LoginService,
              private db:AngularFireDatabase
  ){


    this.allowFind = this._chatService.allowFind;

    this._chatService.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));

    this._chatService.newUserEntered()
      .subscribe(data=> this.users = data);
    this._chatService.foundPerson()
      .subscribe(data=> {this.chatDetails = data;
      this.chatData = 1;
      this.chatDataBol = true;
      this.messageArray = [];
      this.FPname = data.to.name;
      this.FPgender = data.to.gender;
      this.FPage = data.to.age;
      this.FPid = data.to.id;
      this.FPlanguage = data.to.language;
      this.FPimgUrl = data.to.url;
       this.FPurl = data.to.url;
      // console.log(data.to);
      }

  );
    this._chatService.foundPersonName()
      .subscribe(data=> this.messageArray.push(data));

    this._chatService.userLeftRoom()
      .subscribe(data=> {this.messageArray.push(data);
      this.chatDetails= {}});

    this._chatService.newMessageReceived()
      .subscribe(data=>{this.messageArray.push(data);
      this.msgData = 1;
   // console.log(data);
      });

    this._chatService.leftMessage()
      .subscribe(data=>{
        this.messageArray = [];
        this.msgData=0;
        this.messageArray.push(data);
        this.leftMessage1 = data;
        this.chatDetails= {};
        this.chatDataBol = false;
        this.chatData=0;}
      );
    this._chatService.typingMessage()
      .subscribe(data=>{
        if(this.chatData==1){
        this.typing = true;
          document.getElementById('typing').style.display="block";
        setTimeout(function () {
          this.typing =false;
          // console.log(this.typing);
            document.getElementById('typing').style.display="none";
          }
        ,2000);
      }
  }
      );
    this._chatService.toImageUpdate()
      .subscribe(data=>{
        this.chatDetails.to.url = data.url;
        this.FPimgUrl = data.url;
        this.FPurl = data.url;
      });

    this._chatService.connectionLostMessage()
      .subscribe(data=>{
        alert(data.from+"'s " +data.message);
      })

  }

ngOnInit(){
    this.user = this.loginService.username;
    this.imgUrl = this.loginService.imgUrl;
  this._chatService.enterName({user:this.user});
  this.scrollToBottom();

}

ngOnDestroy(): void{
  // if(this.chatData == 1) {
  //   const toName= this.chatDetails.to.name;
  //   const fromName= this.chatDetails.from.name;
  //   const to= this.chatDetails.to.id;
  //   const from= this.chatDetails.from.id;
  //   this.allowFind=false;
  //
  //
  //   this._chatService.leaveRoom({user:this.user,chatData:1,to:to,from:from, toName:toName,fromName:fromName, room:this.room});
  //
  // }
  // else if(this.chatData == 0){
  //   this._chatService.signout({user:this.user,chatData:0})
  // }
 // this._chatService.reconnect();
  if(this.chatData ==1){
      let toName= this.chatDetails.to.name;
      let fromName= this.chatDetails.from.name;
      let to= this.chatDetails.to.id;
      let from= this.chatDetails.from.id;
    this._chatService.connectionLost({user:this.user,chatData:1,to:to,from:from, toName:toName,fromName:fromName});
  }
}
ngAfterViewChecked() {
  this.scrollToBottom();
}
toggleSidebar(){
if(this.toggle == false){
  this.toggle = true;
  document.getElementsByClassName('content')[0]['style'].width = 'calc(100% - 58px)';
  // document.getElementsByClassName('content')[0].style.position = 'relative';
  // document.getElementById('sidepanel').style.position = 'absolute';

  document.getElementById('sidepanel').style.width = '58px';
   document.getElementsByClassName('profileDetails')[0]['style'].display = 'none';

}
else if(this.toggle == true){
  this.toggle = false;
  document.getElementsByClassName('content')[0]['style'].width = '50%';
  document.getElementById('sidepanel').style.width = '50%';
  // document.getElementById('sidepanel').style.width = '53px';
    document.getElementsByClassName('profileDetails')[0]['style'].display = 'block';
}
  // document.getElementsByClassName("sidebar")[0].classList.toggle('active');
  //
  // document.getElementsByClassName("content")[0].classList.toggle('active');


}

zoomImg(data:number){
 // console.log('ZOOM IN');
    document.getElementById('myModal').style.display='block';
    if(data == 1)
    {
      (<HTMLImageElement> document.getElementById('img01')).src = this.imgUrl;
    }
    else if(data == 2)
    {
      (<HTMLImageElement> document.getElementById('img01')).src = this.FPimgUrl;
    }

}
closeImg(){
  document.getElementById('myModal').style.display='none';
}

scrollToBottom(): void {
  try {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
} catch(err) { }
}




  find(){
    this._chatService.findPerson({user:this.user});


  }

  leave(){
    if(this.toggle == false){
      this.toggle = true;
      document.getElementsByClassName('content')[0]['style'].width = 'calc(100% - 58px)';
      document.getElementById('sidepanel').style.width = '58px';
      document.getElementsByClassName('profileDetails')[0]['style'].display = 'none';
    }
    const toName= this.chatDetails.to.name;
    const fromName= this.chatDetails.from.name;
    const to= this.chatDetails.to.id;
    const from= this.chatDetails.from.id;
    this.allowFind=false;

    this._chatService.leaveRoom({user:this.user,to:to,from:from, toName:toName,fromName:fromName, room:this.room});
    this.messageArray = [];
    this.msgData=0;
    this.chatData=0;
    this.chatDataBol = false;
    this.chatDetails = {};
  }

  sendMessage()
  {
    var to= this.chatDetails.to.id;
    var from= this.chatDetails.from.id;
    var toName = this.chatDetails.to.name;
    console.log(toName);
    this._chatService.sendMessage({user:this.user, to:to, from:from, toName: toName,message:this.messageText});
    this.messageText = '';
  }
  keyPress()
  {
    var to = this.chatDetails.to.id;
    this._chatService.keyPressNotification({to:to})

}

  logout(){
    if(this.chatData == 1) {
      const toName= this.chatDetails.to.name;
      const fromName= this.chatDetails.from.name;
      const to= this.chatDetails.to.id;
      const from= this.chatDetails.from.id;
      this.allowFind=false;

      this._chatService.leaveRoom({user:this.user,chataData:1,to:to,from:from, toName:toName,fromName:fromName, room:this.room});

    }
    else if(this.chatData == 0){
      this._chatService.signout({user:this.user,chatData:0})
  }
  this.messageArray = [];
  this.msgData=0;
  this.chatData=0;
  this.chatDataBol = false;
  this.chatDetails = {};

    this.router.navigate(['/']);
  }

  clicked(){
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = (<HTMLImageElement> document.getElementById("img01")).src;
  var captionText = document.getElementById("caption");
    var url = this.FPurl;
  img.onclick = function(){
    modal.style.display = "block";

    modalImg = url;

  }
document.getElementsByClassName('modal')[0]['style'].display="block";
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
    document.getElementsByClassName("close")[0]['onclick'] = function() {
    modal.style.display = "none";
  }
}

settings(){
    this.chatData = 2;
  if(this.toggle == false){
    this.toggle = true;
    document.getElementsByClassName('content')[0]['style'].width = 'calc(100% - 58px)';
    document.getElementById('sidepanel').style.width = '58px';
    document.getElementsByClassName('profileDetails')[0]['style'].display = 'none';
  }
}




}
