import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import TeamMemberDetail from '../components/TeamDetail/TeamMemberDetail';
import { teamMembersData } from '../data/teamMembersData';

export default function TeamMemberDetail1Page() {
  const memberData = teamMembersData.drGoriparthiRamakrishna;
  return (
    <PageLayout fixedHeader={true}>
      <TeamMemberDetail memberData={memberData} />
    </PageLayout>
  );
}