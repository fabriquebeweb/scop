import { MailerOptions, TemplateAdapter } from '@nestjs-modules/mailer'
import * as nunjucks from 'nunjucks'
import * as path from 'path'
import mjml2html from 'mjml'

export class MjmlAdapter implements TemplateAdapter {
  private templates: Map<string, nunjucks.Template> = new Map()

  public compile(mail: any, callback: (err?: any, body?: string) => any, options: MailerOptions) : void
  {
    const extension = path.extname(mail.data.template) || '.mjml'
    const filename = path.basename(mail.data.template, extension)
    const directory = options.template?.dir ?? path.dirname(mail.data.template)

    this.render(nunjucks.configure(directory), `${filename}${extension}`, mail.data.context)
      .then(html => { mail.data.html = html; return callback() })
      .catch(callback)
  }

  private async render(engine: nunjucks.Environment, template: string, context: Record<string, any>) : Promise<string>
  {
    if (!this.templates.has(template)) this.templates.set(template, engine.getTemplate(template, true))

    return mjml2html(this.templates.get(template).render(context), { useMjmlConfigOptions: true }).html
  }

}
