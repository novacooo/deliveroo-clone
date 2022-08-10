import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import menuCategory from './menuCategory';
import restaurant from './restaurant';
import dish from './dish';
import featured from './featured';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([restaurant, menuCategory, dish, featured]),
});
