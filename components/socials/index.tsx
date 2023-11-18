import React from 'react';
import { Envelope, LinkedinBoxFill, GithubFill } from 'akar-icons';
import SocialLink from './socialLink';

const Socials = () => {
  return (
    <div className="space-y-4">
      <div>
        <SocialLink
          link="mailto:mrbryanbrotonel@gmail.com"
          title="mrbryanbrotonel@gmail.com"
          icon={<Envelope strokeWidth={2.5} size={24} />}
        />
      </div>
      <div>
        <SocialLink
          link="https://linkedin.com/in/bryanbrotonel"
          title="linkedin.com/in/bryanbrotonel"
          icon={<LinkedinBoxFill strokeWidth={2.5} size={24} />}
        />
      </div>
      <div>
        <SocialLink
          link="https://github.com/bryanbrotonel"
          title="github.com/bryanbrotonel"
          icon={<GithubFill strokeWidth={2.5} size={24} />}
        />
      </div>
    </div>
  );
};

export default Socials;
