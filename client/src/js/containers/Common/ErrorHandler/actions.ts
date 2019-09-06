export const enum IActionTypes {
  RESET_ERROR = 'RESET_ERROR',
  ERROR_OCCURED = 'ERROR_OCCURED',
  NETWORK_ERROR_OCCURED = 'NETWORK_ERROR_OCCURED'
}

export const resetError = () => ({
  type: IActionTypes.RESET_ERROR
})
export const dataError = (err: any) => ({
  type: IActionTypes.ERROR_OCCURED,
  err
})
export const networkError = (err: any) => ({
  type: IActionTypes.NETWORK_ERROR_OCCURED,
  err
})
