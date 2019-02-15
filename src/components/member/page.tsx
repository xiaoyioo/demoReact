import * as React from 'react';
import { MemberEntity, MemberErrors } from '../../model';
import { MemberForm } from './memberForm';

interface Props {
  memberId: number;
  member: MemberEntity;
  memberErrors: MemberErrors;
  fetchMemberById: (id: number) => void;
  onChange: (member: MemberEntity, fieldName: string, value: string) => void;
  onSave: (member: MemberEntity) => void;
}

export class MemberPage extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  private onChange(fieldName: string, value: string): void {
      this.props.onChange(this.props.member, fieldName, value);
  }

  private onSave(): void {
    this.props.onSave(this.props.member);
  }

  public componentDidMount(): void {
    this.props.fetchMemberById(this.props.memberId);
  }

  public render(): any {
    return (
      <MemberForm
        member={this.props.member}
        memberErrors={this.props.memberErrors}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}

// export const MemberPage: React.StatelessComponent<Props> = (props) => {
//   return (
//     <MemberForm
//       member={props.member}
//       memberErrors={props.memberErrors}
//       onChange={props.onChange}
//       onSave={props.onSave}
//     />
//   );
// }
