import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactFormService } from '../services/contact-form.service';

@Component({
  selector: 'pp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private formService: ContactFormService) { }

  ngOnInit(): void {
  }

}
