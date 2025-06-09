import React from 'react';
import TeamCard from './TeamCard';

const TeamGrid = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/images/team/DrAvinash.png",
      name: "Dr. Avanish Kumar",
      position: "Promoter",
      linkedinUrl: "https://www.linkedin.com/in/avanish-kumar-phd-a034791b0/",
      detailUrl: "/team-member-detail"
    },
    {
      id: 2,
      image: "/images/team/Frame 5.png",
      name: "Dr. Goriparthi Ramakrishna",
      position: "Lab Head",
      linkedinUrl: "https://www.linkedin.com/in/goriparthi-ramakrishna/",
      detailUrl: "/team-member-detail1"
    },
    {
      id: 3,
      image: "/images/team/Frame 6.png",
      name: "Dr. Divyank Mahajan",
      position: "Head, Techno-Commercial Strategy",
      linkedinUrl: "https://in.linkedin.com/in/divyank-mahajan-phd",
      detailUrl: "/team-member-detail2"
    },
    {
      id: 4,
      image: "/images/team/Frame 4.png",
      name: "Dr. Mohammed Moquitul Haque",
      position: "Lead Scientist - Clinical Genomics",
      linkedinUrl: "https://www.linkedin.com/in/moquitul-haque-phd-9a405561/",
      detailUrl: "/team-member-detail3"
    },
    {
      id: 5,
      image: "/images/team/Frame 12.png",
      name: "Richa Malhotra",
      position: "Business Manager - Clinical Genomic",
      linkedinUrl: "https://www.linkedin.com/in/richa-malhotra1/",
      detailUrl: "/team-member-detail4"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-none px-6">
        {/* Grid with equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex">
              <TeamCard
                image={member.image}
                name={member.name}
                position={member.position}
                linkedinUrl={member.linkedinUrl}
                detailUrl={member.detailUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;