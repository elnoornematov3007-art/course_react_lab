export type State = {
    selectedId: number;
    message: string[];
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string;
} | {
    type: 'sent_message';
};

export const initialState = {
    selectedId: 0,
    message: ['Hello', '', ''],
};

export function messengerReducer(
    state: State,
    action: Action
) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
                const newMessages = [...state.message];
                newMessages[state.selectedId] = action.message;
            return {
                ...state,
                message: newMessages,
            };
        }
        case 'sent_message': {
            const newMessages = [...state.message];
            newMessages[state.selectedId] = '';
            return {
              ...state,
              message: newMessages,
            };
          }        
        default: {
            throw Error('Unknown action: ');
        }
    }
}
