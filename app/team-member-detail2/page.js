import React from 'react';
import TeamMemberDetail from '../components/TeamDetail/TeamMemberDetail';
import { teamMembersData } from '../data/teamMembersData';

export default function TeamMemberDetail2Page() {
  const memberData = teamMembersData.drDivyankMahajan;
  return <TeamMemberDetail memberData={memberData} />;
}