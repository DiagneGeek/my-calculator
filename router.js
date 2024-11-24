const routes = {
  '/': () => '<h1>Home Page</h1><p>Welcome to the homepage!</p>',
  '/about': () => '<h1>About Page</h1><p>Learn more about us.</p>',
  '/contact': () => '<h1>Contact Page</h1><p>Get in touch with us!</p>',
  '*': () => '<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>',
};

const navigate = (path) => {
  window.history.pushState({}, '', path);
  renderRoute(path);
};

const renderRoute = (path) => {
console.log(path);
  const content = routes[path] || routes['*'];
 document.getElementById('content').innerHTML = content();
};

// Event delegation for efficient event handling
document.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    navigate(event.target.getAttribute('to'));
  }
});

// Initial page load and handling back/forward navigation
window.addEventListener('DOMContentLoaded', () => {
  renderRoute(window.location.pathname);
  window.addEventListener('popstate', () => {
  renderRoute(window.location.pathname);
  });
});
