import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className="bg-gray-700 p-4 flex flex-col items-center gap-2">
      <h3 className="text-white"> Checkpoint Made by Yannis BARBA</h3>
      <ul className="flex flex-row gap-2">
        <li>
          <a href="mailto:yannis.barba.dev@gmail.com">
            <AlternateEmailIcon sx={{ color: '#FFFFFF' }} />
          </a>
        </li>
        <li>
          <a href="tel:0750880608">
            <LocalPhoneIcon sx={{ color: '#FFFFFF' }} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yannis-barba-90b9391bb/">
            <LinkedInIcon sx={{ color: '#FFFFFF' }} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Yannis-Barba">
            <GitHubIcon sx={{ color: '#FFFFFF' }} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
