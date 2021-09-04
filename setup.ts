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
      'transaction_type': 'lorem.slug',
      'status': 'datatype.number',
      'payment_origin_id': 'datatype.number',
      'request_type': 'lorem.slug',
      'amount': 'datatype.number',
   })
 ],
 [
   'predefined-reasons', apiObject({
      'id': 'datatype.uuid',
      'order_type_id': 'datatype.uuid',
      'order_status_id': 'datatype.uuid',
      'system_name': 'datatype.uuid',
      'is_available': 'random.boolean',
      'contents': apiObject({
         'id': 'datatype.uuid',
         'name': 'lorem.slug',
         'language_id': 'datatype.number',
         'content' : 'lorem.slug',
       }),
      'entity_type_id': 'datatype.number',
   })
 ],
[
  'local-depositor', apiObject({
    'id': 'datatype.number',
    'client': apiObject({
      'contact_id': 'datatype.number',
      'client_id': 'datatype.number',
      'country': apiObject({
        'id': 'datatype.number',
        'name': 'address.country',
        'iso': 'address.countryCode',
        'is_available': 'datatype.number',
      }),
      'name': 'name.firstName',
      'email': 'internet.email',
    }),
    'affiliate': apiObject({
      'contact_id': 'datatype.number',
      'affiliate_id': 'datatype.number',
      'country': apiObject({
        'id': 'datatype.number',
        'name': 'address.country',
        'iso': 'address.countryCode',
        'is_available': 'random.boolean',
      }),
      'name': 'name.firstName',
      'email': 'internet.email',
    }),
    'nickname': apiArray('random', apiObject({
        'id': 'datatype.number',
        'local_depositor': 'datatype.number',
        'nickname': 'name.firstName',
        'enabled': 'random.boolean',
      }
      )),
    'transaction_fees': 'datatype.number',
    'display_currency_id': apiObject({
      "id": "datatype.number",
      "full_name": "finance.currencyName",
      "name": "finance.currencyCode",
      "mt5_name": "finance.currencyCode",
      "logo": "system.fileName",
      "number_of_digits": "datatype.number",
      "is_available": 'random.boolean',
      "affiliate_is_available": 'random.boolean',
      "currency_type": "datatype.number",
      "transaction_check_url": "internet.url",
      "usdt_omni_transaction_check_url": "internet.url"
    }),
    'supported_currency': apiArray('random', apiObject({
      "id": "datatype.number",
      "full_name": "finance.currencyName",
      "name": "finance.currencyCode",
      "mt5_name": "finance.currencyCode",
      "logo": "system.fileName",
      "number_of_digits": "datatype.number",
      "is_available": 'random.boolean',
      "affiliate_is_available": 'random.boolean',
      "currency_type": "datatype.number",
      "transaction_check_url": "internet.url",
      "usdt_omni_transaction_check_url": "internet.url"
      })),
      'minimum_deposit_usd': 'finance.amount',
      'maximum_deposit_usd': 'finance.amount',
      'credit_line_status': 'random.boolean',
      'allow_credit_line_extention_request': 'random.boolean',
      'local_depositor_wallet_id': 'datatype.number',
      'credit_line_limit': 'finance.amount',
      'credit_line_usage': 'random.boolean',
      'credit_line_stages': 'random.boolean',
      'terms_and_conditions': apiObject({
        'terms_and_conditions_flag': 'random.boolean',
        'terms_and_conditions_type': 'datatype.number',
        'terms_and_conditions_content': 'lorem.paragraph',
      }),
      'credit_line_help': apiObject({
        'credit_line_help_flag': 'random.boolean',
        'credit_line_content': 'lorem.paragraph',
      }),
      'completed_transition_time': apiObject({
        'completed_transition_time_flag': 'random.boolean',
        'completed_transition_time': 'datatype.number',
      }),
      'status': 'datatype.number',
  })
]
])