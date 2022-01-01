"use strict";
import ShouldQueue from "expresswebcorets/lib/Queue/shoudQueue";
import Mailer from "../Mailer";
interface IData {
  body: string;
  client_name: string;
  sender_name: string;
  to: string;
  template: string;
  from: string;
  subject: string;
}

class OnboardingMail extends ShouldQueue {
  constructor() {
    super();
    this.signature = "WelcomeOnBoard_job";
    this.queueSignature(this.signature);
  }
  /**
   * Execute the job.
   * @return void
   */
  handle(data: IData) {
    new Mailer().sendMailTransport(data);
  }
}

export default OnboardingMail;
