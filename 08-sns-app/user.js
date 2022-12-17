// 💡 https://github.com/erumcoding/js-101-part-1

const updateProfile = (userData) => {
  const name = document.querySelector('.name');
  const email = document.querySelector('.email');
  const website = document.querySelector('.website');

  name.innerText = `${userData.name} (@${userData.username})`;
  email.innerText = userData.email;
  email.href = `mailto:${userData.email}`;
  website.innerText = userData.website;
  website.href = `http://${userData.website}`;
  website.target = '_blank';
};

const loadUserProfile = async () => {
  const userId = localStorage.getItem('userId');
  const userData = await getUserById(userId);
  updateProfile(userData);
};

loadUserProfile();
