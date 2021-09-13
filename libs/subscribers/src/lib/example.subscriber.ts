import { EventSubscriber, EntitySubscriberInterface } from "typeorm";

@EventSubscriber()
export class ExampleSubscriber implements EntitySubscriberInterface<any> {}
