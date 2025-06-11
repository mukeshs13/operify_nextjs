import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import TeamMemberDetail from '../components/TeamDetail/TeamMemberDetail';
import { teamMembersData } from '../data/teamMembersData';

export default function TeamMemberDetail4Page() {
  const memberData = teamMembersData.richaMalhotra;

  return(
    <PageLayout fixedHeader={true}>
      <TeamMemberDetail memberData={memberData} />;
    </PageLayout>
  );
}