import { GET_PLAYLISTDATA_LOADING, GET_PLAYLISTDATA_SUCCESS, GET_PLAYLISTDATA_ERROR, 
    CREATE_PLAYLIST_LOADING, CREATE_PLAYLIST_SUCCESS, CREATE_PLAYLIST_ERROR, SET_ACTIVE_PLAYLIST, 
    GET_PLAYLIST_LOADING, GET_PLAYLIST_SUCCESS, GET_PLAYLIST_ERROR, SET_COLLABORATIVE_LOADING, SET_COLLABORATIVE_SUCCESS, SET_COLLABORATIVE_ERROR, GET_ALLSESSIONS } from './action-types';

export function loadPlaylistsLoading() {
  return {
    type: GET_PLAYLISTDATA_LOADING,
  };
}

// Playlists_data is the list of playlists returned by spotify api
export function loadPlaylistsSuccess(playlists) {
  return {
    type: GET_PLAYLISTDATA_SUCCESS,
    playlists,
  };
}

export function loadPlaylistsError(err) {
    return {
        type: GET_PLAYLISTDATA_ERROR,
        err
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function createPlaylistLoading() {
    return {
        type: CREATE_PLAYLIST_LOADING
    }
}

//playlist is the new playlist returned by spotify api
export function createPlaylistSuccess(playlist) {
    return {
        type: CREATE_PLAYLIST_SUCCESS,
        playlist
    }
}

export function createPlaylistError(err) {
    return {
        type: CREATE_PLAYLIST_ERROR,
        err
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function setActivePlaylist(playlist) {
    return {
        type: SET_ACTIVE_PLAYLIST,
        playlist
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function getPlaylistLoading() {
    return {
        type: GET_PLAYLIST_LOADING
    }
}

//playlist is the new playlist returned by spotify api
export function getPlaylistSuccess(playlist) {
    return {
        type: GET_PLAYLIST_SUCCESS,
        playlist
    }
}

export function getPlaylistError(err) {
    return {
        type: GET_PLAYLIST_ERROR,
        err
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function setCollaborativeLoading() {
    return {
        type: SET_COLLABORATIVE_LOADING
    }
}

//playlist is the new playlist returned by spotify api
export function setCollaborativeSuccess() {
    return {
        type: SET_COLLABORATIVE_SUCCESS,
    }
}

export function setCollaborativeError(err) {
    return {
        type: SET_COLLABORATIVE_ERROR,
        err
    }
}

export function getAllSessions(state, sessions) {
    return {
        type: GET_ALLSESSIONS,
        state: state,
        sessions: sessions
    };
}