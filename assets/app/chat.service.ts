import {Injectable, OnInit} from "@angular/core";
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';




@Injectable()


export class ChatService{
    username:string;
    allowFind: boolean;
    private socket ;

 constructor(){
   this.socket = io().connect({reconnection:true,reconnectionAttempts:10});
   this.socket.on('reconnect',(attemptNumber)=>{
     console.log('Successfully Reconnected on Attempt:',attemptNumber)
   });
   this.socket.on('reconnect_error', (error) => {
     console.log('error occured:',error);
     this.socket.emit('reconnectionError');

   });

   this.socket.on('reconnecting', (attemptNumber) => {
     console.log('Reconnection started Attempt :',attemptNumber)
   });
   this.socket.on('reconnect_failed', () => {
     this.socket.emit('reconnectionError');
   });
 }



    // reconnect(){
    //   this.socket.on('reconnect',(attemptNumber)=>{
    //     console.log('Successfully Reconnected on Attempt:',attemptNumber)
    //   });
    //   this.socket.on('reconnect_error', (error) => {
    //     console.log('error occured:',error);
    //     this.socket.emit('reconnectionError');
    //
    //   });
    //
    //   this.socket.on('reconnecting', (attemptNumber) => {
    //     console.log('Reconnection started Attempt :',attemptNumber)
    //   });
    //   this.socket.on('reconnect_failed', () => {
    //     this.socket.emit('reconnectionError');
    //   });
    //
    // }
    connectionLost(data){
      this.socket.emit('connectionLost',data);
    }
    enterName(data){
        this.socket.emit('enter',data);
    }
    findPerson(data){
        this.socket.emit('find',data);
        this.allowFind= false;
    }

    newUserJoined()
    {
        let observable = new Observable<{user:string, message:string}>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
    newUserEntered()
    {
        let observable = new Observable<Array<{name:string,id:string}>>(observer=>{
            this.socket.on('new user entered', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;

    }
    foundPerson()
    {
        let observable = new Observable<any>(observer=>{
            this.socket.on('found person', (data)=>{
                observer.next(data);


                this.allowFind=true;

            });
            return () => {this.socket.disconnect();}
        });


        return observable;

    }
    foundPersonName()
    {
        let observable = new Observable<{user:string,message:string}>(observer=>{
            this.socket.on('found person name', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

  settingsSaveInfo()
  {
    let observable = new Observable<{message:string,status:boolean}>(observer=>{
      this.socket.on('settings save info', (data)=>{
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });

    return observable;
  }


    leaveRoom(data){
        this.socket.emit('leave',data);
    }

  signout(data){
    this.socket.emit('signout',data);
  }

  login(data){
      this.socket.emit('login',data);
  }


  signup(data){
    this.socket.emit('signup',data);
  }
  signupStatus(){
    let observable = new Observable<{username:string,url:string,success:boolean}>(observer=>{
      this.socket.on('signupStatus', (data)=>{
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });

    return observable;

  }

  loginStatus(){
    let observable = new Observable<{username:string,url:string,success:boolean}>(observer=>{
      this.socket.on('loginStatus', (data)=>{
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return observable;
  }

    userLeftRoom(){
        let observable = new Observable<{user:string, message:string}>(observer=>{
            this.socket.on('left room', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data)
    {
        this.socket.emit('message',data);
    }

    newMessageReceived(){
        let observable = new Observable<{user:string, message:string}>(observer=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);

            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
    leftMessage(){
        let observable = new Observable<{user:string, message:string}>(observer=>{
            this.socket.on('left message', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
    connectionLostMessage(){
      let observable = new Observable<{from:string, message:string}>(observer=>{
        this.socket.on('connection lost message', (data)=>{
          observer.next(data);
        });
        return () => {this.socket.disconnect();}
      });

      return observable;
    }


  userSettings(data){
    this.socket.emit('userSettings',data);
  }
  matchSettings(data){
    this.socket.emit('matchSettings',data);
  }
  keyPressNotification(data){
      this.socket.emit('keyPress',data);
  }
  typingMessage(){
    let observable = new Observable<{message:String}>(observer=>{
      this.socket.on('typing message', (data)=>{
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });

    return observable;
  }
  profilePicUpdate(data){
      this.socket.emit('profilePicUpdate',data);
  }
  toImageUpdate(){
    let observable = new Observable<{url:string}>(observer=>{
      this.socket.on('to image update', (data)=>{
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });

    return observable;
  }


}
