import { FakerType } from "./faker_types";

export type ApiArray = {
  kind: 'array'
  length: number | 'random'
  template: FakerType | ApiObject | ApiArray
}

export type ApiObject = {
  kind: 'object',
  template: {
    [key: string]: FakerType | ApiArray | ApiObject
  }
}

export type Settings = {
  count: number
  filters: any
  orders: any[]
}

export const apiObject = (template: {[key: string]: FakerType | ApiArray | ApiObject}):ApiObject => ({
  kind: 'object',
  template: template
})

export const apiArray = (length: number | 'random', template: FakerType | ApiObject | ApiArray):ApiArray => ({
  kind: 'array',
  length: length,
  template: template
})