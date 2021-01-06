export enum AlertTypeEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

export interface AlertModel {
  _id?: string,
  message: string,
  type: AlertTypeEnum
}
