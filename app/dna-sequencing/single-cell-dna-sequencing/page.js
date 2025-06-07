// app/dna-sequencing/single-cell-dna-sequencing/page.js
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import SingleCellIntroduction from './components/SingleCellIntroduction';
import SingleCellAdvantages from './components/SingleCellAdvantages';
import SingleCellApplications from './components/SingleCellApplications';
import SingleCellSpecifications from './components/SingleCellSpecifications';

export const metadata = {
  title: 'Single Cell DNA Sequencing - Operify Tech',
  description: 'Mapping Genetic Diversity Cell by Cell - Advanced single cell DNA analysis',
  robots: 'noindex, follow',
};

export default function SingleCellDNASequencingPage() {
  const breadcrumbs = [
    { 
      label: 'Home', 
      href: '/', 
      current: false 
    },
    { 
      label: 'Research', 
      href: '/dna-sequencing', 
      current: false 
    },
    { 
      label: 'Single Cell DNA Sequencing', 
      href: null, 
      current: true 
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Header */}
      <Header />

      {/* Title Bar */}
      <TitleBar 
        title="Single Cell DNA Sequencing - Mapping Genetic Diversity Cell by Cell"
        breadcrumbs={breadcrumbs}
        backgroundImage="/images/bredcrumb.jpg"
      />

      {/* Page Content */}
      <div className="page-content">
        {/* Introduction Section */}
        <SingleCellIntroduction />

        {/* Advantages Section */}
        <SingleCellAdvantages />

        {/* Applications Section */}
        <SingleCellApplications />

        {/* Specifications Section */}
        <SingleCellSpecifications />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}