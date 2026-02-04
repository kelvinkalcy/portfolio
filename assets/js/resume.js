// Download Resume Function
function downloadResume() {
  const confirmDownload = confirm("Would you like to download my resume?");
  if (!confirmDownload) return;

  const link = document.createElement('a');
  link.href = 'assets/resume.pdf'; // Path to your PDF
  link.download = 'Your-Name-Resume.pdf'; // Custom filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Optional: Track download event (e.g., Google Analytics)
  console.log('Resume downloaded');
}