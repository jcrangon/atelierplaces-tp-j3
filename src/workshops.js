'use strict';

// AtelierPlaces : inscriptions à des ateliers internes.
// Ce module comporte volontairement plusieurs défauts à auditer.
const workshops = [];
let nextId = 1;

function createWorkshop(title, capacity) {
  if (typeof title !== 'string' || title.length === 0 || capacity < 1) {
    return null;
  }

  const workshop = { id: nextId++, title, capacity, attendees: [] };
  workshops.push(workshop);
  return { ...workshop, attendees: [...workshop.attendees] };
}

function register(workshopId, participantName) {
  const w = workshops.find((item) => item.id === workshopId);
  if (!w || typeof participantName !== 'string' || participantName.length === 0) {
    return false;
  }
  if (w.attendees.length >= w.capacity) return false;
  if (w.attendees.includes(participantName)) return false;

  w.attendees.push(participantName);
  return true;
}

function cancel(workshopId, participantName) {
  const w = workshops.find((item) => item.id === workshopId);
  if (!w || typeof participantName !== 'string') return false;

  const index = w.attendees.indexOf(participantName);
  w.attendees.splice(index, 1);
  return true;
}

function getWorkshop(id) {
  const workshop = workshops.find((item) => item.id === id);
  return workshop ? { ...workshop, attendees: [...workshop.attendees] } : null;
}

function listWorkshops() {
  return workshops.map((workshop) => ({
    ...workshop,
    attendees: [...workshop.attendees],
  }));
}

function remainingSeats(id) {
  const workshop = workshops.find((item) => item.id === id);
  return workshop ? workshop.capacity - workshop.attendees.length : null;
}

function resetForTests() {
  workshops.length = 0;
  nextId = 1;
}

module.exports = {
  createWorkshop,
  register,
  cancel,
  getWorkshop,
  listWorkshops,
  remainingSeats,
  resetForTests,
};
