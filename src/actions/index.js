//import { pushState } from 'redux-router';

/*
 * action types
 */
export const SET_LIST = 'SET_LIST';

export const ADD_LIST = 'ADD_LIST';

/*
 * Poll action creators
 */

export function setList(lists) {
  return {
     type: SET_LIST, lists	
  };
}

export function addList(list){
  return {
    type: ADD_LIST, lists
  };
}



/*
 * Entry action creators
 */

/*export function addEntry(idPoll, title) {
  return { type: ADD_ENTRY, idPoll, title, 
  	meta: {
  		notify: { level: NotifyLevels.INFO }
  	}
  };
}

export function removeEntry(idEntry) {
  return { type: REMOVE_ENTRY, idEntry, 
  	meta: {
  		notify: { level: NotifyLevels.INFO }
  	}
  };
}*/


