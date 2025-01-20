import {Component, HostListener, inject} from '@angular/core';
import {ContactScrollUpComponent} from "../../../shared/components/contact-scroll-up/contact-scroll-up.component";
import {FormsModule, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ContactScrollUpComponent, RouterLink, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  buttonText: string = 'Send message';

  emialSendSuccessful: boolean = false
  emialSendTrigger: boolean = false

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false
  }

  contactMeTr = {
    headtext: "contactMe.headtext",
    comment: "contactMe.comment",
    name: "contactMe.name",
    nameRequired: "contactMe.nameRequired",
    nameInvalid: "contactMe.nameInvalid",
    email: "contactMe.email",
    emailRequired: "contactMe.emailRequired",
    emailInvalid: "contactMe.emailInvalid",
    message: "contactMe.message",
    messageRequired: "contactMe.messageRequired",
    messageInvalid: "contactMe.messageInvalid",
    checkBoxTextPartOne: "contactMe.checkBoxTextPartOne",
    checkBoxTextPartTow: "contactMe.checkBoxTextPartTow",
    checkBoxTextPartThree: "contactMe.checkBoxTextPartThree",
    checkBoxRequired: "contactMe.checkBoxRequired",
    emialSendFaild: "contactMe.emialSendFaild",
    emialSendSuccessful: "contactMe:emialSendSuccessful"
  }

  mailTest = false;
  http = inject(HttpClient);
  post = {
    endPoint: 'https://maximilianstark.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowWidth();
  }

  ngOnInit() {
    this.checkWindowWidth();
  }

  checkWindowWidth() {
    this.buttonText = window.innerWidth < 900 ? 'Say hello ;)' : 'Send message';
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.emialSendSuccessful = true
            this.emialSendTrigger = true
            ngForm.resetForm();
          },
          error: (error) => {
            this.emialSendSuccessful = false 
            this.emialSendTrigger = true
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(ngForm)
      ngForm.resetForm();
    }
  }
}
