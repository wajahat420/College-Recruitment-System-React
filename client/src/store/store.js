
const reducer = (state = {
    receiver : "",
    signin : {_id: "5d4df2201ace1337df55b1e7", firstName: "wajahat", lastName: "sarwat", as: "university", email: "shayanmustafa@gmail.com"},
    imageURL : "",
    students : [],
    messages : [],
    AllPosts : [],
    msgBoxTitles : [],
    openMsgWindow : "",
    searchText : "",
    sortBy : "name",

}, action) => {
    switch (action.type) {
        case 'INSERT_POST':
            state = {
                ...state,
                AllPosts : [...state.AllPosts,{
                    text:action.postText,
                    img:action.imageURL,
                    name : state.signin.firstName + " " + state.signin.lastName,
                    likes : []
                }]
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
        case 'SIGNIN':
            state = {
                ...state,
                signin : action.signin
            };
            // console.log("signin",state.signin)
            break; 
        case 'SET_RECEIVER':
            state = {
                ...state,
                receiver : action.receiver
            };
            // console.log("receiver",action.receiver)
        break; 
        case 'SEND_MSG':
            state = {
                ...state,
                messages : [...state.messages,{sender:state.signin,receiver : state.receiver,msg:action.msg}]
            };
            // console.log("messages",state.messages)
        break;
        case "SEARCH_TEXT":
            state ={
                ...state,
                searchText : action.searchText
            }
            // console.log("search text",state.searchText)
        break
        case "SORT_BY" :
            state = {
                ...state,
                sortBy : action.sortBy
            }
            // console.log("sortBY",state.sortBy)
        break
        case "STUDENTS":
            state ={
                ...state,
                students : action.students
            }
            // console.log("students",state.students)
        break
        case "ALL_POSTS":
            state ={
                ...state,
                AllPosts : action.allPosts
            }
        break
        case "LIKE":
            // console.log("AllPosts",state.AllPosts[action.index].like)
            let tempArr = [...state.AllPosts]
            let likeValue = tempArr[action.index].like
            tempArr[action.index].like = !likeValue
            state ={
                ...state,
                AllPosts : tempArr
            }
            // console.log("AllPosts",state.AllPosts[action.index].like)
            // return state
        break
        default :
               return state 

    }
    return state
};

// const cartStore = createStore(productReducer, applyMiddleware(logger));

export default reducer;