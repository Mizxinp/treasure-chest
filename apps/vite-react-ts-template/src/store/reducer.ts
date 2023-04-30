export function reducer(state: any, action: any) {
  console.log('state', state, action);
  switch (action.type) {
    case 'add':
      return {...state, ...action.payload}
  }
}