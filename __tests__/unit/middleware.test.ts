/* eslint-disable no-undef */
import request from 'supertest';

import app from '../../src/app';

describe('Assert Array Size Middleware Success Tests', () => {
  it('Should return status 200 when one ingredient is sent', async () => {

    const response = await request(app).get('?i=alface');

    expect(response.status).toBe(200);
    
  });
  
  it('Should return status 200 when two ingredients are sent', async () => {
    const response = await request(app).get('?i=alface,chocolate');

    expect(response.status).toBe(200);
  });

  it('Should return status 200 when three ingredients are sent', async () => {
    const response = await request(app).get('?i=alface,chocolate,pimenta');

    expect(response.status).toBe(200);
  });
});


describe('Assert Array Size Middleware Failure Tests', () => {
    
  it('Should return status 400 when no ingredient is specified', async () => {
    const response = await request(app).get('?i=');

    expect(response.status).toBe(400);
  });
  
  it('Should return status 400 when more than 3 ingredients are specified', async () => {
    const response = await request(app).get('?i=alface,chocolate,pimenta,ovo');

    expect(response.status).toBe(400);
  });

});
