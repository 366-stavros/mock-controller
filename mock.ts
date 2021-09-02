import { ApiObject, ApiArray, Settings } from './types'
import { FakerType } from './faker_types'
import faker from 'faker'

const withReference = <T1,T2>(obj:T1,callback:(obj:T1) => T2):T2 => callback(obj)

const objectMap = (obj:ApiObject, fn:(value:FakerType | ApiObject | ApiArray,key:string,index:number) => any):any =>
  Object.fromEntries(Object.entries(obj.template).map(([k, v], i) => [k, fn(v, k, i)]))

const recursiveTraverse = (obj:any,keys:string[]):any => 
  keys.length === 0 ? obj : recursiveTraverse(obj[keys[0]],keys.slice(1))

const generate = (objectPath:string):any => 
  recursiveTraverse(faker,objectPath.split('.'))()

const retrieve = (objectPath:string,object:any):any => 
  recursiveTraverse(object,objectPath.split('.'))

const generateRecord = (type:ApiObject | ApiArray):any => 
  type.kind === 'array'
    ? withReference(type.length === 'random' 
      ? faker.datatype.number({
          min: 1,
          max: 10
          }) 
      : type.length, length => 
          Array.from(Array(length)).map(() => 
            typeof type.template === 'string' 
              ? generate(type.template) 
              : generateRecord(type.template)))
    : objectMap(type as ApiObject, value => typeof value !== 'object' 
        ? generate(value) 
        : generateRecord(value))

export const mock = (type:ApiObject, settings:Settings):any[] => 
  withReference(Array.from(Array(settings.count)).map(() => 
    generateRecord(type)), records => settings.orders && settings.orders.length != 0
      ? withReference([settings.orders[0][0],settings.orders[0][1] == 'asc'],([fieldPath,isAsc]) => 
          records.sort((a,b) => 
            withReference([retrieve(fieldPath,a),retrieve(fieldPath,b)], ([el1,el2]) =>
                  Number.isNaN(Number.parseInt(el1))
                            ? el1 < el2 
                              ? isAsc ? -1 : 1 
                              : el1 == el2 
                                ? 0 
                                : isAsc ? 1 : -1
                            : isAsc ? el1 - el2 : el2 - el1)))
      : records)