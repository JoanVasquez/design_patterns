import INotification from "../interfaces/INotification";
import SlackNotification from "./slack-notification";

class SlackAdapterNotification implements INotification {
  constructor(private slackNotification: SlackNotification) {}

  public post(title: string, message: string): void {
    this.slackNotification.send("general", title, message);
  }
}

export default SlackAdapterNotification;
