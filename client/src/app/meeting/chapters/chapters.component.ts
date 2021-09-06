import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/misc/entities/Chapter';

@Component({
  selector: 'meeting-chapters',
  templateUrl: './chapters.component.html'
})
export class MeetingChaptersComponent implements OnInit {
  chapters: Chapter[] = [
    {
      id: 1,
      title: "CHANGEMENT D'HOMME DE MÉNAGE",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lalala",
      question: "Voulez-vous changer l'homme de ménage?",
      choices: [
        {
          id: 1,
          title: "Loic Derrieux"
        },
        {
          id: 2,
          title: "Blanche Neige"
        },
        {
          id: 3,
          title: "Federico Garcia-Lorca"
        },
        {
          id: 4,
          title: "Severine Saint-Martin"
        },
        {
          id: 5,
          title: "Karl Marx"
        },
        {
          id: 6,
          title: "Frida Kahlo"
        },
        {
          id: 7,
          title: "Federica Montseny"
        },
      ],
      result: {
          id: 1,
          title: "oui"
        }
    },
    {
      id: 2,
      title: "VALIDATION DU BUDGET ANNUEL",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lololo",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 3,
          title: "oui"
        },
        {
          id: 4,
          title: "non"
        }
      ],
      result: {
          id: 3,
          title: "oui"
        }
    },

    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 5,
          title: "oui"
        },
        {
          id: 6,
          title: "non"
        }
      ],
      result: {
          id: 6,
          title: "non"
        }
    },
    {id: 4,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 7,
          title: "oui"
        },
        {
          id: 8,
          title: "non"
        }
      ],
      result: {
          id: 7,
          title: "oui"
        }
    },
    {id: 5,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 9,
          title: "oui"
        },
        {
          id: 10,
          title: "non"
        }
      ],
      result: {
          id: 9,
          title: "oui"
        }
    },
    {id: 6,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 11,
          title: "oui"
        },
        {
          id: 12,
          title: "non"
        }
      ],
      result: {
          id: 11,
          title: "oui"
        }
    },
    {id: 7,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 1,
          title: "oui"
        },
        {
          id: 2,
          title: "non"
        }
      ],
      result: {
          id: 1,
          title: "oui"
        }
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 1,
          title: "oui"
        },
        {
          id: 2,
          title: "non"
        }
      ],
      result: {
          id: 1,
          title: "oui"
        }
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 1,
          title: "oui"
        },
        {
          id: 2,
          title: "non"
        }
      ],
      result: {
          id: 1,
          title: "oui"
        }
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 1,
          title: "oui"
        },
        {
          id: 2,
          title: "non"
        }
      ],
      result: {
          id: 1,
          title: "oui"
        }
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      question: "Voulez-vous changer le logo de Fondespierre?",
      choices: [
        {
          id: 1,
          title: "oui"
        },
        {
          id: 2,
          title: "non"
        }
      ],
      result: {
          id: 1,
          title: "oui"
        }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
