import React from 'react';
import TeamMemberDetail from '../components/TeamDetail/TeamMemberDetail';
import { teamMembersData } from '../data/teamMembersData';

export default function TeamMemberDetailPage() {
  const memberData = teamMembersData.drAvanishKumar;
  return <TeamMemberDetail memberData={memberData} />;
}