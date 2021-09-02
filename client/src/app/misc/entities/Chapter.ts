import { Choice } from "./Choice";

export interface Chapter {

  id: number
  title: string
  description: string
  summary: string
  choices: Choice[]
  result?: Choice

}
