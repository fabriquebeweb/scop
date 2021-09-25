import { MailerOptions } from '@nestjs-modules/mailer'
import { MjmlAdapter } from '@scop/mailer'

export const MAILER: MailerOptions = {
  transport: {
    host: process.env.MAILER_HOST,
    port: +process.env.MAILER_PORT,
    // secure: false,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PWD,
    },
  },
  defaults: {
    from: '"No Reply" <atlasrw@protonmail.com>',
  },
  // preview: true,
  template: {
    dir: `${process.cwd()}/libs/mailer/templates`,
    adapter: new MjmlAdapter(),
    options: {
      strict: true,
    },
  },
}
