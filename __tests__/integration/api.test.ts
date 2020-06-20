/* eslint-disable no-undef */
import request from 'supertest';

import app from '../../src/app';

describe('Assert Array Size Middleware Success Tests', () => {
  it('Should return status 200 and an object with ingredients and a list of recipes when making a valid api call', async () => {
    jest.setTimeout(20000);
    const response = await request(app).get('/recipes/?i=egg,bacon');

    expect(response.body.ingredients.length).toBe(2);
    expect(response.body.recipes.length).toBeGreaterThan(0);
    expect(response.status).toBe(200);
  });

  it('Should return status 404 when recipe puppy API can\'t find any recipe with the given ingredients', async () => {
    const response = await request(app).get('/recipes/?i=delivery,much');

    expect(response.status).toBe(404);
  });
});
