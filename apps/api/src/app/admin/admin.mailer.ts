import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AdminMailer {

  constructor(
    private readonly mailer: MailerService
  ){}

  async sendMeetingInvitations(meetingId: number) : Promise<any>
  {}

}
