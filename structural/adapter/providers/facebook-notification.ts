import INotification from "../interfaces/INotification";

class FacebookNotification implements INotification {
  post(title: string, message: string): void {
    console.log(`Sending ${title} - ${message} - Facebook`);
  }
}
export default FacebookNotification;
