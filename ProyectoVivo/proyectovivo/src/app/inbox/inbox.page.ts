import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], // Agrega IonicModule aquí
})
export class InboxPage {}
