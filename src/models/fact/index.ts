export interface FactResponseModel {
  _id: string
  _v: number
  user: string
  text: string
  updatedAt: string
  sendDate: string
  deleted: boolean
  source: string
  used: boolean
  type: string
}
export type FactModel = FactResponseModel
