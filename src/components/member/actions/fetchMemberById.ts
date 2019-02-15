import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';

export const fetchMemberByIdAction = (id: number) => (dispatch: any) => {
  memberAPI.fetchMemberByIdAsync(id)
    .then((member) => {
      dispatch(fetchMemberByIdCompleted(member));
    });
};

const fetchMemberByIdCompleted = (member: MemberEntity) => ({
  type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
  payload: member,
});
