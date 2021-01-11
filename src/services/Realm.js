import Realm from 'realm';

import WordSchema from '../schemas/WordSchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [WordSchema],
    schemaVersion: 1,
  });

  return realm;
};
