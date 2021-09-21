import { Answer, Chapter, Choice, Document, Enterprise, Meeting, MeetingType, Participation, Provider, Question, Status, User } from '@scop/entities'
import { HydrateConfigOptions } from '@scop/hydrate'

export const HYDRATE: HydrateConfigOptions = {

  MEETING_TYPES: {
    entity: MeetingType,
    values: [
      { title: 'Assemblée Générale Ordinaire' },
      { title: 'Assemblée Générale Extraordinaire' },
      { title: `Conseil d'Administration` },
      { title: `Réunion d'Associés` }
    ]
  },
  PROVIDERS: {
    entity: Provider,
    values: [
      { title: 'Microsoft' },
      { title: 'Github' },
      { title: 'Google' },
      { title: 'Apple' },
    ]
  },
  ENTERPRISES: {
    entity: Enterprise,
    values: [
      { name: 'Fondespierre' }
    ]
  },
  USERS: {
    entity: User,
    values: [
      {
        enterprise: 1,
        firstName: 'Séverine',
        lastName: 'Saint-Martin',
        email: 'sm.severine@fondespierre.com'
      },
      {
        enterprise: 1,
        firstName: 'Loïc',
        lastName: 'Derrieux',
        email: 'd.loic@fondespierre.com'
      },
      {
        enterprise: 1,
        firstName: 'Pierre',
        lastName: 'Husson',
        email: 'h.pierre@fondespierre.com'
      },
      {
        enterprise: 1,
        firstName: 'Sidney',
        lastName: 'Carlos',
        email: 'c.sidney@fondespierre.com'
      },
      {
        enterprise: 1,
        firstName: 'Laurene',
        lastName: 'Georges',
        email: 'g.laurene@fondespierre.com'
      },
      {
        enterprise: 1,
        firstName: 'Tamara',
        lastName: 'Alcale-Jimenez',
        email: 'aj.tamara@fondespierre.com'
      },
      {
        enterprise: 1,
        firstName: 'Raphaël',
        lastName: 'Cima',
        email: 'c.raphael@fondespierre.com'
      }
    ]
  },
  CHOICES: {
    entity: Choice,
    values: [
      { enterprise: 1, title: 'Pour' },
      { enterprise: 1, title: 'Contre' },
      { enterprise: 1, title: 'Sidney Carlos' },
      { enterprise: 1, title: 'Lauren Georges' },
      { enterprise: 1, title: 'Tamara Alcala-Jimenez' },
      { enterprise: 1, title: 'Raphaël Cima' }
    ]
  },
  STATUS: {
    entity: Status,
    values: [
      {
        enterprise: 1,
        meetingType: 1,
        majorityMin: 1,
        quorumMin: 1
      },
      {
        enterprise: 1,
        meetingType: 2,
        majorityMin: 1,
        quorumMin: 1
      },
      {
        enterprise: 1,
        meetingType: 3,
        majorityMin: 1,
        quorumMin: 1
      },
      {
        enterprise: 1,
        meetingType: 4,
        majorityMin: 1,
        quorumMin: 1
      },
    ]
  },
  MEETINGS: {
    entity: Meeting,
    values: [
      {
        enterprise: 1,
        meetingType: 1,
        date: new Date('2021-12-01 18:00'),
        state: null,
        chapters: [
          {
            title: 'Budgets',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            question: {
              title: 'Validation des Budgets',
              state: null,
              choices: [ { id: 1 }, { id: 2 } ],
              answers: [
                { user: 1, choice: null },
                { user: 2, choice: 1 },
                { user: 3, choice: 2 },
                { user: 4, choice: 1 },
                { user: 5, choice: null },
                { user: 6, choice: null }
              ],
              result: null
            }
          }
        ]
      }
    ]
  }

}
