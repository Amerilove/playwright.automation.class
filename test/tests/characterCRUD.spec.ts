import { test, expect } from '@playwright/test';
import { getToken } from '../api/token-client';
import {
  createCharacter,
  getCharacter,
  updateCharacter,
  deleteCharacter,
} from '../api/character-client';
import { MONK_CHAR } from '../data/create-character-data';

test.describe.serial('Character CRUD Flow', () => {
  let token: string;
  let characterId: number;

  test.beforeAll(async ({ request }) => {
    token = await getToken(request);
  });

  test('Create character', async ({ request }) => {
    const character = await createCharacter(request, token, MONK_CHAR);
    expect(character.name).toBe(MONK_CHAR.name);

    characterId = character.id;
  });

  test('Get character', async ({ request }) => {
    const character = await getCharacter(request, token, characterId);
    expect(character.id).toBe(characterId);
  });

  test('Update character', async ({ request }) => {
    const updated = await updateCharacter(request, token, characterId, {
      name: 'Dark Angel',
    });

    expect(updated.name).toBe('Dark Angel');
  });

  test('Delete character', async ({ request }) => {
    await deleteCharacter(request, token, characterId);
  });
});