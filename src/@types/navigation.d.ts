type CharactersStackParamList = {
  CharacterSearch: undefined;
  CharacterDetails: {
    character: Character;
  };
};

type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};
