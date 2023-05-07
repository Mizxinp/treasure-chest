import { HttpStatus as Status } from '@nestjs/common';

enum CustomStatus {
  /**
   * 成功
   */
  SUCCESS = '0',
  /**
   * 未登录
   */
  NOT_LOGIN = '499',
}

export const HttpStatus = { ...Status, ...CustomStatus };
