export interface CreateFAQDto {
  title: string
  content: string
}

export interface UpdateFAQDto {
  id: number
  title?: string
  content?: string
}
