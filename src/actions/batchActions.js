import fetch from 'isomorphic-fetch'
const snakeCaseKeys = require('snakecase-keys')

export function fetchBatches() {
  console.log("inside fetch")
  return dispatch => {
    console.log("inside return")
    dispatch({ type: 'LOADING_BATCHES' });
    return fetch('http://localhost:4000/batches')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCHING_BATCHES', payload: json.data}))
  }
}

export function postBatches(batch) {
  console.log("inside post fetch")
  return dispatch => {
    console.log("inside return")
    dispatch({ type: 'LOADING_BATCHES' });
    return fetch('http://localhost:4000/batches',{
      method: 'POST',
      body: JSON.stringify(snakeCaseKeys({batch: batch.attributes})),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => dispatch({ type: 'ADD_BATCH', payload: json.data}))
  }
}

export function addBatch(batch) {
  return { type: 'ADD_BATCH', batch}
}

export function deleteBatch(batchId) {
  return { type: 'DELETE_BATCH', batchId }
}
