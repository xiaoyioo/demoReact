import * as React from 'react';
import { Link } from 'react-router-dom';
import { MemberEntity } from '../../model';
// import { memberAPI } from '../../api/member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

// interface Props{

// }
// export const MembersPage: React.StatelessComponent<{}> = () => {
//   return (
//     <div className="row">
//       <h2> Members Page</h2>
//     </div>
//   );
// }

// interface State {
//   members:MemberEntity[];
// }

interface Props {
  members: MemberEntity[];
  fetchMembers(): void;
}

export class MembersPage extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = { members: [] };
  }

  public componentDidMount(): void {
    // memberAPI.fetchMembersAsync()
    //   .then((members) => {
    //     this.setState({ members });
    //   })

    this.props.fetchMembers();
  }

  public render(): any {
    return (
      <div className="row">
      <h2> Members Page</h2>
      <Link to="/member">New Member</Link>
      <table className="table">
        <thead>
          <MemberHeader />
        </thead>
        <tbody>
          {
            this.props.members.map((member) =>
              <MemberRow
                key={member.id}
                member={member}
              />
            )
          }
        </tbody>
      </table>
    </div>
    );
  }
}