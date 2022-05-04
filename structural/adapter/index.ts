import INotification from "./interfaces/INotification";
import FacebookNotification from "./providers/facebook-notification";
import SlackAdapterNotification from "./providers/slack-adapter-notification";
import SlackNotification from "./providers/slack-notification";
import NotificationService from "./services/NotificationService";

const providers: INotification[] = [
  new FacebookNotification(),
  new SlackAdapterNotification(new SlackNotification()),
];

const notificationService = new NotificationService(providers);
notificationService.post(
  "Nuevo curso",
  "25% descuentos a los 10 primeros en inscribirse."
);
