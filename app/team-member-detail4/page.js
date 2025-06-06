import React from 'react';
import TeamMemberDetail from '../components/TeamDetail/TeamMemberDetail';
import { teamMembersData } from '../data/teamMembersData';

export default function TeamMemberDetail4Page() {
  const memberData = teamMembersData.richaMalhotra;
  return <TeamMemberDetail memberData={memberData} />;
}