/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { notification } from 'antd';

class Toast {
  show({ title, description }) {
    const [api] = notification.useNotification();

    api.info({
      message: title,
      description,
      placement: 'topRight',
    });
  }
}

export default new Toast();
