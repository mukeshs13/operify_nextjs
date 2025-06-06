import React from 'react';
import TeamMemberDetail from '../components/TeamDetail/TeamMemberDetail';
import { teamMembersData } from '../data/teamMembersData';

export default function TeamMemberDetail3Page() {
  const memberData = teamMembersData.drMohammedMoquitulHaque;
  return <TeamMemberDetail memberData={memberData} />;
}