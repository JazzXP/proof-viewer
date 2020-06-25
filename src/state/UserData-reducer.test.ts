import reducer from './UserData-reducer';
import {
  setImageList,
  SET_IMAGE_LIST_ACTION,
  addFavourite,
  ADD_FAVOURITE_ACTION,
  ADD_SHORTLIST_ACTION,
  addShortlist,
  removeFavourite,
  REMOVE_FAVOURITE_ACTION,
  removeShortlist,
  REMOVE_SHORTLIST_ACTION,
} from './UserData-actions';

test('Reducer returns defaults', () => {
  //@ts-ignore
  const defaultResult = reducer();
  expect(defaultResult).toEqual({
    proofs: [],
    thumbnails: [],
    shortlist: [],
    favourites: [],
  });
});

test('Set ImageList adds to proofs and thumbnails', () => {
  const imageList = ['aaa.jpg', 'bbb.jpg'];
  const result = reducer(undefined, setImageList(imageList) as SET_IMAGE_LIST_ACTION);
  expect(result).toEqual({
    proofs: ['aaa.jpg', 'bbb.jpg'],
    thumbnails: ['/thumbnails/aaa.jpg', '/thumbnails/bbb.jpg'],
    shortlist: [],
    favourites: [],
  });
});

test('Set ImageList clears old data and adds new', () => {
  const oldState = {
    proofs: ['1.jpg', '2.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg'],
    shortlist: [],
    favourites: [],
  };
  const imageList = ['aaa.jpg', 'bbb.jpg'];
  const result = reducer(oldState, setImageList(imageList) as SET_IMAGE_LIST_ACTION);
  expect(result).toEqual({
    proofs: ['aaa.jpg', 'bbb.jpg'],
    thumbnails: ['/thumbnails/aaa.jpg', '/thumbnails/bbb.jpg'],
    shortlist: [],
    favourites: [],
  });
});

test('Adding favourites adds to state', () => {
  const oldState = {
    proofs: ['1.jpg', '2.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg'],
    shortlist: [],
    favourites: [],
  };

  const result = reducer(oldState, addFavourite('1.jpg') as ADD_FAVOURITE_ACTION);
  expect(result).toEqual({
    proofs: ['1.jpg', '2.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg'],
    shortlist: [],
    favourites: ['1.jpg'],
  });

  const result2 = reducer(result, addFavourite('2.jpg') as ADD_FAVOURITE_ACTION);
  expect(result2).toEqual({
    proofs: ['1.jpg', '2.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg'],
    shortlist: [],
    favourites: ['1.jpg', '2.jpg'],
  });
});

test('Remove favourite removes from state', () => {
  const oldState = {
    proofs: ['1.jpg', '2.jpg', '3.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg', '/thumbnails/3.jpg'],
    shortlist: [],
    favourites: ['1.jpg', '2.jpg', '3.jpg'],
  };

  const result = reducer(oldState, removeFavourite('2.jpg') as REMOVE_FAVOURITE_ACTION);
  expect(result).toEqual({
    proofs: ['1.jpg', '2.jpg', '3.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg', '/thumbnails/3.jpg'],
    shortlist: [],
    favourites: ['1.jpg', '3.jpg'],
  });
});

test('Adding shortlist adds to state', () => {
  const oldState = {
    proofs: ['1.jpg', '2.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg'],
    shortlist: [],
    favourites: [],
  };

  const result = reducer(oldState, addShortlist('1.jpg') as ADD_SHORTLIST_ACTION);
  expect(result).toEqual({
    proofs: ['1.jpg', '2.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg'],
    shortlist: ['1.jpg'],
    favourites: [],
  });

  const result2 = reducer(result, addShortlist('2.jpg') as ADD_SHORTLIST_ACTION);
  expect(result2).toEqual({
    proofs: ['1.jpg', '2.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg'],
    shortlist: ['1.jpg', '2.jpg'],
    favourites: [],
  });
});

test('Remove shortlist removes from state', () => {
  const oldState = {
    proofs: ['1.jpg', '2.jpg', '3.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg', '/thumbnails/3.jpg'],
    shortlist: ['1.jpg', '2.jpg', '3.jpg'],
    favourites: [],
  };

  const result = reducer(oldState, removeShortlist('2.jpg') as REMOVE_SHORTLIST_ACTION);
  expect(result).toEqual({
    proofs: ['1.jpg', '2.jpg', '3.jpg'],
    thumbnails: ['/thumbnails/1.jpg', '/thumbnails/2.jpg', '/thumbnails/3.jpg'],
    shortlist: ['1.jpg', '3.jpg'],
    favourites: [],
  });
});
