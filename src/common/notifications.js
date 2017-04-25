//import 'react-notifications/lib/notifications.css';
//import {NotificationManager} from 'react-notifications';

var CreateNotification = (type) => {
    switch(type) {
        case 'info':
            //NotificationManager.info('Info message');
            break;
        case 'success':
            //NotificationManager.success('Your blog has successfully posted', 'Success');
            break;
        case 'warning':
            //NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            break;
        case 'error':
            //NotificationManager.error('There was a network issue', 'Error', 5000);
            break;
        case 'validationError':
            //NotificationManager.error('Please fill out all fields before posting.')
            break;
    }
}

exports.CreateNotification = CreateNotification