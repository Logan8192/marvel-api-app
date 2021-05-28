type CharactersStackParamList = {
  CharacterSearch: undefined;
  CharacterDetails: {
    character: Character;
  };
};

type ComicsStackParamList = {
  ComicSearch: undefined;
  ComicDetails: {
    comic: Comic;
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

type Comic = {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};
