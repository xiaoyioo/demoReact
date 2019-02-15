// import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
// import * as toastr from 'toastr';
// import { FieldValidationResult } from 'lc-form-validation';
// import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';
// import { memberFormValidation } from './memberFormValidation';
import { fetchMemberByIdAction } from './actions/fetchMemberById';
import { memberFieldChangeAction } from './actions/memberFieldChange';
import { saveMemberAction } from './actions/saveMember';
import { MemberPage } from './page';

const mapStateToProps = (state: State, ownProps: any) => ({
  memberId: Number(ownProps.match.params.id) || 0,
  member: state.member,
  memberErrors: state.memberErrors,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchMemberById: (id: number) => dispatch(fetchMemberByIdAction(id)),
  onChange: (member: MemberEntity, fieldName: string, value: string) =>
    dispatch(memberFieldChangeAction(member, fieldName, value)),
  onSave: (member: MemberEntity) => dispatch(saveMemberAction(member)),
});

export const MemberPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberPage);

// interface State {
//   member: MemberEntity;
//   memberErrors: MemberErrors;
// }

// interface Props {
//   params: { id: string };
//   history: any;
//   location: any;
//   match: any;
// }

// export class MemberPageContainer extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     // console.log(new FieldValidationResult())
//     this.state = {
//       member: {
//         id: -1,
//         login: '',
//         avatar_url: '',
//       },
//       memberErrors: {
//         login: new FieldValidationResult(),
//       }
//     };

//     this.onFieldValueChange = this.onFieldValueChange.bind(this);
//     this.onSave = this.onSave.bind(this);
//   }

//   public componentDidMount() {
//     const memberId = Number(this.props.match.params.id) || 0;
//     memberAPI.fetchMemberById(memberId)
//       .then((member) => {
//         this.setState({
//           ...this.state,
//           member,
//         });
//       });
//   }

//   public onFieldValueChange(fieldName: string, value: string) {
//     memberFormValidation.validateField(this.state.member, fieldName, value)
//       .then((fieldValidationResult) => {
//         const nextState = {
//           ...this.state,
//           member: {
//             ...this.state.member,
//             [fieldName]: value,
//           },
//           memberErrors: {
//             ...this.state.memberErrors,
//             [fieldName]: fieldValidationResult,
//           }
//         };
//         this.setState(nextState);
//       })
//   }

//   public onSave = () => {
//     memberFormValidation.validateForm(this.state.member)
//     .then((formValidationResult) => {
//       if (formValidationResult.succeeded) {
//         memberAPI.saveMember(this.state.member)
//           .then(() => {
//             toastr.success('Member saved.');
//             this.props.history.goBack();
//           });
//         }
//       });
//   }

//   public render() {
//     return (
//       <MemberPage
//         member={this.state.member}
//         memberErrors={this.state.memberErrors}
//         onChange={this.onFieldValueChange}
//         onSave={this.onSave}
//       />
//     );
//   }
// }