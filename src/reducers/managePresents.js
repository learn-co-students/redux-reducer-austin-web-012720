export function managePresents (state={
    numberOfPresents: 0
},action){
    switch(action.type){
        case "INCREASE":
            return Object.assign({}, state, {
                numberOfPresents: state.numberOfPresents + 1
            })
            default:
                return state;
    }

}


//   state = {
//     numberOfPresents: 0
//   },
//   action
// ) {
//   switch (action.type) {
//     case 'INCREASE':
//       return Object.assign({}, state, {
//         numberOfPresents: state.numberOfPresents + 1
//       })
//       default: return state
//   }

//   {
//         numberOfPresents: 0
//     }
//     action = {
//         type: "INCREASE"
//     }
//     action = {
//         type: "ADD_FRIEND",
//         friend: {
//             name: "Chrome Boi",
//             hometown: "NYC",
//             id: 1
//         }
//     }
//     action = {
//         type: "REMOVE_FRIEND",
//         id: 1
//     }
