import { apiObject, apiArray, ApiObject } from "./types"

export const TemplateMap: Map<string, ApiObject> = new Map([
  [ 
    'sample-template', apiObject({
      'id': 'datatype.uuid',
      'name': 'name.firstName',
      'last_name': 'name.lastName',
      'telephone': 'phone.phoneNumber',
      'address': 'address.streetAddress',
      'transaction_info': apiObject({
        'currency': 'finance.currencyName',
        'amount': 'finance.amount',
        'nested': apiObject({
          'inner_nested': 'datatype.number',
          'double_nested' : 'address.country'
        })
      }),
      'country': apiObject({
        'id': 'datatype.uuid',
        'name': 'address.country'
      })
    })
  ],
  [
    'array-template', apiObject({
      'array1' : apiArray('random', 'address.country'),
      'array2' : apiArray(20, apiObject({
        'field1' : 'name.suffix',
        'field2' : 'address.country'
      })),
      'array3' : apiArray(100, apiArray('random', 'address.direction'))
    })
  ],
  [
   'crypto-client-e_wallet_transactions', apiObject({
      'id': 'datatype.uuid',
      'transaction_type': 'datatype.number',
   })
 ],
 [
   'order-reason', apiObject({
      'id': 'datatype.uuid',
      'order_type_id': 'datatype.uuid',
      'name': 'lorem.word',
      'entity_type_id': 'datatype.number',
      'reason_type': 'datatype.number',
      'is_available': 'random.boolean',
   })
 ]
])