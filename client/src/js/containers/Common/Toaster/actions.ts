export const enum IActionTypes {
  SHOW_TOASTER = "SHOW_TOASTER",
  HIDE_TOASTER = "HIDE_TOASTER"
}

export const showToaster = (toastInfo: string) => ({
  type: IActionTypes.SHOW_TOASTER,
  toastInfo
})

export const hideToaster = ()=>({
  type: IActionTypes.HIDE_TOASTER
})
