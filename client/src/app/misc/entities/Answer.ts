import { Chapter } from "./Chapter";
import { Choice } from "./Choice";
import { User } from "./User";

export interface Answer {

  chapter: Chapter
  user: User
  choice?: Choice

}
