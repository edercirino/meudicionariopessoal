import {Alert} from 'react-native';
import {getRealm} from './Realm';

export const getWords = async () => {
  const realm = await getRealm();

  const words = realm.objects('Word');

  console.log('getWords :: words ', JSON.stringify(words));

  return words;
};

export const saveWord = async (values) => {
  const realm = await getRealm();

  let data = {};
  const {word} = values;
  const {description} = values;

  try {
    realm.write(() => {
      data = {
        id: '4',
        word: word,
        description: description,
      };

      realm.create('Word', data, true);
    });

    console.log('saveWord ::  data: ', JSON.stringify(data));
  } catch (error) {
    console.error(
      'saveWord :: error on save word: ',
      JSON.stringify(this.data),
    );
    Alert.alert('Erro ao salvar os dados de lançamento');
  }

  return data;
};
