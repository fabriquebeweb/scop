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
      choices: [
        {
          id: 1,
          title: "oui"
        },
        {
          id: 2,
          title: "non"
        }
      ]
    },
    {
      id: 2,
      title: "VALIDATION DU BUDGET ANNUEL",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lololo",
      choices: [
        {id: 3,
          title: "oui"},
          {
            id: 4,
            title: "non"
          }
      ],
    },

    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
    {id: 3,
      title: "TRAVAUX D'AMÉLIORATION DES LOCAUX",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
      summary: "summary lilili",
      choices: [
        {id: 5,
          title: "oui"},
          {
            id: 6,
            title: "non"
          }
      ],
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}