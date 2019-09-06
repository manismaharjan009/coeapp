export interface IError {
  error: boolean;
  errorData: IErrorData;
}

export interface IErrorData {
  title?: string;
  type: string;
  body: string;
  networkError: string;
  err: string | null;
  status?: string;
}