import { FakerType } from "./faker_types";

export type Settings = {
  count: number
  filters: any
  orders: any[]
}

export type ApiEntity = ApiArray | ApiObject | FakerTypeWithArgs | FakerType

export type ApiArray = {
  kind: 'array'
  length: number | 'random'
  template: ApiEntity
}

export function isApiArray(obj: any): obj is ApiArray {
  return obj.kind && obj.kind === 'array' && obj.length && obj.template
}

export type ApiObject = {
  kind: 'object',
  template: {
    [key: string]: ApiEntity
  }
}

export function isApiObject(obj: any): obj is ApiObject {
  return obj.kind && obj.kind === 'object' && obj.template
}

export type FakerTypeWithArgs = {
  kind: 'fakerTypeWithArgs',
  type: FakerType,
  args: any
}

export function isFakerTypeWithArgs(obj:any): obj is FakerTypeWithArgs {
  return obj.kind && obj.kind === 'fakerTypeWithArgs' && obj.type && obj.args
}

export const apiObject = (template: {[key: string]: ApiEntity}):ApiObject => ({
  kind: 'object',
  template: template
})

export const apiArray = (length: number | 'random', template: ApiEntity):ApiArray => ({
  kind: 'array',
  length: length,
  template: template
})

export const apiTypeWithArgs = (type: FakerType, args:any):FakerTypeWithArgs => ({
  kind: 'fakerTypeWithArgs',
  type: type,
  args: args
})