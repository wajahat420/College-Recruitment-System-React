const reducer = (state = {
    receiver : "",
    signin : "",
    imageURL : "",
    messages : [],
    AllPosts : [],
    msgBoxTitles : [],
    users : ["hamza","wajahat","aun","atif","haider"],
    openMsgWindow : ""

}, action) => {
    switch (action.type) {
        case 'INSERT_POST':
            state = {
                ...state,
                AllPosts : [...state.AllPosts,{postText:action.postText,imageURL:action.imageURL,key:parseInt(Math.random()*100000)}]
            };
            // console.log("All Posts",state.AllPosts)
            break;
        case 'MSG_BOX_TITLES':
            state = {
                ...state,
                msgBoxTitles : action.msgBoxTitles
            };
            console.log("msgBoxTitles",state.msgBoxTitles)
            break;
        case 'OPEN_MSG_WINDOW':
            state = {
                ...state,
                openMsgWindow : action.openMsgWindow
            };
            // console.log("openMsgWindow",state.openMsgWindow)
            break;  
        case 'REMOVE_NAME_FROM_MSG_TITLES':
            const duplicate = [...state.msgBoxTitles]
            duplicate.splice(action.elemIndex,1)
            state = {
                ...state,
                msgBoxTitles : duplicate
            };
            // console.log("removing msgBox",state.msgBoxTitles)
            break;
        case 'SET_SIGNIN':
            state = {
                ...state,
                signin : action.signin
            };
            console.log("signin",state.signin)
            break; 
        case 'SET_RECEIVER':
            state = {
                ...state,
                receiver : action.receiver
            };
            console.log("receiver",action.receiver)
        break; 
        case 'SEND_MSG':
            state = {
                ...state,
                messages : [...state.messages,{sender:state.signin,receiver : state.receiver,msg:action.msg}]
            };
            console.log("messages",state.messages)
        break; 
     
        default :
               return state 

    }
    return state
};

// const cartStore = createStore(productReducer, applyMiddleware(logger));

export default reducer;