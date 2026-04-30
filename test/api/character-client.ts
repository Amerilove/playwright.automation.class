//CRUD functions
import { APIRequestContext, expect } from '@playwright/test';

export type CreateCharacterType = {
  name: string;
  classId?: number;
  speciesId?: number;
  backgroundId?: number;
};

export async function createCharacter(
  request: APIRequestContext,
  token: string,
  data: CreateCharacterType,
) {
  const response = await request.post('/api/characters', {
    headers: { Authorization: `Bearer ${token}` },
    data,
  });

  expect(response.status()).toBe(201);
  return await response.json();
}

export async function getCharacter(
  request: APIRequestContext,
  token: string,
  id: number,
) {
  const response = await request.get(`/api/characters/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  expect(response.status()).toBe(200);
  return await response.json();
}

export async function updateCharacter(
  request: APIRequestContext,
  token: string,
  id: number,
  data: Partial<CreateCharacterType>,
) {
  const response = await request.patch(`/api/characters/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
    data,
  });

  expect(response.status()).toBe(200);
  return await response.json();
}

export async function deleteCharacter(
  request: APIRequestContext,
  token: string,
  id: number,
) {
  const response = await request.delete(`/api/characters/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  expect(response.status()).toBe(200);
}