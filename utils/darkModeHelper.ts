const toggleDarkMode = (setDarkMode: any, checked: boolean) => {
  setDarkMode(checked);
  const root = document.querySelector(':root');
  root?.classList.toggle('dark', checked);
  let webConfig = JSON.parse(localStorage.getItem('alessandro-tanus-web-config') || '{}');

  if (checked) {
    webConfig = { ...webConfig, darkMode: true }
  } else {
    webConfig = { ...webConfig, darkMode: false }
  }

  localStorage.setItem('alessandro-tanus-web-config', JSON.stringify(webConfig));
}
export default toggleDarkMode;
