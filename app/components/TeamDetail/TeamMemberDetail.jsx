import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import TeamMemberHero from './TeamMemberHero';
import TeamMemberSidebar from './TeamMemberSidebar';
import TeamMemberContent from './TeamMemberContent';

const TeamMemberDetail = ({ memberData }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <TeamMemberHero memberName={memberData.name} />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar - Member Info */}
              <div className="lg:col-span-1">
                <TeamMemberSidebar memberData={memberData} />
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <TeamMemberContent content={memberData.content} />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamMemberDetail;