export type ContactFormFieldValues = {
  email: string
  fullname: string
  message: string
  reset: string
}
export type ContactFormProps = {
  onSubmitHandler: (data: ContactFormFieldValues) => Promise<void>
  errorMessage?: string
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}
