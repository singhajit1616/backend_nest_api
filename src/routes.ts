import { Routes } from 'nest-router';
import { NotificationsModule } from './notifications/notifications.module';

export const routes: Routes = [
  {
    path: '/v1',
    children: [
      {
        path: 'notification',
        module: NotificationsModule
      }
    ]
  }
];