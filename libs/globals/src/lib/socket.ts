import { SocketIoConfig } from 'ngx-socket-io'
import { API } from '@scop/globals'

export const SOCKET: SocketIoConfig = {

  url: `ws://${API.HOST}:${API.PORT}`,
  options: {}

}

export const EVENTS = {

  MEETING: {
    DIALOG: 'OpenMeetingDialog'
  },
  ADMIN: {
    CHAPTER: {
      START: 'StartChapterVote',
      END: 'EndChapterVote'
    },
    CHOICE: {
      OPTIONS: 'ChoiceOptions',
      TMP: 'TemporaryChoice'
    }
  }

}
