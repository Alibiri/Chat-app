import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '0c7ee6a8-e450-4aaa-bd72-274890a3447b', 
        props.user.username, 
        props.user.secret
        );
    return (
        <div style={{ height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{ height:'100%'}}/>
        </div>
    )
}

export default ChatsPage