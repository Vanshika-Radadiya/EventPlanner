import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-chatbot',
  imports:[FormsModule, CommonModule, ReactiveFormsModule, MatCardModule,MatFormFieldModule,
    MatInputModule,MatButtonModule, MatIconModule,NavbarComponent
  ],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit, AfterViewChecked{
  messages: { text: string, user: boolean }[] = [];
  userInput: string = '';
  type: string= '';
  a_role: string='';
  budget: string='';
  city: string='';
  price: string='';
  art:any = [];
  cat:any=[];
  evn:any=[];
    constructor(private router:Router,  private route: ActivatedRoute){}
  
    @ViewChild('chatContent') chatContent!: ElementRef;
  
  ngOnInit(): void {
    
    this.messages.push({ text: "Hey there! What are you searching for today?🎭 Events 🎤 Artists 🍽 Caterers", user: false });//0 index
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  // constructor(private http: HttpClient) {}

  sendMessage() {
    // this.messages.push({ text: "Welcome, User", user: false });
    if (!this.userInput.trim()) return;
        this.messages.push({ text: this.userInput, user: true });
        
        
    this.type= this.messages.at(1)?.text || '';
    if(this.messages.length==2 && this.type=="Events" ){
      this.messages.push({ text: "Great!! Which type of event are you planning?   🎂Birthday 💍Wedding 💞Engagement   👶Baby Shower", user: false });//index 2
      console.log(this.messages.at(1)?.text);  
    }
    if(this.messages.length==2 && this.type=="Artists" ){
      this.messages.push({ text: "Awesome! What type of artist do you need for your event?🎤 Anchor (Event Host)🎸 Musician (Live Band, Instrumental)🎩 Magician (Magic & Illusions)💃 Dancer (Solo, Group, Choreographer)🎶 Singer (Bollywood, Classical, Pop)", user: false });//index 2
    }
    if(this.messages.length==2 && this.type=="Caterers" ){
      this.messages.push({ text: "For what event you are planning catering service? For Birthday or Weddings ?", user: false });//index 2
    }

    console.log(this.messages.at(3)?.text || '');
    if(this.messages.length==4 ){
      this.messages.push({ text:  "Got it! Which city in Gujarat you are looking for?", user: false });//index 4
    }
    if(this.messages.length==6 && this.type != "Caterers"){
      this.messages.push({ text:  "Last step! What budget range are you considering? 💸 Below ₹10000 💰 Below ₹50000💎 Below ₹70000🌟 Below  ₹100000", user: false });//index 6
    }
    if(this.messages.length==6 && this.type == "Caterers"){
      this.messages.push({ text: "Could you please specify your per plate price range per plate?💰 Response Options:🍽 Below ₹300 🍽 Below ₹700 per plate🍽 Below ₹1000 per plate🍽 Above ₹1000 per plate", user: false });//index 6
    }
    
    this.a_role= this.messages.at(3)?.text ||"";
    this.city= this.messages.at(5)?.text ||"";
    this.budget= this.messages.at(7)?.text ||"";
    if(this.messages.length == 8 && this.type == "Artists"){
      this.messages.push({ text: "Here are some performer you might be interested in, listed below.", user: false });//index 6
      console.log(this.a_role + " "+this.budget);
      axios.get('http://localhost:8080/artist/'+this.a_role+'/'+this.budget)
      .then(response=>{
        console.log(response.data);
        this.art=response.data;
      })
      
    }
    if(this.messages.length == 8 && this.type == "Events"){
      this.messages.push({ text: "Here are some top events you might be interested in, listed below.", user: false });//index 6
      axios.get('http://localhost:8080/event/'+this.a_role+'/'+this.city+'/'+this.budget)
      .then(response=>{
        console.log(response.data);
        this.evn=response.data;
      })
    }
    if(this.messages.length == 8 && this.type == "Caterers"){
      axios.get('http://localhost:8080/caterer/'+this.city+'/'+this.budget)
      .then(response=>{
        console.log(response.data);
        this.cat=response.data;
      })
    } 
    
    
    this.userInput='';
    
  }
  private scrollToBottom() {
    try {
      this.chatContent.nativeElement.scrollTop = this.chatContent.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll Error:', err);
    }
  }
  dis1(e:any){
    console.log(e);
    console.log(e.artist_id);
    this.router.navigate(['/displayArtist',e.artist_id]);
  }
  dis2(e:any){
    console.log(e);
    console.log(e.menu_id);
    this.router.navigate(['/displayCaterer',e.menu_id]);
  }
  dis3(e:any){
    console.log(e);
    console.log(e.event_id);
    this.router.navigate(['/displayEvent',e.event_id]);
  }
}
