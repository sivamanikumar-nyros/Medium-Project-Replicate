import { NotificationManager } from 'react-notifications';
import 'react-notifications/dist/react-notifications.css';
var Notification = {
createNotification:function (type,message)
{
if(type === 'success')
{
console.log('called success');
return NotificationManager.success(message, '', 5000);
}
else
{
console.log('called error');
return NotificationManager.error(message, '', 5000 );
}
}
}
export default Notification