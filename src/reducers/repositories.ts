import { actionTypes } from '../common/constants/actionTypes';
import { RepositoryEntity } from '../model/repositoryEntity';

export const repositoriesReducer = (state: RepositoryEntity[] = [], action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_REPOSITORIES_COMPLETED:
            return handleFetchRepositoriesCompleted(state, action.payload);
        default:
            return state;
    }
};

const handleFetchRepositoriesCompleted = (state: RepositoryEntity[], payload: RepositoryEntity[]) => {
    return payload;
};