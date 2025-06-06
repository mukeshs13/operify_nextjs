import React from 'react';
import TeamMemberDetail from '../components/TeamDetail/TeamMemberDetail';
import { teamMembersData } from '../data/teamMembersData';

export default function TeamMemberDetail1Page() {
  const memberData = teamMembersData.drGoriparthiRamakrishna;
  return <TeamMemberDetail memberData={memberData} />;
}