import { Address } from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface'
import { Meeting, Participation } from '@scop/entities'
import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AdminMailer {

  constructor(
    private readonly mailer: MailerService
  ){}

  async sendMeetingInvitations(meetingId: number) : Promise<any>
  {
    const MEETING = await Meeting.findOne(meetingId, { relations: ['enterprise'] })
    const INVITES = await Participation.find({
      where: { meeting: { id: MEETING.id } },
      relations: ['member']
    })

    INVITES.forEach(invite => {
      this.mailer.sendMail({
        to: { name: `${invite.member.firstName} ${invite.member.lastName}`, address: invite.member.email },
        subject: `${MEETING.enterprise.name} - Invitation Réunion`,
        template: 'invitation',
        context: {
          enterprise: MEETING.enterprise.name,
          link: `https://${process.env.APP_HOST}/meeting?id=${MEETING.id}&code=${invite.code}`
        }
      })
    })
  }

}
