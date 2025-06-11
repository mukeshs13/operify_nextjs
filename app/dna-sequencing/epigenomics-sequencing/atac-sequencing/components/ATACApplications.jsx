// ATACApplications.jsx
import ApplicationsLayout from '../../../../components/shared/ApplicationsLayout';

const ATACApplications = () => {
  const applicationItems = [
    "Chromatin Accessibility and Epigenetic Mapping- ATAC sequencing enables the identification of open chromatin regions, offering insights into regulatory elements like promoters, enhancers, and transcription factor binding sites. This approach is essential for understanding gene regulation and studying the epigenetic landscape across different cell types, tissues, and conditions.",
    "Cancer Genomics and Neuroscience- ATAC sequencing plays a crucial role in cancer research by identifying alterations in chromatin accessibility that drive tumor development or progression. It helps uncover cancer-specific regulatory elements and potential therapeutic targets. Additionally, in neuroscience, ATAC sequencing is used to investigate the chromatin landscape of neural cells and tissues.",
    "Cell Type Identification and Heterogeneity- When applied at the single-cell level, ATAC sequencing can reveal chromatin accessibility patterns in individual cells. This capability allows for the identification of distinct cell types, the study of cellular heterogeneity, and an understanding of how chromatin accessibility varies among different cell populations within a tissue.",
    "Transcription Factor Binding and Developmental Biology- ATAC sequencing, combined with transcription factor motif analysis, helps predict and validate transcription factor binding sites, elucidating their roles in regulating gene expression. This is particularly valuable in developmental biology, where ATAC sequencing is employed to study chromatin dynamics over time."
  ];

  return (
    <ApplicationsLayout
      title="Applications of ATAC Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default ATACApplications;