export interface HttpResponse<T = any> {
  success: boolean;
  message?: string;
  token?: string;
  user?: T;
  data?: T;
  [key: string]: any;
}
