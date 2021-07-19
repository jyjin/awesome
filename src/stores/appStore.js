import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { createIntl, createIntlCache } from '@formatjs/intl'
import * as locale from '@/locale'

export default observable({
  createIntl(_locale) {
    // This is optional but highly recommended
    // since it prevents memory leak
    const cache = createIntlCache()
    const intl = createIntl(
      {
        locale: _locale,
        messages: locale[_locale],
      },
      cache
    )
    return intl
  }
})