import { Address } from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface'
import { Participation } from '@scop/entities'
import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AdminMailer {

  constructor(
    private readonly mailer: MailerService
  ){}

  async sendMeetingInvitations(meetingId: number) : Promise<any>
  {
    console.log(await Participation.find({
      // select: ['code'],
      where: { meeting: { id: meetingId } },
      relations: ['member'],
      take: 2
    }))

    // const participations = await Participation.find({
    //   // select: ['code'],
    //   where: { meeting: { id: meetingId } },
    //   relations: ['member'],
    //   take: 2
    // })

    // participations.forEach(invite => {
    //   this.mailer.sendMail({
    //     to: { name: `${invite.member.firstName} ${invite.member.lastName}`, address: 'hilasix463@tinilalo.com' },
    //     subject: 'WeSCOP - Invitation Réunion',
    //     template: 'invitation',
    //     context: {
    //       link: `https://${process.env.APP_HOST}/meeting=${meetingId}&code=${invite.code}`
    //     }
    //   })
    // })
  }

}
