import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_BOARD_PIN = "RECEIVE_BOARD_PIN";

const receiveAllPins = pins => ({
  type: RECEIVE_ALL_PINS,
  pins
});

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
});

const receiveBoardPin = (pinId, boardId) => ({
  type: RECEIVE_BOARD_PIN,
  pinId: pinId,
  boardId: boardId
});

export const fetchPins = (boardId) => dispatch => (
  PinApiUtil.fetchPins(boardId).then(payload => dispatch(receiveAllPins(payload.pins)))
);

export const fetchUserPins = (userId) => dispatch => (
  PinApiUtil.fetchUserPins(userId).then(payload => dispatch(receiveAllPins(payload.pins)))
);

export const fetchPin = id => dispatch => (
  PinApiUtil.fetchPin(id).then(pin => dispatch(receivePin(pin)))
);

export const createPin = pin => dispatch => (
  PinApiUtil.createPin(pin).then(pin => dispatch(receivePin(pin)))
);

export const deletePin = pinId => dispatch => (
  PinApiUtil.deletePin(pinId).then(pinId => dispatch(removePin(pinId)))
);

export const createBoardPin = (pinId, boardId) => dispatch => (
  PinApiUtil.createBoardPin(pinId, boardId).then((payload) => dispatch(receiveBoardPin(payload.pinId, payload.boardId)))
);
