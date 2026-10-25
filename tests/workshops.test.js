'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const workshops = require('../src/workshops');

test.beforeEach(() => workshops.resetForTests());

test('création et compteur de places disponibles', () => {
  const session = workshops.createWorkshop('Initiation Git', 2);
  assert.equal(session.id, 1);
  assert.equal(session.title, 'Initiation Git');
  assert.equal(workshops.remainingSeats(1), 2);
});

test('les champs manifestement vides sont refusés', () => {
  assert.equal(workshops.createWorkshop('', 2), null);
  assert.equal(workshops.createWorkshop('Git', 0), null);
});

test('inscription simple puis atelier complet', () => {
  workshops.createWorkshop('Git', 1);
  assert.equal(workshops.register(1, 'Nina'), true);
  assert.equal(workshops.remainingSeats(1), 0);
  assert.equal(workshops.register(1, 'Malo'), false);
});

test('un doublon écrit exactement de la même manière est refusé', () => {
  workshops.createWorkshop('Git', 2);
  assert.equal(workshops.register(1, 'Nina'), true);
  assert.equal(workshops.register(1, 'Nina'), false);
});

test('désinscription d’une personne existante', () => {
  workshops.createWorkshop('Git', 2);
  workshops.register(1, 'Nina');
  assert.equal(workshops.cancel(1, 'Nina'), true);
  assert.deepEqual(workshops.getWorkshop(1).attendees, []);
});

test('un atelier inconnu est signalé proprement', () => {
  assert.equal(workshops.getWorkshop(999), null);
  assert.equal(workshops.register(999, 'Nina'), false);
  assert.equal(workshops.cancel(999, 'Nina'), false);
  assert.equal(workshops.remainingSeats(999), null);
});

test('une inscription ne modifie pas l’instantané déjà obtenu', () => {
  workshops.createWorkshop('Git', 2);
  const before = workshops.getWorkshop(1);
  workshops.register(1, 'Nina');
  assert.deepEqual(before.attendees, []);
  assert.deepEqual(workshops.getWorkshop(1).attendees, ['Nina']);
});

test('un objet retourné ne permet pas de modifier les données internes', () => {
  workshops.createWorkshop('Git', 2);
  const fromList = workshops.listWorkshops();
  fromList[0].attendees.push('Intrus');
  assert.deepEqual(workshops.getWorkshop(1).attendees, []);
});
