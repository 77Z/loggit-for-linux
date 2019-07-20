'use strict';

function keyMirror(arr) {
  const tmp = {};
  for (const value of arr) {
    tmp[value] = value;
  }
  return tmp;
}


exports.browser = typeof window !== 'undefined';

exports.RPCCommands = keyMirror([
  'DISPATCH',
  'AUTHORIZE',
  'AUTHENTICATE',
  'GET_GUILD',
  'GET_GUILDS',
  'GET_CHANNEL',
  'GET_CHANNELS',
  'SUBSCRIBE',
  'UNSUBSCRIBE',
  'SET_USER_VOICE_SETTINGS',
  'SELECT_VOICE_CHANNEL',
  'GET_SELECTED_VOICE_CHANNEL',
  'SELECT_TEXT_CHANNEL',
  'GET_VOICE_SETTINGS',
  'SET_VOICE_SETTINGS',
  'CAPTURE_SHORTCUT',
  'SET_CERTIFIED_DEVICES',
  'SET_ACTIVITY',
  'SEND_ACTIVITY_JOIN_INVITE',
  'SEND_ACTIVITY_JOIN_REQUEST',
  'CLOSE_ACTIVITY_JOIN_REQUEST',
  'CREATE_LOBBY',
  'UPDATE_LOBBY',
  'DELETE_LOBBY',
  'UPDATE_LOBBY_MEMBER',
  'CONNECT_TO_LOBBY',
  'DISCONNECT_FROM_LOBBY',
  'SEND_TO_LOBBY',
  'INVITE_BROWSER',
  'DEEP_LINK',
  'CONNECTIONS_CALLBACK',
  'OVERLAY',
  'BROWSER_HANDOFF',
]);

exports.RPCEvents = keyMirror([
  'GUILD_STATUS',
  'GUILD_CREATE',
  'CHANNEL_CREATE',
  'VOICE_CHANNEL_SELECT',
  'VOICE_STATE_CREATE',
  'VOICE_STATE_DELETE',
  'VOICE_STATE_UPDATE',
  'VOICE_SETTINGS_UPDATE',
  'VOICE_CONNECTION_STATUS',
  'SPEAKING_START',
  'SPEAKING_STOP',
  'GAME_JOIN',
  'GAME_SPECTATE',
  'ACTIVITY_JOIN',
  'ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_SPECTATE',
  'NOTIFICATION_CREATE',
  'MESSAGE_CREATE',
  'MESSAGE_UPDATE',
  'MESSAGE_DELETE',
  'CAPTURE_SHORTCUT_CHANGE',
  'LOBBY_DELETE',
  'LOBBY_UPDATE',
  'LOBBY_MEMBER_CONNECT',
  'LOBBY_MEMBER_DISCONNECT',
  'LOBBY_MEMBER_UPDATE',
  'LOBBY_MESSAGE',
  'OVERLAY',
  'READY',
  'ERROR',
]);

exports.RPCErrors = {
  UNKNOWN_ERROR: 1000,
  INVALID_PAYLOAD: 4000,
  INVALID_VERSION: 4001,
  INVALID_COMMAND: 4002,
  INVALID_GUILD: 4003,
  INVALID_EVENT: 4004,
  INVALID_CHANNEL: 4005,
  INVALID_PERMISSIONS: 4006,
  INVALID_CLIENTID: 4007,
  INVALID_ORIGIN: 4008,
  INVALID_TOKEN: 4009,
  INVALID_USER: 4010,
  INVALID_INVITE: 4011,
  INVALID_ACTIVITY_JOIN_REQUEST: 4012,
  INVALID_LOBBY: 4013,
  INVALID_LOBBY_SECRET: 4014,
  OAUTH2_ERROR: 5000,
  SELECT_CHANNEL_TIMED_OUT: 5001,
  GET_GUILD_TIMED_OUT: 5002,
  SELECT_VOICE_FORCE_REQUIRED: 5003,
  CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
  INVALID_ACTIVITY_SECRET: 5005,
  NO_ELIGIBLE_ACTIVITY: 5006,
  LOBBY_FULL: 5007,
};

exports.RPCCloseCodes = {
  CLOSE_NORMAL: 1000,
  CLOSE_UNSUPPORTED: 1003,
  CLOSE_ABNORMAL: 1006,
  INVALID_CLIENTID: 4000,
  INVALID_ORIGIN: 4001,
  RATELIMITED: 4002,
  TOKEN_REVOKED: 4003,
  INVALID_VERSION: 4004,
  INVALID_ENCODING: 4005,
};

exports.LobbyTypes = {
  PRIVATE: 1,
  PUBLIC: 2,
};
