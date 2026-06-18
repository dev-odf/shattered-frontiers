const { exec } = require('child_process');
exec('neofetch', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing neofetch: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});
