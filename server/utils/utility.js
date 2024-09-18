const generateAvatar = (email) => {
  const tmail = email.split("@")[0];
  return `https://api.dicebear.com/9.x/initials/svg?seed=${tmail}`;
};

module.exports = { generateAvatar };
